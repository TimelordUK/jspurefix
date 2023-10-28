import { IStandardHeader } from './set/standard_header'
import { IInstrumentScope } from './set/instrument_scope'
import { IStandardTrailer } from './set/standard_trailer'

export interface ISecurityMassStatusRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  SecurityStatusReqID: string// [2] 324 (String)
  InstrumentScope?: IInstrumentScope// [3] InstrumentScopeSymbol.1536, InstrumentScopeSymbolSfx.1537 .. InstrumentScopeSettlType.1557
  SubscriptionRequestType: string// [4] 263 (String)
  SecurityListID?: string// [5] 1465 (String)
  MarketID?: string// [6] 1301 (String)
  MarketSegmentID?: string// [7] 1300 (String)
  TradingSessionID?: string// [8] 336 (String)
  TradingSessionSubID?: string// [9] 625 (String)
  StandardTrailer: IStandardTrailer// [10] SignatureLength.93, Signature.89, CheckSum.10
}
