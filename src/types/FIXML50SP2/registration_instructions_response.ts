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
  RegistID: string// 513
  RegistTransType: string// 514
  RegistRefID: string// 508
  ClOrdID?: string// 11
  Account?: string// 1
  AcctIDSource?: number// 660
  RegistStatus: string// 506
  RegistRejReasonCode?: number// 507
  RegistRejReasonText?: string// 496
  StandardHeader?: IStandardHeader
  Parties?: IParties[]
}
