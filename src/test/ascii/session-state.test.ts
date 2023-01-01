import 'reflect-metadata'

import { SessionState, TickAction, FixSessionState } from '../../transport'

let state: FixSessionState
let now: Date

beforeEach(async () => {
  state = new FixSessionState({ heartBeat: 30 })
  state.state = SessionState.InitiationLogonResponse
  now = new Date(2018, 0, 1, 20, 0, 0, 0)
  state.LastSentAt = now
  state.lastReceivedAt = now
  state.peerHeartBeatSecs = 30
  state.lastPeerMsgSeqNum = 1
})

test('do nothing', () => {
  const action: TickAction = state.calcAction(now)
  expect(action).toEqual(TickAction.Nothing)
})

test('heartbeat', () => {
  const next = new Date(now.getTime() + 31 * 1000)
  state.lastReceivedAt = next
  const action: TickAction = state.calcAction(next)

  expect(state.timeToDie()).toEqual(false)
  expect(state.timeToHeartbeat()).toEqual(true)
  expect(state.timeToTerminate()).toEqual(false)
  expect(state.timeToTestRequest()).toEqual(false)

  expect(action).toEqual(TickAction.Heartbeat)
})

test('testrequest', () => {
  const next = new Date(now.getTime() + 51 * 1000)
  state.LastSentAt = next
  const action: TickAction = state.calcAction(next)

  expect(state.timeToDie()).toEqual(false)
  expect(state.timeToHeartbeat()).toEqual(false)
  expect(state.timeToTerminate()).toEqual(false)
  expect(state.timeToTestRequest()).toEqual(true)

  expect(action).toEqual(TickAction.TestRequest)
})

test('testrequest - no response', () => {
  const next = new Date(now.getTime() + 55 * 2 * 1000)
  state.LastSentAt = next
  state.lastTestRequestAt = now
  const action: TickAction = state.calcAction(next)

  expect(state.timeToDie()).toEqual(false)
  expect(state.timeToHeartbeat()).toEqual(false)
  expect(state.timeToTerminate()).toEqual(true)
  expect(state.timeToTestRequest()).toEqual(true)

  expect(action).toEqual(TickAction.TerminateOnError)
})

test('time to die - no logout response', () => {
  const next = new Date(now.getTime() + 20 * 1000)
  state.state = SessionState.WaitingLogoutConfirm
  state.LastSentAt = now
  state.lastReceivedAt = now
  state.logoutSentAt = now
  const action: TickAction = state.calcAction(next)

  expect(state.timeToDie()).toEqual(true)
  expect(state.timeToHeartbeat()).toEqual(false)
  expect(state.timeToTerminate()).toEqual(false)
  expect(state.timeToTestRequest()).toEqual(false)

  expect(action).toEqual(TickAction.Stop)
})
