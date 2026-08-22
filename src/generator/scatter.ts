import { ILayout, LayoutKind, LayoutNode, assemble } from './layout'
import { FragmentSafety, FragmentSafetyCode } from '../dictionary/fragment-safety'
import { Rng } from './rng'

/**
 * Taking a well formed message apart in a way the specification still permits.
 *
 * Two facts from `docs/scattered-components.md` are the whole basis of this:
 *
 *   Contiguity is only forced where framing exists, and framing only exists where it is
 *   needed.
 *
 * A repeating group is the sole self describing construct in tag value FIX, so a group
 * run - its `NoXXX` and every instance - is atomic and moves as one block.  Everywhere
 * else a component's extent is a convention of the dictionary with no wire
 * representation, so its tags may legally be interleaved with its siblings.
 *
 * And, within one group instance, the delimiter must come first.  That is the only other
 * ordering the wire actually constrains, and it is honoured by pinning.
 *
 * Because the result is a permutation of the body's tokens, the encoded length and the
 * sum of the bytes are both unchanged - so `BodyLength` and `CheckSum` stay correct
 * without being recomputed.  A scattered message differs from its canonical twin only in
 * the order of the fields, which is precisely the claim under test.
 *
 * ## Depth
 *
 * A *site* is one component made non-adjacent within its level.  `--russian-doll n` asks
 * for n sites, each one level further into the message than the last:
 *
 *   1  Instrument scattered in the message body - the shape the shipped repair handles
 *   2  and again inside a group instance, one level down the structure stack
 *   3  and again inside a group instance of that instance
 *
 * A site one level down is preferred where it genuinely sits *within* the site above -
 * a component of the scattered component, or a group carried by it - because that is the
 * russian doll the design note describes.  Where the dictionary offers no such shape, and
 * standard FIX 4.4 very often does not, the planner settles for a site at the same
 * structure depth reached through a sibling group instead, and says which it found.  Both
 * are past what the engine handles: detection is populated only at structure depth 1, so
 * a component scattered inside any group instance goes unnoticed however it was reached.
 *
 * The planner degrades rather than failing.  A message that cannot express three levels
 * yields two and a note, because which shapes a dictionary can express is a finding in
 * itself.
 */

export enum Containment {
  /** the message body */
  Root = 'root',
  /** genuinely inside the site above it - a nested component, or a group it carries */
  Within = 'within',
  /** the same structure depth, but reached through a sibling group */
  Deeper = 'deeper'
}

export interface IScatterSite {
  /** dotted path of the level the site sits in - the message body or a group instance */
  readonly level: string
  /** dotted path of the component made non-adjacent */
  readonly component: string
  /** how this site relates to the one above it */
  readonly containment: Containment
  /**
   * how many group instance bodies enclose the site.  0 is the message body, which is
   * the only depth today's detection is populated at, so anything above 0 is past what
   * the engine notices.
   */
  readonly structureDepth: number
  /** how many runs the component was broken into */
  readonly fragments: number
  /** tags belonging to the component, in the order they now appear */
  readonly tags: number[]
  /**
   * tags of this component that a *sibling* at the same level also claims.  Phase 0 of
   * the design note found 57 of these in the QuickFIX FIX50SP2 dictionary, all of them
   * `Currency(15)` declared both inside `Instrument` and beside it.  No repair
   * attributing by tag identity can tell which one a scattered tag belonged to, so a
   * case with a non-empty list here is testing something unanswerable rather than
   * something broken.
   */
  readonly contendedTags: number[]
}

interface ISiteRef {
  readonly level: LayoutNode
  readonly component: LayoutNode
  readonly containment: Containment
  readonly structureDepth: number
}

export interface IScatterPlan {
  readonly depth: number
  readonly sites: readonly IScatterSite[]
}

export interface IScatterResult {
  readonly wire: string
  readonly plan: IScatterPlan
  /** body token order, for a caller that wants to show the move */
  readonly order: readonly number[]
}

interface IUnit {
  /** tokens in the order they should now appear; a group run carries its whole subtree */
  readonly tokens: number[]
  /** component nodes of this level enclosing the unit, outermost first */
  readonly owners: readonly LayoutNode[]
  readonly node: LayoutNode
}

/** a level, and the chain of components to scatter within it, outermost first */
type LevelChains = Map<LayoutNode, LayoutNode[]>

export class Scatterer {
  constructor (
    private readonly layout: ILayout,
    private readonly rng: Rng,
    private readonly fragments: number = 2) {
  }

  /**
   * the deepest chain of scatter sites this message can support, up to `depth`.
   *
   * Returns fewer sites than asked for rather than failing: which shapes a dictionary
   * can actually express is a finding in its own right, and a caller that wanted three
   * levels is better served by two and a note than by an exception.
   */
  public plan (depth: number): ISiteRef[] {
    for (let want = depth; want >= 1; --want) {
      const chain = this.findChain(this.layout.root, want, Containment.Root)
      if (chain) return chain
    }
    return []
  }

  public scatter (depth: number, delimiter: string): IScatterResult {
    const sites = this.plan(depth)
    const chains: LevelChains = new Map<LayoutNode, LayoutNode[]>()
    for (const site of sites) {
      const existing = chains.get(site.level)
      if (existing) {
        existing.push(site.component)
      } else {
        chains.set(site.level, [site.component])
      }
    }
    const order = this.orderLevel(this.layout.root, chains)
    const { tokens, bodyStart, bodyEnd } = this.layout
    const head: number[] = []
    for (let i = 0; i < bodyStart; ++i) head.push(i)
    const tail: number[] = []
    for (let i = bodyEnd; i < tokens.length; ++i) tail.push(i)
    const full = [...head, ...order, ...tail]
    const position = new Map<number, number>()
    full.forEach((tokenIndex, at) => position.set(tokenIndex, at))
    return {
      wire: assemble(tokens, full, delimiter),
      order,
      plan: {
        depth: sites.length,
        sites: sites.map(site => ({
          level: site.level.path,
          component: site.component.path,
          containment: site.containment,
          structureDepth: site.structureDepth,
          contendedTags: Scatterer.contended(site),
          fragments: Scatterer.runs(site.component.canonical().map(t => position.get(t) ?? -1)),
          tags: site.component.canonical()
            .map(t => ({ t, at: position.get(t) ?? -1 }))
            .sort((a, b) => a.at - b.at)
            .map(x => tokens[x.t].tag)
        }))
      }
    }
  }

  /**
   * tags of the scattered component that a sibling of it, at the same level, also claims
   */
  private static contended (site: ISiteRef): number[] {
    const set = site.level.set
    if (!set) return []
    const name = site.component.name
    const path = site.level.path
    const out: number[] = []
    for (const f of FragmentSafety.analyseSet(set, path)) {
      if (f.code !== FragmentSafetyCode.SiblingTagCollision) continue
      if (f.path !== path) continue
      if (!f.owners.includes(name)) continue
      out.push(f.tag)
    }
    return out
  }

  /**
   * how many separate runs these positions form once sorted - one if the component is
   * still contiguous, which is how a plan reports that it failed to achieve anything
   */
  private static runs (positions: number[]): number {
    const sorted = positions.slice().sort((a, b) => a - b)
    let count = sorted.length > 0 ? 1 : 0
    for (let i = 1; i < sorted.length; ++i) {
      if (sorted[i] !== sorted[i - 1] + 1) count++
    }
    return count
  }

  // ---------------------------------------------------------------- planning

  /**
   * a chain of sites, each one level further into the message than the last
   */
  private findChain (
    level: LayoutNode,
    depth: number,
    containment: Containment,
    structureDepth: number = 0): ISiteRef[] | null {
    if (depth <= 0) return []
    const units = this.units(level)
    for (const candidate of Scatterer.candidates(level, units)) {
      const site: ISiteRef = { level, component: candidate, containment, structureDepth }
      if (depth === 1) return [site]
      const inner = this.findInside(level, candidate, units, depth - 1, structureDepth)
      if (inner) return [site, ...inner]
    }
    // Nothing scatterable at this level.  A market data refresh is the ordinary case:
    // its body is a handful of loose fields and one group, so every component it has
    // lives inside an entry.  Descend rather than report the message unscatterable.
    for (const u of units) {
      if (u.node.kind !== LayoutKind.Group) continue
      for (const instance of u.node.children) {
        const chain = this.findChain(instance, depth, Containment.Deeper, structureDepth + 1)
        if (chain) return chain
      }
    }
    return null
  }

  /**
   * components of this level worth scattering: at least two units of their own, and at
   * least one unit of the level left over to put between them
   */
  private static candidates (level: LayoutNode, units: readonly IUnit[]): LayoutNode[] {
    const owned = new Map<LayoutNode, number>()
    for (const u of units) {
      for (const owner of u.owners) {
        owned.set(owner, (owned.get(owner) ?? 0) + 1)
      }
    }
    const out: LayoutNode[] = []
    for (const [node, count] of owned) {
      if (count < 2) continue
      if (count >= units.length) continue
      out.push(node)
    }
    // widest first, so the plan uses the component with the most room to be broken up
    out.sort((a, b) => (owned.get(b) ?? 0) - (owned.get(a) ?? 0))
    if (level.kind === LayoutKind.Instance && units.length <= 2) {
      // the delimiter is pinned, so a level of two units has nothing spare to interleave
      return []
    }
    return out
  }

  /**
   * the next site down.  Preference order is the containment order of the design note:
   * a component nested inside this one, then a group this component carries, then - only
   * because standard FIX rarely offers either - any group at this level.
   */
  private findInside (
    level: LayoutNode,
    outer: LayoutNode,
    units: readonly IUnit[],
    depth: number,
    structureDepth: number): ISiteRef[] | null {
    const inside = units.filter(u => u.owners.includes(outer))

    // a component of the scattered component, scattered among its parent's own tags
    const nested = new Map<LayoutNode, number>()
    for (const u of inside) {
      const at = u.owners.indexOf(outer)
      for (let i = at + 1; i < u.owners.length; ++i) {
        const n = u.owners[i]
        nested.set(n, (nested.get(n) ?? 0) + 1)
      }
    }
    const ordered = Array.from(nested.entries())
      .filter(([, count]) => count >= 2 && count < inside.length)
      .sort((a, b) => b[1] - a[1])
    for (const [node] of ordered) {
      const site: ISiteRef = { level, component: node, containment: Containment.Within, structureDepth }
      if (depth === 1) return [site]
      const deeper = this.findInside(level, node, units, depth - 1, structureDepth)
      if (deeper) return [site, ...deeper]
    }

    // a group instance is a level of its own; one carried by the scattered component is
    // genuinely within it, one carried by a sibling only reaches the same structure depth
    const carried = units.filter(u => u.node.kind === LayoutKind.Group && u.owners.includes(outer))
    const siblings = units.filter(u => u.node.kind === LayoutKind.Group && !u.owners.includes(outer))
    for (const [group, containment] of [
      ...carried.map(u => [u.node, Containment.Within] as [LayoutNode, Containment]),
      ...siblings.map(u => [u.node, Containment.Deeper] as [LayoutNode, Containment])
    ]) {
      for (const instance of group.children) {
        const chain = this.findChain(instance, depth, containment, structureDepth + 1)
        if (chain && chain.length === depth) return chain
      }
    }
    return null
  }

  // ---------------------------------------------------------------- ordering

  /**
   * the units of one level: every field is a unit, a component contributes its fields to
   * the enclosing level rather than a unit of its own, and a whole group run is a single
   * atomic unit because the wire frames it
   */
  private units (level: LayoutNode, chains?: LevelChains): IUnit[] {
    const out: IUnit[] = []
    const visit = (node: LayoutNode, owners: LayoutNode[]): void => {
      for (const child of node.children) {
        switch (child.kind) {
          case LayoutKind.Field: {
            const tokens = [child.tokenIndex]
            if (child.extraTokenIndex >= 0) tokens.push(child.extraTokenIndex)
            out.push({ tokens, owners: owners.slice(), node: child })
            break
          }
          case LayoutKind.Component:
            visit(child, [...owners, child])
            break
          case LayoutKind.Group: {
            const tokens = [child.tokenIndex]
            for (const instance of child.children) {
              // an instance is a level, so it may carry a scatter site of its own
              for (const t of chains ? this.orderLevel(instance, chains) : instance.canonical()) {
                tokens.push(t)
              }
            }
            out.push({ tokens, owners: owners.slice(), node: child })
            break
          }
          default:
            break
        }
      }
    }
    visit(level, [])
    return out
  }

  private orderLevel (level: LayoutNode, chains: LevelChains): number[] {
    const units = this.units(level, chains)
    const chain = chains.get(level) ?? []
    let arranged: IUnit[]
    if (level.kind === LayoutKind.Instance && units.length > 0) {
      // the group delimiter has to stay at the front of the instance
      const pinned = units[0]
      const rest = units.slice(1)
      const target = chain.length > 0 ? chain[0] : null
      if (target && pinned.owners.includes(target)) {
        // the pinned unit already belongs to the component being scattered, so putting
        // the other units of the level next is enough to break its run
        arranged = [pinned, ...this.arrange(rest, chain, true)]
      } else {
        arranged = [pinned, ...this.arrange(rest, chain, false)]
      }
    } else {
      arranged = this.arrange(units, chain, false)
    }
    const out: number[] = []
    for (const u of arranged) {
      for (const t of u.tokens) out.push(t)
    }
    return out
  }

  /**
   * @param restFirst put the untargeted units before the targeted ones, used when the
   *   pinned delimiter already belongs to the target
   */
  private arrange (units: IUnit[], chain: readonly LayoutNode[], restFirst: boolean): IUnit[] {
    if (chain.length === 0 || units.length === 0) return units
    const target = chain[0]
    const inTarget = units.filter(u => u.owners.includes(target))
    const rest = units.filter(u => !u.owners.includes(target))
    if (inTarget.length === 0 || rest.length === 0) return units
    // deeper sites in the same level are scattered within the target's own units first
    const ordered = chain.length > 1 ? this.arrange(inTarget, chain.slice(1), false) : inTarget
    return restFirst
      ? Scatterer.weave(rest, ordered, this.fragments, this.rng)
      : Scatterer.weave(ordered, rest, this.fragments, this.rng)
  }

  /**
   * break `target` into runs and put pieces of `filler` between them
   */
  private static weave (target: IUnit[], filler: IUnit[], fragments: number, rng: Rng): IUnit[] {
    const f = Math.min(fragments, target.length, filler.length + 1)
    if (f < 2) return [...target, ...filler]
    const targetRuns = Scatterer.split(target, f, rng)
    const fillerRuns = Scatterer.split(filler, f - 1, rng)
    const out: IUnit[] = []
    for (let i = 0; i < f; ++i) {
      out.push(...targetRuns[i])
      if (i < f - 1) out.push(...fillerRuns[i])
    }
    return out
  }

  private static split (units: IUnit[], parts: number, rng: Rng): IUnit[][] {
    if (parts <= 1) return [units]
    const cuts = new Set<number>()
    let guard = 0
    while (cuts.size < parts - 1 && guard++ < 100) {
      cuts.add(rng.int(1, units.length - 1))
    }
    const sorted = Array.from(cuts).sort((a, b) => a - b)
    const out: IUnit[][] = []
    let from = 0
    for (const cut of sorted) {
      out.push(units.slice(from, cut))
      from = cut
    }
    out.push(units.slice(from))
    while (out.length < parts) out.push([])
    return out
  }
}
