import { IStandardHeader } from './set/standard_header'

/*
*******************************************************
* SecurityTypeRequest can be found in Volume 3 of the *
*                                                     *
* specification                                       *
*******************************************************
*/
export interface ISecurityTypeRequest {
  SecurityReqID: string// [2] 320 (String)
  Text?: string// [2] 58 (String)
  EncodedTextLen?: number// [2] 354 (Length)
  EncodedText?: Buffer// [2] 355 (RawData)
  MarketID?: string// [2] 1301 (String)
  MarketSegmentID?: string// [2] 1300 (String)
  TradingSessionID?: string// [2] 336 (String)
  TradingSessionSubID?: string// [2] 625 (String)
  Product?: number// [2] 460 (Int)
  SecurityType?: string// [2] 167 (String)
  SecuritySubType?: string// [2] 762 (String)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
}
