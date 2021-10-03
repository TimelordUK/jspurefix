/*
 a message store that represents a single entity which can be queried for recovery
 */

import { IFixMsgStoreRecord } from './fix-msg-store-record'

export interface IFixMsgStoreState {
  readonly length: number,
  readonly firstSeq: number,
  readonly lastSeq: number
  readonly id: string
}

export interface IFixMsgStore {
  clear (): Promise<IFixMsgStoreState>
  getState (): Promise<IFixMsgStoreState>
  put (record: IFixMsgStoreRecord): Promise<IFixMsgStoreState>
  get (seq: number): Promise<IFixMsgStoreRecord>
  exists (seq: number): Promise<boolean>
  // if to = 0, then to the end of sequence
  getSeqNumRange (from: number, to?: number): Promise<IFixMsgStoreRecord[]>
  getMsgType (msgType: string): Promise<IFixMsgStoreRecord[]>
}
