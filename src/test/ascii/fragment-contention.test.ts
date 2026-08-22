import 'reflect-metadata'

import { Setup } from '../env/setup'
import { ILooseObject } from '../../collections/collection'
import { AsciiMsgTransmitter } from '../../transport/ascii/ascii-msg-transmitter'
import { FragmentSafety, FragmentSafetyCode, describeFinding } from '../../dictionary/fragment-safety'
import { CaseBuilder, CaseOutcome, Scenarios, classify } from '../../generator'

/**
 * The other half of the scattered component story, and the half that is not theoretical.
 *
 * Phase 0 of `docs/scattered-components.md` measured the QuickFIX FIX50SP2 dictionary and
 * found 57 sibling tag collisions, every one of them `Currency(15)` declared both inside
 * `Instrument` and again beside it at message level.  It concluded that a repair
 * attributing tags by identity could not tell the two apart, and that the collision map
 * would have to be consulted per set at repair time.
 *
 * That is what happens.  The **shipped** depth-1 repair - not the generalisation, the one
 * in the library today - absorbs the message level `Currency` into `Instrument` when
 * `Instrument` arrives scattered.  The application is handed an instrument with a
 * currency it was never sent.
 *
 * This is a different failure from the one in `generated-scatter.test.ts`.  There the
 * engine loses fields; here it invents one.  A missing field is something a careful
 * application notices; a plausible value that was never sent is not.
 *
 * `data/corpus/currency-claimed-by-sibling` freezes one instance of this forever.  What
 * this file adds is that it is *systemic* - it happens across scenarios and seeds
 * whenever the shape occurs - and that it happens only when the shape occurs.
 *
 * Nothing in the parser has been changed to fix it.  See the design note, open decision 1,
 * on whether a collision should refuse repair for the contended pair or for the whole set.
 */

const DELIMITER = '|'
const Currency = 15
const asOf = new Date(Date.UTC(2026, 0, 15, 10, 30, 0))

/** where the contended tag sits in the message, which is what decides the outcome */
enum Owner {
  /** carried at the level above, as a sibling of the scattered component */
  Sibling = 'sibling',
  /** carried inside the scattered component, so there is nothing to take */
  Component = 'component',
  /** not in this message at all */
  Absent = 'absent'
}

interface IRow {
  readonly scenario: string
  readonly seed: number
  readonly owner: Owner
  readonly outcome: CaseOutcome
  readonly added: string[]
}

let setup: Setup
let builder: CaseBuilder
let rows: IRow[] = []

function at (o: any, dotted: string): any {
  return dotted.split('.').reduce((a: any, k: string) => (a == null ? a : a[k]), o)
}

beforeAll(async () => {
  setup = new Setup('session/test-qf50sp2-initiator.json', null)
  await setup.init()
  const transmitter = setup.client.transmitter as AsciiMsgTransmitter
  builder = new CaseBuilder(setup.definitions, (msgType, obj) => {
    transmitter.encodeMessage(msgType, obj)
    return transmitter.buffer.toString()
  })

  const collected: IRow[] = []
  for (const scenario of Scenarios.names()) {
    for (let seed = 1; seed <= 30; ++seed) {
      let c
      try {
        c = builder.build({
          scenario, seed, depth: 1, delimiter: DELIMITER, fragments: 2, generator: { asOf }
        })
      } catch (e) {
        continue
      }
      if (c.plan.depth !== 1) continue
      const site = c.plan.sites[0]
      // only a component scattered in the message body - a site further down fails for
      // the unrelated reason covered by generated-scatter.test.ts
      if (site.structureDepth !== 0) continue
      if (!site.contendedTags.includes(Currency)) continue

      // drop the message name to get the path of the component within the object
      const componentPath = site.component.split('.').slice(1).join('.')
      const insideComponent = at(c.object, `${componentPath}.Currency`) != null
      const atLevel = c.object.Currency != null
      const owner = insideComponent
        ? Owner.Component
        : (atLevel ? Owner.Sibling : Owner.Absent)

      const canonical = (await setup.client.parseText(c.canonical)).view?.toObject() ?? null
      const scattered = (await setup.client.parseText(c.scattered)).view?.toObject() ?? null
      const result = classify(canonical, scattered)
      collected.push({ scenario, seed, owner, outcome: result.outcome, added: result.added })
    }
  }
  rows = collected
}, 90000)

const owned = (owner: Owner): IRow[] => rows.filter(r => r.owner === owner)

describe('a tag two siblings both claim', () => {
  test('the dictionary really does declare Currency twice', () => {
    const m = setup.definitions.message.get('ExecutionReport')
    expect(m).toBeTruthy()
    const findings = FragmentSafety.analyseSet(m!, 'ExecutionReport')
      .filter(f => f.path === 'ExecutionReport' && f.code === FragmentSafetyCode.SiblingTagCollision)
    expect(findings.map(describeFinding))
      .toContain('ExecutionReport: tag 15 is claimed by Instrument and Currency')
  })

  test('a generated case notices the contention without being told', () => {
    expect(rows.length).toBeGreaterThan(0)
  })

  test('the sweep found all three shapes', () => {
    expect(owned(Owner.Sibling).length).toBeGreaterThanOrEqual(5)
    expect(owned(Owner.Component).length).toBeGreaterThanOrEqual(5)
    expect(owned(Owner.Absent).length).toBeGreaterThanOrEqual(5)
  })
})

describe('when the sibling owns the contended tag', () => {
  test('the shipped repair claims it for the scattered component', () => {
    const sibling = owned(Owner.Sibling)
    const survived = sibling.filter(r => r.outcome !== CaseOutcome.MisAttributes)
    // measured at 61 of 62 over a wider sweep; the exception is a message where the
    // fragment happened to land such that the positional span still excluded the tag
    expect(sibling.length - survived.length).toBeGreaterThanOrEqual(5)
  })

  test('and what it invents is exactly Instrument.Currency', () => {
    const invented = owned(Owner.Sibling)
      .filter(r => r.outcome === CaseOutcome.MisAttributes)
      .flatMap(r => r.added)
    expect(invented.length).toBeGreaterThan(0)
    expect(Array.from(new Set(invented))).toEqual(['.Instrument.Currency'])
  })
})

describe('the contention is the only thing that goes wrong here', () => {
  /**
   * Where the component itself carries the tag, the *canonical* parse is already making
   * a choice - tag 15 sits inside `Instrument`'s span, but the level also declares a
   * `Currency` field of its own, and position is the only thing separating them.  A
   * re-ordering can therefore flip which sibling receives it even though nothing was
   * taken from anyone.  That is not a second defect; it is the same ambiguity seen from
   * the other side, and it is why phase 0 concluded the collision map has to be consulted
   * per set rather than treated as a whole-dictionary yes or no.
   */
  test('every value the engine invents is the contended tag, never something else', () => {
    const invented = rows
      .filter(r => r.outcome === CaseOutcome.MisAttributes)
      .flatMap(r => r.added)
    expect(invented.length).toBeGreaterThan(0)
    expect(Array.from(new Set(invented))).toEqual(['.Instrument.Currency'])
  })

  test('nothing is invented where the message does not carry the contended tag', () => {
    const wrong = owned(Owner.Absent).filter(r => r.outcome === CaseOutcome.MisAttributes)
    expect(wrong.map(r => `${r.scenario} seed ${r.seed}`)).toEqual([])
  })

  test('and the great majority of cases carrying it inside the component are unharmed', () => {
    const component = owned(Owner.Component)
    const harmed = component.filter(r => r.outcome === CaseOutcome.MisAttributes)
    expect(component.length).toBeGreaterThanOrEqual(5)
    expect(harmed.length * 4).toBeLessThan(component.length)
  })
})
