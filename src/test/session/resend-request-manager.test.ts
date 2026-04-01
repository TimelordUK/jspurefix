import { ResendRequestManager, ResendActionType, ResendAction } from '../../transport/session/resend-request-manager'

function makeTime (offsetMs: number = 0): Date {
  return new Date(Date.UTC(2026, 0, 1) + offsetMs)
}

describe('ResendRequestManager', () => {
  let manager: ResendRequestManager

  beforeEach(() => {
    manager = new ResendRequestManager()
  })

  describe('computeAction', () => {
    it('returns Nothing when receivedSeq <= expectedSeq', () => {
      const action = manager.computeAction(5, 5, makeTime())
      expect(action.type).toBe(ResendActionType.Nothing)
    })

    it('returns Nothing when receivedSeq < expectedSeq', () => {
      const action = manager.computeAction(5, 3, makeTime())
      expect(action.type).toBe(ResendActionType.Nothing)
    })

    it('returns SendResendRequest for a new gap', () => {
      const action = manager.computeAction(5, 10, makeTime())
      expect(action.type).toBe(ResendActionType.SendResendRequest)
      expect(action.begin).toBe(5)
      expect(action.end).toBe(9)
    })

    it('returns Wait when gap is covered by pending request', () => {
      const now = makeTime()
      manager.recordRequestSent(5, 9, now)
      const action = manager.computeAction(5, 10, now)
      expect(action.type).toBe(ResendActionType.Wait)
    })

    it('returns SendResendRequest for uncovered portion of gap', () => {
      const mgr = new ResendRequestManager({ maxPendingRequests: 2 })
      const now = makeTime()
      mgr.recordRequestSent(5, 7, now)
      const action = mgr.computeAction(5, 12, now)
      // 5-7 covered, 8-11 uncovered
      expect(action.type).toBe(ResendActionType.SendResendRequest)
      expect(action.begin).toBe(8)
      expect(action.end).toBe(11)
    })

    it('returns Wait when max pending requests reached', () => {
      const now = makeTime()
      manager.recordRequestSent(5, 9, now)
      // default maxPendingRequests = 1
      const action = manager.computeAction(15, 20, now)
      expect(action.type).toBe(ResendActionType.Wait)
    })
  })

  describe('storm protection', () => {
    it('returns GapFill when rate limit is exceeded', () => {
      const mgr = new ResendRequestManager({
        maxRequestsPerWindow: 3,
        rateLimitWindowSeconds: 10
      })
      const now = makeTime()
      // Send 3 requests within the window
      mgr.recordRequestSent(1, 5, now)
      mgr.recordRequestSent(6, 10, now)
      mgr.recordRequestSent(11, 15, now)
      // These are in pending, so mark them satisfied so we can send more
      for (let i = 1; i <= 15; i++) mgr.onMessageReceived(i, true, now)

      // Next gap should trigger storm protection
      const action = mgr.computeAction(20, 25, now)
      expect(action.type).toBe(ResendActionType.SendGapFill)
      expect(action.reason).toContain('storm protection')
    })

    it('allows requests after rate limit window expires', () => {
      const mgr = new ResendRequestManager({
        maxRequestsPerWindow: 2,
        rateLimitWindowSeconds: 5
      })
      const t0 = makeTime()
      mgr.recordRequestSent(1, 5, t0)
      mgr.recordRequestSent(6, 10, t0)
      for (let i = 1; i <= 10; i++) mgr.onMessageReceived(i, true, t0)

      // After window expires
      const t1 = makeTime(6000)
      const action = mgr.computeAction(15, 20, t1)
      expect(action.type).toBe(ResendActionType.SendResendRequest)
    })
  })

  describe('message tracking', () => {
    it('removes fully satisfied pending requests', () => {
      const now = makeTime()
      manager.recordRequestSent(5, 7, now)
      expect(manager.pendingCount).toBe(1)

      manager.onMessageReceived(5, true, now)
      manager.onMessageReceived(6, true, now)
      manager.onMessageReceived(7, true, now)
      expect(manager.pendingCount).toBe(0)
    })

    it('removes pending request on gap fill covering full range', () => {
      const now = makeTime()
      manager.recordRequestSent(5, 10, now)
      expect(manager.pendingCount).toBe(1)

      manager.onGapFillReceived(5, 11, now)
      expect(manager.pendingCount).toBe(0)
    })

    it('partially satisfies pending request', () => {
      const now = makeTime()
      manager.recordRequestSent(5, 10, now)

      manager.onGapFillReceived(5, 8, now)
      expect(manager.pendingCount).toBe(1)
      expect(manager.pending[0].pendingCount).toBe(3) // 8, 9, 10 still pending
    })
  })

  describe('timeout cleanup', () => {
    it('removes timed out pending requests on tick', () => {
      const mgr = new ResendRequestManager({ requestTimeoutSeconds: 5 })
      const t0 = makeTime()
      mgr.recordRequestSent(5, 10, t0)
      expect(mgr.pendingCount).toBe(1)

      const t1 = makeTime(6000)
      mgr.tick(t1)
      expect(mgr.pendingCount).toBe(0)
    })

    it('keeps non-timed-out requests', () => {
      const mgr = new ResendRequestManager({ requestTimeoutSeconds: 10 })
      const t0 = makeTime()
      mgr.recordRequestSent(5, 10, t0)

      const t1 = makeTime(5000)
      mgr.tick(t1)
      expect(mgr.pendingCount).toBe(1)
    })
  })

  describe('reset', () => {
    it('clears pending requests but keeps history', () => {
      const now = makeTime()
      manager.recordRequestSent(5, 10, now)
      expect(manager.pendingCount).toBe(1)
      expect(manager.history.length).toBe(1)

      manager.reset()
      expect(manager.pendingCount).toBe(0)
      expect(manager.history.length).toBe(1)
    })
  })
})
