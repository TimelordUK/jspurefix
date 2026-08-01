import 'reflect-metadata'

import { Setup } from '../env/setup'
import { makeSessionScope } from '../../runtime/session-scope'
import { DITokens } from '../../runtime/di-tokens'
import { ElasticBuffer } from '../../buffer'
import { MsgTransport } from '../../transport/factory'
import { StringDuplex, StringDuplexTraits } from '../../transport'
import { AsciiMsgTransmitter } from '../../transport/ascii/ascii-msg-transmitter'
import { IJsFixConfig } from '../../config'

/**
 * A FIX acceptor serves many connections from one listener config.  Before session
 * scopes existed, every accepted connection resolved the *same* ParseBuffer and
 * TransmitBuffer instance (they are registerInstance singletons on the session
 * container) and shared one session description - so concurrent clients interleaved
 * bytes in a shared buffer and computed an identical SessionId, hence one store.
 */

let setup: Setup

beforeAll(async () => {
  setup = new Setup()
  await setup.init()
}, 45000)

function scopedTransport (config: IJsFixConfig, id: number): MsgTransport {
  const duplex = new StringDuplex('', StringDuplexTraits.None)
  return new MsgTransport(id, config, duplex)
}

describe('session scope', () => {
  test('each scope gets its own parse and transmit buffers', () => {
    const a = makeSessionScope(setup.serverConfig)
    const b = makeSessionScope(setup.serverConfig)

    const aRx = a.sessionContainer.resolve<ElasticBuffer>(DITokens.ParseBuffer)
    const bRx = b.sessionContainer.resolve<ElasticBuffer>(DITokens.ParseBuffer)
    const aTx = a.sessionContainer.resolve<ElasticBuffer>(DITokens.TransmitBuffer)
    const bTx = b.sessionContainer.resolve<ElasticBuffer>(DITokens.TransmitBuffer)

    expect(aRx).not.toBe(bRx)
    expect(aTx).not.toBe(bTx)

    const parentRx = setup.serverConfig.sessionContainer.resolve<ElasticBuffer>(DITokens.ParseBuffer)
    expect(aRx).not.toBe(parentRx)
    expect(aRx.size).toBe(parentRx.size)
  })

  test('each scope gets its own description which does not leak back to the parent', () => {
    const original = setup.serverConfig.description.TargetCompID
    const a = makeSessionScope(setup.serverConfig, { TargetCompID: 'client-one' })
    const b = makeSessionScope(setup.serverConfig, { TargetCompID: 'client-two' })

    expect(a.description.TargetCompID).toBe('client-one')
    expect(b.description.TargetCompID).toBe('client-two')
    expect(setup.serverConfig.description.TargetCompID).toBe(original)
    expect(a.description.SenderCompId).toBe(setup.serverConfig.description.SenderCompId)
    // application config is shared by reference - host/port/dictionary are listener wide
    expect(a.description.application).toBe(setup.serverConfig.description.application)
  })

  test('the message factory of a scope stamps that scope comp ids', () => {
    const a = makeSessionScope(setup.serverConfig, { TargetCompID: 'client-one' })
    const b = makeSessionScope(setup.serverConfig, { TargetCompID: 'client-two' })

    const ha = a.factory?.header('A', 1, new Date()) as any
    const hb = b.factory?.header('A', 1, new Date()) as any

    expect(ha.TargetCompID).toBe('client-one')
    expect(hb.TargetCompID).toBe('client-two')
  })

  test('transports built on distinct scopes do not share parser or transmitter state', () => {
    const a = makeSessionScope(setup.serverConfig, { TargetCompID: 'client-one' })
    const b = makeSessionScope(setup.serverConfig, { TargetCompID: 'client-two' })

    const ta = scopedTransport(a, 1)
    const tb = scopedTransport(b, 2)

    expect(ta.receiver).not.toBe(tb.receiver)
    expect(ta.transmitter).not.toBe(tb.transmitter)

    // the buffer injected into each parser is the buffer of its own scope
    expect((ta.receiver as any).receivingBuffer).toBe(a.sessionContainer.resolve(DITokens.ParseBuffer))
    expect((tb.receiver as any).receivingBuffer).toBe(b.sessionContainer.resolve(DITokens.ParseBuffer))
    expect((ta.receiver as any).receivingBuffer).not.toBe((tb.receiver as any).receivingBuffer)

    const txa = ta.transmitter as AsciiMsgTransmitter
    const txb = tb.transmitter as AsciiMsgTransmitter
    expect(txa.buffer).not.toBe(txb.buffer)

    // sequence numbers advance independently
    txa.msgSeqNum = 42
    expect(txb.msgSeqNum).not.toBe(42)
  })
})
