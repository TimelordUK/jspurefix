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
  TransferTransType: number// 2439
  RegistRefID: string// 508
  ClOrdID?: string// 11
  LegAccount?: string// 2680
  AcctIDSource?: number// 660
  RegistStatus: string// 506
  RegistRejReasonCode?: number// 507
  RegistRejReasonText?: string// 496
  StandardHeader?: IStandardHeader
  Parties?: IParties[]
}
