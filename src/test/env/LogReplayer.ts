import { Setup } from './setup'
import { FixMsgMemoryStore, FixMsgStoreRecord, IFixMsgStore, IFixMsgStoreRecord } from '../../store'
import { AsciiView } from '../../buffer/ascii'
import { MsgTag } from '../../types'
import { MsgView } from '../../buffer'

export class ReplayResult {
  public readonly records: IFixMsgStoreRecord[]
  constructor (public readonly views: MsgView[], public readonly store: IFixMsgStore) {
    this.records = this.views.reduce((agg: IFixMsgStoreRecord[], v: AsciiView) => {
      if (v.getString(MsgTag.SenderCompID) === 'accept-comp') {
        agg.push(FixMsgStoreRecord.toMsgStoreRecord(v))
      }
      return agg
    }, new Array<IFixMsgStoreRecord>())
  }
}

export class StoreLoader {
  public readonly setup: Setup
  constructor (public readonly session: string) {
    this.setup = new Setup(this.session, null)
  }

  public async init (): Promise<void> {
    await this.setup.init()
  }

  public async replay (fixLog: string): Promise<ReplayResult> {
    const views = await this.setup.client.replayer.replayFixFile(fixLog)
    const store = new FixMsgMemoryStore('test', this.setup.clientConfig)
    const res = new ReplayResult(views, store)
    const toWrite = res.records.map(async r => await store.put(r))
    await Promise.all(toWrite)
    return res
  }
}
