import { MsgView, ElasticBuffer, AsciiChars } from '../buffer'
import { FixDefinitions } from '../dictionary'
import { ISessionDescription, MsgTransport, AsciiMsgTransmitter, StringDuplex, FixDuplex } from '../transport'
import { MsgType, SessionRejectReason } from '../types'
import { ILooseObject } from '../collections/collection'
import { IJsFixConfig, JsFixConfig } from '../config'
import { SkeletonSession } from '../sample/tcp/skeleton/skeleton-session'
import { IStandardHeader, IReject, ILogon } from '../types/FIX4.4/repo'

import * as path from 'path'
import { getDefinitions } from '../util'
import { AsciiSessionMsgFactory } from '../transport/ascii/'

const root: string = path.join(__dirname, '../../data')
const logonMsg: string = '8=FIX4.4|9=0000136|35=A|49=init-comp|56=accept-comp|34=1|57=fix|52=20180902-12:25:28.980|98=0|108=30|141=Y|553=js-client|554=pwd-client|10=177|'
const heartbeat: string = '8=FIX4.4|9=0000123|35=0|49=init-comp|56=accept-comp|34=1|57=fix|52=20180902-12:25:59.161|112=Sun, 02 Sep 2018 12:25:59 GMT|10=95|'
class FixEntity {
  public readonly views: MsgView[] = []
  public readonly errors: Error[] = []

  constructor (public readonly config: IJsFixConfig,
              public readonly duplex: FixDuplex = new StringDuplex(),
              public readonly transport: MsgTransport = new MsgTransport(0, config, duplex)) {
  }
}

let definitions: FixDefinitions
let clientDescription: ISessionDescription
let serverDescription: ISessionDescription

class Experiment {
  public readonly client: FixEntity
  public readonly clientFactory: AsciiSessionMsgFactory
  public readonly serverFactory: AsciiSessionMsgFactory
  public readonly server: FixEntity

  constructor () {
    this.clientFactory = new AsciiSessionMsgFactory(clientDescription)
    this.serverFactory = new AsciiSessionMsgFactory(serverDescription)

    const clientConfig = new JsFixConfig(this.clientFactory, definitions, clientDescription, AsciiChars.Pipe)
    const serverConfig = new JsFixConfig(this.serverFactory, definitions, serverDescription, AsciiChars.Pipe)

    this.client = new FixEntity(clientConfig)
    this.server = new FixEntity(serverConfig)

    loopBack(this.client.duplex, this.server.duplex)
    loopBack(this.server.duplex, this.client.duplex)
  }
}

let experiment: Experiment = null

function loopBack (lhs: FixDuplex, rhs: FixDuplex) {
  lhs.writable.on('data', (data: Buffer) => {
    rhs.readable.push(data)
  })
}

beforeAll(async () => {
  clientDescription = require(path.join(root, 'session/test-initiator.json'))
  serverDescription = require(path.join(root, 'session/test-acceptor.json'))
  definitions = await getDefinitions(clientDescription.application.dictionary)
}, 45000)

beforeEach(() => {
   experiment = new Experiment()
})

class ParsingResult {
  constructor (
    public readonly event: string,
    public readonly msgType: string,
    public readonly view: MsgView) {
  }
}

function clientToServerWaitFirstMessage (type: string, obj: ILooseObject): Promise<ParsingResult> {
  return new Promise<any>((resolve, reject) => {
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

class SkeletonRunner {
  clientSkeleton: SkeletonSession
  serverSkeleton: SkeletonSession

  constructor (public readonly logoutSeconds: number = 1) {
    this.clientSkeleton = new SkeletonSession(experiment.client.config, logoutSeconds)
    this.serverSkeleton = new SkeletonSession(experiment.server.config, logoutSeconds)
    this.clientSkeleton.checkMsgIntegrity = true
    this.serverSkeleton.checkMsgIntegrity = true

    experiment.client.transport.receiver.on('msg', (type: string, view: MsgView) => {
      experiment.client.views.push(view.clone())
      this.watchdog()
    })

    experiment.server.transport.receiver.on('msg', (type: string, view: MsgView) => {
      experiment.server.views.push(view.clone())
      this.watchdog()
    })

    this.clientSkeleton.on('error', e => {
      experiment.client.errors.push(e)
    })

    this.serverSkeleton.on('error', e => {
      console.log(e)
      experiment.server.errors.push(e)
    })
  }

  watchdog () {
    const clientStop = experiment.client.views.length > 20 || experiment.client.errors.length > 0
    const serverStop = experiment.server.views.length > 20 || experiment.server.errors.length > 0
    const stop = clientStop || serverStop
    if (stop) {
      this.clientSkeleton.done()
      this.serverSkeleton.done()
    }
  }

  sendMsg (msgType: string, o: ILooseObject): void {
    experiment.client.transport.receiver.on('msg', m => {
      this.clientSkeleton.sendMessage(msgType, o)
    })
  }

  sendText (followOn: string): void {
    if (followOn) {
      let sent: boolean = false
      experiment.client.transport.transmitter.on('encoded', () => {
        const b1 = new ElasticBuffer()
        b1.writeString(followOn)
        if (!sent) {
          experiment.client.transport.duplex.writable.write(b1.slice())
          const at = experiment.client.transport.transmitter as AsciiMsgTransmitter
          at.msgSeqNum++
          sent = true
        }
      })
    }
  }

  done () {
    this.clientSkeleton.done()
    this.serverSkeleton.done()
  }

  async wait () {
    await Promise.all([
      this.clientSkeleton.run(experiment.client.transport),
      this.serverSkeleton.run(experiment.server.transport),
      new Promise((accept, reject) => {
        let handle = null
        try {
          handle = setTimeout(() => {
            this.done()
            accept(true)
          }, (this.logoutSeconds + 2) * 1000)
        } catch (e) {
          if (handle) {
            clearTimeout(handle)
          }
          this.done()
          reject(e)
        }
      })])
  }
}

async function runSkeletons (logoutSeconds: number = 1, followOn: string = null) {
  const runner: SkeletonRunner = new SkeletonRunner(logoutSeconds)
  runner.sendText(followOn)
  await runner.wait()
}

test('end to end logon', async () => {
  const lo = experiment.client.config.factory.logon()
  const res: ParsingResult = await clientToServerWaitFirstMessage(MsgType.Logon, lo)
  expect(res.event).toEqual('msg')
  expect(res.msgType).toEqual('A')
  const received = res.view.toObject()
  expect(received).toBeTruthy()
  delete received['StandardHeader']
  delete received['StandardTrailer']
  expect(received).toEqual(lo)
})

test('session send logon when logged on', async () => {
  const runner: SkeletonRunner = new SkeletonRunner(5)
  const logon = experiment.client.config.factory.logon()
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

function checkSeqNos (views: MsgView[]) {
  const seqNo: number[] = views.map((v: MsgView) => (v.getView('StandardHeader').toObject() as IStandardHeader).MsgSeqNum)
  expect(seqNo).toBeTruthy()
  const delta = seqNo.reduce((c: number, latest: number) => {
    return latest - c === 1 ? c + 1 : c - 1
  }, 0)
  expect(delta).toEqual(seqNo.length)
}

test('seq No OK', async () => {
  await runSkeletons()
  // both sides should now have logged on and logged off
  expect(experiment.client.views.length >= 2).toEqual(true)
  expect(experiment.server.views.length >= 2).toEqual(true)
  checkSeqNos(experiment.client.views)
  checkSeqNos(experiment.server.views)
})

function mutateSeqNo (description: ISessionDescription, type: string, o: ILooseObject): ILooseObject {
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
  // both sides should now have logged on but out of seq logout will terminate sessions so no logout returned
  expect(experiment.client.views.length).toEqual(1)
  expect(experiment.client.views[0].segment.name).toEqual('Logon')
  expect(experiment.server.views.length).toEqual(2)
  expect(experiment.server.views[0].segment.name).toEqual('Logon')
  expect(experiment.server.views[1].segment.name).toEqual('Logout')
})

function countOfType (type: string, views: MsgView[]): number {
  return views.reduce((c: number, v: MsgView) => {
    return v.segment.name === type ? c + 1 : c
  }, 0)
}

function mutateRemoveRequiredHeartBtInt (description: ISessionDescription, type: string, o: ILooseObject): ILooseObject {
  switch (type) {
    case 'A': {
      const logon = o as ILogon
      delete logon['HeartBtInt']
      break
    }
  }
  return o
}

test('client logon reject missing 108', async () => {
  experiment.clientFactory.mutator = mutateRemoveRequiredHeartBtInt
  await runSkeletons(2)
  // client sends logon, server rejects
  expect(experiment.client.views.length === 1).toEqual(true)
  expect(experiment.server.views.length === 1).toEqual(true)
  expect(experiment.client.views[0].segment.name).toEqual('Reject')
  expect(experiment.server.views[0].segment.name).toEqual('Logon')
  const reject: IReject = experiment.client.views[0].toObject()
  expect(reject.SessionRejectReason === SessionRejectReason.RequiredTagMissing)
  expect(reject.Text).toEqual('msgType A missing required tag 108')
}, 10000)

// transport.transmitter

test('client unknown msg type', async () => {
  const at = experiment.client.transport.transmitter as AsciiMsgTransmitter
  const changed = logonMsg.replace('35=A', '35=ZZ').replace('34=1', `34=${at.msgSeqNum + 1}`)
  await runSkeletons(2, changed)
  // client sends logon, server rejects
  expect(experiment.client.views.length === 3).toEqual(true)
  expect(experiment.server.views.length === 3).toEqual(true)
  expect(experiment.client.views[0].segment.name).toEqual('Logon')
  expect(experiment.client.views[1].segment.name).toEqual('Reject')
  expect(experiment.server.views[0].segment.name).toEqual('Logon')
  expect(experiment.server.views[1].segment.name).toEqual('unknown')
  const reject: IReject = experiment.client.views[1].toObject()
  expect(reject.SessionRejectReason === SessionRejectReason.InvalidMsgType)
  expect(reject.Text).toEqual('msgType ZZ unknown')
}, 10000)

test('heartbeat invalid tag', async () => {
  const at = experiment.client.transport.transmitter as AsciiMsgTransmitter
  const changed = heartbeat.replace('112=', '999=').replace('34=1', `34=${at.msgSeqNum + 1}`)
  await runSkeletons(2, changed)
  expect(experiment.client.views.length === 3).toEqual(true)
  expect(experiment.server.views.length === 3).toEqual(true)
  expect(experiment.client.views[0].segment.name).toEqual('Logon')
  expect(experiment.client.views[1].segment.name).toEqual('Reject')
  expect(experiment.server.views[0].segment.name).toEqual('Logon')
  expect(experiment.server.views[1].segment.name).toEqual('Heartbeat')
  const reject: IReject = experiment.client.views[1].toObject()
  expect(reject.SessionRejectReason === SessionRejectReason.InvalidTagNumber)
  checkSeqNos(experiment.client.views)
  checkSeqNos(experiment.server.views)
}, 10000)

test('heartbeat invalid sender comp', async () => {
  const at = experiment.client.transport.transmitter as AsciiMsgTransmitter
  const changed = heartbeat.replace('49=init-comp', '49=init-not!').replace('34=1', `34=${at.msgSeqNum + 1}`)
  await runSkeletons(2, changed)
  expect(experiment.client.views.length === 3).toEqual(true)
  expect(experiment.server.views.length === 3).toEqual(true)
  expect(experiment.client.views[0].segment.name).toEqual('Logon')
  expect(experiment.client.views[1].segment.name).toEqual('Reject')
  expect(experiment.server.views[0].segment.name).toEqual('Logon')
  expect(experiment.server.views[1].segment.name).toEqual('Heartbeat')
  const reject: IReject = experiment.client.views[1].toObject()
  expect(reject.SessionRejectReason === SessionRejectReason.CompIDProblem)
  checkSeqNos(experiment.client.views)
  checkSeqNos(experiment.server.views)
}, 10000)

// client will send heartbeats to server, server with 30 second heartbeat will not heartbeat
test('client heartbeats to server', async () => {
  const preset = experiment.client.config.description.HeartBtInt
  experiment.client.config.description.HeartBtInt = 2
  await runSkeletons(6)
  // both sides should now have logged on and logged off
  expect(experiment.client.views.length === 2).toEqual(true)
  expect(experiment.server.views.length > 2).toEqual(true)
  const serverReceivesHeartbeats = countOfType('Heartbeat', experiment.server.views)
  expect(serverReceivesHeartbeats >= 2 && serverReceivesHeartbeats <= 4).toEqual(true)
  checkSeqNos(experiment.client.views)
  checkSeqNos(experiment.server.views)
  experiment.client.config.description.HeartBtInt = preset
}, 10000)

test('server heartbeats to client', async () => {
  const preset = experiment.server.config.description.HeartBtInt
  experiment.server.config.description.HeartBtInt = 2
  await runSkeletons(6)
  // both sides should now have logged on and logged off
  expect(experiment.server.views.length === 2).toEqual(true)
  expect(experiment.client.views.length > 2).toEqual(true)
  const clientReceivesHeartbeats = countOfType('Heartbeat', experiment.client.views)
  expect(clientReceivesHeartbeats >= 2 && clientReceivesHeartbeats <= 4).toEqual(true)
  checkSeqNos(experiment.client.views)
  checkSeqNos(experiment.server.views)
  experiment.server.config.description.HeartBtInt = preset
}, 10000)

test('client server heartbeat', async () => {
  const preset = experiment.server.config.description.HeartBtInt
  experiment.server.config.description.HeartBtInt = 2
  experiment.client.config.description.HeartBtInt = 2
  await runSkeletons(6)
  // both sides should now have logged on and logged off
  expect(experiment.server.views.length > 2).toEqual(true)
  expect(experiment.client.views.length > 2).toEqual(true)
  const clientReceivesHeartbeats = countOfType('Heartbeat', experiment.client.views)
  const serverReceivesHeartbeats = countOfType('Heartbeat', experiment.server.views)
  expect(clientReceivesHeartbeats >= 2 && clientReceivesHeartbeats <= 4).toEqual(true)
  expect(serverReceivesHeartbeats >= 2 && serverReceivesHeartbeats <= 4).toEqual(true)
  checkSeqNos(experiment.client.views)
  checkSeqNos(experiment.server.views)
  experiment.server.config.description.HeartBtInt = preset
  experiment.client.config.description.HeartBtInt = preset
}, 10000)
