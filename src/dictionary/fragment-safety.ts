import {
  ContainedComponentField,
  ContainedField,
  ContainedFieldType,
  ContainedGroupField,
  ContainedSimpleField,
  IContainedSet
} from './contained'
import { FixDefinitions } from './definition'

/**
 * Static analysis of a dictionary, asking one question: if a component's tags arrived
 * scattered through a message rather than adjacently, could this dictionary still say
 * unambiguously which component each tag belongs to?
 *
 * The segment parser normally answers that from *position* - a tag between the first and
 * last tag of a component belongs to it.  A counterparty that emits a component's tags
 * non-adjacently breaks the inference, and the tags themselves become the only evidence
 * left.  That works whenever the children of one set own disjoint tags, which FIX's tag
 * numbering conventions (Underlying*, Leg*, NestedParties2/3) exist to guarantee, but a
 * house dictionary is under no obligation to honour them.
 *
 * See docs/scattered-components.md.  Nothing in the engine consumes this yet - it is a
 * diagnostic run against a dictionary to find out whether the assumption holds before any
 * code is written that depends on it.
 */

export enum FragmentSafetyCode {
  /**
   * two children of one set both claim the same tag, so a scattered instance of either
   * could not be attributed to one of them by tag alone
   */
  SiblingTagCollision = 'sibling-tag-collision',
  /**
   * a component owns no tag at its own level, so a scattered instance leaves no evidence
   * it was ever present
   */
  UnclaimableComponent = 'unclaimable-component'
}

export interface IFragmentSafetyFinding {
  readonly code: FragmentSafetyCode
  /**
   * dotted path to the set the finding is about, from the message it was first reached
   * through e.g. 'NewOrderSingle.Instrument'
   */
  readonly path: string
  /**
   * name of the set whose children collide, or of the unclaimable component
   */
  readonly set: string
  /**
   * the contended tag, or 0 for an unclaimable component
   */
  readonly tag: number
  /**
   * names of the children of `set` that each claim `tag`
   */
  readonly owners: string[]
}

export function describeFinding (f: IFragmentSafetyFinding): string {
  switch (f.code) {
    case FragmentSafetyCode.SiblingTagCollision:
      return `${f.path}: tag ${f.tag} is claimed by ${f.owners.join(' and ')}`
    case FragmentSafetyCode.UnclaimableComponent:
      return `${f.path}: owns no tag of its own`
    default:
      return f.path
  }
}

export class FragmentSafety {
  private readonly findings: IFragmentSafetyFinding[] = []
  private readonly analysed = new Set<IContainedSet>()
  private readonly owned = new Map<IContainedSet, number[]>()

  /**
   * tags a set can claim at its own level - its simple fields, the same from any
   * component nested below it, and the NumInGroup tag of any group it contains.
   *
   * a group's *interior* is deliberately excluded.  a repeating group is the one
   * self describing construct in tag value FIX, so its instances are always delimiter
   * framed and contiguous, and its member tags are never evidence about the level above.
   * this is the same distinction `flattenedTag` does not draw.
   */
  public ownTags (set: IContainedSet): number[] {
    const memo = this.owned.get(set)
    if (memo) return memo
    // seed before recursing so a self referencing dictionary terminates
    this.owned.set(set, [])
    const tags: number[] = []
    for (const field of set.fields) {
      switch (field.type) {
        case ContainedFieldType.Simple: {
          tags.push((field as ContainedSimpleField).definition.tag)
          break
        }
        case ContainedFieldType.Component: {
          const cf = field as ContainedComponentField
          for (const t of this.ownTags(cf.definition)) {
            tags.push(t)
          }
          break
        }
        case ContainedFieldType.Group: {
          const gf = field as ContainedGroupField
          const nof = gf.definition.noOfField
          if (nof) {
            tags.push(nof.tag)
          }
          break
        }
        default:
          break
      }
    }
    this.owned.set(set, tags)
    return tags
  }

  /**
   * every message in the dictionary, and every component and group reachable from one,
   * each analysed once however many messages reach it
   */
  public static analyse (definitions: FixDefinitions): IFragmentSafetyFinding[] {
    const instance = new FragmentSafety()
    // the message map is keyed by name, msgType and abbreviation, so walk distinct sets
    const seen = new Set<IContainedSet>()
    for (const message of definitions.message.values()) {
      if (seen.has(message)) continue
      seen.add(message)
      instance.walk(message, message.name)
    }
    return instance.findings
  }

  /**
   * a single set and everything below it, for a dictionary fragment under test
   */
  public static analyseSet (set: IContainedSet, path?: string): IFragmentSafetyFinding[] {
    const instance = new FragmentSafety()
    instance.walk(set, path ?? set.name)
    return instance.findings
  }

  private walk (set: IContainedSet, path: string): void {
    if (this.analysed.has(set)) return
    this.analysed.add(set)
    this.checkSiblings(set, path)
    for (const field of set.fields) {
      switch (field.type) {
        case ContainedFieldType.Component: {
          const cf = field as ContainedComponentField
          this.checkClaimable(cf, `${path}.${cf.name}`)
          this.walk(cf.definition, `${path}.${cf.name}`)
          break
        }
        case ContainedFieldType.Group: {
          // the instance body of a group is a level in its own right, and everything
          // said about scattering above applies again inside it
          const gf = field as ContainedGroupField
          this.walk(gf.definition, `${path}.${gf.name}`)
          break
        }
        default:
          break
      }
    }
  }

  private checkClaimable (cf: ContainedComponentField, path: string): void {
    if (this.ownTags(cf.definition).length > 0) return
    this.findings.push({
      code: FragmentSafetyCode.UnclaimableComponent,
      path,
      set: cf.name,
      tag: 0,
      owners: []
    })
  }

  private checkSiblings (set: IContainedSet, path: string): void {
    // tag -> the children of this set claiming it.  a tag reaching two children is what
    // makes a scattered instance unattributable
    const claims = new Map<number, string[]>()
    for (const field of set.fields) {
      for (const tag of this.claimsOf(field)) {
        const owners = claims.get(tag)
        if (owners) {
          if (!owners.includes(field.name)) {
            owners.push(field.name)
          }
        } else {
          claims.set(tag, [field.name])
        }
      }
    }
    for (const [tag, owners] of claims) {
      if (owners.length < 2) continue
      this.findings.push({
        code: FragmentSafetyCode.SiblingTagCollision,
        path,
        set: set.name,
        tag,
        owners
      })
    }
  }

  private claimsOf (field: ContainedField): number[] {
    switch (field.type) {
      case ContainedFieldType.Simple:
        return [(field as ContainedSimpleField).definition.tag]
      case ContainedFieldType.Component:
        return this.ownTags((field as ContainedComponentField).definition)
      case ContainedFieldType.Group: {
        const nof = (field as ContainedGroupField).definition.noOfField
        return nof ? [nof.tag] : []
      }
      default:
        return []
    }
  }
}
