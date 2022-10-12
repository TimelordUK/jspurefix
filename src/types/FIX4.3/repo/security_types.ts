import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

/*
***********************************************************
* The Security Type message is used to return a list of   *
* security types available from a counterparty or market. *
***********************************************************
*/
export interface ISecurityTypes {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. OnBehalfOfSendingTime.370
  SecurityReqID: string// [2] 320 (String)
  SecurityResponseID: string// [3] 322 (String)
  SecurityResponseType: number// [4] 323 (Int)
  SecurityType?: string// [5] 167 (String)
  Text?: string// [6] 58 (String)
  EncodedTextLen?: number// [7] 354 (Int)
  EncodedText?: Buffer// [8] 355 (RawData)
  TradingSessionID?: string// [9] 336 (String)
  SubscriptionRequestType?: string// [10] 263 (String)
  StandardTrailer: IStandardTrailer// [11] SignatureLength.93, Signature.89, CheckSum.10
}
