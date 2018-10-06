import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IRgstDtlsGrp } from './set/rgst_dtls_grp'
import { IRgstDistInstGrp } from './set/rgst_dist_inst_grp'

/*
************************************************************
* RegistrationInstructions can be found in Volume 5 of the *
*                                                          *
* specification                                            *
************************************************************
*/
export interface IRegistrationInstructions {
  RegistID: string// 513
  ClearingBusinessDate?: Date// 715
  RegistTransType: string// 514
  RegistRefID: string// 508
  ClOrdID?: string// 11
  Account?: string// 1
  AcctIDSource?: number// 660
  RegistAcctType?: string// 493
  TaxAdvantageType?: number// 495
  OwnershipType?: string// 517
  StandardHeader?: IStandardHeader
  Parties?: IParties[]
  RgstDtlsGrp?: IRgstDtlsGrp[]
  RgstDistInstGrp?: IRgstDistInstGrp[]
}
