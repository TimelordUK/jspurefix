import 'reflect-metadata'

import * as path from 'path'
import { Setup } from '../env/setup'
import { ILooseObject } from '../../collections/collection'
import { CaseOutcome, CorpusStore, ILoadedCase, classify, describeOutcome } from '../../generator'

/**
 * The corpus: edge cases kept as bytes.
 *
 * Each entry is a message encoded twice - contiguously, and in a legal re-ordering that
 * takes one or more components apart - together with the outcome someone looked at and
 * agreed with.  The contiguous encoding is the oracle, so an entry needs no hand written
 * expected object; what is recorded is only *what the engine does*, and how.
 *
 * These files are deliberately not regenerated.  A seed reproduces a message only while
 * the generator is unchanged, so a corpus defined by seeds would quietly stop describing
 * what it was written for the first time a probability moved.  `src/generator/` is how a
 * case is found; these bytes are what a case is.
 *
 * Growing it, from `docs/generated-cases.md`:
 *
 *     npm run doll -- --scenario=<name> --russian-doll=<n> --seed=<n> \
 *       --as-of=<iso> --corpus-add=<case-name> --note="what this shows"
 *
 * Read what it wrote, then commit it.  A case whose recorded outcome is not
 * `round-trips` is a defect this engine has today, described precisely enough that fixing
 * it will fail this test - which is the point.  When one is fixed, update the entry
 * rather than deleting it.
 */

const corpus = new CorpusStore(path.join(__dirname, '../../../data/corpus'))
const cases: ILoadedCase[] = corpus.loadAll()

/** one Setup per distinct session, built once and shared */
const setups = new Map<string, Setup>()

beforeAll(async () => {
  for (const session of new Set(cases.map(c => c.entry.session))) {
    const setup = new Setup(session, null)
    await setup.init()
    setups.set(session, setup)
  }
}, 90000)

async function parse (session: string, wire: string): Promise<ILooseObject | null> {
  const setup = setups.get(session)
  if (!setup) throw new Error(`no session prepared for ${session}`)
  const res = await setup.client.parseText(wire)
  return res.view ? res.view.toObject() : null
}

describe('the corpus is worth having', () => {
  test('it is not empty', () => {
    expect(cases.length).toBeGreaterThan(0)
  })

  test('it covers the engine working, losing data, and inventing data', () => {
    const outcomes = new Set(cases.map(c => c.entry.expected))
    expect(outcomes).toContain(CaseOutcome.RoundTrips)
    expect(outcomes).toContain(CaseOutcome.LosesFields)
    expect(outcomes).toContain(CaseOutcome.MisAttributes)
  })

  test('it covers both a message body site and one below it', () => {
    const depths = new Set(
      cases.flatMap(c => c.entry.plan.sites.map(s => s.structureDepth)))
    expect(depths).toContain(0)
    expect(depths).toContain(1)
  })

  test('it covers more than one dictionary', () => {
    expect(new Set(cases.map(c => c.entry.dictionary)).size).toBeGreaterThan(1)
  })

  test('every case actually scatters something', () => {
    for (const c of cases) {
      expect(c.entry.plan.sites.length).toBeGreaterThan(0)
      for (const site of c.entry.plan.sites) {
        expect(site.fragments).toBeGreaterThan(1)
      }
    }
  })
})

describe('each case behaves as recorded', () => {
  test.each(cases.map(c => [c.entry.name, c] as [string, ILoadedCase]))(
    '%s', async (_name: string, c: ILoadedCase) => {
      const canonical = await parse(c.entry.session, c.canonical)
      // the contiguous encoding is the oracle, so it has to parse whatever else happens
      expect(canonical).not.toBeNull()

      const scattered = await parse(c.entry.session, c.scattered)
      const outcome = classify(canonical, scattered)

      // the message says the same thing either way - only the order differs
      expect(outcome.outcome).toEqual(c.entry.expected)

      // and it fails, when it fails, in exactly the way it was recorded failing, so a
      // change in the shape of the damage is a test failure too
      expect(outcome.missing).toEqual(c.entry.missing ?? [])
      expect(outcome.added).toEqual(c.entry.added ?? [])
      expect(outcome.changed).toEqual(c.entry.changed ?? [])

      if (outcome.outcome !== c.entry.expected) {
        throw new Error(`${c.entry.name}: ${describeOutcome(outcome)}`)
      }
    })

  test.each(cases.map(c => [c.entry.name, c] as [string, ILoadedCase]))(
    '%s is a permutation of the same bytes', (_name: string, c: ILoadedCase) => {
      const sorted = (wire: string): string[] =>
        wire.split(c.entry.delimiter).filter(p => p.length > 0).sort()
      expect(sorted(c.scattered)).toEqual(sorted(c.canonical))
    })
})
