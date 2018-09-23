import * as path from 'path'
import { ReadStream } from 'fs'
import { ISessionDescription } from '../transport/session-description'
import { JsFixConfig } from '../config/js-fix-config'
import { Ascii } from '../buffer/ascii'
import { MsgParser } from '../buffer/msg-parser'
import { FiXmlParser } from '../buffer/fixml/fixml-parser'
import { MsgView } from '../buffer/msg-view'
import { FixDefinitions } from '../dictionary/definition/fix-definitions'
import { getDefinitions } from '../util/dictionary-definitions'

export class ToViews {
  public definitions: FixDefinitions
  public readonly views: MsgView[] = []
  public batch: MsgView = null
  private readonly root: string = path.join(__dirname, '../../data')

  constructor (public readonly testFolder: string) {
  }

  public async load (file: string = 'fix_repo/fixmlschema_FIX.5.0SP2_EP228'): Promise<any> {
    const root = this.root
    const testFolder = this.testFolder
    const views = this.views
    this.definitions = await getDefinitions(path.join(root, file))
    const definitions = this.definitions
    const fs: any = require('fs')
    const fullName = path.join(root, `${testFolder}/fix.xml`)
    const readStream: ReadStream = fs.createReadStream(fullName)
    const sessionDescription: ISessionDescription = require(path.join(root, 'session/test-initiator.json'))
    const config = new JsFixConfig(null, definitions, sessionDescription, Ascii.Pipe)
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
