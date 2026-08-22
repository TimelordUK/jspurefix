import 'reflect-metadata'

import { Setup } from '../env/setup'
import { ILooseObject } from '../../collections/collection'
import { AsciiMsgTransmitter } from '../../transport/ascii/ascii-msg-transmitter'
import { CaseBuilder, CaseOutcome, IGeneratedCase, Scenarios, classify, tokenise } from '../../generator'

/**
 * Breadth, as opposed to the frozen edge cases in `corpus.test.ts`.
 *
 * The corpus pins particular messages forever; this sweeps many freshly generated ones
 * and asserts the *rule* they all obey.  Both are needed: the corpus would keep passing
 * if the generator stopped producing anything interesting, and the sweep would keep
 * passing if the generator started producing something other than what was measured.
 *
 * A case is a message encoded canonically - contiguous, because the encoder emits in
 * dictionary order - and then re-ordered legally so that a component becomes
 * non-adjacent.  The canonical parse is the oracle.  The rule, measured over ~2,000 cases
 * across two dictionaries and written up in `docs/generated-cases.md`:
 *
 *   structure depth 0  the component is scattered in the message body.  The shipped
 *                      repair handles this, and every case round trips.
 *   structure depth 1  it is scattered inside a group instance.  `TagIndex` populates
 *                      `exitedDepth1Components` only while `structureStack.length === 1`,
 *                      so nothing notices and fields are silently dropped.
 *
 * The depth-1 expectations are written to be **inverted, not deleted**, when phase 3 of
 * `docs/scattered-components.md` lands.  They are its acceptance criteria.
 *
 * Every assertion below is over a counted population, and every population has a floor.
 * An earlier version of this file used `test.each` with an early `return` for cases the
 * generator could not produce, which meant 8 of 40 tests passed while asserting nothing
 * at all, and a generator that stopped producing sites would have gone unnoticed.
 */

const DELIMITER = '|'

/**
 * The clock is pinned as well as the seed.  A seed fixes every choice the generator
 * makes, but `TransactTime` and the settlement date are read off the wall clock unless
 * an anchor is supplied.
 */
const asOf = new Date(Date.UTC(2026, 0, 15, 10, 30, 0))
const seeds: number[] = []
for (let i = 1; i <= 20; ++i) seeds.push(i * 7)

interface ISweepRow {
  readonly scenario: string
  readonly seed: number
  readonly requested: number
  /** deepest site in the plan, or -1 when the message could express no site at all */
  readonly structureDepth: number
  readonly outcome: CaseOutcome
  readonly added: string[]
  readonly changed: string[]
}

let setup: Setup
let builder: CaseBuilder
let sweep: ISweepRow[] = []

function build (scenario: string, seed: number, depth: number): IGeneratedCase {
  return builder.build({
    scenario, seed, depth, delimiter: DELIMITER, fragments: 2, generator: { asOf }
  })
}

async function objectOf (fix: string): Promise<ILooseObject | null> {
  const res = await setup.client.parseText(fix)
  return res.view ? res.view.toObject() : null
}

/** the body, without the header fields the transmitter varies from message to message */
function body (fix: string): string {
  return tokenise(fix, DELIMITER)
    .filter(t => t.tag !== 34 && t.tag !== 52 && t.tag !== 10 && t.tag !== 9)
    .map(t => t.text)
    .join(DELIMITER)
}

beforeAll(async () => {
  setup = new Setup()
  await setup.init()
  const transmitter = setup.client.transmitter as AsciiMsgTransmitter
  builder = new CaseBuilder(setup.definitions, (msgType, obj) => {
    transmitter.encodeMessage(msgType, obj)
    return transmitter.buffer.toString()
  })

  const rows: ISweepRow[] = []
  for (const scenario of Scenarios.names()) {
    for (const seed of seeds) {
      for (const requested of [1, 2]) {
        const c = build(scenario, seed, requested)
        if (c.plan.depth === 0) {
          // the message could express no site - counted, so that a generator which stops
          // producing them shows up as a floor failure rather than as silence
          rows.push({
            scenario,
            seed,
            requested,
            structureDepth: -1,
            outcome: CaseOutcome.RoundTrips,
            added: [],
            changed: []
          })
          continue
        }
        const canonical = await objectOf(c.canonical)
        const scattered = await objectOf(c.scattered)
        const result = classify(canonical, scattered)
        rows.push({
          scenario,
          seed,
          requested,
          structureDepth: Math.max(...c.plan.sites.map(s => s.structureDepth)),
          outcome: canonical ? result.outcome : CaseOutcome.Rejected,
          added: result.added,
          changed: result.changed
        })
      }
    }
  }
  sweep = rows
}, 180000)

const inBody = (): ISweepRow[] => sweep.filter(r => r.structureDepth === 0)
const belowBody = (): ISweepRow[] => sweep.filter(r => r.structureDepth > 0)

describe('the sweep is big enough to mean something', () => {
  test('a case ran for every scenario at every seed and depth', () => {
    expect(sweep.length).toEqual(Scenarios.names().length * seeds.length * 2)
  })

  // the floors are set just under what this generator actually produces - 272 body
  // sites over 8 scenarios and 62 below-body sites over 4 - so drift is caught while
  // leaving room for the dice
  test('it produced a useful number of message body sites', () => {
    expect(inBody().length).toBeGreaterThanOrEqual(250)
  })

  test('it produced a useful number of sites below the message body', () => {
    expect(belowBody().length).toBeGreaterThanOrEqual(50)
  })

  test('the message body sites come from several kinds of message, not one', () => {
    expect(new Set(inBody().map(r => r.scenario)).size).toBeGreaterThanOrEqual(6)
  })

  test('so do the sites below it', () => {
    expect(new Set(belowBody().map(r => r.scenario)).size).toBeGreaterThanOrEqual(3)
  })
})

describe('a component scattered in the message body - what the shipped repair covers', () => {
  test('every single case round trips', () => {
    const failures = inBody().filter(r => r.outcome !== CaseOutcome.RoundTrips)
    expect(failures.map(r => `${r.scenario} seed ${r.seed} -> ${r.outcome}`)).toEqual([])
  })
})

describe('a component scattered inside a group instance - not yet handled', () => {
  test('no case survives', () => {
    const surviving = belowBody().filter(r => r.outcome === CaseOutcome.RoundTrips)
    // when phase 3 lands this becomes everything, and the assertion inverts
    expect(surviving.map(r => `${r.scenario} seed ${r.seed}`)).toEqual([])
  })

  test('and none is rejected either - the failure is silent', () => {
    const rejected = belowBody().filter(r => r.outcome === CaseOutcome.Rejected)
    expect(rejected.map(r => `${r.scenario} seed ${r.seed}`)).toEqual([])
  })

  test('the damage on repo44 is dropped fields, never invented ones', () => {
    const invented = belowBody().filter(r => r.outcome === CaseOutcome.MisAttributes)
    expect(invented.map(r => `${r.scenario} seed ${r.seed}: ${[...r.added, ...r.changed].join(' ')}`))
      .toEqual([])
  })
})

describe('the generator produces messages this engine accepts', () => {
  test.each(Scenarios.names())('%s encodes and parses cleanly', async (name: string) => {
    const c = build(name, 7, 0)
    const res = await setup.client.parseText(c.canonical)
    expect(res.event).toEqual('msg')
    expect(res.msgType).toEqual(c.msgType)
    expect(res.view?.invalid()).toEqual([])
    expect(res.view?.missing()).toEqual([])
    expect(res.view?.undefinedForMsg()).toBeNull()
  })

  test('the same seed and clock produce the same message', () => {
    const a = build('spread-trade-capture', 42, 1)
    const b = build('spread-trade-capture', 42, 1)
    expect(b.object).toEqual(a.object)
    expect(body(b.scattered)).toEqual(body(a.scattered))
  })

  test('a different seed produces a different message', () => {
    expect(body(build('spread-trade-capture', 42, 0).canonical))
      .not.toEqual(body(build('spread-trade-capture', 43, 0).canonical))
  })
})

describe('scattering only re-orders', () => {
  test.each([7, 21, 42, 91])('seed %i moves no bytes, only their order', (seed: number) => {
    const c = build('spread-trade-capture', seed, 2)
    expect(c.plan.depth).toBeGreaterThan(0)
    const before = tokenise(c.canonical, DELIMITER).map(t => t.text).sort()
    const after = tokenise(c.scattered, DELIMITER).map(t => t.text).sort()
    expect(after).toEqual(before)
    // a permutation preserves both the byte count and the sum of the bytes, so the two
    // fields that describe the message describe the scattered one just as truthfully
    expect(c.scattered.length).toEqual(c.canonical.length)
    expect(/\|10=([0-9]{3})\|/.exec(c.scattered)?.[1])
      .toEqual(/\|10=([0-9]{3})\|/.exec(c.canonical)?.[1])
  })

  test('a component asked for at depth 1 really is broken up', () => {
    const c = build('spread-trade-capture', 42, 1)
    expect(c.plan.sites.length).toEqual(1)
    expect(c.plan.sites[0].fragments).toBeGreaterThan(1)
  })
})
