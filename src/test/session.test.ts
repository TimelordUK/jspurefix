import { StringDuplex } from '../transport/duplex/string-duplex'
import { Ascii } from '../buffer/ascii'
import { FixDefinitions } from '../dictionary/definition/fix-definitions'
import { ISessionDescription } from '../transport/session-description'
import { MsgTransport } from '../transport/msg-transport'
import { ILogon } from '../types/FIX4.4/repo/logon'
import { MsgType } from '../types/enum/msg_type'
import { MsgView } from '../buffer/msg-view'
import { ILooseObject } from '../collections/collection'
import { FixDuplex } from '../transport/duplex/fix-duplex'
import { IJsFixConfig, JsFixConfig } from '../config/js-fix-config'
import { AsciiSessionMsgFactory } from '../transport/ascii/ascii-session-msg-factory'
import { SkeletonSession } from '../sample/tcp/skeleton/skeleton-session'
import { IStandardHeader } from '../types/FIX4.4/repo/set/standard_header'
import { IReject } from '../types/FIX4.4/repo/reject'
import { ElasticBuffer } from '../buffer/elastic-buffer'
import { AsciiMsgTransmitter } from '../transport/ascii/ascii-msg-transmitter'
import * as path from 'path'
import { getDefinitions } from '../util/dictionary-definitions'
import { SessionRejectReason } from '../types/enum/sess_rej_rsn'

const root: string = path.join(__dirname, '../../data')
const logonMsg: string = '8=FIX4.4|9=0000136|35=A|49=init-comp|56=accept-comp|34=1|57=fix|52=20180902-12:25:28.980|98=0|108=30|141=Y|553=js-client|554=pwd-client|10=177|'
const heartbeat: string = '8=FIX4.4|9=0000123|35=0|49=init-comp|56=accept-comp|34=1|57=fix|52=20180902-12:25:59.161|112=Sun, 02 Sep 2018 12:25:59 GMT|10=95|'
class FixEntity {
  public readonly views: MsgView[] = []

  constructor (public readonly config: IJsFixConfig,
              public readonly duplex: FixDuplex = new StringDuplex(),
              public readonly transport: MsgTransport = new MsgTransport(0, config, duplex)) {
  }
}

let definitions: FixDefinitions
let clientDescription: ISessionDescription
let serverDescription: ISessionDescription
let client: FixEntity
let clientFactory: AsciiSessionMsgFactory
let serverFactory: AsciiSessionMsgFactory
let server: FixEntity

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

beforeEach(async () => {

  clientFactory = new AsciiSessionMsgFactory(clientDescription)
  serverFactory = new AsciiSessionMsgFactory(serverDescription)

  const clientConfig = new JsFixConfig(clientFactory, definitions, clientDescription, Ascii.Pipe)
  const serverConfig = new JsFixConfig(serverFactory, definitions, serverDescription, Ascii.Pipe)

  client = new FixEntity(clientConfig)
  server = new FixEntity(serverConfig)

  loopBack(client.duplex, server.duplex)
  loopBack(server.duplex, client.duplex)
})

class ParsingResult {
  constructor (public readonly event: string, public readonly msgType: string, public readonly view: MsgView) {
  }
}

function clientToServerWaitFirstMessage (type: string, obj: ILooseObject): Promise<ParsingResult> {
  return new Promise<any>((resolve, reject) => {
    const clt = client.transport
    const svt = server.transport
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
    client.transport.end()
  })
}

test('end to end logon', async () => {
  const lo = client.config.factory.logon()
  const res: ParsingResult = await clientToServerWaitFirstMessage(MsgType.Logon, lo)
  expect(res.event).toEqual('msg')
  expect(res.msgType).toEqual('A')
  const received = res.view.toObject()
  expect(received).toBeTruthy()
  delete received['StandardHeader']
  delete received['StandardTrailer']
  expect(received).toEqual(lo)
})

async function runSkeletons (logoutSeconds: number = 1, followOn: string = null) {
  const s1 = new SkeletonSession(client.config, logoutSeconds)
  const s2 = new SkeletonSession(server.config, logoutSeconds)
  s1.checkMsgIntegrity = true
  s2.checkMsgIntegrity = true

  function watchdog () {
    if (client.views.length > 20 || server.views.length > 20) {
      s1.done()
      s2.done()
    }
  }

  client.transport.receiver.on('msg', (type: string, view: MsgView) => {
    client.views.push(view.clone())
    watchdog()
  })
  server.transport.receiver.on('msg', (type: string, view: MsgView) => {
    server.views.push(view.clone())
    watchdog()
  })

  if (followOn) {
    let sent: boolean = false
    client.transport.transmitter.on('encoded', () => {
      const b1 = new ElasticBuffer()
      b1.writeString(followOn)
      if (!sent) {
        client.transport.duplex.writable.write(b1.slice())
        const at = client.transport.transmitter as AsciiMsgTransmitter
        at.msgSeqNum++
        sent = true
      }
    })
  }

  await Promise.all([s1.run(client.transport), s2.run(server.transport), new Promise((accept) => {
    setTimeout(() => {
      s1.done()
      s2.done()
      accept()
    }, (logoutSeconds + 2) * 1000)
  })])
}

test('session logon / logout', async () => {
  await runSkeletons()
  const cViews = client.views
  const sViews = server.views
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
  expect(client.views.length >= 2).toEqual(true)
  expect(server.views.length >= 2).toEqual(true)
  checkSeqNos(client.views)
  checkSeqNos(server.views)
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
  clientFactory.mutator = mutateSeqNo
  await runSkeletons()
  // both sides should now have logged on but out of seq logout will terminate sessions so no logout returned
  expect(client.views.length).toEqual(1)
  expect(client.views[0].segment.name).toEqual('Logon')
  expect(server.views.length).toEqual(2)
  expect(server.views[0].segment.name).toEqual('Logon')
  expect(server.views[1].segment.name).toEqual('Logout')
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
  clientFactory.mutator = mutateRemoveRequiredHeartBtInt
  await runSkeletons(2)
  // client sends logon, server rejects
  expect(client.views.length === 1).toEqual(true)
  expect(server.views.length === 1).toEqual(true)
  expect(client.views[0].segment.name).toEqual('Reject')
  expect(server.views[0].segment.name).toEqual('Logon')
  const reject: IReject = client.views[0].toObject()
  expect(reject.SessionRejectReason === SessionRejectReason.RequiredTagMissing)
  expect(reject.Text).toEqual('msgType A missing required tag 108')
}, 10000)

// transport.transmitter

test('client unknown msg type', async () => {
  const at = client.transport.transmitter as AsciiMsgTransmitter
  const changed = logonMsg.replace('35=A', '35=ZZ').replace('34=1', `34=${at.msgSeqNum + 1}`)
  await runSkeletons(2, changed)
  // client sends logon, server rejects
  expect(client.views.length === 3).toEqual(true)
  expect(server.views.length === 3).toEqual(true)
  expect(client.views[0].segment.name).toEqual('Logon')
  expect(client.views[1].segment.name).toEqual('Reject')
  expect(server.views[0].segment.name).toEqual('Logon')
  expect(server.views[1].segment.name).toEqual('unknown')
  const reject: IReject = client.views[1].toObject()
  expect(reject.SessionRejectReason === SessionRejectReason.InvalidMsgType)
  expect(reject.Text).toEqual('msgType ZZ unknown')
}, 10000)

test('heartbeat invalid tag', async () => {
  const at = client.transport.transmitter as AsciiMsgTransmitter
  const changed = heartbeat.replace('112=', '999=').replace('34=1', `34=${at.msgSeqNum + 1}`)
  await runSkeletons(2, changed)
  expect(client.views.length === 3).toEqual(true)
  expect(server.views.length === 3).toEqual(true)
  expect(client.views[0].segment.name).toEqual('Logon')
  expect(client.views[1].segment.name).toEqual('Reject')
  expect(server.views[0].segment.name).toEqual('Logon')
  expect(server.views[1].segment.name).toEqual('Heartbeat')
  const reject: IReject = client.views[1].toObject()
  expect(reject.SessionRejectReason === SessionRejectReason.InvalidTagNumber)
  checkSeqNos(client.views)
  checkSeqNos(server.views)
}, 10000)

test('heartbeat invalid sender comp', async () => {
  const at = client.transport.transmitter as AsciiMsgTransmitter
  const changed = heartbeat.replace('49=init-comp', '49=init-not!').replace('34=1', `34=${at.msgSeqNum + 1}`)
  await runSkeletons(2, changed)
  expect(client.views.length === 3).toEqual(true)
  expect(server.views.length === 3).toEqual(true)
  expect(client.views[0].segment.name).toEqual('Logon')
  expect(client.views[1].segment.name).toEqual('Reject')
  expect(server.views[0].segment.name).toEqual('Logon')
  expect(server.views[1].segment.name).toEqual('Heartbeat')
  const reject: IReject = client.views[1].toObject()
  expect(reject.SessionRejectReason === SessionRejectReason.CompIDProblem)
  checkSeqNos(client.views)
  checkSeqNos(server.views)
}, 10000)

// client will send heartbeats to server, server with 30 second heartbeat will not heartbeat
test('client heartbeats to server', async () => {
  const preset = client.config.description.HeartBtInt
  client.config.description.HeartBtInt = 2
  await runSkeletons(6)
  // both sides should now have logged on and logged off
  expect(client.views.length === 2).toEqual(true)
  expect(server.views.length > 2).toEqual(true)
  const serverReceivesHeartbeats = countOfType('Heartbeat', server.views)
  expect(serverReceivesHeartbeats >= 2 && serverReceivesHeartbeats <= 4).toEqual(true)
  checkSeqNos(client.views)
  checkSeqNos(server.views)
  client.config.description.HeartBtInt = preset
}, 10000)

test('server heartbeats to client', async () => {
  const preset = server.config.description.HeartBtInt
  server.config.description.HeartBtInt = 2
  await runSkeletons(6)
  // both sides should now have logged on and logged off
  expect(server.views.length === 2).toEqual(true)
  expect(client.views.length > 2).toEqual(true)
  const clientReceivesHeartbeats = countOfType('Heartbeat', client.views)
  expect(clientReceivesHeartbeats >= 2 && clientReceivesHeartbeats <= 4).toEqual(true)
  checkSeqNos(client.views)
  checkSeqNos(server.views)
  server.config.description.HeartBtInt = preset
}, 10000)

test('client server heartbeat', async () => {
  const preset = server.config.description.HeartBtInt
  server.config.description.HeartBtInt = 2
  client.config.description.HeartBtInt = 2
  await runSkeletons(6)
  // both sides should now have logged on and logged off
  expect(server.views.length > 2).toEqual(true)
  expect(client.views.length > 2).toEqual(true)
  const clientReceivesHeartbeats = countOfType('Heartbeat', client.views)
  const serverReceivesHeartbeats = countOfType('Heartbeat', server.views)
  expect(clientReceivesHeartbeats >= 2 && clientReceivesHeartbeats <= 4).toEqual(true)
  expect(serverReceivesHeartbeats >= 2 && serverReceivesHeartbeats <= 4).toEqual(true)
  checkSeqNos(client.views)
  checkSeqNos(server.views)
  server.config.description.HeartBtInt = preset
  client.config.description.HeartBtInt = preset
}, 10000)
