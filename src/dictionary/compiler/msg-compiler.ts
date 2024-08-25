import { ElasticBuffer, Tags } from '../../buffer'
import { AsciiChars } from '../../buffer/ascii/'
import { ICompilerSettings } from './compiler-settings'
import { FixDefinitions } from '../definition'
import {
  ContainedComponentField,
  IContainedSet,
  ContainedGroupField,
  ContainedSimpleField,
  FieldsDispatch
} from '../contained'
import { StandardSnippet } from './standard-snippet'
import { CompilerType } from './compiler-type'

import * as fs from 'fs'
import * as Util from 'util'
import * as Path from 'path'
import { SetReduce } from '../set-reduce'
import { ContainedSetType } from '../contained-set-type'
import { TagType } from '../../buffer/tag/tag-type'

const newLine: string = require('os').EOL
const justifiedWidth: number = 50

export class MsgCompiler {
  readonly queue: CompilerType[] = []
  readonly snippets: StandardSnippet
  readonly buffer: ElasticBuffer = new ElasticBuffer()
  readonly completed: Map<string, CompilerType>

  constructor (public readonly definitions: FixDefinitions, public readonly settings: ICompilerSettings) {
    this.completed = new Map<string, CompilerType>()
    this.snippets = new StandardSnippet(this.settings)
  }

  public async generate (): Promise<void> {
    const types: string[] = this.settings.types ?? Array.from(this.definitions.message.keys())
    await this.createTypes(types)
  }

  private getFileName (compilerType: CompilerType): string {
    const settings = this.settings
    const fileName = `${compilerType.snaked}.ts`
    return Path.join(settings.output, fileName)
  }

  private async createTypes (types: string[]): Promise<void> {
    const definitions = this.definitions
    types.forEach((type: string) => {
      const definition = definitions.containedSet(type)
      if (!definition) {
        throw new Error(`no type ${type} defined`)
      }
      const ct = new CompilerType(this.definitions, definition, definition.name)
      this.enqueue(ct)
    })
    await this.work()
    await this.index()
  }

  private async work (): Promise<void> {
    const q = this.queue
    const writeFile = Util.promisify(fs.writeFile)
    while (q.length > 0) {
      const compilerType = q.pop()
      if (!compilerType) continue
      const api: string = this.generateMessages(compilerType)
      const fullName = this.getFileName(compilerType)
      await writeFile(fullName, api, { encoding: 'utf8' }
      )
    }
  }

  private async index (): Promise<void> {
    const writeFile = Util.promisify(fs.writeFile)
    const settings = this.settings
    const fileName = 'index.ts'
    const done = Array.from(this.completed.values())
    const exports: string[] = done.reduce<string[]>((prev: string[], current: CompilerType) => {
      prev.push(`export * from '${current.snaked}'`)
      return prev
    }, ['export * from \'./enum\''])
    exports.sort()
    exports.push('')
    const api: string = exports.join(newLine)
    const fullName: string = Path.join(settings.output, fileName)
    await writeFile(fullName, api, { encoding: 'utf8' })
  }

  private generateMessages (compilerType: CompilerType): string {
    const definition = compilerType.set
    const buffer: ElasticBuffer = this.buffer
    buffer.reset()
    const snippets = this.snippets
    // a single class with dependencies included
    const ptr: number = this.imports(compilerType)
    if (ptr > 0) {
      buffer.writeString(newLine)
      buffer.writeString(newLine)
    }
    if (this.settings.comment && definition.description) {
      const comment = snippets.commentBox(definition.description)
      buffer.writeString(snippets.startBlockComment(0))
      buffer.writeString(newLine)
      buffer.writeString(comment)
      buffer.writeString(newLine)
      buffer.writeString(snippets.endBlockComment(0))
      buffer.writeString(newLine)
    }
    buffer.writeString(snippets.interface(compilerType.qualifiedName, 0))
    buffer.writeChar(AsciiChars.Space)
    buffer.writeString(snippets.startBlock(0))
    buffer.writeString(newLine)
    this.fields(compilerType)
    buffer.writeString(snippets.endBlock(0))
    buffer.writeString(newLine)
    return buffer.toString()
  }

  // only generate once
  private enqueue (ct: CompilerType): void {
    const completed = this.completed
    const fullName = this.getFileName(ct)
    if (completed.get(fullName)) {
      return
    }
    this.queue.push(ct)
    completed.set(fullName, ct)
  }

  private simpleComment (simple: ContainedSimpleField): string {
    return `[${simple.position + 1}] ${simple.definition.tag} (${TagType[simple.definition.tagType]})`
  }

  private fieldSimple (simple: ContainedSimpleField): void {
    const snippets = this.snippets
    const settings = this.settings
    const buffer = this.buffer
    const len = buffer.writeString(snippets.simple(simple.name, Tags.toJSType(simple.definition.tagType), simple.required, 1))
    if (settings.tags) {
      buffer.writeString(snippets.commentLine(this.simpleComment(simple), justifiedWidth - len))
    }
    buffer.writeString(newLine)
  }

  private fieldGroup (groupField: ContainedGroupField, compilerType: CompilerType): void {
    const buffer = this.buffer
    const snippets = this.snippets
    // for a group its field name is as defined in type, its type is qualified to avoid collisions
    const extended: string = compilerType.getExtended(groupField)
    const len = buffer.writeString(snippets.group(compilerType.getFieldGroupName(groupField), extended, groupField.required, 1))
    this.setComment(groupField.definition, groupField.position, len)
    this.enqueue(new CompilerType(this.definitions, groupField.definition, extended))
    buffer.writeString(newLine)
  }

  private tagSummary (definition: IContainedSet, max: number = 3): string {
    function tagTxt (tag: number): string {
      const name = definition.getFieldName(tag)
      return `${name}.${tag}`
    }

    function setTxt (flattened: number[]): string {
      return flattened.map(f => tagTxt(f)).join(', ')
    }

    const flattened = definition.flattenedTag
    if (max >= flattened.length) {
      return setTxt(flattened)
    }

    const front = setTxt(flattened.slice(0, max - 1))
    return `${front} .. ${tagTxt(flattened[flattened.length - 1])}`
  }

  private setComment (set: IContainedSet, position: number, len: number): void {
    if (this.settings.tags) {
      const tagTxt = this.tagSummary(set)
      const buffer = this.buffer
      buffer.writeString(this.snippets.commentLine(`[${position + 1}] ${tagTxt}`, justifiedWidth - len))
    }
  }

  private fieldComponent (componentField: ContainedComponentField, compilerType: CompilerType): void {
    const buffer = this.buffer
    const snippets = this.snippets
    const extended: string = compilerType.getExtended(componentField)
    const len = buffer.writeString(snippets.component(extended, componentField.required, 1))
    this.enqueue(new CompilerType(this.definitions, componentField.definition, extended))
    this.setComment(componentField.definition, componentField.position, len)
    buffer.writeString(newLine)
  }

  private fields (compilerType: CompilerType): void {
    this.attributes(compilerType)
    new FieldsDispatch().dispatchFields(compilerType.set.fields, {
      group: (g: ContainedGroupField) => { this.fieldGroup(g, compilerType) },
      simple: (simple: ContainedSimpleField) => { this.fieldSimple(simple) },
      component: (c: ContainedComponentField) => { this.fieldComponent(c, compilerType) }
    })
  }

  private attributes (compilerType: CompilerType): void {
    const settings = this.settings
    const snippets = this.snippets
    const buffer = this.buffer
    compilerType.set.localAttribute.forEach((simple: ContainedSimpleField) => {
      const len = buffer.writeString(snippets.simple(simple.definition.name, Tags.toJSType(simple.definition.tagType), simple.required, 1))
      if (settings.tags) {
        buffer.writeString(snippets.commentLine(this.simpleComment(simple), justifiedWidth - len))
      }
      buffer.writeString(newLine)
    })
  }

  private imports (compilerType: CompilerType): number {
    const reducer = new SetReduce<string[]>()
    const isMsg = compilerType.set.type === ContainedSetType.Msg
    const snippets = this.snippets
    const imports: string[] = reducer.reduce(compilerType.set, {
      component: (a: string[], c: ContainedComponentField) => {
        a.push(`${snippets.import(compilerType.getExtended(c), isMsg, 0)}`)
        return a
      },
      group: (a: string[], g: ContainedGroupField) => {
        a.push(`${snippets.import(compilerType.getExtended(g), isMsg, 0)}`)
        return a
      }
    }, [])

    return this.buffer.writeString(imports.join(newLine))
  }
}
