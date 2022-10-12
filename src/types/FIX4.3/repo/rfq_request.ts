import { IStandardHeader } from './set/standard_header'
import { IInstrument } from './set/instrument'
import { IStandardTrailer } from './set/standard_trailer'

/*
*************************************************************
* In tradeable and restricted tradeable quoting markets    *
* Quote Requests are issued by counterparties interested in *
* ascertaining the market for an instrument.                *
*************************************************************
*/
export interface IRFQRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. OnBehalfOfSendingTime.370
  NoRelatedSym: number// [2] 146 (Int)
  Instrument: IInstrument// [3] Symbol.55, SymbolSfx.65 .. EncodedSecurityDesc.351
  PrevClosePx?: number// [4] 140 (Float)
  QuoteRequestType?: number// [5] 303 (Int)
  TradingSessionID?: string// [6] 336 (String)
  SubscriptionRequestType?: string// [7] 263 (String)
  StandardTrailer: IStandardTrailer// [8] SignatureLength.93, Signature.89, CheckSum.10
}
