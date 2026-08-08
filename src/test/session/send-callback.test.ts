import 'reflect-metadata'

import { Setup } from '../env/setup'
import { Experiment } from '../env/experiment'
import { MsgType } from '../../types'
import { SendResult } from '../../transport/send-callback'
import { SessionState } from '../../transport/session/session-state'
import { SkeletonRunner } from '../env/skeleton-runner'
import { ILooseObject } from '../../collections/collection'

/**
 * https://github.com/TimelordUK/jspurefix/issues/86
 *
 * `send` writes into a stream and returns, so nothing tells the caller which sequence
 * number their message went out under, and a failure surfaces on the session's error
 * channel with no way to say which call caused it.  An optional callback closes that
 * gap without changing what a send does.
 *
 * The obvious alternative - overriding the encode stream and returning a value from
 * its transform callback - cannot work: a Transform's second callback argument is
 * pushed to the readable side, and here that readable side is piped to the socket.
 */

let setup: Setup
let experiment: Experiment

beforeEach(async () => {
  setup = new Setup()
  await setup.init()
  experiment = new Experiment(setup)
}, 30000)

function heartbeat (): ILooseObject {
  return { TestReqID: 'ping' }
}

async function sendAndSettle (msgType: string, obj: ILooseObject): Promise<[Error | null, SendResult]> {
  return await new Promise((resolve) => {
    experiment.client.transport.transmitter.on('error', () => { /* asserted via the callback */ })
    experiment.client.transport.transmitter.send(msgType, obj, (error, result) => {
      resolve([error, result])
    })
  })
}

describe('a send callback', () => {
  test('reports the header the engine stamped, including the sequence number', async () => {
    const [error, result] = await sendAndSettle(MsgType.Heartbeat, heartbeat())

    expect(error).toBeNull()
    expect(result.msgType).toEqual(MsgType.Heartbeat)
    expect(result.header?.MsgSeqNum).toEqual(1)
    expect(result.header?.SenderCompID).toEqual('init-comp')
  })

  test('reports the bytes that went to the transport', async () => {
    const [, result] = await sendAndSettle(MsgType.Heartbeat, heartbeat())

    expect(result.encoded).toBeInstanceOf(Buffer)
    expect(result.encoded?.toString()).toContain('35=0')
  })

  test('the sequence number advances across sends, as seen by the caller', async () => {
    const [, first] = await sendAndSettle(MsgType.Heartbeat, heartbeat())
    const [, second] = await sendAndSettle(MsgType.Heartbeat, heartbeat())

    expect(first.header?.MsgSeqNum).toEqual(1)
    expect(second.header?.MsgSeqNum).toEqual(2)
  })

  test('reports a message that never formed, which used to pass silently', async () => {
    // an unknown msgType is reported on the error channel and then carried past -
    // nothing came back to the caller at all
    const [error, result] = await sendAndSettle('not-a-message-type', heartbeat())

    expect(error).toBeTruthy()
    expect(error?.message).toContain('not-a-message-type')
    expect(result.header).toBeNull()
  })

  test('a failed send still reaches the error channel, so session handling is unchanged', async () => {
    const seen: Error[] = []
    const transmitter = experiment.client.transport.transmitter
    transmitter.on('error', (e: Error) => { seen.push(e) })

    await new Promise<void>((resolve) => {
      transmitter.send('not-a-message-type', heartbeat(), () => { setImmediate(resolve) })
    })

    expect(seen.map(e => e.message).join()).toContain('not-a-message-type')
  })

  test('a throwing callback is reported, not allowed to break the encode stream', async () => {
    const seen: Error[] = []
    const transmitter = experiment.client.transport.transmitter
    transmitter.on('error', (e: Error) => { seen.push(e) })

    await new Promise<void>((resolve) => {
      transmitter.send(MsgType.Heartbeat, heartbeat(), () => {
        setImmediate(resolve)
        throw new Error('application callback blew up')
      })
    })

    expect(seen.map(e => e.message)).toContain('application callback blew up')
    // the stream is still usable
    const [error] = await sendAndSettle(MsgType.Heartbeat, heartbeat())
    expect(error).toBeNull()
  })

  test('a session that has stopped tells the caller it dropped the message', async () => {
    const runner = new SkeletonRunner(experiment, 1)
    const session = runner.clientSkeleton as any
    session.sessionState.state = SessionState.Stopped

    const settled = await new Promise<[Error | null, SendResult]>((resolve) => {
      session.send(MsgType.Heartbeat, heartbeat(), (e: Error | null, r: SendResult) => { resolve([e, r]) })
    })

    // it was only ever a log line before - the caller had no way to know
    expect(settled[0]?.message).toContain("can't send in state")
    expect(settled[1].header).toBeNull()
  })

  test('omitting it leaves send exactly as it was', async () => {
    const transmitter = experiment.client.transport.transmitter
    const encoded: string[] = []
    transmitter.on('encoded', (_msgType: string, txt: string) => { encoded.push(txt) })

    transmitter.send(MsgType.Heartbeat, heartbeat())
    await new Promise<void>(resolve => { setImmediate(resolve) })

    expect(encoded).toHaveLength(1)
    expect(encoded[0]).toContain('35=0')
  })
})
