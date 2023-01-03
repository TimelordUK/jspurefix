import { FixDefinitions } from '../../definition'
import { ILooseObject } from '../../../collections/collection'
import { SAXStream } from '../../dict-primitive'
import * as fs from 'fs'
import { SAXParser } from 'sax'
import { ISaxNode } from '../../sax-node'

export abstract class XsdParser {
  public readonly data: ILooseObject[] = []
  public current: ILooseObject
  protected pending: string | null

  protected constructor (public readonly definitions: FixDefinitions) {
  }

  public async parse (file: string): Promise<FixDefinitions> {
    return await new Promise<FixDefinitions>((resolve, reject) => {
      const pass: fs.ReadStream = fs.createReadStream(file)
      const saxStream: SAXStream = require('sax').createStream(true, {})
      const saxParser: SAXParser = saxStream._parser
      saxStream.on('opentag', (node) => {
        this.open(saxParser.line, node)
      })

      saxStream.on('closetag', (name: string) => {
        this.close(saxParser.line, name)
      })

      saxStream.on('ready', () => {
        resolve(this.definitions)
      })

      saxStream.on('text', (t: string) => {
        t = t.trim()
        if (t.length > 0 && this.pending) {
          this.value(saxParser.line, this.pending, t)
        }
      })

      saxStream.on('error', (r) => {
        reject(r)
      })
      pass.pipe(saxStream)
    })
  }

  public abstract close (line: number, node: string): void
  public abstract open (line: number, node: ISaxNode): void
  public abstract value (line: number, n: string, v: string): void

  protected assign (node: ISaxNode, target?: ILooseObject): void {
    if (!target) {
      target = this.current
    }
    const keys: string[] = Object.keys(node.attributes)
    for (const k of keys) {
      target[k] = node.attributes[k]
    }
  }
}
