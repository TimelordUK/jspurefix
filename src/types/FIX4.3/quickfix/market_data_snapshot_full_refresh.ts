import { IStandardHeader } from './set/standard_header'
import { IInstrument } from './set/instrument'
import { IMarketDataSnapshotFullRefreshNoMDEntries } from './set/market_data_snapshot_full_refresh_no_md_entries'
import { IStandardTrailer } from './set/standard_trailer'

export interface IMarketDataSnapshotFullRefresh {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  MDReqID?: string// [2] 262 (String)
  Instrument?: IInstrument// [3] Symbol.55, SymbolSfx.65 .. EncodedSecurityDesc.351
  FinancialStatus?: string// [4] 291 (String)
  CorporateAction?: string// [5] 292 (String)
  TotalVolumeTraded?: number// [6] 387 (Float)
  TotalVolumeTradedDate?: string// [7] 449 (String)
  TotalVolumeTradedTime?: Date// [8] 450 (UtcTimeOnly)
  NetChgPrevDay?: number// [9] 451 (Float)
  NoMDEntries: IMarketDataSnapshotFullRefreshNoMDEntries[]// [10] MDEntryType.269, MDEntryPx.270 .. EncodedText.355
  StandardTrailer: IStandardTrailer// [11] SignatureLength.93, Signature.89, CheckSum.10
}
