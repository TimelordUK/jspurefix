import * as fs from 'fs'
import * as path from 'path'
import { IScatterPlan } from './scatter'
import { CaseOutcome } from './outcome'
import { IGeneratedCase } from './case-builder'

/**
 * The corpus: edge cases kept as bytes, not as recipes.
 *
 * The generator is how a case is *found*; it is not what a case *is*.  A seed reproduces
 * a message only while the generator is unchanged - adjust one probability in the value
 * conventions and the random stream reshuffles, so every seed produces a different
 * message and every recorded expectation quietly stops describing what it was written
 * for.  A corpus that has to be regenerated to be read is not a corpus.
 *
 * So an entry is the two encodings, frozen, plus the expectation someone looked at and
 * agreed with.  Adding one is: generate until the tool proposes something interesting,
 * read it, commit it.  From then on it tests the same bytes forever, and it keeps
 * testing them if the generator is deleted.
 *
 * Layout, one directory per case:
 *
 *     data/corpus/<name>/case.json        metadata, plan and expected outcome
 *     data/corpus/<name>/canonical.txt    the contiguous encoding - the oracle
 *     data/corpus/<name>/scattered.txt    the legal re-ordering under test
 */

export interface ICorpusEntry {
  readonly name: string
  /** what this case is here to demonstrate, in a sentence */
  readonly note: string
  /** dictionary the case was built against, e.g. `repo44` */
  readonly dictionary: string
  /** session description used to encode and parse, relative to `data/` */
  readonly session: string
  readonly delimiter: string
  /** what the engine does with it today, agreed by whoever added the case */
  readonly expected: CaseOutcome
  /**
   * when `expected` is not `round-trips`, the leaf paths involved.  Recorded so a change
   * in *how* a case fails is a test failure too, not just a change in whether it does.
   */
  readonly missing?: string[]
  readonly added?: string[]
  readonly changed?: string[]
  /** how the case was originally found - provenance, not a way to rebuild it */
  readonly origin?: {
    readonly scenario?: string
    readonly seed?: number
    readonly depth?: number
    readonly fragments?: number
    readonly asOf?: string
  }
  readonly plan: IScatterPlan
}

export interface ILoadedCase {
  readonly entry: ICorpusEntry
  readonly canonical: string
  readonly scattered: string
  readonly directory: string
}

const CASE_FILE = 'case.json'
const CANONICAL_FILE = 'canonical.txt'
const SCATTERED_FILE = 'scattered.txt'

export class CorpusStore {
  constructor (public readonly root: string) {
  }

  public names (): string[] {
    if (!fs.existsSync(this.root)) return []
    return fs.readdirSync(this.root)
      .filter(name => fs.existsSync(path.join(this.root, name, CASE_FILE)))
      .sort()
  }

  public load (name: string): ILoadedCase {
    const directory = path.join(this.root, name)
    const entry = JSON.parse(fs.readFileSync(path.join(directory, CASE_FILE), 'utf8')) as ICorpusEntry
    return {
      entry,
      canonical: CorpusStore.readWire(path.join(directory, CANONICAL_FILE)),
      scattered: CorpusStore.readWire(path.join(directory, SCATTERED_FILE)),
      directory
    }
  }

  public loadAll (): ILoadedCase[] {
    return this.names().map(name => this.load(name))
  }

  /**
   * A case file is a fixture a person is expected to read, so it is written with the
   * commentary a person needs: what the case demonstrates and what the engine does with
   * it, above the wire.  Everything from the first `8=` is the message.
   */
  public save (entry: ICorpusEntry, canonical: string, scattered: string): string {
    const directory = path.join(this.root, entry.name)
    fs.mkdirSync(directory, { recursive: true })
    fs.writeFileSync(path.join(directory, CASE_FILE), `${JSON.stringify(entry, null, 2)}\n`, 'utf8')
    fs.writeFileSync(
      path.join(directory, CANONICAL_FILE),
      CorpusStore.wireFile(entry, 'canonical - dictionary order, contiguous, the oracle', canonical),
      'utf8')
    fs.writeFileSync(
      path.join(directory, SCATTERED_FILE),
      CorpusStore.wireFile(entry, 'scattered - the same bytes, legally re-ordered', scattered),
      'utf8')
    return directory
  }

  public static fromCase (
    name: string,
    note: string,
    dictionary: string,
    session: string,
    delimiter: string,
    generated: IGeneratedCase,
    expected: CaseOutcome,
    detail: { missing: string[], added: string[], changed: string[] },
    asOf?: Date): ICorpusEntry {
    return {
      name,
      note,
      dictionary,
      session,
      delimiter,
      expected,
      missing: detail.missing.length > 0 ? detail.missing : undefined,
      added: detail.added.length > 0 ? detail.added : undefined,
      changed: detail.changed.length > 0 ? detail.changed : undefined,
      origin: {
        scenario: generated.name,
        seed: generated.seed,
        depth: generated.requestedDepth,
        asOf: asOf ? asOf.toISOString() : undefined
      },
      plan: generated.plan
    }
  }

  private static wireFile (entry: ICorpusEntry, what: string, wire: string): string {
    const lines: string[] = []
    lines.push(`# ${entry.name} - ${what}`)
    lines.push(`# ${entry.note}`)
    lines.push(`# dictionary ${entry.dictionary}, expected ${entry.expected}`)
    for (const site of entry.plan.sites) {
      lines.push(`# scattered: ${site.component} at structure depth ${site.structureDepth}, ${site.fragments} runs`)
    }
    lines.push(wire)
    return `${lines.join('\n')}\n`
  }

  /**
   * the message, ignoring the commentary above it
   */
  private static readWire (file: string): string {
    const text = fs.readFileSync(file, 'utf8')
    for (const line of text.split(/\r?\n/)) {
      if (line.startsWith('8=')) return line
    }
    throw new Error(`${file} contains no message - expected a line beginning 8=`)
  }
}
