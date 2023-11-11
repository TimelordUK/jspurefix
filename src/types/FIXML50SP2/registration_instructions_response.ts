import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'

/*
****************************************************************
* RegistrationInstructionsResponse can be found in Volume 5 of *
* the                                                          *
*                                                              *
* specification                                                *
****************************************************************
*/
export interface IRegistrationInstructionsResponse {
  RegistID: string// [2] 513 (String)
  RegistTransType: string// [2] 514 (String)
  RegistRefID: string// [2] 508 (String)
  ClOrdID?: string// [2] 11 (String)
  Account?: string// [2] 1 (String)
  AcctIDSource?: number// [2] 660 (Int)
  RegistStatus: string// [2] 506 (String)
  RegistRejReasonCode?: number// [2] 507 (Int)
  RegistRejReasonText?: string// [2] 496 (String)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
  Parties?: IParties[]// [2] ID.448, Src.447 .. Qual.2376
}
