import * as path from 'path'
import { ReadStream } from 'fs'
import { ISessionDescription } from '../transport'
import { JsFixConfig } from '../config'
import { MsgParser, MsgView, AsciiChars, FiXmlParser } from '../buffer'
import { FixDefinitions } from '../dictionary'
import { getDefinitions } from '../util'

export class ToViews {
  public definitions: FixDefinitions
  public readonly views: MsgView[] = []
  public batch: MsgView = null
  private readonly root: string = path.join(__dirname, '../../data')

  constructor (public readonly testFolder: string) {
  }

  public async load (file: string = 'repofixml'): Promise<any> {
    const root = this.root
    const testFolder = this.testFolder
    const views = this.views
    this.definitions = await getDefinitions(file)
    const definitions = this.definitions
    const fs: any = require('fs')
    const fullName = path.join(root, `${testFolder}/fix.xml`)
    const readStream: ReadStream = fs.createReadStream(fullName)
    const sessionDescription: ISessionDescription = require(path.join(root, 'session/test-initiator.json'))
    const config = new JsFixConfig(null, definitions, sessionDescription, AsciiChars.Pipe)
    const xmlParser: MsgParser = new FiXmlParser(config, readStream)
    return new Promise((accept, reject) => {
      xmlParser.on('msg', (msgType: string, v: MsgView) => {
        views.push(v.clone())
      })
      xmlParser.on('batch', (msgType: string, v: MsgView) => {
        this.batch = v.clone()
      })
      xmlParser.on('close', () => {
        accept()
      })
      xmlParser.on('error', (e: Error) => {
        reject(e)
      })
    })
  }
}
