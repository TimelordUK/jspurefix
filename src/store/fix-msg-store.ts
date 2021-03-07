/*
 a message store that represents a single entity which can be queried for recovery
 */

import { IFixMsgStoreRecord } from './fix-msg-store-record'

export interface IFixMsgStore {
  readonly id: string
  readonly length: number
  /*
  default to Logon , Logout , ResendRequest, HeartbeatInt, TestRequest, SequenceReset
  = ["A", "5", "2", "0", "1", "4"]
   */
  setExcMsgType (exclude: string[]): void
  put (record: IFixMsgStoreRecord): boolean
  exits (seqNum: number): boolean
  getSeqNum (seqNum: number): IFixMsgStoreRecord
  // if to = 0, then to the end of sequence
  getSeqNumRange (from: number, to?: number): IFixMsgStoreRecord[]
  getDateRange (from: Date, to: Date): IFixMsgStoreRecord[]
  getMsgType (msgType: string): IFixMsgStoreRecord[]
}
