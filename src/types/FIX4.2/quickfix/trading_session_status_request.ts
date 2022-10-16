import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

export interface ITradingSessionStatusRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. OnBehalfOfSendingTime.370
  TradSesReqID: string// [2] 335 (String)
  TradingSessionID?: string// [3] 336 (String)
  TradSesMethod?: number// [4] 338 (Int)
  TradSesMode?: number// [5] 339 (Int)
  SubscriptionRequestType: string// [6] 263 (String)
  StandardTrailer: IStandardTrailer// [7] SignatureLength.93, Signature.89, CheckSum.10
}
