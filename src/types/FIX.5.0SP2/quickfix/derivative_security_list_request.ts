import { IStandardHeader } from './set/standard_header'
import { IUnderlyingInstrument } from './set/underlying_instrument'
import { IDerivativeInstrument } from './set/derivative_instrument'
import { IStandardTrailer } from './set/standard_trailer'

/*
****************************************************************
* The Derivative Security List Request message is used to      *
* return a list of securities from the counterparty that match *
* criteria provided on the request                             *
****************************************************************
*/
export interface IDerivativeSecurityListRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  SecurityReqID: string// [2] 320 (String)
  SecurityListRequestType: number// [3] 559 (Int)
  MarketID?: string// [4] 1301 (String)
  MarketSegmentID?: string// [5] 1300 (String)
  UnderlyingInstrument?: IUnderlyingInstrument// [6] UnderlyingSymbol.311, UnderlyingSymbolSfx.312 .. UnderlyingDetachmentPoint.1460
  DerivativeInstrument?: IDerivativeInstrument// [7] DerivativeSymbol.1214, DerivativeSymbolSfx.1215 .. DerivativeFlowScheduleType.1442
  SecuritySubType?: string// [8] 762 (String)
  Currency?: string// [9] 15 (String)
  Text?: string// [10] 58 (String)
  EncodedTextLen?: number// [11] 354 (Int)
  EncodedText?: Buffer// [12] 355 (RawData)
  TradingSessionID?: string// [13] 336 (String)
  TradingSessionSubID?: string// [14] 625 (String)
  SubscriptionRequestType?: string// [15] 263 (String)
  StandardTrailer: IStandardTrailer// [16] SignatureLength.93, Signature.89, CheckSum.10
}
