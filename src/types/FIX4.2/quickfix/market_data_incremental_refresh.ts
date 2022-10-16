import { IStandardHeader } from './set/standard_header'
import { IMarketDataIncrementalRefreshNoMDEntries } from './set/market_data_incremental_refresh_no_md_entries'
import { IStandardTrailer } from './set/standard_trailer'

export interface IMarketDataIncrementalRefresh {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. OnBehalfOfSendingTime.370
  MDReqID?: string// [2] 262 (String)
  NoMDEntries: IMarketDataIncrementalRefreshNoMDEntries[]// [3] MDUpdateAction.279, DeleteReason.285 .. EncodedText.355
  StandardTrailer: IStandardTrailer// [4] SignatureLength.93, Signature.89, CheckSum.10
}
