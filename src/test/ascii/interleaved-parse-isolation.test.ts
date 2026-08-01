import 'reflect-metadata'

import { Setup } from '../env/setup'
import { AsciiParser } from '../../buffer/ascii'
import { ElasticBuffer, MsgView } from '../../buffer'
import { makeSessionScope } from '../../runtime/session-scope'
import { DITokens } from '../../runtime/di-tokens'
import { ILooseObject } from '../../collections/collection'

/**
 * Why an acceptor needs a parse buffer per connection.
 *
 * Each AsciiParser owns its parse *state* - tag offsets, current position, message
 * definition - but before session scopes existed they all shared one ParseBuffer
 * instance, because it is registered with registerInstance on the session container.
 * That asymmetry is what corrupts: `AsciiParserState.beginMessage()` calls
 * `elasticBuffer.reset()`, so whenever one connection completes a message it rewinds
 * the buffer that every other connection is mid-way through writing into.
 *
 * The trigger is not two messages arriving at the same instant - node serialises the
 * data callbacks, so a chunk is parsed atomically.  The trigger is one connection
 * being *mid-message*, which happens whenever a FIX message straddles a TCP segment
 * boundary.  Small session messages fit in one segment and never fragment, which is
 * why this does not show up in a test; large market data messages fragment
 * routinely, which is why a price publishing acceptor would meet it constantly.
 *
 * Relevant to https://github.com/TimelordUK/jspurefix/issues/77, where an acceptor
 * serving multiple clients saw intermittent structural parse errors that could not
 * be reproduced from the offending message on its own.
 */

let setup: Setup

beforeAll(async () => {
  setup = new Setup()
  await setup.init()
}, 45000)

const marketDataRequest = '8=FIX.4.4|9=0000115|35=V|49=init-comp|56=accept-comp|34=2|57=fix|' +
  '52=20231108-09:40:46.257|262=1698937860913.38|263=1|264=0|267=3|269=0|269=1|269=H|' +
  '146=1|55=*|461=O|10=033|'

interface IOutcome {
  parsed: string[]
  errors: string[]
  views: MsgView[]
}

/**
 * Connection A receives half its message, connection B then sends a whole one, and
 * only afterwards does A's remainder arrive.  Returns what A made of it.
 */
function interleave (parserA: AsciiParser, parserB: AsciiParser, split: number): IOutcome {
  const outcome: IOutcome = { parsed: [], errors: [], views: [] }
  parserA.on('msg', (msgType: string, view: MsgView) => {
    outcome.parsed.push(msgType)
    outcome.views.push(view.clone())
  })
  parserA.on('error', (e: Error) => outcome.errors.push(e.message))
  parserB.on('msg', () => {})
  parserB.on('error', () => {})

  try {
    parserA.parseText(marketDataRequest.substring(0, split))
    parserB.parseText(marketDataRequest)
    parserA.parseText(marketDataRequest.substring(split))
  } catch (e) {
    outcome.errors.push((e as Error).message)
  }
  return outcome
}

/** two parsers on one buffer - what every accepted connection used to share */
function sharedBufferPair (): [AsciiParser, AsciiParser] {
  const shared = new ElasticBuffer(160 * 1024)
  return [
    new AsciiParser(setup.clientConfig, null, shared),
    new AsciiParser(setup.clientConfig, null, shared)
  ]
}

/** two parsers each resolved from their own session scope, as an acceptor now does */
function scopedPair (): [AsciiParser, AsciiParser] {
  const scopeA = makeSessionScope(setup.serverConfig, { TargetCompID: 'client-a' })
  const scopeB = makeSessionScope(setup.serverConfig, { TargetCompID: 'client-b' })
  return [
    new AsciiParser(scopeA, null, scopeA.sessionContainer.resolve<ElasticBuffer>(DITokens.ParseBuffer)),
    new AsciiParser(scopeB, null, scopeB.sessionContainer.resolve<ElasticBuffer>(DITokens.ParseBuffer))
  ]
}

describe('interleaved parsing across connections', () => {
  test('a shared parse buffer corrupts a fragmented message - at every split point', () => {
    const damaged: number[] = []
    for (let split = 1; split < marketDataRequest.length; ++split) {
      const [a, b] = sharedBufferPair()
      const outcome = interleave(a, b, split)
      if (outcome.parsed.length !== 1 || outcome.errors.length > 0) {
        damaged.push(split)
      }
    }
    // not a narrow race: once A is mid-message, any traffic on B destroys it
    expect(damaged.length).toBe(marketDataRequest.length - 1)
  })

  test('a shared parse buffer produces a structural error, not a lost message', () => {
    const [a, b] = sharedBufferPair()
    const outcome = interleave(a, b, Math.floor(marketDataRequest.length / 2))

    expect(outcome.parsed).toHaveLength(0)
    expect(outcome.errors).toHaveLength(1)
    // the kind of error an application sees as an unexplained reject, with nothing
    // wrong in the message it was actually sent
    expect(outcome.errors[0]).toMatch(/BeginString|unknown tag|unexpected/i)
  })

  test('per-scope buffers keep a fragmented message intact through interleaving', () => {
    for (let split = 1; split < marketDataRequest.length; ++split) {
      const [a, b] = scopedPair()
      const outcome = interleave(a, b, split)
      expect(outcome.errors).toEqual([])
      expect(outcome.parsed).toEqual(['V'])
    }
  })

  test('the interleaved message still parses to the right object', () => {
    const [a, b] = scopedPair()
    const outcome = interleave(a, b, Math.floor(marketDataRequest.length / 2))

    const o = outcome.views[0].toObject() as ILooseObject
    expect(o.MDReqID).toBe('1698937860913.38')
    expect(o.InstrmtMDReqGrp[0].Instrument).toEqual({ Symbol: '*', CFICode: 'O' })
  })
})
