import 'reflect-metadata'

import { MsgView } from '../../buffer'
import { ISessionDescription } from '../../transport'
import { MsgType, SessionRejectReason } from '../../types'
import { ILooseObject } from '../../collections/collection'
import { IStandardHeader, IReject, ILogon } from '../../types/FIX4.4/repo'

import { AsciiMsgTransmitter } from '../../transport/ascii/ascii-msg-transmitter'
import { Setup } from '../env/setup'
import { Experiment } from '../env/experiment'
import { SkeletonRunner } from '../env/skeleton-runner'

const logonMsg: string = '8=FIX4.4|9=0000136|35=A|49=init-comp|56=accept-comp|34=1|57=fix|52=20180902-12:25:28.980|98=0|108=30|141=Y|553=js-client|554=pwd-client|10=177|'
const heartbeat: string = '8=FIX4.4|9=0000123|35=0|49=init-comp|56=accept-comp|34=1|57=fix|52=20180902-12:25:59.161|112=Sun, 02 Sep 2018 12:25:59 GMT|10=95|'

let setup: Setup
let experiment: Experiment

beforeEach(async () => {
  setup = new Setup()
  await setup.init()
  experiment = new Experiment(setup)
}, 30000)

class ParsingResult {
  constructor (
    public readonly event: string,
    public readonly msgType: string,
    public readonly view: MsgView) {
  }
}

async function clientToServerWaitFirstMessage (type: string, obj: ILooseObject): Promise<ParsingResult> {
  return await new Promise<any>((resolve, reject) => {
    const clt = experiment.client.transport
    const svt = experiment.server.transport
    clt.transmitter.on('error', (e: Error) => {
      reject(e)
    })
    svt.receiver.on('msg', (msgType: string, view: MsgView) => {
      resolve(new ParsingResult('msg', msgType, view.clone()))
    })
    clt.receiver.on('error', (e: Error) => {
      reject(e)
    })
    clt.transmitter.send(type, obj)
    experiment.client.transport.end()
  })
}

async function runSkeletons (logoutSeconds: number = 1, followOn: string | null = null): Promise<void> {
  const runner: SkeletonRunner = new SkeletonRunner(experiment, logoutSeconds)
  runner.sendText(followOn)
  await runner.wait()
}

test('end to end logon', async () => {
  const lo = experiment?.client?.config?.factory?.logon() as ILogon
  expect(lo).toBeTruthy()
  if (!lo) return
  const res: ParsingResult = await clientToServerWaitFirstMessage(MsgType.Logon, lo)
  expect(res.event).toEqual('msg')
  expect(res.msgType).toEqual('A')
  const received = res.view.toObject() as ILooseObject
  expect(received).toBeTruthy()
  delete received.StandardHeader
  delete received.StandardTrailer
  expect(received).toEqual(lo)
})

test('session send resendRequest when logged on', async () => {
  const runner: SkeletonRunner = new SkeletonRunner(experiment, 2)
  const factory = experiment.client.config.factory
  const resend = factory?.resendRequest(1, 1)
  expect(resend).toBeTruthy()
  if (!resend) return
  runner.sendMsg(MsgType.ResendRequest, resend)

  const cViews = experiment.client.views
  const sViews = experiment.server.views
  await runner.wait()

  expect(cViews).toHaveLength(3)
  expect(sViews).toHaveLength(3)

  const resendRequestView = sViews[1]
  expect(resendRequestView.segment.name).toBe('ResendRequest')
  expect(resendRequestView.getTyped('MsgSeqNum')).toBe(2)
  expect(resendRequestView.getTyped('BeginSeqNo')).toBe(1)
  expect(resendRequestView.getTyped('EndSeqNo')).toBe(1)

  const seqResetView = cViews[1]
  expect(seqResetView.segment.name).toBe('SequenceReset')
  expect(seqResetView.getTyped('MsgSeqNum')).toBe(1)
  expect(seqResetView.getTyped('NewSeqNo')).toBe(2)
  expect(seqResetView.getTyped('GapFillFlag')).toBe(true)
  expect(seqResetView.getTyped('PossDupFlag')).toBe(true)

  const logoutSView = sViews[2]
  expect(logoutSView.segment.name).toBe('Logout')
  expect(logoutSView.getTyped('MsgSeqNum')).toBe(3)

  const logoutCView = cViews[2]
  expect(logoutCView.segment.name).toBe('Logout')
  expect(logoutCView.getTyped('MsgSeqNum')).toBe(2)

  const clientResets = countOfType('SequenceReset', cViews)
  const serverResets = countOfType('SequenceReset', sViews)
  console.log('SERVER VIEWS', sViews.map((a => a.toJson())));
  console.log('CLIENT VIEWS', cViews.map((a => a.toJson())));
  expect(clientResets).toEqual(1)
  expect(serverResets).toEqual(0)
})

test('session send resendRequest with endSeqNo = 0 when logged on', async () => {
  const runner: SkeletonRunner = new SkeletonRunner(experiment, 2)
  const factory = experiment.client.config.factory

  const resend = factory?.resendRequest(1, 0)
  expect(resend).toBeTruthy()
  if (!resend) return
  runner.sendMsg(MsgType.ResendRequest, resend)

  const cViews = experiment.client.views
  const sViews = experiment.server.views
  await runner.wait()

  expect(cViews).toHaveLength(3)
  expect(sViews).toHaveLength(3)

  const resendRequestView = sViews[1]
  expect(resendRequestView.segment.name).toBe('ResendRequest')
  expect(resendRequestView.getTyped('MsgSeqNum')).toBe(2)
  expect(resendRequestView.getTyped('BeginSeqNo')).toBe(1)
  expect(resendRequestView.getTyped('EndSeqNo')).toBe(0)

  const seqResetView = cViews[1]
  expect(seqResetView.segment.name).toBe('SequenceReset')
  expect(seqResetView.getTyped('MsgSeqNum')).toBe(1)
  expect(seqResetView.getTyped('NewSeqNo')).toBe(2)
  expect(seqResetView.getTyped('GapFillFlag')).toBe(true)
  expect(seqResetView.getTyped('PossDupFlag')).toBe(true)

  const logoutSView = sViews[2]
  expect(logoutSView.segment.name).toBe('Logout')
  expect(logoutSView.getTyped('MsgSeqNum')).toBe(3)

  const logoutCView = cViews[2]
  expect(logoutCView.segment.name).toBe('Logout')
  expect(logoutCView.getTyped('MsgSeqNum')).toBe(2)

  const clientResets = countOfType('SequenceReset', cViews)
  const serverResets = countOfType('SequenceReset', sViews)
  expect(clientResets).toEqual(1)
  expect(serverResets).toEqual(0)
})

test('session send logon when logged on', async () => {
  const runner: SkeletonRunner = new SkeletonRunner(experiment, 2)
  const logon = experiment?.client?.config?.factory?.logon()
  expect(logon).toBeTruthy()
  if (!logon) return
  runner.sendMsg(MsgType.Logon, logon)
  try {
    await runner.wait()
  } catch (e) {
    expect(experiment.server.errors.length).toEqual(1)
  }
})

test('session logon / logout', async () => {
  await runSkeletons()
  const cViews = experiment.client.views
  const sViews = experiment.server.views

  expect(experiment.client.errors.length).toEqual(0)
  expect(experiment.server.errors.length).toEqual(0)

  // both sides should now have logged on and logged off
  expect(cViews.length).toEqual(2)
  expect(sViews.length).toEqual(2)

  expect(cViews[0].segment.name).toEqual('Logon')
  expect(cViews[1].segment.name).toEqual('Logout')

  expect(sViews[0].segment.name).toEqual('Logon')
  expect(sViews[1].segment.name).toEqual('Logout')
})

function checkSeqNos (views: MsgView[]): void {
  const seqNo: number[] = views.map((v: MsgView) => (v.getView('StandardHeader')?.toObject() as IStandardHeader)?.MsgSeqNum)
  expect(seqNo).toBeTruthy()
  const delta = seqNo.reduce((c: number, latest: number) => {
    return latest - c === 1 ? c + 1 : c - 1
  }, 0)
  expect(delta).toEqual(seqNo.length)
}

test('seq No OK', async () => {
  await runSkeletons()
  const cviews = experiment.client.views
  const sviews = experiment.server.views
  // both sides should now have logged on and logged off
  expect(cviews.length >= 2).toEqual(true)
  expect(sviews.length >= 2).toEqual(true)
  checkSeqNos(cviews)
  checkSeqNos(sviews)
})

function mutateSeqNo (_: ISessionDescription, type: string, o: ILooseObject): ILooseObject {
  switch (type) {
    case 'StandardHeader': {
      const hdr = o as IStandardHeader
      if (hdr.MsgSeqNum === 2) {
        hdr.MsgSeqNum = 0
      }
      break
    }
  }
  return o
}

test('out of seq logout', async () => {
  experiment.clientFactory.mutator = mutateSeqNo
  await runSkeletons()
  const cviews = experiment.client.views
  const sviews = experiment.server.views
  // both sides should now have logged on but out of seq logout will terminate sessions so no logout returned
  expect(cviews.length).toEqual(1)
  expect(cviews[0].segment.name).toEqual('Logon')
  expect(sviews.length).toEqual(2)
  expect(sviews[0].segment.name).toEqual('Logon')
  expect(sviews[1].segment.name).toEqual('Logout')
})

function countOfType (type: string, views: MsgView[]): number {
  return views.reduce((c: number, v: MsgView) => {
    return v.segment.name === type ? c + 1 : c
  }, 0)
}

function mutateRemoveRequiredHeartBtInt (_: ISessionDescription, type: string, o: ILooseObject): ILooseObject {
  switch (type) {
    case 'A': {
      const logon = o as ILogon
      // @ts-expect-error - this is for test purposed
      delete logon.HeartBtInt
      break
    }
  }
  return o
}

test('client logon reject missing 108', async () => {
  experiment.clientFactory.mutator = mutateRemoveRequiredHeartBtInt
  await runSkeletons(2)
  // client sends logon, server rejects
  const cviews = experiment.client.views
  const sviews = experiment.server.views
  expect(cviews.length === 1).toEqual(true)
  expect(sviews.length === 1).toEqual(true)
  expect(cviews[0].segment.name).toEqual('Reject')
  expect(sviews[0].segment.name).toEqual('Logon')
  const reject: IReject = cviews[0].toObject() as IReject
  expect(reject.SessionRejectReason === SessionRejectReason.RequiredTagMissing)
  expect(reject.Text).toEqual('msgType A missing required tag 108')
}, 10000)

// transport.transmitter

async function runCheckReject (experiment: Experiment, changed: string): Promise<void> {
  await runSkeletons(2, changed)
  const cviews = experiment.client.views
  const sviews = experiment.server.views
  // client sends logon, server rejects
  expect(cviews.length).toEqual(3)
  expect(sviews.length).toEqual(3)
  expect(cviews[0].segment.name).toEqual('Logon')
  expect(cviews[1].segment.name).toEqual('Reject')
  expect(sviews[0].segment.name).toEqual('Logon')
}

test('client unknown msg type', async () => {
  const at = experiment.client.transport.transmitter as AsciiMsgTransmitter
  const changed = logonMsg
    .replace('35=A', '35=ZZ')
    .replace('34=1', `34=${at.msgSeqNum + 1}`)
  const cviews = experiment.client.views
  const sviews = experiment.server.views
  await runCheckReject(experiment, changed)
  expect(sviews[1].segment.name).toEqual('unknown')
  const reject: IReject = cviews[1].toObject() as IReject
  expect(reject.SessionRejectReason === SessionRejectReason.InvalidMsgType)
  expect(reject.Text).toEqual('msgType ZZ unknown')
}, 10000)

test('heartbeat invalid tag', async () => {
  const at = experiment.client.transport.transmitter as AsciiMsgTransmitter
  const changed = heartbeat
    .replace('112=', '999=')
    .replace('34=1', `34=${at.msgSeqNum + 1}`)
  await runSkeletons(2, changed)
  const cviews = experiment.client.views
  const sviews = experiment.server.views
  await runCheckReject(experiment, changed)
  expect(sviews[1].segment.name).toEqual('Heartbeat')
  const reject: IReject = experiment.client.views[1].toObject() as IReject
  expect(reject.SessionRejectReason === SessionRejectReason.InvalidTagNumber)
  checkSeqNos(cviews)
  checkSeqNos(sviews)
}, 10000)

test('heartbeat invalid sender comp', async () => {
  const at = experiment.client.transport.transmitter as AsciiMsgTransmitter
  const changed = heartbeat
    .replace('49=init-comp', '49=init-not!')
    .replace('34=1', `34=${at.msgSeqNum + 1}`)
  const cviews = experiment.client.views
  const sviews = experiment.server.views
  await runCheckReject(experiment, changed)
  expect(sviews[1].segment.name).toEqual('Heartbeat')
  const reject: IReject = cviews[1].toObject() as IReject
  expect(reject.SessionRejectReason === SessionRejectReason.CompIDProblem)
  checkSeqNos(cviews)
  checkSeqNos(sviews)
}, 10000)

// client will send heartbeats to server, server with 30 second heartbeat will not heartbeat
test('client heartbeats to server', async () => {
  const preset = experiment.client.config.description.HeartBtInt
  experiment.client.config.description.HeartBtInt = 2
  await runSkeletons(6)
  const cviews = experiment.client.views
  const sviews = experiment.server.views
  // both sides should now have logged on and logged off
  expect(cviews.length === 2).toEqual(true)
  expect(sviews.length > 2).toEqual(true)
  const serverReceivesHeartbeats = countOfType('Heartbeat', sviews)
  expect(serverReceivesHeartbeats >= 2 && serverReceivesHeartbeats <= 4).toEqual(true)
  checkSeqNos(cviews)
  checkSeqNos(sviews)
  experiment.client.config.description.HeartBtInt = preset
}, 10000)

test('server heartbeats to client', async () => {
  const preset = experiment.server.config.description.HeartBtInt
  experiment.server.config.description.HeartBtInt = 2
  await runSkeletons(6)
  // both sides should now have logged on and logged off
  const cviews = experiment.client.views
  const sviews = experiment.server.views
  expect(sviews.length === 2).toEqual(true)
  expect(cviews.length > 2).toEqual(true)
  const clientReceivesHeartbeats = countOfType('Heartbeat', cviews)
  expect(clientReceivesHeartbeats >= 2 && clientReceivesHeartbeats <= 4).toEqual(true)
  checkSeqNos(cviews)
  checkSeqNos(sviews)
  experiment.server.config.description.HeartBtInt = preset
}, 10000)

test('client server heartbeat', async () => {
  const preset = experiment.server.config.description.HeartBtInt
  experiment.server.config.description.HeartBtInt = 5
  experiment.client.config.description.HeartBtInt = 2
  await runSkeletons(8)
  const cviews = experiment.client.views
  const sviews = experiment.server.views
  // both sides should now have logged on and logged off
  expect(sviews.length > 2).toEqual(true)
  expect(cviews.length > 2).toEqual(true)
  const clientReceivesHeartbeats = countOfType('Heartbeat', cviews)
  const clientReceivesTestRequest = countOfType('TestRequest', cviews)
  const clientTotal = clientReceivesHeartbeats + clientReceivesTestRequest
  const serverReceivesHeartbeats = countOfType('Heartbeat', sviews)
  const serverReceivesTestRequest = countOfType('TestRequest', sviews)
  const serverTotal = serverReceivesHeartbeats + serverReceivesTestRequest
  expect(clientTotal >= 1 && clientReceivesHeartbeats <= 4).toEqual(true)
  expect(serverTotal >= 3 && serverReceivesHeartbeats <= 4).toEqual(true)
  checkSeqNos(cviews)
  checkSeqNos(sviews)
  experiment.server.config.description.HeartBtInt = preset
  experiment.client.config.description.HeartBtInt = preset
}, 15000)
