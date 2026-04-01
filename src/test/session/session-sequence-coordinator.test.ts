import { SessionSequenceCoordinator } from '../../transport/session/session-sequence-coordinator'
import { MemorySequenceStore } from '../../transport/session/session-sequence-store'
import { IFixClock } from '../../transport/session/fix-clock'
import { ResendActionType } from '../../transport/session/resend-request-manager'

class TestClock implements IFixClock {
  private time: Date = new Date(Date.UTC(2026, 0, 1))

  now (): Date {
    return this.time
  }

  advance (ms: number): void {
    this.time = new Date(this.time.getTime() + ms)
  }
}

function createCoordinator (store?: MemorySequenceStore, clock?: TestClock) {
  const s = store ?? new MemorySequenceStore()
  const c = clock ?? new TestClock()
  return { coordinator: new SessionSequenceCoordinator(s, c), store: s, clock: c }
}

describe('SessionSequenceCoordinator', () => {
  describe('initialization', () => {
    it('starts with default sequence numbers', () => {
      const { coordinator } = createCoordinator()
      expect(coordinator.nextSenderSeqNum).toBe(1)
      expect(coordinator.expectedTargetSeqNum).toBe(1)
      expect(coordinator.lastProcessedPeerSeqNum).toBe(0)
    })

    it('initializes from store', () => {
      const store = new MemorySequenceStore()
      store.senderSeqNum = 10
      store.targetSeqNum = 20
      const { coordinator } = createCoordinator(store)
      coordinator.initializeFromStore()
      expect(coordinator.nextSenderSeqNum).toBe(10)
      expect(coordinator.expectedTargetSeqNum).toBe(20)
      expect(coordinator.lastProcessedPeerSeqNum).toBe(19)
    })

    it('initializes from config overrides', () => {
      const { coordinator } = createCoordinator()
      coordinator.initializeFromConfig(5, 15)
      expect(coordinator.nextSenderSeqNum).toBe(5)
      expect(coordinator.expectedTargetSeqNum).toBe(15)
      expect(coordinator.lastProcessedPeerSeqNum).toBe(14)
    })

    it('partial config override only changes specified values', () => {
      const { coordinator } = createCoordinator()
      coordinator.initializeFromConfig(5)
      expect(coordinator.nextSenderSeqNum).toBe(5)
      expect(coordinator.expectedTargetSeqNum).toBe(1) // unchanged
    })
  })

  describe('sender sequence', () => {
    it('increments sender sequence on getNextSenderSeqNum', () => {
      const { coordinator } = createCoordinator()
      expect(coordinator.getNextSenderSeqNum()).toBe(1)
      expect(coordinator.getNextSenderSeqNum()).toBe(2)
      expect(coordinator.getNextSenderSeqNum()).toBe(3)
      expect(coordinator.nextSenderSeqNum).toBe(4)
    })

    it('does not increment for PossDup', () => {
      const { coordinator } = createCoordinator()
      expect(coordinator.getNextSenderSeqNum()).toBe(1) // advances to 2
      expect(coordinator.getNextSenderSeqNum(true)).toBe(2) // returns 2, stays at 2
      expect(coordinator.getNextSenderSeqNum()).toBe(2) // advances to 3
      expect(coordinator.nextSenderSeqNum).toBe(3)
    })

    it('persists sender seq to store on encode', async () => {
      const { coordinator, store } = createCoordinator()
      coordinator.getNextSenderSeqNum() // seq 1
      await coordinator.onMessageEncoded(1, false)
      expect(store.senderSeqNum).toBe(2)
    })

    it('does not persist for PossDup encode', async () => {
      const { coordinator, store } = createCoordinator()
      await coordinator.onMessageEncoded(5, true)
      expect(store.senderSeqNum).toBe(1) // unchanged
    })
  })

  describe('message received', () => {
    it('accepts expected sequence and advances', async () => {
      const { coordinator } = createCoordinator()
      const result = await coordinator.onMessageReceived(1, false)
      expect(result).toBe(true)
      expect(coordinator.expectedTargetSeqNum).toBe(2)
      expect(coordinator.lastProcessedPeerSeqNum).toBe(1)
    })

    it('accepts sequential messages', async () => {
      const { coordinator } = createCoordinator()
      await coordinator.onMessageReceived(1, false)
      await coordinator.onMessageReceived(2, false)
      await coordinator.onMessageReceived(3, false)
      expect(coordinator.expectedTargetSeqNum).toBe(4)
      expect(coordinator.lastProcessedPeerSeqNum).toBe(3)
    })

    it('accepts gap message and advances past gap', async () => {
      const { coordinator } = createCoordinator()
      await coordinator.onMessageReceived(1, false)
      const result = await coordinator.onMessageReceived(5, false) // gap: 2,3,4 missing
      expect(result).toBe(true)
      expect(coordinator.expectedTargetSeqNum).toBe(6)
      expect(coordinator.lastProcessedPeerSeqNum).toBe(5)
    })

    it('rejects old messages', async () => {
      const { coordinator } = createCoordinator()
      await coordinator.onMessageReceived(1, false)
      await coordinator.onMessageReceived(2, false)
      const result = await coordinator.onMessageReceived(1, false)
      expect(result).toBe(false) // old, already processed
    })

    it('accepts PossDup without advancing sequence', async () => {
      const { coordinator } = createCoordinator()
      await coordinator.onMessageReceived(1, false)
      const result = await coordinator.onMessageReceived(1, true) // PossDup
      expect(result).toBe(true) // still process it
      expect(coordinator.expectedTargetSeqNum).toBe(2) // not advanced
    })

    it('persists target seq to store', async () => {
      const { coordinator, store } = createCoordinator()
      await coordinator.onMessageReceived(1, false)
      expect(store.targetSeqNum).toBe(2)
    })
  })

  describe('gap fill', () => {
    it('advances expected sequence on gap fill', async () => {
      const { coordinator } = createCoordinator()
      await coordinator.onMessageReceived(1, false) // expected now 2
      await coordinator.onGapFillReceived(2, 10) // skip 2-9, next expected is 10
      expect(coordinator.expectedTargetSeqNum).toBe(10)
      expect(coordinator.lastProcessedPeerSeqNum).toBe(9)
    })

    it('does not rewind on old gap fill', async () => {
      const { coordinator } = createCoordinator()
      await coordinator.onMessageReceived(1, false)
      await coordinator.onMessageReceived(2, false)
      await coordinator.onMessageReceived(3, false)
      // expected is now 4
      await coordinator.onGapFillReceived(1, 3) // old gap fill
      expect(coordinator.expectedTargetSeqNum).toBe(4) // not rewound
    })

    it('persists to store', async () => {
      const { coordinator, store } = createCoordinator()
      await coordinator.onGapFillReceived(1, 10)
      expect(store.targetSeqNum).toBe(10)
    })
  })

  describe('gap detection', () => {
    it('returns SendResendRequest for new gap', () => {
      const { coordinator } = createCoordinator()
      const action = coordinator.onGapDetected(5, 10)
      expect(action.type).toBe(ResendActionType.SendResendRequest)
      expect(action.begin).toBe(5)
      expect(action.end).toBe(9)
    })

    it('records sent request', () => {
      const { coordinator } = createCoordinator()
      coordinator.recordResendRequestSent(5, 9)
      expect(coordinator.pendingResendRequests.length).toBe(1)
    })
  })

  describe('logon retry', () => {
    it('increments sender seq on rejected logon', () => {
      const { coordinator } = createCoordinator()
      const seq1 = coordinator.nextSenderSeqNum
      expect(coordinator.onLogonRejectedForSequence()).toBe(true)
      expect(coordinator.nextSenderSeqNum).toBe(seq1 + 1)
      expect(coordinator.logonRetryCount).toBe(1)
    })

    it('returns false when max retries exceeded', () => {
      const { coordinator } = createCoordinator()
      for (let i = 0; i < 10; i++) {
        expect(coordinator.onLogonRejectedForSequence()).toBe(true)
      }
      expect(coordinator.onLogonRejectedForSequence()).toBe(false)
    })

    it('resets retry count', () => {
      const { coordinator } = createCoordinator()
      coordinator.onLogonRejectedForSequence()
      coordinator.onLogonRejectedForSequence()
      coordinator.resetLogonRetryCount()
      expect(coordinator.logonRetryCount).toBe(0)
    })
  })

  describe('timeout recovery', () => {
    it('allows recovery within max attempts', () => {
      const { coordinator } = createCoordinator()
      expect(coordinator.incrementTimeoutRecovery()).toBe(true)
      expect(coordinator.incrementTimeoutRecovery()).toBe(true)
      expect(coordinator.incrementTimeoutRecovery()).toBe(true)
      expect(coordinator.timeoutRecoveryAttempts).toBe(3)
    })

    it('returns false when max exceeded', () => {
      const { coordinator } = createCoordinator()
      coordinator.incrementTimeoutRecovery()
      coordinator.incrementTimeoutRecovery()
      coordinator.incrementTimeoutRecovery()
      expect(coordinator.incrementTimeoutRecovery()).toBe(false)
    })

    it('resets recovery counter', () => {
      const { coordinator } = createCoordinator()
      coordinator.incrementTimeoutRecovery()
      coordinator.incrementTimeoutRecovery()
      coordinator.resetTimeoutRecovery()
      expect(coordinator.timeoutRecoveryAttempts).toBe(0)
    })
  })

  describe('reset operations', () => {
    it('prepareForReconnect preserves sequences', () => {
      const { coordinator } = createCoordinator()
      coordinator.getNextSenderSeqNum() // advance to 2
      coordinator.onLogonRejectedForSequence()
      coordinator.incrementTimeoutRecovery()

      coordinator.prepareForReconnect()

      expect(coordinator.nextSenderSeqNum).toBe(3) // preserved (was incremented by logon reject too)
      expect(coordinator.logonRetryCount).toBe(0)
      expect(coordinator.timeoutRecoveryAttempts).toBe(0)
    })

    it('resetSession resets everything to 1', async () => {
      const { coordinator, store } = createCoordinator()
      coordinator.getNextSenderSeqNum()
      coordinator.getNextSenderSeqNum()
      await coordinator.onMessageReceived(1, false)
      await coordinator.onMessageReceived(2, false)

      await coordinator.resetSession('test')

      expect(coordinator.nextSenderSeqNum).toBe(1)
      expect(coordinator.expectedTargetSeqNum).toBe(1)
      expect(coordinator.lastProcessedPeerSeqNum).toBe(0)
      expect(store.senderSeqNum).toBe(1)
      expect(store.targetSeqNum).toBe(1)
    })

    it('resetSession fires onSessionReset callback', async () => {
      const { coordinator } = createCoordinator()
      let resetCalled = false
      coordinator.onSessionReset = async () => { resetCalled = true }

      await coordinator.resetSession('test')
      expect(resetCalled).toBe(true)
    })

    it('handlePeerReset preserves sender seq when we also reset', async () => {
      const { coordinator } = createCoordinator()
      coordinator.getNextSenderSeqNum() // 1
      coordinator.getNextSenderSeqNum() // 2
      // nextSenderSeqNum is now 3

      await coordinator.handlePeerReset(1, true)

      expect(coordinator.nextSenderSeqNum).toBe(3) // preserved
      expect(coordinator.expectedTargetSeqNum).toBe(2)
      expect(coordinator.lastProcessedPeerSeqNum).toBe(1)
    })

    it('handlePeerReset takes store seq when we did not reset', async () => {
      const { coordinator, store } = createCoordinator()
      coordinator.getNextSenderSeqNum()
      coordinator.getNextSenderSeqNum()

      await coordinator.handlePeerReset(1, false)

      // store was reset to 1, so sender comes from store
      expect(coordinator.nextSenderSeqNum).toBe(1)
      expect(coordinator.expectedTargetSeqNum).toBe(2)
    })

    it('resetAsAcceptor resets to 1', async () => {
      const { coordinator, store } = createCoordinator()
      coordinator.getNextSenderSeqNum()
      await coordinator.onMessageReceived(1, false)

      await coordinator.resetAsAcceptor()

      expect(coordinator.nextSenderSeqNum).toBe(1)
      expect(coordinator.expectedTargetSeqNum).toBe(1)
      expect(coordinator.lastProcessedPeerSeqNum).toBe(0)
      expect(store.targetSeqNum).toBe(1)
    })
  })

  describe('tick', () => {
    it('cleans up stale resend requests', () => {
      const { coordinator, clock } = createCoordinator()
      coordinator.recordResendRequestSent(5, 10)
      expect(coordinator.pendingResendRequests.length).toBe(1)

      clock.advance(31000) // past 30s default timeout
      coordinator.tick()

      expect(coordinator.pendingResendRequests.length).toBe(0)
    })
  })
})
