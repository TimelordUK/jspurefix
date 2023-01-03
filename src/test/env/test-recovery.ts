import {
  FixMsgAsciiStoreResend,
  FixMsgMemoryStore,
  FixMsgStoreRecord,
  IFixMsgStore,
  IFixMsgStoreRecord
} from '../../store'
import { MsgView } from '../../buffer'
import { IJsFixConfig } from '../../config'
import { AsciiView } from '../../buffer/ascii'
import { MsgTag } from '../../types'

export class TestRecovery {
  public readonly store: IFixMsgStore
  public readonly records: IFixMsgStoreRecord[]
  public readonly recovery: FixMsgAsciiStoreResend

  constructor (public readonly views: MsgView[], public readonly config: IJsFixConfig) {
    const id = config.description.SenderCompId

    this.store = new FixMsgMemoryStore(`test-${id}`, config)
    this.records = this.getRecords(id)
    this.recovery = new FixMsgAsciiStoreResend(this.store, config)
  }

  async populate (): Promise<void> {
    const records = this.records
    const toWrite = records.map(async r => await this.store.put(r))
    await Promise.all(toWrite)
  }

  getRecords (comp: string): IFixMsgStoreRecord[] {
    return this.views.reduce((agg: IFixMsgStoreRecord[], v: AsciiView) => {
      if (v.getString(MsgTag.SenderCompID) === comp) {
        agg.push(FixMsgStoreRecord.toMsgStoreRecord(v))
      }
      return agg
    }, [])
  }
}
