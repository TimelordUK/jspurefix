import { IStandardHeader } from './set/standard_header'
import { IInstrument } from './set/instrument'
import { IStandardTrailer } from './set/standard_trailer'

/*
****************************************************************
* The Security Status Request message provides for the ability *
* to request the status of a security.                         *
****************************************************************
*/
export interface ISecurityStatusRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. OnBehalfOfSendingTime.370
  SecurityStatusReqID: string// [2] 324 (String)
  Instrument: IInstrument// [3] Symbol.55, SymbolSfx.65 .. EncodedSecurityDesc.351
  Currency?: string// [4] 15 (String)
  SubscriptionRequestType: string// [5] 263 (String)
  TradingSessionID?: string// [6] 336 (String)
  StandardTrailer: IStandardTrailer// [7] SignatureLength.93, Signature.89, CheckSum.10
}
