import { ILooseObject } from '../collections/collection'
import {
  ContainedComponentField,
  ContainedField,
  ContainedFieldType,
  ContainedGroupField,
  ContainedSimpleField,
  IContainedSet
} from '../dictionary/contained'
import { TagType } from '../buffer/tag/tag-type'

/**
 * Where every tag on the wire came from in the dictionary.
 *
 * The parser answers this question from position, which is exactly the assumption the
 * scattered component work is about, so it cannot be the source of truth here.  Instead
 * the layout is built by walking the object and the dictionary in lock step with
 * `AsciiEncoder.encodeObject` - same field ordering, same treatment of components,
 * groups and raw data - and consuming one token per emission.  The walk is not a parse:
 * it knows what the encoder was about to write before it wrote it.
 *
 * If the two ever disagree the token stream will not line up and `Layout.build` throws,
 * which makes this a standing check that the mirror is still faithful.
 */

export interface IToken {
  readonly tag: number
  /** the `tag=value` text exactly as encoded, without the delimiter */
  readonly text: string
}

export enum LayoutKind {
  Message = 'message',
  Component = 'component',
  Group = 'group',
  Instance = 'instance',
  Field = 'field'
}

export class LayoutNode {
  public readonly children: LayoutNode[] = []

  constructor (
    public readonly kind: LayoutKind,
    public readonly name: string,
    public readonly path: string,
    /** for a field, its token; for a group, the token carrying NoXXX */
    public readonly tokenIndex: number = -1,
    public readonly set: IContainedSet | null = null,
    /** a raw data field is written as a Length token and then the data token */
    public readonly extraTokenIndex: number = -1) {
  }

  /** token indices below this node, in the order the encoder wrote them */
  public canonical (into: number[] = []): number[] {
    if (this.tokenIndex >= 0) into.push(this.tokenIndex)
    if (this.extraTokenIndex >= 0) into.push(this.extraTokenIndex)
    for (const c of this.children) {
      c.canonical(into)
    }
    return into
  }

  public get isLevel (): boolean {
    return this.kind === LayoutKind.Message || this.kind === LayoutKind.Instance
  }
}

/**
 * split a wire message into tokens.  Values containing the delimiter would defeat this,
 * which is why the generator never produces one.
 */
export function tokenise (wire: string, delimiter: string): IToken[] {
  const parts = wire.split(delimiter)
  const tokens: IToken[] = []
  for (const p of parts) {
    if (p.length === 0) continue
    const eq = p.indexOf('=')
    if (eq <= 0) continue
    tokens.push({ tag: parseInt(p.substring(0, eq), 10), text: p })
  }
  return tokens
}

export function assemble (tokens: readonly IToken[], order: readonly number[], delimiter: string): string {
  let out = ''
  for (const i of order) {
    out += tokens[i].text
    out += delimiter
  }
  return out
}

export interface ILayout {
  readonly root: LayoutNode
  readonly tokens: readonly IToken[]
  /** index of the first body token; everything before it is the standard header */
  readonly bodyStart: number
  /** index one past the last body token; everything from here is the trailer */
  readonly bodyEnd: number
}

export class Layout {
  private index: number = 0

  private constructor (start: number) {
    this.index = start
  }

  /**
   * Build the layout of `object` encoded as `wire`.
   *
   * The header and trailer are written by the transmitter rather than from the object,
   * so their extent is discovered rather than walked: the body is located by matching
   * the tag sequence the walk predicts against the token stream.
   */
  public static build (
    wire: string,
    delimiter: string,
    object: ILooseObject,
    set: IContainedSet): ILayout {
    const tokens = tokenise(wire, delimiter)
    const expected = Layout.expectedTags(object, set)
    const bodyStart = Layout.locate(tokens, expected)
    const builder = new Layout(bodyStart)
    const root = new LayoutNode(LayoutKind.Message, set.name, set.name, -1, set)
    builder.walk(object, set, root, set.name)
    return {
      root,
      tokens,
      bodyStart,
      bodyEnd: builder.index
    }
  }

  /**
   * the tag sequence the encoder will write for this object, used only to find where
   * the body begins
   */
  private static expectedTags (object: ILooseObject, set: IContainedSet): number[] {
    const out: number[] = []
    const collect = (o: ILooseObject, s: IContainedSet): void => {
      for (const field of Layout.presentFields(o, s)) {
        switch (field.type) {
          case ContainedFieldType.Simple: {
            const sf = field as ContainedSimpleField
            if (sf.definition.tagType === TagType.RawData && o[Layout.lengthName(s, sf)] == null) {
              out.push(Layout.lengthTag(s, sf))
            }
            out.push(sf.definition.tag)
            break
          }
          case ContainedFieldType.Component: {
            const cf = field as ContainedComponentField
            collect(o[cf.name] as ILooseObject, cf.definition)
            break
          }
          case ContainedFieldType.Group: {
            const gf = field as ContainedGroupField
            const nof = gf.definition.noOfField
            if (!nof) break
            out.push(nof.tag)
            const instances = Layout.instancesOf(o, gf)
            for (const instance of instances) {
              collect(instance, gf.definition)
            }
            break
          }
          default:
            break
        }
      }
    }
    collect(object, set)
    return out
  }

  private static locate (tokens: readonly IToken[], expected: readonly number[]): number {
    if (expected.length === 0) return 0
    for (let start = 0; start + expected.length <= tokens.length; ++start) {
      let ok = true
      for (let i = 0; i < expected.length; ++i) {
        if (tokens[start + i].tag !== expected[i]) {
          ok = false
          break
        }
      }
      if (ok) return start
    }
    throw new Error('layout walk does not match the encoded message - the mirror of AsciiEncoder has drifted')
  }

  /**
   * the fields of `set` that `o` actually carries, in the order the encoder writes them.
   * This is `AsciiEncoder.getFields`, deliberately duplicated rather than shared, because
   * the encoder is a hot path and should not grow a seam for a test tool.
   */
  private static presentFields (o: ILooseObject, set: IContainedSet): ContainedField[] {
    const fields: ContainedField[] = []
    for (const key of Object.keys(o)) {
      const field = set.localNameToField.get(key)
      if (field) fields.push(field)
    }
    fields.sort((a, b) => a.position - b.position)
    return fields
  }

  private static instancesOf (o: ILooseObject, gf: ContainedGroupField): ILooseObject[] {
    const nof = gf.definition.noOfField
    const instances = o[gf.name] ?? (nof ? o[nof.name] : null)
    return Array.isArray(instances) ? instances : []
  }

  private static lengthField (set: IContainedSet, sf: ContainedSimpleField): ContainedSimpleField | null {
    const prior = set.fields[sf.position - 1]
    if (!prior || prior.type !== ContainedFieldType.Simple) return null
    return prior as ContainedSimpleField
  }

  private static lengthName (set: IContainedSet, sf: ContainedSimpleField): string {
    return Layout.lengthField(set, sf)?.name ?? ''
  }

  private static lengthTag (set: IContainedSet, sf: ContainedSimpleField): number {
    return Layout.lengthField(set, sf)?.definition.tag ?? 0
  }

  private walk (o: ILooseObject, set: IContainedSet, parent: LayoutNode, path: string): void {
    for (const field of Layout.presentFields(o, set)) {
      switch (field.type) {
        case ContainedFieldType.Simple: {
          const sf = field as ContainedSimpleField
          let lengthIndex = -1
          if (sf.definition.tagType === TagType.RawData && o[Layout.lengthName(set, sf)] == null) {
            lengthIndex = this.index++
          }
          const dataIndex = this.index++
          // the length and its data are one indivisible unit - separating them would
          // produce a message that is not merely scattered but unparseable
          parent.children.push(new LayoutNode(
            LayoutKind.Field,
            sf.name,
            `${path}.${sf.name}`,
            lengthIndex >= 0 ? lengthIndex : dataIndex,
            null,
            lengthIndex >= 0 ? dataIndex : -1))
          break
        }
        case ContainedFieldType.Component: {
          const cf = field as ContainedComponentField
          const node = new LayoutNode(
            LayoutKind.Component, cf.name, `${path}.${cf.name}`, -1, cf.definition)
          parent.children.push(node)
          this.walk(o[cf.name] as ILooseObject, cf.definition, node, node.path)
          break
        }
        case ContainedFieldType.Group: {
          const gf = field as ContainedGroupField
          const nof = gf.definition.noOfField
          if (!nof) break
          const countIndex = this.index++
          const node = new LayoutNode(
            LayoutKind.Group, gf.name, `${path}.${gf.name}`, countIndex, gf.definition)
          parent.children.push(node)
          const instances = Layout.instancesOf(o, gf)
          for (let i = 0; i < instances.length; ++i) {
            const instance = new LayoutNode(
              LayoutKind.Instance, `${gf.name}[${i}]`, `${node.path}[${i}]`, -1, gf.definition)
            node.children.push(instance)
            this.walk(instances[i], gf.definition, instance, instance.path)
          }
          break
        }
        default:
          break
      }
    }
  }
}
