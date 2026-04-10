/**
 * Post-processing reindexer for ContainedFieldSet.
 *
 * After the graph parser drains its work queue, parent sets may not yet
 * know about all tags in their nested groups/components — because those
 * children may have been resolved AFTER the parent. This visitor walks
 * every message/component/group definition in post-order (children first),
 * clears the aggregated tag indices, and re-adds direct fields via
 * ContainedSetBuilder, which propagates child tags upward correctly.
 *
 * Equivalent to the C# IndexVisitor + ContainedFieldSet.Index() pair.
 */
import { ContainedFieldSet } from '../../contained/contained-field-set'
import { ContainedField } from '../../contained/contained-field'
import { ContainedFieldType } from '../../contained/contained-field-type'
import { ContainedGroupField } from '../../contained/contained-group-field'
import { ContainedComponentField } from '../../contained/contained-component-field'
import { ContainedSetBuilder } from '../../contained/contained-set-builder'
import { FixDefinitions } from '../../definition/fix-definitions'
import { IContainedSet } from '../../contained/contained-set'

export class IndexVisitor {
  private readonly visited = new Set<IContainedSet>()

  /**
   * Reindex every message in the definitions. Components and groups are
   * reindexed transitively as they are encountered during message reindexing.
   */
  compute (definitions: FixDefinitions): void {
    // Use a Set to dedupe — definitions.message contains duplicate entries (by name + msgType + abbreviation)
    const messages = new Set(definitions.message.values())
    for (const msg of messages) {
      this.reindex(msg)
    }
  }

  /**
   * Reindex a single set: post-order traversal ensures every nested
   * group/component is fully indexed before its parent is rebuilt.
   */
  reindex (set: IContainedSet): void {
    if (this.visited.has(set)) return
    this.visited.add(set)

    // First, recurse into all child groups/components (post-order)
    for (const field of set.fields) {
      if (field.type === ContainedFieldType.Group) {
        const gf = field as ContainedGroupField
        if (gf.definition) this.reindex(gf.definition)
      } else if (field.type === ContainedFieldType.Component) {
        const cf = field as ContainedComponentField
        if (cf.definition) this.reindex(cf.definition)
      }
    }

    // Save direct fields, clear all aggregated state, re-add via builder
    const level0: ContainedField[] = [...set.fields]
    IndexVisitor.clearAggregated(set as ContainedFieldSet)

    const builder = new ContainedSetBuilder(set)
    for (const field of level0) {
      builder.add(field)
    }
  }

  /**
   * Reset every aggregated index on a set without touching its identity.
   * Direct fields are passed back via the return of clearAggregated for
   * the caller to re-add.
   */
  static clearAggregated (set: ContainedFieldSet): void {
    set.fields.length = 0
    set.simple.clear()
    set.groups.clear()
    set.components.clear()
    set.localNameToField.clear()
    set.flattenedTag.length = 0
    set.localAttribute.length = 0
    set.nameToLocalAttribute.clear()
    set.firstSimple = null
    set.containsRaw = false
    IndexVisitor.clearObject(set.containedTag)
    IndexVisitor.clearObject(set.localTag)
    IndexVisitor.clearObject(set.localRequired)
    IndexVisitor.clearObject(set.tagToSimple)
    IndexVisitor.clearObject(set.tagToField)
    IndexVisitor.clearObject(set.containedLength)
    // Re-add the noOfField tag for groups (otherwise the group counter is lost)
    const def = set as any
    if (def.noOfField) {
      set.containedTag[def.noOfField.tag] = true
    }
  }

  private static clearObject (obj: Record<string, unknown>): void {
    for (const k of Object.keys(obj)) {
      delete obj[k]
    }
  }
}
