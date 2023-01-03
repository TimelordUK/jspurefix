import * as fs from 'fs'
import * as path from 'path'
import { SAXParser } from 'sax'
import { promisify } from 'util'
import { IDictDoneCb, SAXStream } from '../../dict-primitive'
import { FixDefinitions } from '../../definition'
import { AbbreviationsParser } from './abbreviations-parser'
import { BaseParser } from './base-parser'
import { ComponentsParser } from './components-parser'
import { EnumsParser } from './enums-parser'
import { FieldsParser } from './fields-parser'
import { MessagesParser } from './messages-parser'
import { MsgContentsParser } from './msg-contents-parser'
import { Repository } from './repository'
import { FixParser } from '../../fix-parser'
import { GetJsFixLogger, IJsFixLogger } from '../../../config'
import { DataTypesParser } from './data-types-parser'
import { ISaxNode } from '../../sax-node'
import { VersionUtil } from '../../version-util'

export class RepositoryXmlParser extends FixParser {
  public readonly repository: Repository
  private readonly singlePass = promisify(RepositoryXmlParser.subscribe)
  private readonly logger: IJsFixLogger

  constructor (public readonly rootPath: string, public readonly getLogger: GetJsFixLogger) {
    super()
    this.logger = getLogger('RepositoryXmlParser')
    this.repository = new Repository(VersionUtil.resolve(this.rootPath), getLogger)
  }

  private static subscribe (instance: RepositoryXmlParser, saxStream: SAXStream, done: IDictDoneCb): void {
    let parser: BaseParser | null
    let pending: string | null
    const saxParser: SAXParser = saxStream._parser

    saxStream.on('error', (e: Error) => {
      done(e, null)
    })

    saxStream.on('closetag', (name) => {
      switch (name) {
        case 'Datatypes':
        case 'Abbreviations':
        case 'Messages':
        case 'MsgContents':
        case 'Components':
        case 'Fields':
        case 'Enums': {
          if (parser != null) {
            parser.close(saxParser.line, name)
            instance.repository.assign(name, parser.data)
            parser = null
          }
          break
        }

        case 'Datatype':
        case 'Abbreviation':
        case 'MsgContent':
        case 'Field':
        case 'Enum':
        case 'Component':
        case 'Message': {
          if (parser != null) {
            parser.close(saxParser.line, name)
          }
          break
        }

        default: {
          pending = null
          break
        }
      }
    })

    saxStream.on('text', (t: string) => {
      t = t.trim()
      if (pending) {
        parser?.value(saxParser.line, pending, t)
      }
    })

    saxStream.on('opentag', (node) => {
      const saxNode: ISaxNode = node as ISaxNode
      switch (saxNode.name) {
        case 'Datatypes': {
          parser = new DataTypesParser()
          break
        }

        case 'Fields': {
          parser = new FieldsParser()
          break
        }

        case 'Enums': {
          parser = new EnumsParser()
          break
        }

        case 'Components': {
          parser = new ComponentsParser()
          break
        }

        case 'Messages': {
          parser = new MessagesParser()
          break
        }

        case 'MsgContents': {
          parser = new MsgContentsParser()
          break
        }

        case 'Abbreviations': {
          parser = new AbbreviationsParser()
          break
        }

        case 'Datatype':
        case 'Abbreviation':
        case 'Field':
        case 'Message':
        case 'MsgContent':
        case 'Enum':
        case 'Component': {
          if (parser != null) {
            parser.open(saxParser.line, saxNode)
          }
          break
        }

        default: {
          pending = saxNode.name
        }
      }
    })

    saxStream.on('ready', () => {
      if (done) {
        parser = null
        done(undefined, instance.repository.definitions)
      }
    })
  }

  public async parse (): Promise<FixDefinitions> {
    return await new Promise<FixDefinitions>(async (resolve, reject) => {
      try {
        await this.onePass('Datatypes.xml')
        await this.onePass('Fields.xml')
        await this.onePass('Enums.xml')
        await this.onePass('Components.xml')
        await this.onePass('Messages.xml')
        await this.onePass('MsgContents.xml')
        if (this.repository.includesAbbreviations) {
          await this.onePass('Abbreviations.xml')
        }
        resolve(this.repository.definitions)
      } catch (e) {
        reject(e)
      }
    })
  }

  private async onePass (fileName: string): Promise<any> {
    const logger = this.logger
    const fullFileName = path.join(this.rootPath, fileName)
    const pass: fs.ReadStream = fs.createReadStream(fullFileName)
    logger.info(`reading ${fullFileName}`)
    const saxStream: SAXStream = require('sax').createStream(true, {})
    pass.pipe(saxStream)
    await this.singlePass(this, saxStream)
  }
}
