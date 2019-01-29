import { SAXOptions, SAXParser } from 'sax'
import * as stream from 'stream'
import { ILooseObject } from '../collections/collection'
import { FixDefinitions } from './definition'

export enum ContainedSetType {
    Msg,
    Group,
    Component
}

export interface ISaxNode {
  readonly name: string
  readonly attributes: ILooseObject
  readonly isSelfClosing: boolean
}

export type IDictDoneCb = (err: Error, done: FixDefinitions) => void

export declare class SAXStream extends stream.Duplex {
  public _parser: SAXParser
  constructor (strict: boolean, opt: SAXOptions);
}
