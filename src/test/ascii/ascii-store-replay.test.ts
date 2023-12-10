import 'reflect-metadata'

import * as path from 'path'

import {
  IFixMsgStoreRecord
} from '../../store'
import { MsgType } from '../../types'
import { ISequenceReset } from '../../types/FIX4.4/repo'

import { Setup } from '../env/setup'
import { TestRecovery } from '../env/test-recovery'

const root: string = path.join(__dirname, '../../../data')

let server: TestRecovery
let client: TestRecovery
let setup: Setup

beforeAll(async () => {
  setup = new Setup(
    'session/test-initiator.json',
    'session/test-acceptor.json')
  await setup.init()
  const serverConfig = setup.serverConfig
  const clientConfig = setup.clientConfig
  const views = await setup.server.replayer.replayFixFile(path.join(root, 'examples/FIX.4.4/jsfix.test_client.txt'))
  server = new TestRecovery(views, serverConfig)
  client = new TestRecovery(views, clientConfig)
  await server.populate()
  await client.populate()
}, 45000)

test('expect 15 messages in log', () => {
  expect(server.views.length).toEqual(15)
  expect(client.views.length).toEqual(15)
})

/*
client: (all client messages)
8=FIX4.4|9=000124|35=AD|49=init-tls-comp|56=accept-tls-comp|34=2|57=fix|52=20210307-16:16:44.388|568=all-trades|569=0|263=1|580=1|75=20210307|10=187|
8=FIX4.4|9=000112|35=0|49=init-tls-comp|56=accept-tls-comp|34=3|57=fix|52=20210307-16:17:14.431|112=Sun, 07 Mar 2021 16:17:14 GMT|10=220|
8=FIX4.4|9=000109|35=5|49=init-tls-comp|56=accept-tls-comp|34=4|57=fix|52=20210307-16:17:16.397|58=test_client initiate logout|10=191|
 */

/*
server: (application only)

8=FIX4.4|9=000112|35=AQ|49=accept-tls-comp|56=init-tls-comp|34=2|57=fix|52=20210307-16:16:44.429|568=all-trades|569=0|749=0|750=0|10=142|
8=FIX4.4|9=000209|35=AE|49=accept-tls-comp|56=init-tls-comp|34=3|57=fix|52=20210307-16:16:44.430|571=100000|487=0|856=0|828=0|17=600000|39=2|570=N|55=Platinum|48=Platinum.INC|32=172|31=7.36|75=20210307|60=20210307-16:16:44.430|10=043|
8=FIX4.4|9=000202|35=AE|49=accept-tls-comp|56=init-tls-comp|34=4|57=fix|52=20210307-16:16:44.431|571=100001|487=0|856=0|828=0|17=600001|39=2|570=N|55=Gold|48=Gold.INC|32=175|31=83.67|75=20210307|60=20210307-16:16:44.430|10=219|
8=FIX4.4|9=000210|35=AE|49=accept-tls-comp|56=init-tls-comp|34=5|57=fix|52=20210307-16:16:44.432|571=100002|487=0|856=0|828=0|17=600002|39=2|570=N|55=Platinum|48=Platinum.INC|32=146|31=41.79|75=20210307|60=20210307-16:16:44.430|10=097|
8=FIX4.4|9=000211|35=AE|49=accept-tls-comp|56=init-tls-comp|34=6|57=fix|52=20210307-16:16:44.432|571=100003|487=0|856=0|828=0|17=600003|39=2|570=N|55=Magnesium|48=Magnesium.INC|32=156|31=8.02|75=20210307|60=20210307-16:16:44.430|10=227|
8=FIX4.4|9=000202|35=AE|49=accept-tls-comp|56=init-tls-comp|34=7|57=fix|52=20210307-16:16:44.432|571=100004|487=0|856=0|828=0|17=600004|39=2|570=N|55=Gold|48=Gold.INC|32=136|31=32.13|75=20210307|60=20210307-16:16:44.430|10=211|
8=FIX4.4|9=000112|35=AQ|49=accept-tls-comp|56=init-tls-comp|34=8|57=fix|52=20210307-16:16:44.433|568=all-trades|569=0|749=0|750=1|10=144|
8=FIX4.4|9=000202|35=AE|49=accept-tls-comp|56=init-tls-comp|34=9|57=fix|52=20210307-16:16:59.449|571=100005|487=0|856=0|828=0|17=600005|39=2|570=N|55=Gold|48=Gold.INC|32=166|31=53.91|75=20210307|60=20210307-16:16:59.449|10=001|
8=FIX4.4|9=000206|35=AE|49=accept-tls-comp|56=init-tls-comp|34=10|57=fix|52=20210307-16:17:14.477|571=100006|487=0|856=0|828=0|17=600006|39=2|570=N|55=Silver|48=Silver.INC|32=105|31=61.2|75=20210307|60=20210307-16:17:14.477|10=191|
 */

test('server store states', async () => {
  const s1 = await server.recovery.store.getState()
  expect(s1.length).toEqual(9)
})

test('client store states', async () => {
  const s1 = await client.recovery.store.getState()
  expect(s1.length).toEqual(1)
})

test('server replay request from seq=1 to seq=10', async () => {
  const vec = await server.recovery.getResendRequest(1, 10)
  expect(vec).toBeTruthy()
  expect(Array.isArray(vec))
  expect(vec.length).toEqual(10)

  checkSeqReset(vec[0], 1, 2)

  expect(vec[1].msgType).toEqual(MsgType.TradeCaptureReportRequestAck)
  expect(vec[1].seqNum).toEqual(2)
  expect(vec[1].obj?.StandardHeader?.PossDupFlag).toBeTruthy()
  expect(vec[1].obj?.StandardHeader?.OrigSendingTime).toBeDefined()

  for (let i = 2; i <= 6; ++i) {
    expect(vec[i].msgType).toEqual(MsgType.TradeCaptureReport)
    expect(vec[i].seqNum).toEqual(i + 1)
    expect(vec[i].obj?.StandardHeader?.PossDupFlag).toBeTruthy()
    expect(vec[i].obj?.StandardHeader?.OrigSendingTime).toBeDefined()
  }

  expect(vec[7].msgType).toEqual(MsgType.TradeCaptureReportRequestAck)
  expect(vec[7].seqNum).toEqual(8)
  expect(vec[7].obj?.StandardHeader?.PossDupFlag).toBeTruthy()
  expect(vec[7].obj?.StandardHeader?.OrigSendingTime).toBeDefined()

  for (let i = 8; i < 10; ++i) {
    expect(vec[i].msgType).toEqual(MsgType.TradeCaptureReport)
    expect(vec[i].seqNum).toEqual(i + 1)
    expect(vec[1].obj?.StandardHeader?.PossDupFlag).toBeTruthy()
    expect(vec[i].obj?.StandardHeader?.OrigSendingTime).toBeDefined()
  }
})

test('client replay request from seq=1 to seq=10', async () => {
  const vec = await client.recovery.getResendRequest(1, 10)
  expect(vec).toBeTruthy()
  expect(Array.isArray(vec))
  expect(vec.length).toEqual(3)

  checkSeqReset(vec[0], 1, 2)

  expect(vec[1].msgType).toEqual(MsgType.TradeCaptureReportRequest)
  expect(vec[1].seqNum).toEqual(2)
  expect(vec[1].obj?.StandardHeader?.PossDupFlag).toBeTruthy()
  expect(vec[1].obj?.StandardHeader?.OrigSendingTime).toBeDefined()

  checkSeqReset(vec[2], 3, 11)
})

function checkSeqReset (rec: IFixMsgStoreRecord, from: number, to: number): void {
  const reset: ISequenceReset = rec.obj as ISequenceReset
  expect(rec.msgType).toEqual(MsgType.SequenceReset)
  expect(rec.obj).toBeTruthy()
  expect(rec.seqNum).toEqual(from)
  expect(reset.NewSeqNo).toEqual(to)
  expect(reset.GapFillFlag).toBeTruthy()
  expect(reset.StandardHeader.MsgType).toEqual(MsgType.SequenceReset)
  expect(reset.StandardHeader.PossDupFlag).toBeTruthy()
  expect(reset.StandardHeader.MsgSeqNum).toEqual(from)
}

// expect to gap fill entire request - and move expected seqNo to 11
// which will be the next message sent
test('client replay request from seq=4 to seq=10', async () => {
  const vec = await client.recovery.getResendRequest(4, 10)
  expect(vec).toBeTruthy()
  expect(Array.isArray(vec))
  expect(vec.length).toEqual(1)
  checkSeqReset(vec[0], 4, 11)
})
