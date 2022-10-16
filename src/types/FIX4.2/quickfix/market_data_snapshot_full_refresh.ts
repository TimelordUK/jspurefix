import { IStandardHeader } from './set/standard_header'
import { IMarketDataSnapshotFullRefreshNoMDEntries } from './set/market_data_snapshot_full_refresh_no_md_entries'
import { IStandardTrailer } from './set/standard_trailer'

export interface IMarketDataSnapshotFullRefresh {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. OnBehalfOfSendingTime.370
  MDReqID?: string// [2] 262 (String)
  Symbol: string// [3] 55 (String)
  SymbolSfx?: string// [4] 65 (String)
  SecurityID?: string// [5] 48 (String)
  IDSource?: string// [6] 22 (String)
  SecurityType?: string// [7] 167 (String)
  MaturityMonthYear?: string// [8] 200 (String)
  MaturityDay?: string// [9] 205 (String)
  PutOrCall?: number// [10] 201 (Int)
  StrikePrice?: number// [11] 202 (Float)
  OptAttribute?: string// [12] 206 (String)
  ContractMultiplier?: number// [13] 231 (Float)
  CouponRate?: number// [14] 223 (Float)
  SecurityExchange?: string// [15] 207 (String)
  Issuer?: string// [16] 106 (String)
  EncodedIssuerLen?: number// [17] 348 (Length)
  EncodedIssuer?: Buffer// [18] 349 (RawData)
  SecurityDesc?: string// [19] 107 (String)
  EncodedSecurityDescLen?: number// [20] 350 (Length)
  EncodedSecurityDesc?: Buffer// [21] 351 (RawData)
  FinancialStatus?: string// [22] 291 (String)
  CorporateAction?: string// [23] 292 (String)
  TotalVolumeTraded?: number// [24] 387 (Float)
  NoMDEntries: IMarketDataSnapshotFullRefreshNoMDEntries[]// [25] MDEntryType.269, MDEntryPx.270 .. EncodedText.355
  StandardTrailer: IStandardTrailer// [26] SignatureLength.93, Signature.89, CheckSum.10
}
