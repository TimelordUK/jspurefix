import 'reflect-metadata'

import { MsgView } from '../../buffer'
import { Setup } from '../env/setup'
import { Experiment } from '../env/experiment'
import { SkeletonRunner } from '../env/skeleton-runner'
import {
  IFixSessionStore,
  IFixSessionStoreFactory,
  MemorySessionStore,
  SessionId
} from '../../store'

/**
 * Reproduction for https://github.com/TimelordUK/jspurefix/issues/140
 *
 * When an initiator has ResetSeqNumFlag=Y and a persistent session store with
 * recovered sequence numbers, the Logon goes out stamped with the recovered
 * sender seq num instead of 1.  Per FIX protocol, a Logon with
 * ResetSeqNumFlag=Y MUST carry MsgSeqNum=1; otherwise the broker is entitled
 * to reject the session.
 *
 * The flow that produces the bug:
 *   1. AsciiSession.run() awaits sessionStore.initialize() — store loads
 *      sender=42 from disk (or whatever was persisted before disconnect).
 *   2. coordinator.initializeFromStore() copies sender=42 in.
 *   3. transmitter.msgSeqNum is set to 42.
 *   4. super.run() invokes sendLogon() while ResetSeqNumFlag=Y is set in the
 *      description — Logon is encoded with MsgSeqNum=42 + ResetSeqNumFlag=Y.
 *
 * The C# port (cspurefix) added an OnPreLogon() hook to FixSession that the
 * AsciiSession overrides to call coordinator.ResetSession() + re-sync the
 * encoder when ResetSeqNumFlag=Y. TS is missing this step.
 */

class PrePopulatedMemoryStoreFactory implements IFixSessionStoreFactory {
  constructor (
    private readonly senderSeqNum: number,
    private readonly targetSeqNum: number
  ) {}

  create (sessionId: SessionId): IFixSessionStore {
    const store = new MemorySessionStore(sessionId)
    store.senderSeqNum = this.senderSeqNum
    store.targetSeqNum = this.targetSeqNum
    return store
  }
}

let setup: Setup

beforeEach(async () => {
  setup = new Setup()
  await setup.init()
}, 30000)

test('initiator with ResetSeqNumFlag=Y and persisted store sends Logon with stale seq num (issue #140)', async () => {
  // Sanity check: test-initiator.json has ResetSeqNumFlag=true.
  expect(setup.clientConfig.description.ResetSeqNumFlag).toBe(true)

  // Pre-populate the initiator's session store as if a previous session
  // had progressed to sender seq 42 / target seq 42.  The acceptor keeps
  // the default (empty) memory store — it's a fresh broker.
  ;(setup.clientConfig as any).sessionStoreFactory =
    new PrePopulatedMemoryStoreFactory(42, 42)

  const experiment = new Experiment(setup)

  // Capture the FIRST message the acceptor receives — that should be
  // the initiator's Logon.
  let firstAcceptorMsg: { msgType: string, view: MsgView } | null = null
  experiment.server.transport.receiver.on('msg', (msgType: string, view: MsgView) => {
    if (!firstAcceptorMsg) {
      firstAcceptorMsg = { msgType, view: view.clone() }
    }
  })

  const runner = new SkeletonRunner(experiment, 1)
  await runner.wait()

  expect(firstAcceptorMsg).toBeTruthy()
  expect(firstAcceptorMsg!.msgType).toBe('A') // Logon
  expect(firstAcceptorMsg!.view.getTyped('ResetSeqNumFlag')).toBe(true)

  // Per the FIX spec, Logon with ResetSeqNumFlag=Y must have MsgSeqNum=1
  // even when a persisted store has recovered a higher sender seq num.
  expect(firstAcceptorMsg!.view.getTyped('MsgSeqNum')).toBe(1)
})
