import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

/*
**************************************************************
* The Security Type Request message is used to return a list *
* of security types available from a counterparty or market. *
**************************************************************
*/
export interface ISecurityTypeRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. OnBehalfOfSendingTime.370
  SecurityReqID: string// [2] 320 (String)
  Text?: string// [3] 58 (String)
  EncodedTextLen?: number// [4] 354 (Int)
  EncodedText?: Buffer// [5] 355 (RawData)
  TradingSessionID?: string// [6] 336 (String)
  StandardTrailer: IStandardTrailer// [7] SignatureLength.93, Signature.89, CheckSum.10
}
