import 'reflect-metadata'

import * as path from 'path'

import { IFixMsgStoreRecord } from '../../store'
import { MsgType } from '../../types'
import { ISequenceReset } from '../../types/FIX4.4/repo'

import { Setup } from '../env/setup'
import { TestRecovery } from '../env/test-recovery'

const root: string = path.join(__dirname, '../../../data')

let server: TestRecovery
let serverGapFillOnly: TestRecovery
let setup: Setup

beforeAll(async () => {
  setup = new Setup(
    'session/test-initiator.json',
    'session/test-acceptor.json')
  await setup.init()
  const serverConfig = setup.serverConfig
  const views = await setup.server.replayer.replayFixFile(path.join(root, 'examples/FIX.4.4/jsfix.test_client.txt'))

  // Normal resend (replays stored messages)
  server = new TestRecovery(views, serverConfig)
  await server.populate()

  // GapFillOnly resend (always gap-fills, never replays)
  const gapFillConfig = {
    ...serverConfig,
    description: {
      ...serverConfig.description,
      store: { type: 'memory' as const, resendGapFillOnly: true }
    }
  }
  serverGapFillOnly = new TestRecovery(views, gapFillConfig)
  await serverGapFillOnly.populate()
}, 45000)

function checkSeqReset (rec: IFixMsgStoreRecord, from: number, to: number): void {
  const reset: ISequenceReset = rec.obj as ISequenceReset
  expect(rec.msgType).toEqual(MsgType.SequenceReset)
  expect(rec.obj).toBeTruthy()
  expect(rec.seqNum).toEqual(from)
  expect(reset.NewSeqNo).toEqual(to)
  expect(reset.GapFillFlag).toBeTruthy()
  expect(reset.StandardHeader.PossDupFlag).toBeTruthy()
}

test('normal mode replays stored messages', async () => {
  const vec = await server.recovery.getResendRequest(1, 10)
  expect(vec.length).toEqual(10)
  // Should contain actual messages, not just gap fills
  const nonGapFills = vec.filter(r => r.msgType !== MsgType.SequenceReset)
  expect(nonGapFills.length).toBeGreaterThan(0)
})

test('gap-fill-only mode returns single gap fill for full range', async () => {
  const vec = await serverGapFillOnly.recovery.getResendRequest(1, 10)
  expect(vec.length).toEqual(1)
  checkSeqReset(vec[0], 1, 11)
})

test('gap-fill-only mode with empty store returns gap fill', async () => {
  // Create a recovery with an empty store but gapFillOnly enabled
  const emptyConfig = {
    ...setup.serverConfig,
    description: {
      ...setup.serverConfig.description,
      store: { type: 'memory' as const, resendGapFillOnly: true }
    }
  }
  const emptyRecovery = new TestRecovery([], emptyConfig)
  // Don't populate — store is empty
  const vec = await emptyRecovery.recovery.getResendRequest(1, 10)
  expect(vec.length).toEqual(1)
  checkSeqReset(vec[0], 1, 11)
})

test('gap-fill-only mode with partial range', async () => {
  const vec = await serverGapFillOnly.recovery.getResendRequest(5, 8)
  expect(vec.length).toEqual(1)
  checkSeqReset(vec[0], 5, 9)
})

test('gap-fill-only mode with single sequence', async () => {
  const vec = await serverGapFillOnly.recovery.getResendRequest(3, 3)
  expect(vec.length).toEqual(1)
  checkSeqReset(vec[0], 3, 4)
})
