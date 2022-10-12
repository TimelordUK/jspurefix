import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IStandardTrailer } from './set/standard_trailer'

/*
**************************************************************
* The Registration Instructions Response message type may be *
* used by broker or fund manager (for CIV) in response to a  *
* Registration Instructions message submitted by an          *
* institution or retail intermediary for an order or for an  *
* allocation.                                                *
**************************************************************
*/
export interface IRegistrationInstructionsResponse {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. OnBehalfOfSendingTime.370
  ClOrdID?: string// [2] 11 (String)
  Parties?: IParties[]// [3] 
  Account?: string// [4] 1 (String)
  StandardTrailer: IStandardTrailer// [5] SignatureLength.93, Signature.89, CheckSum.10
}
