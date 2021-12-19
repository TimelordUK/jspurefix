import { IFixMsgStore } from './fix-msg-store'
import { IJsFixConfig, IJsFixLogger } from '../config'
import { IFixMsgStoreRecord } from './fix-msg-store-record'
import { Dictionary } from '../collections'
import { MsgType } from '../types'
import { IFixMsgStoreState } from './fix-msg-store-state'

export class FixMsgMemoryStore implements IFixMsgStore {
  protected readonly logger: IJsFixLogger
  public heartbeat: boolean = true
  private sortedBySeqNum: IFixMsgStoreRecord[] = []
  private excluded: Dictionary<boolean> = new Dictionary<boolean>()
  public length: number = 0
  private sessionMessages: string[] = [
    MsgType.Logon,
    MsgType.Logout,
    MsgType.ResendRequest,
    MsgType.Heartbeat,
    MsgType.TestRequest,
    MsgType.SequenceReset
  ]

  public constructor (public readonly id: string, public readonly config: IJsFixConfig) {
    this.logger = config.logFactory.logger(`${this.id}:FixMsgMemoryStore`)
    this.setExcMsgType([])
  }

  public static search (ar: IFixMsgStoreRecord[], target?: number, isDate?: boolean): number {
    let m: number = 0
    let n: number = ar.length - 1
    while (m <= n) {
      const k: number = (n + m) >> 1
      const check: number = isDate ? ar[k].timestamp.getDate() : ar[k].seqNum
      const cmp: number = target - check
      if (cmp > 0) {
        m = k + 1
      } else if (cmp < 0) {
        n = k - 1
      } else {
        return k
      }
    }
    return -m - 1
  }

  public getMsgType (msgType: string): Promise<IFixMsgStoreRecord[]> {
    return new Promise((resolve, reject: any) => {
      const data = this.sortedBySeqNum
      if (data === null) reject(new Error('no store'))
      const required = data.filter(x => x.msgType === msgType)
      resolve(required)
    })
  }

  private getIndex (seq: number): number {
    const arr = this.sortedBySeqNum
    let index = FixMsgMemoryStore.search(arr, seq)
    if (index < 0) {
      index = -(index + 1)
    }
    return index
  }

  private bounded (fromIdx: number, toIdx: number) {
    const arr = this.sortedBySeqNum
    return fromIdx >= 0 && fromIdx <= arr.length && toIdx >= fromIdx && toIdx <= arr.length
  }

  public get (from: number): Promise<IFixMsgStoreRecord> {
    return new Promise((resolve, reject) => {
      this.getSeqNumRange(from, from).then(res => {
        if (res.length > 0) {
          const record = res[0].clone()
          resolve(record)
        } else {
          reject(new Error(`${from} not in store`))
        }
      }).catch(e => {
        reject(e)
      })
    })
  }

  public getSeqNumRange (from: number, to?: number): Promise<IFixMsgStoreRecord[]> {
    return new Promise((resolve, reject) => {
      const arr = this.sortedBySeqNum
      if (from < 0) reject(new Error(`illegal from ${from}`))
      if (to < 0) reject(new Error(`illegal to ${to}`))
      let fromIdx = this.getIndex(from)
      const toEnd = to === 0 || isNaN(to)
      let toIdx = toEnd ? arr.length - 1 : this.getIndex(to)
      if (this.bounded(fromIdx, toIdx)) {
        resolve(arr.slice(fromIdx, toIdx + 1))
      } else {
        reject(new Error(`incorrect bounds from=${from}, fromIdx=${fromIdx}, to=${to}, toIdx=${toIdx}, length=${arr.length}`))
      }
    })
  }

  private buildState (): IFixMsgStoreState {
    const arr = this.sortedBySeqNum
    return {
      firstSeq: arr.length > 0 ? arr[0].seqNum : 0,
      lastSeq: arr.length > 0 ? arr[arr.length - 1].seqNum : 0,
      id: this.id,
      length: arr.length
    } as IFixMsgStoreState
  }

  public getState (): Promise<IFixMsgStoreState> {
    return new Promise((resolve, reject) => {
      try {
        resolve(this.buildState())
      } catch (e) {
        reject(e)
      }
    })
  }

  public clear (): Promise<IFixMsgStoreState> {
    this.sortedBySeqNum = []
    return new Promise((resolve, reject) => {
      try {
        resolve(this.buildState())
      } catch (e) {
        reject(e)
      }
    })
  }

  public put (record: IFixMsgStoreRecord): Promise<IFixMsgStoreState> {
    return new Promise((resolve, reject) => {
      if (this.excluded.containsKey(record.msgType)) {
        resolve(this.buildState())
      } else {
        const arr = this.sortedBySeqNum
        const idx = FixMsgMemoryStore.search(arr, record.seqNum)
        if (idx >= 0) { // seen this before
          reject(new Error(`this seqNum ${record.seqNum} already in store`))
        }
        arr.splice(-idx, 0, record)
        this.length = arr.length
        resolve(this.buildState())
      }
    })
  }

  public setExcMsgType (exclude: string[]): void {
    this.excluded.clear()
    this.excludeRange(this.sessionMessages)
    this.excludeRange(exclude)
  }

  private excludeRange (exclude: string[]): void {
    exclude.forEach(s => {
      this.excluded.add(s, true)
    })
  }

  exists (seqNum: number): Promise<boolean> {
    return new Promise((resolve, reject) => {
      try {
        const arr = this.sortedBySeqNum
        let index = FixMsgMemoryStore.search(arr, seqNum)
        resolve(index >= 0)
      } catch (e) {
        reject(e)
      }
    })
  }
}
