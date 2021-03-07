import { IFixMsgStore } from './fix-msg-store'
import { IJsFixConfig, IJsFixLogger } from '../config'
import { IFixMsgStoreRecord } from './fix-msg-store-record'
import { Dictionary } from '../collections'

export class FixMsgMemoryStore implements IFixMsgStore {
  protected readonly logger: IJsFixLogger
  public heartbeat: boolean = true
  private sortedBySeqNum: IFixMsgStoreRecord[] = []
  private sortedByDateTime: IFixMsgStoreRecord[] = []
  private excluded: Dictionary<boolean> = new Dictionary<boolean>()
  public length: number = 0

  public constructor (public readonly id: string, public readonly config: IJsFixConfig) {
    this.logger = config.logFactory.logger(`${this.id}:FixMsgMemoryStore`)
    const excludes: string[] = ['A', '5', '2', '0', '1', '4']
    this.setExcMsgType(excludes)
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

  public getDateRange (from: Date, to: Date): IFixMsgStoreRecord[] {
    return []
  }

  public getMsgType (msgType: string): IFixMsgStoreRecord[] {
    return this.sortedBySeqNum.reduce((agg: IFixMsgStoreRecord[], last) => {
      if (last.msgType === msgType) {
        agg.push(last)
      }
      return agg
    }, [])
  }

  public getSeqNum (seqNum: number): IFixMsgStoreRecord {
    const arr = this.sortedBySeqNum
    const idx = FixMsgMemoryStore.search(arr, seqNum)
    return idx >= 0 ? arr[idx] : null
  }

  public getSeqNumRange (from: number, to?: number): IFixMsgStoreRecord[] {
    if (from < 0 || to < 0) return []
    const arr = this.sortedBySeqNum
    let fromIdx = FixMsgMemoryStore.search(arr, from)
    if (fromIdx < 0) {
      fromIdx = -(fromIdx + 1)
    }
    let toIdx: number = to === 0 || isNaN(to) ? arr.length - 1 : Math.abs(FixMsgMemoryStore.search(arr, to))
    return fromIdx >= 0 && fromIdx < arr.length && toIdx >= 0 && toIdx < arr.length ? arr.slice(fromIdx, toIdx + 1) : []
  }

  private addDate (record: IFixMsgStoreRecord) {
    const arr = this.sortedByDateTime
    const idx = Math.abs(FixMsgMemoryStore.search(arr, record.timestamp.getDate(), true))
    arr.splice(idx, 0, record)
  }

  public put (record: IFixMsgStoreRecord): boolean {
    if (this.excluded.containsKey(record.msgType)) return false
    const arr = this.sortedBySeqNum
    const idx = FixMsgMemoryStore.search(arr, record.seqNum)
    if (idx >= 0) { // seen this before
      return false
    }
    arr.splice(-idx, 0, record)
    this.addDate(record)
    this.length = arr.length
    return true
  }

  public setExcMsgType (exclude: string[]): void {
    this.excluded.clear()
    exclude.forEach(s => {
      this.excluded.add(s, true)
    })
  }

  exits (seqNum: number): boolean {
    const arr = this.sortedBySeqNum
    return FixMsgMemoryStore.search(arr, seqNum) >= 0
  }
}
