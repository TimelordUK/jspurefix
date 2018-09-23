import { ICompilerSettings } from './compiler-settings'
import { FixDefinitions } from '../definition/fix-definitions'
import { ContainedComponentField } from '../contained/contained-component-field'
import { ContainedGroupField } from '../contained/contained-group-field'
import { StandardSnippet } from './standard-snippet'
import { Tags } from '../../buffer/tags'
import { ContainedSimpleField } from '../contained/contained-simple-field'
import { ContainedSetType } from '../dict-primitive'
import { CompilerType } from './compiler-type'
import { Dictionary } from '../../collections/dictionary'
import { ElasticBuffer } from '../../buffer/elastic-buffer'
import { Ascii } from '../../buffer/ascii'
import * as fs from 'fs'
import * as Util from 'util'
import * as Path from 'path'
import * as _ from 'lodash'
import { dispatchFields } from '../fields-dispatch'
import { reduceSet } from '../set-reduce'

export class MsgCompiler {
  readonly queue: CompilerType[] = []
  readonly snippets: StandardSnippet
  readonly buffer: ElasticBuffer = new ElasticBuffer()
  readonly completed: Dictionary<boolean>

  constructor (public readonly definitions: FixDefinitions, public readonly settings: ICompilerSettings) {
    this.completed = new Dictionary<boolean>()
    this.snippets = new StandardSnippet(this.settings)
  }

  public async generate () {
    const types: string[] = this.settings.types || this.definitions.message.keys()
    return this.createTypes(types)
  }

  private getFileName (compilerType: CompilerType): string {
    const definition = compilerType.set
    const snake = _.snakeCase(compilerType.qualifiedName)
    const settings = this.settings
    const fileName = `${snake}.ts`
    let path: string
    if (definition.type === ContainedSetType.Msg) {
      path = `${settings.output}`
    } else {
      path = `${settings.output}/set/`
    }
    return Path.join(path, fileName)
  }

  private async createTypes (types: string[]) {
    const definitions = this.definitions
    const q = this.queue
    types.forEach((type: string) => {
      const definition = definitions.containedSet(type)
      if (!definition) {
        throw new Error(`no type ${type} defined`)
      }
      q.unshift(new CompilerType(this.definitions, definition, definition.name))
    })
    await this.work()
  }

  private async work () {
    const q = this.queue
    const writeFile = Util.promisify(fs.writeFile)
    while (q.length > 0) {
      const compilerType: CompilerType = q.pop()
      const api: string = this.generateMessages(compilerType)
      const fullName = this.getFileName(compilerType)
      await writeFile(fullName, api, {
        encoding: 'utf8'}
      )
    }
  }

  private generateMessages (compilerType: CompilerType): string {
    const definition = compilerType.set
    const buffer: ElasticBuffer = this.buffer
    buffer.reset()
    const snippets = this.snippets
    const newLine = require('os').EOL
    // a single class with dependencies included
    let ptr: number = this.imports(compilerType)
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
    buffer.writeChar(Ascii.Space)
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
    completed.addUpdate(fullName, true)
  }

  private fieldSimple (simple: ContainedSimpleField): void {
    const snippets = this.snippets
    const settings = this.settings
    const buffer = this.buffer
    const newLine = require('os').EOL
    const len = buffer.writeString(snippets.simple(simple.name, Tags.toJSType(simple), simple.required, 1))
    if (settings.tags) {
      buffer.writeString(snippets.commentLine(`${simple.definition.tag}`, 50 - len))
    }
    buffer.writeString(newLine)
  }

  private fieldGroup (groupField: ContainedGroupField, compilerType: CompilerType): void {
    const newLine = require('os').EOL
    const buffer = this.buffer
    const snippets = this.snippets
    // for a group its field name is as defined in type, its type is qualified to avoid collisions
    const extended: string = compilerType.getExtended(groupField)
    buffer.writeString(snippets.group(compilerType.getFieldGroupName(groupField), extended, groupField.required, 1))
    this.enqueue(new CompilerType(this.definitions, groupField.definition, extended))
    buffer.writeString(newLine)
  }

  private fieldComponent (componentField: ContainedComponentField, compilerType: CompilerType): void {
    const newLine = require('os').EOL
    const buffer = this.buffer
    const snippets = this.snippets
    const extended: string = compilerType.getExtended(componentField)
    buffer.writeString(snippets.component(extended, componentField.required, 1))
    this.enqueue(new CompilerType(this.definitions, componentField.definition, extended))
    buffer.writeString(newLine)
  }

  private fields (compilerType: CompilerType): void {
    this.attributes(compilerType)
    dispatchFields(compilerType.set.fields, {
      group: (g: ContainedGroupField) => this.fieldGroup(g, compilerType),
      simple: (simple: ContainedSimpleField) => this.fieldSimple(simple),
      component: (c: ContainedComponentField) => this.fieldComponent(c, compilerType)
    })
  }

  private attributes (compilerType: CompilerType): void {
    const settings = this.settings
    const newLine = require('os').EOL
    const snippets = this.snippets
    const buffer = this.buffer
    compilerType.set.localAttribute.forEach((simple: ContainedSimpleField) => {
      const len = buffer.writeString(snippets.simple(simple.definition.name, Tags.toJSType(simple), simple.required, 1))
      if (settings.tags) {
        buffer.writeString(snippets.commentLine(`${simple.definition.tag}`, 50 - len))
      }
      buffer.writeString(newLine)
    })
  }

  private imports (compilerType: CompilerType): number {
    const isMsg = compilerType.set.type === ContainedSetType.Msg
    const snippets = this.snippets
    const imports: string[] = reduceSet<string[]>(compilerType.set, {
      component: (a: string[], c: ContainedComponentField) => {
        a.push(`${snippets.import(compilerType.getExtended(c), isMsg, 0)}`)
        return a
      },
      group: (a: string[], g: ContainedGroupField) => {
        a.push(`${snippets.import(compilerType.getExtended(g), isMsg, 0)}`)
        return a
      }
    }, [])

    return this.buffer.writeString(imports.join(require('os').EOL))
  }
}
