import { ILooseObject } from '../collections/collection'
import { FixDefinitions } from '../dictionary/definition'
import { FragmentSafety, IFragmentSafetyFinding, describeFinding } from '../dictionary/fragment-safety'
import { Layout, tokenise } from './layout'
import { IScatterPlan, Scatterer } from './scatter'
import { IGeneratorOptions, RealisticGenerator } from './realistic-generator'
import { Rng } from './rng'
import { Scenarios } from './scenarios'

/**
 * One test case: a message, the canonical encoding of it, and a legal re-ordering of the
 * same bytes with one or more components taken apart.
 *
 * The canonical encoding is the oracle.  It is contiguous by construction, because the
 * encoder emits in dictionary order, so today's parser handles it and the object it
 * produces is by definition the right answer.  The scattered variant is a permutation of
 * the same body tokens, so it says exactly the same thing - and any difference in what
 * the parser makes of it is a defect, with no hand written expectation to be wrong about.
 *
 * A case also carries the fragment safety findings for the component it took apart.  If
 * two children of a set both claim a tag then no repair can attribute it by tag alone,
 * and a case built over that shape is unfair rather than failing - see phase 0 of
 * `docs/scattered-components.md`, and the 57 collisions in the QuickFIX FIX50SP2
 * dictionary that motivated recording it.
 */

export interface ICaseOptions {
  /** a named scenario, or a message type with generator options of your own */
  readonly scenario?: string
  readonly msgType?: string
  readonly seed?: number
  /** how many nested scatter sites to ask for; 0 leaves the message canonical */
  readonly depth?: number
  /** how many runs to break each scattered component into */
  readonly fragments?: number
  readonly delimiter: string
  readonly generator?: IGeneratorOptions
}

export interface IGeneratedCase {
  readonly name: string
  readonly msgType: string
  readonly seed: number
  readonly object: ILooseObject
  readonly canonical: string
  readonly scattered: string
  readonly plan: IScatterPlan
  /** what was asked for, which may exceed what the message could express */
  readonly requestedDepth: number
  readonly safety: readonly IFragmentSafetyFinding[]
}

export type Encode = (msgType: string, object: ILooseObject) => string

export class CaseBuilder {
  constructor (
    public readonly definitions: FixDefinitions,
    public readonly encode: Encode) {
  }

  public build (options: ICaseOptions): IGeneratedCase {
    const seed = options.seed ?? 0x5eed
    const scenario = options.scenario ? Scenarios.get(options.scenario) : undefined
    if (options.scenario && !scenario) {
      throw new Error(`no scenario named ${options.scenario} - try one of ${Scenarios.names().join(', ')}`)
    }
    const msgType = options.msgType ?? scenario?.msgType
    if (!msgType) {
      throw new Error('a case needs either a scenario or a message type')
    }
    const generatorOptions: IGeneratorOptions = {
      ...(scenario?.options ?? {}),
      ...(options.generator ?? {}),
      seed
    }
    const generator = new RealisticGenerator(this.definitions, generatorOptions)
    const message = generator.generate(msgType)
    const canonical = this.encode(message.msgType, message.object)

    const depth = options.depth ?? 0
    if (depth <= 0) {
      return {
        name: scenario?.name ?? message.name,
        msgType: message.msgType,
        seed,
        object: message.object,
        canonical,
        scattered: canonical,
        plan: { depth: 0, sites: [] },
        requestedDepth: 0,
        safety: []
      }
    }

    const layout = Layout.build(canonical, options.delimiter, message.object, message.definition)
    const scatterer = new Scatterer(layout, new Rng(seed ^ 0x9e37), options.fragments ?? 2)
    const result = scatterer.scatter(depth, options.delimiter)
    return {
      name: scenario?.name ?? message.name,
      msgType: message.msgType,
      seed,
      object: message.object,
      canonical,
      scattered: result.wire,
      plan: result.plan,
      requestedDepth: depth,
      safety: this.safetyOf(result.plan)
    }
  }

  /**
   * findings for the sets the plan actually touched, rather than for the whole
   * dictionary - a collision three components away is not this case's problem
   */
  private safetyOf (plan: IScatterPlan): IFragmentSafetyFinding[] {
    const out: IFragmentSafetyFinding[] = []
    for (const site of plan.sites) {
      const leaf = site.component.split('.').pop() ?? ''
      const name = leaf.replace(/\[[0-9]+\]$/, '')
      const set = this.definitions.component.get(name)
      if (!set) continue
      for (const f of FragmentSafety.analyseSet(set, site.component)) {
        out.push(f)
      }
    }
    return out
  }
}

/**
 * A human readable account of what was done to a message, for the header of a fixture
 * file.  A scattered message is hard to read precisely because it is scattered, so
 * something has to say which tags moved and where they went.
 */
export function describeCase (c: IGeneratedCase, delimiter: string): string {
  const lines: string[] = []
  lines.push(`scenario   ${c.name}`)
  lines.push(`msgType    ${c.msgType}`)
  lines.push(`seed       ${c.seed}`)
  if (c.requestedDepth > 0) {
    const short = c.plan.depth < c.requestedDepth
      ? ` (asked for ${c.requestedDepth}; the message could not express more)`
      : ''
    lines.push(`doll depth ${c.plan.depth}${short}`)
    for (const site of c.plan.sites) {
      lines.push(`  ${site.component}  (${site.containment})`)
      lines.push(`    level     ${site.level}  (structure depth ${site.structureDepth})`)
      lines.push(`    runs      ${site.fragments}`)
      lines.push(`    tags      ${site.tags.join(' ')}`)
      if (site.contendedTags.length > 0) {
        lines.push(`    contended ${site.contendedTags.join(' ')} - also claimed by a sibling of this component`)
      }
    }
    if (c.safety.length > 0) {
      lines.push('  fragment safety')
      for (const f of c.safety) {
        lines.push(`    ${describeFinding(f)}`)
      }
    }
  } else {
    lines.push('doll depth 0 (canonical, nothing moved)')
  }
  const before = tokenise(c.canonical, delimiter).length
  const after = tokenise(c.scattered, delimiter).length
  lines.push(`tokens     ${before} canonical, ${after} scattered`)
  return lines.join('\n')
}
