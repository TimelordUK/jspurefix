import { FixMsgAsciiStoreResend, FixMsgMemoryStore, FixMsgStoreRecord, IFixMsgStore } from '../../store'
import { MsgView } from '../../buffer'
import { IJsFixConfig } from '../../config'
import { AsciiView } from '../../buffer/ascii'
import { MsgTag } from '../../types'

export class TestRecovery {
  public readonly store: IFixMsgStore
  public readonly records: FixMsgStoreRecord[]
  public readonly recovery: FixMsgAsciiStoreResend

  constructor (public readonly views: MsgView[], public readonly config: IJsFixConfig) {
    const id = config.description.SenderCompId

    this.store = new FixMsgMemoryStore(`test-${id}`, config)
    this.records = this.getRecords(id)
    this.recovery = new FixMsgAsciiStoreResend(this.store, config)
  }

  async populate () {
    const records = this.records
    const toWrite = records.map(r => this.store.put(r))
    await Promise.all(toWrite)
  }

  getRecords (comp: string) {
    return this.views.reduce((agg: FixMsgStoreRecord[], v: AsciiView) => {
      if (v.getString(MsgTag.SenderCompID) === comp) {
        agg.push(FixMsgStoreRecord.toMsgStoreRecord(v))
      }
      return agg
    }, [])
  }
}
