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
  RegistID: string// [2] 513 (String)
  ClearingBusinessDate?: Date// [2] 715 (LocalDate)
  RegistTransType: string// [2] 514 (String)
  RegistRefID: string// [2] 508 (String)
  ClOrdID?: string// [2] 11 (String)
  Account?: string// [2] 1 (String)
  AcctIDSource?: number// [2] 660 (Int)
  RegistAcctType?: string// [2] 493 (String)
  TaxAdvantageType?: number// [2] 495 (Int)
  OwnershipType?: string// [2] 517 (String)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
  Parties?: IParties[]// [2] ID.448, Src.447 .. Qual.2376
  RgstDtlsGrp?: IRgstDtlsGrp[]// [3] RejRsnTxt.509, Email.511 .. InvestorCtryOfResidence.475
  RgstDistInstGrp?: IRgstDistInstGrp[]// [4] DistribPmtMethod.477, DistribPctage.512 .. CshDistribAgentAcctName.502
}
