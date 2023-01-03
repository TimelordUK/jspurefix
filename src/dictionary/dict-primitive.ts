import { SAXOptions, SAXParser } from 'sax'
import * as stream from 'stream'
import { FixDefinitions } from './definition'

export type IDictDoneCb = (err?: Error, done?: FixDefinitions | null) => void

export declare class SAXStream extends stream.Duplex {
  public _parser: SAXParser
  constructor (strict: boolean, opt: SAXOptions)
}
