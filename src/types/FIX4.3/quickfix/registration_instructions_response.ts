import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IStandardTrailer } from './set/standard_trailer'

export interface IRegistrationInstructionsResponse {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  RegistID: string// [2] 513 (String)
  RegistTransType: string// [3] 514 (String)
  RegistRefID: string// [4] 508 (String)
  ClOrdID?: string// [5] 11 (String)
  Parties?: IParties// [6] NoPartyIDs.453, PartyID.448 .. PartySubID.523
  Account?: string// [7] 1 (String)
  RegistStatus: string// [8] 506 (String)
  RegistRejReasonCode?: number// [9] 507 (Int)
  RegistRejReasonText?: string// [10] 496 (String)
  StandardTrailer: IStandardTrailer// [11] SignatureLength.93, Signature.89, CheckSum.10
}
