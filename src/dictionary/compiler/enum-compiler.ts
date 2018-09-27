import { FixDefinitions } from '../definition/fix-definitions'
import { ICompilerSettings } from './compiler-settings'
import { SimpleFieldDefinition } from '../definition/simple-field-definition'
import { StandardSnippet } from './standard-snippet'
import { TagType } from '../../buffer/tags'
import { ElasticBuffer } from '../../buffer/elastic-buffer'
import { ILooseObject } from '../../collections/collection'

import * as fs from 'fs'
import * as util from 'util'
import * as Path from 'path'
import * as _ from 'lodash'

export class EnumCompiler {
  private readonly buffer: ElasticBuffer = new ElasticBuffer()
  private readonly consolidated: ElasticBuffer = new ElasticBuffer()
  private readonly snippets: StandardSnippet

  constructor (public readonly definitions: FixDefinitions, public readonly settings: ICompilerSettings) {
    this.snippets = new StandardSnippet(settings)
  }

  /*
  enum MessageTypes {
  Logon = 'A',
  Heartbeat = '0',
  TestRequest = '1'
}
   */

  public async generate (asOneFile: string = null) {
    this.generateTagEnum('MsgTag').then(async () => {
      const toDo: SimpleFieldDefinition[] = this.toDo()
      toDo.forEach(async (field: SimpleFieldDefinition) => {
        await this.oneEnum(field, asOneFile)
      })
      if (asOneFile) {
        await this.writeAsOne(asOneFile)
      }
    }).catch((e: Error) => {
      throw e
    })
  }

  public async oneEnum (field: SimpleFieldDefinition, asOneFile: string) {
    const newLine = require('os').EOL
    const api = this.generateEnum(field)
    if (!asOneFile) {
      await this.writeFile(name, api).catch((e: Error) => {
        throw e
      })
    } else {
      this.consolidated.writeString(api)
      this.consolidated.writeString(newLine)
    }
  }

  public generateEnum (field: SimpleFieldDefinition): string {
    const buffer = this.buffer
    if (field == null) {
      throw new Error(`no simple field ${name} exists in definitions`)
    }
    if (!field.isEnum()) {
      throw new Error(`field ${name} is not an enum type`)
    }
    return this.create(field.name, field.description, () => {
      const newLine = require('os').EOL
      return field.enums.keys().reduce((a: number, latest: string, i: number, arr: string[]) => {
        let k = field.resolveEnum(latest)
        let v: any = latest
        switch (field.tagType) {
          case TagType.Int: {
            v = parseInt(latest, 10)
            break
          }
        }

        buffer.writeString(this.snippets.enumValue(k, v, 1))
        if (i < arr.length - 1) {
          buffer.writeString(',')
        }
        buffer.writeString(newLine)
        return 0
      }, 0)
    })
  }

  public async generateTagEnum (name: string) {
    const newLine = require('os').EOL
    const tags = this.definitions.tagToSimple
    const snippets = this.snippets
    const api = this.create(name, null, () => {
      const buffer = this.buffer
      return Object.keys(tags).reduce((a: number, latest: string, i: number, arr: string[]) => {
        const tag = parseInt(latest, 10)
        const sf = tags[tag]
        if (sf) {
          if (this.settings.comment && sf.description) {
            this.commentBlock(sf.description)
          }
          buffer.writeString(snippets.enumValue(sf.name, tag, 1))
          if (i < arr.length - 1) {
            buffer.writeString(',')
          }
          buffer.writeString(newLine)
        }
        return a
      }, 0)
    })
    await this.writeFile(name, api)
  }

  private toDo (): SimpleFieldDefinition[] {
    const done: ILooseObject = {}
    return this.definitions.simple.values().reduce((a: SimpleFieldDefinition[], latest: SimpleFieldDefinition) => {
      if (latest.isEnum() && !done[latest.name]) {
        done[latest.name] = true
        a.push(latest)
      }
      return a
    }, [])
  }

  private async writeAsOne (asOneFile: string) {
    const writer = util.promisify(fs.writeFile)
    await writer(asOneFile, this.consolidated.toString(), {
      encoding: 'utf8'
    }
    ).catch((e: Error) => {
      throw e
    })
  }

  private commentBlock (comment: string) {
    const buffer = this.buffer
    const snippets = this.snippets
    const newLine = require('os').EOL
    buffer.writeString(snippets.startBlockComment(0))
    buffer.writeString(newLine)
    buffer.writeString(snippets.commentBox(comment))
    buffer.writeString(newLine)
    buffer.writeString(snippets.endBlockComment(0))
    buffer.writeString(newLine)
  }

  private async writeFile (name: string, api: string) {
    const writer = util.promisify(fs.writeFile)
    const fullName = this.getFileName(name)
    await writer(fullName, api, {
      encoding: 'utf8'}
    ).catch((e: Error) => {
      throw e
    })
  }

  private getFileName (name: string): string {
    const snake = _.snakeCase(name)
    const settings = this.settings
    const fileName = `${snake}.ts`
    let path: string = `${settings.output}/enum/`
    return Path.join(path, fileName)
  }

  private create (name: string, description: string, populateMembers: Function): string {
    const newLine = require('os').EOL
    const buffer = this.buffer
    buffer.reset()
    const snippets = this.snippets

    if (this.settings.comment && description) {
      this.commentBlock(description)
    }
    buffer.writeString(snippets.enum(name, 0))
    buffer.writeString(' ')
    buffer.writeString(snippets.startBlock(0))
    buffer.writeString(newLine)
    populateMembers()
    buffer.writeString(snippets.endBlock(0))
    buffer.writeString(newLine)
    return buffer.toString()
  }
}
