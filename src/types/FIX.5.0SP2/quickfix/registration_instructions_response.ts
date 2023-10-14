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
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  RegistID: string// [2] 513 (String)
  RegistTransType: string// [3] 514 (String)
  RegistRefID: string// [4] 508 (String)
  ClOrdID?: string// [5] 11 (String)
  Parties?: IParties[]// [6] PartyID.448, PartyIDSource.447 .. PartySubIDType.803
  Account?: string// [7] 1 (String)
  AcctIDSource?: number// [8] 660 (Int)
  RegistStatus: string// [9] 506 (String)
  RegistRejReasonCode?: number// [10] 507 (Int)
  RegistRejReasonText?: string// [11] 496 (String)
  StandardTrailer: IStandardTrailer// [12] SignatureLength.93, Signature.89, CheckSum.10
}
