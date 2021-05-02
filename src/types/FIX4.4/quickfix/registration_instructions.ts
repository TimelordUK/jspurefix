import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IRgstDtlsGrp } from './set/rgst_dtls_grp'
import { IRgstDistInstGrp } from './set/rgst_dist_inst_grp'
import { IStandardTrailer } from './set/standard_trailer'

export interface IRegistrationInstructions {
  StandardHeader: IStandardHeader
  RegistID: string// 513
  RegistTransType: string// 514
  RegistRefID: string// 508
  ClOrdID?: string// 11
  Parties?: IParties
  Account?: string// 1
  AcctIDSource?: number// 660
  RegistAcctType?: string// 493
  TaxAdvantageType?: number// 495
  OwnershipType?: string// 517
  RgstDtlsGrp?: IRgstDtlsGrp
  RgstDistInstGrp?: IRgstDistInstGrp
  StandardTrailer: IStandardTrailer
}
