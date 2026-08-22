import { ILooseObject } from '../collections/collection'
import {
  ContainedComponentField,
  ContainedFieldType,
  ContainedGroupField,
  ContainedSimpleField,
  IContainedSet
} from '../dictionary/contained'
import { FixDefinitions, MessageDefinition } from '../dictionary/definition'
import { TagType } from '../buffer/tag/tag-type'
import { Rng } from './rng'
import { MarketContext } from './market-context'
import { IFieldContext, ValueConventions } from './value-conventions'
import { AssetClass, IInstrumentSpec, InstrumentUniverse } from './instrument-universe'
import { fieldApplies, setApplies } from './applicability'

/**
 * Builds an object for a message type that a counterparty might plausibly have sent.
 *
 * The difference from `MessageGenerator` is what gets left out.  The old generator asked
 * "should this tag be present" of every tag independently at one probability, which at
 * any useful density produces every field in the dictionary and a message no human can
 * read.  Here optional fields are tiered - a field the generator understands is likely,
 * an ordinary one is occasional, an exotic one is rare - so the shape of the output
 * resembles the shape of real traffic even before the values are looked at.
 *
 * Two structural guarantees the encoder depends on are maintained by construction:
 *
 *  - every instance of a repeating group carries the group delimiter, propagated down
 *    through whatever nested component happens to own it;
 *  - a component that ends up with no fields at all is dropped rather than emitted
 *    empty.
 */

export interface IGeneratorOptions {
  /** same seed, same message, byte for byte */
  readonly seed?: number
  /**
   * multiplier on the optional field probabilities.  0 gives required fields only;
   * 1 is the natural rate; above 1 fattens the message toward the old behaviour.
   */
  readonly density?: number
  readonly asOf?: Date
  readonly instrument?: string | IInstrumentSpec
  readonly assetClass?: AssetClass
  /** optional components below this depth are not populated; required ones still are */
  readonly maxDepth?: number
  /** upper bound on instances of any one group */
  readonly maxGroupInstances?: number
  /**
   * dotted paths or bare names that must appear, e.g. `Instrument` or
   * `TrdCapRptSideGrp.Parties`.  Used by the scatter planner to guarantee the shape it
   * is about to take apart.
   */
  readonly include?: readonly string[]
  readonly exclude?: readonly string[]
  readonly senderCompId?: string
  readonly targetCompId?: string
}

export interface IGeneratedMessage {
  readonly msgType: string
  readonly name: string
  readonly object: ILooseObject
  readonly market: MarketContext
  readonly definition: MessageDefinition
}

interface IWalkState {
  readonly path: readonly string[]
  readonly depth: number
  readonly instance: number
  /** tags that must be emitted somewhere below here, whatever the dice say */
  readonly mustInclude: readonly number[]
}

/**
 * Components a message of any kind is very likely to carry.  Without this the tiering
 * treats `Instrument` as no more probable than any other optional component, and a
 * market data refresh comes out describing the price of nothing at all.
 */
const coreSets = /^(Instrument|InstrumentLeg|UnderlyingInstrument|OrderQtyData|Parties|NestedParties[0-9]?|InstrmtLegGrp|TrdInstrmtLegGrp|InstrmtMDReqGrp|MDIncGrp|MDFullGrp)$/

/** a set that names legs, as opposed to a field that merely starts with Leg */
const legSet = /Leg(s|Grp|$|[A-Z])|InstrmtLeg/
/** UndInstrmtGrp and UnderlyingInstrument both, since the abbreviation is not uniform */
const underlyingSet = /Und(erlying|Instrmt)/

export class RealisticGenerator {
  private readonly rng: Rng
  private readonly density: number
  private readonly maxDepth: number
  private readonly maxGroupInstances: number
  private readonly forced: Set<string>
  private readonly forcedTags: number[]
  private readonly suppressed: Set<string>
  private assetClass: AssetClass = AssetClass.Equity

  constructor (
    public readonly definitions: FixDefinitions,
    public readonly options: IGeneratorOptions = {}) {
    this.rng = new Rng(options.seed ?? 0x5eed)
    this.density = options.density ?? 1.0
    this.maxDepth = options.maxDepth ?? 6
    this.maxGroupInstances = options.maxGroupInstances ?? 2
    // an entry that is all digits is a tag, which is the portable way to name a field:
    // repository dictionaries call a group TrdInstrmtLegGrp and QuickFIX calls it NoLegs,
    // but both agree that it is 555
    const include = options.include ?? []
    this.forcedTags = include.filter(s => /^[0-9]+$/.test(s)).map(s => parseInt(s, 10))
    this.forced = new Set<string>(include.filter(s => !/^[0-9]+$/.test(s)))
    this.suppressed = new Set<string>(options.exclude ?? [])
  }

  public generate (msgType: string): IGeneratedMessage {
    const definition = this.definitions.message.get(msgType)
    if (!definition) {
      throw new Error(`definitions do not contain type ${msgType}`)
    }
    const instrument = this.resolveInstrument()
    const market = new MarketContext({
      rng: this.rng,
      instrument,
      assetClass: this.options.assetClass,
      asOf: this.options.asOf,
      senderCompId: this.options.senderCompId,
      targetCompId: this.options.targetCompId
    })
    const conventions = new ValueConventions(market)
    this.assetClass = market.instrument.assetClass
    const state: IWalkState = { path: [], depth: 0, instance: 0, mustInclude: this.forcedTags }
    const object = this.build(definition, market, conventions, state) ?? {}
    return {
      msgType: definition.msgType ?? msgType,
      name: definition.name,
      object,
      market,
      definition
    }
  }

  private resolveInstrument (): IInstrumentSpec | undefined {
    const wanted = this.options.instrument
    if (!wanted) return undefined
    if (typeof wanted !== 'string') return wanted
    const found = InstrumentUniverse.byName(wanted)
    if (!found) {
      throw new Error(`no instrument named ${wanted} - try one of ${InstrumentUniverse.all.map(i => i.symbol).join(', ')}`)
    }
    return found
  }

  private build (
    set: IContainedSet,
    market: MarketContext,
    conventions: ValueConventions,
    state: IWalkState): ILooseObject | null {
    const o: ILooseObject = {}
    const fields = set.fields
    for (let i = 0; i < fields.length; ++i) {
      const field = fields[i]
      switch (field.type) {
        case ContainedFieldType.Simple:
          this.simple(o, set, field as ContainedSimpleField, i, conventions, state)
          break
        case ContainedFieldType.Component:
          this.component(o, field as ContainedComponentField, market, conventions, state)
          break
        case ContainedFieldType.Group:
          this.group(o, field as ContainedGroupField, market, conventions, state)
          break
        default:
          break
      }
    }
    return Object.keys(o).length > 0 ? o : null
  }

  private simple (
    o: ILooseObject,
    set: IContainedSet,
    sf: ContainedSimpleField,
    index: number,
    conventions: ValueConventions,
    state: IWalkState): void {
    const definition = sf.definition
    // the encoder writes a Length from the RawData that follows it, so supplying one
    // here would only give it the chance to disagree
    if (definition.tagType === TagType.Length && RealisticGenerator.rawFollows(set, index)) {
      return
    }
    const dotted = RealisticGenerator.dot(state.path, sf.name)
    if (this.suppressed.has(dotted) || this.suppressed.has(sf.name)) return
    const must = state.mustInclude.includes(definition.tag)
    if (!must && !sf.required && !this.isForced(dotted, sf.name)) {
      if (!fieldApplies(sf.name, this.assetClass)) return
      if (!this.rng.bool(this.probability(sf))) return
    }
    const fieldContext: IFieldContext = { path: state.path, instance: state.instance }
    const value = conventions.value(definition, fieldContext)
    if (value != null && value !== '') {
      o[sf.name] = value
    }
  }

  private component (
    o: ILooseObject,
    cf: ContainedComponentField,
    market: MarketContext,
    conventions: ValueConventions,
    state: IWalkState): void {
    const name = cf.name
    if (name === 'StandardHeader' || name === 'StandardTrailer') return
    const dotted = RealisticGenerator.dot(state.path, name)
    if (this.suppressed.has(dotted) || this.suppressed.has(name)) return

    const definition = cf.definition
    const carries = RealisticGenerator.carriesAny(definition, state.mustInclude)
    if (!cf.required && !carries && !this.isForced(dotted, name)) {
      if (state.depth >= this.maxDepth) return
      if (!setApplies(name, this.assetClass)) return
      if (!this.rng.bool(this.componentProbability(name, state.depth))) return
    }
    const restore = this.enter(name, market, state.instance)
    const child = this.build(definition, market, conventions, {
      path: [...state.path, name],
      depth: state.depth + 1,
      instance: state.instance,
      // only the tags this component can actually reach travel further down
      mustInclude: state.mustInclude.filter(t => definition.containedTag[t])
    })
    restore()
    if (child) {
      o[name] = child
    }
  }

  private group (
    o: ILooseObject,
    gf: ContainedGroupField,
    market: MarketContext,
    conventions: ValueConventions,
    state: IWalkState): void {
    const name = gf.name
    const dotted = RealisticGenerator.dot(state.path, name)
    if (this.suppressed.has(dotted) || this.suppressed.has(name)) return

    const definition = gf.definition
    const carries = RealisticGenerator.carriesAny(definition, state.mustInclude)
    if (!gf.required && !carries && !this.isForced(dotted, name)) {
      if (state.depth >= this.maxDepth) return
      if (!setApplies(name, this.assetClass)) return
      if (!this.rng.bool(this.groupProbability(name, state.depth))) return
    }

    const isLegs = legSet.test(name) || legSet.test(definition.name)
    const legs = market.instrument.legs
    // a strategy has exactly the legs it has, so the group size is not a dice roll
    const count = isLegs && legs && legs.length > 0
      ? legs.length
      : this.instances(state.depth)

    // every instance has to open with the group delimiter or the encoder rejects it,
    // and the delimiter may be owned by a component nested inside the instance body
    const delimiter = definition.firstSimple?.definition.tag
    const inherited = state.mustInclude.filter(t => definition.containedTag[t])
    const must = delimiter ? [delimiter, ...inherited] : inherited

    const instances: ILooseObject[] = []
    for (let i = 0; i < count; ++i) {
      const restore = this.enter(name, market, i)
      const instance = this.build(definition, market, conventions, {
        path: [...state.path, name],
        depth: state.depth + 1,
        instance: i,
        mustInclude: must
      })
      restore()
      // an instance whose only content is a nested group carries no delimiter, and the
      // encoder rejects the whole group for it.  This happens where `firstSimple` cannot
      // name a delimiter to force - a group whose body opens with another group - so the
      // guarantee above is not always enough and the shape has to be checked for.
      if (instance && RealisticGenerator.hasOwnSimple(instance, definition)) {
        instances.push(instance)
      }
    }

    if (instances.length > 0) {
      o[name] = instances
    }
  }

  /**
   * Descending into a set that names legs or underlyings moves the market context onto
   * that leg or underlying, so `LegPrice` inside the second leg resolves against the
   * second contract without the value layer knowing where it is.  Returns the undo, so
   * the context is restored however the walk below it turns out.
   *
   * Both a group and the component inside it are checked, because dictionaries disagree
   * about which one carries the name - `UndInstrmtGrp` wrapping `UnderlyingInstrument`
   * in the repository rendering, a bare `NoUnderlyings` in QuickFIX.
   */
  private enter (name: string, market: MarketContext, instance: number): () => void {
    const wasLeg = market.leg
    const wasUnderlying = market.underlying
    const legs = market.instrument.legs
    if (legSet.test(name) && legs && legs.length > 0) {
      market.leg = legs[instance % legs.length]
    } else if (underlyingSet.test(name)) {
      market.underlying = market.underlying ?? InstrumentUniverse.choose(
        this.rng,
        market.instrument.assetClass === AssetClass.Spread ? AssetClass.Future : AssetClass.Equity)
    } else {
      return () => {}
    }
    return () => {
      market.leg = wasLeg
      market.underlying = wasUnderlying
    }
  }

  /**
   * How likely an optional simple field is to appear.  A field the value layer knows by
   * tag is one a real message of this type probably carries; a low numbered tag is
   * everyday FIX; everything else is somebody else's extension and should be rare.
   */
  private probability (sf: ContainedSimpleField): number {
    const tag = sf.definition.tag
    let base: number
    if (ValueConventions.knows(tag)) {
      base = 0.75
    } else if (tag < 500) {
      base = 0.3
    } else {
      base = 0.08
    }
    return Math.min(1, base * this.density)
  }

  private componentProbability (name: string, depth: number): number {
    if (coreSets.test(name)) return Math.min(1, 0.9 * Math.max(0.5, this.density))
    return Math.min(1, (0.45 / (depth + 1)) * this.density)
  }

  private groupProbability (name: string, depth: number): number {
    if (coreSets.test(name)) return Math.min(1, 0.8 * Math.max(0.5, this.density))
    return Math.min(1, (0.35 / (depth + 1)) * this.density)
  }

  private instances (depth: number): number {
    const cap = Math.max(1, this.maxGroupInstances - depth + 1)
    return this.rng.int(1, Math.min(this.maxGroupInstances, cap))
  }

  private isForced (dotted: string, name: string): boolean {
    if (this.forced.has(dotted) || this.forced.has(name)) return true
    // forcing a path forces everything above it
    for (const f of this.forced) {
      if (f.startsWith(`${dotted}.`)) return true
    }
    return false
  }

  /**
   * whether this object emits at least one simple field at its own level - through
   * nested components, which the encoder counts as the same level, but not through a
   * group, which is framed separately and cannot serve as a delimiter
   */
  private static hasOwnSimple (o: ILooseObject, set: IContainedSet): boolean {
    for (const field of set.fields) {
      switch (field.type) {
        case ContainedFieldType.Simple:
          if (o[field.name] != null && o[field.name] !== '') return true
          break
        case ContainedFieldType.Component: {
          const cf = field as ContainedComponentField
          const child = o[cf.name]
          if (child && RealisticGenerator.hasOwnSimple(child as ILooseObject, cf.definition)) return true
          break
        }
        default:
          break
      }
    }
    return false
  }

  private static carriesAny (set: IContainedSet, tags: readonly number[]): boolean {
    for (const t of tags) {
      if (set.containedTag[t]) return true
    }
    return false
  }

  private static rawFollows (set: IContainedSet, index: number): boolean {
    const next = set.fields[index + 1]
    if (!next || next.type !== ContainedFieldType.Simple) return false
    return (next as ContainedSimpleField).definition.tagType === TagType.RawData
  }

  private static dot (path: readonly string[], name: string): string {
    return path.length > 0 ? `${path.join('.')}.${name}` : name
  }
}
