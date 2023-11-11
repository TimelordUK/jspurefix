import { IStandardHeader } from './set/standard_header'
import { IApplIDRequestGrp } from './set/appl_id_request_grp'
import { IParties } from './set/parties'

/*
*************************************************************
* ApplicationMessageRequest can be found in Volume 1 of the *
*                                                           *
* specification                                             *
*************************************************************
*/
export interface IApplicationMessageRequest {
  ApplReqID: string// [2] 1346 (String)
  ApplReqType: number// [2] 1347 (Int)
  Text?: string// [2] 58 (String)
  EncodedTextLen?: number// [2] 354 (Length)
  EncodedText?: Buffer// [2] 355 (RawData)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
  ApplIDRequestGrp?: IApplIDRequestGrp[]// [2] RefApplID.1355, RefID.1433 .. ApplEndSeq.1183
  Parties?: IParties[]// [3] ID.448, Src.447 .. Qual.2376
}
