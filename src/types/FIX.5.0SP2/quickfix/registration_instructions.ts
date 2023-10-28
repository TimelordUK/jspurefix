import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IRgstDtlsGrp } from './set/rgst_dtls_grp'
import { IRgstDistInstGrp } from './set/rgst_dist_inst_grp'
import { IStandardTrailer } from './set/standard_trailer'

export interface IRegistrationInstructions {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  RegistID: string// [2] 513 (String)
  ClearingBusinessDate?: Date// [3] 715 (LocalDate)
  RegistTransType: string// [4] 514 (String)
  RegistRefID: string// [5] 508 (String)
  ClOrdID?: string// [6] 11 (String)
  Parties?: IParties// [7] NoPartyIDs.453, PartyID.448 .. PartySubIDType.803
  Account?: string// [8] 1 (String)
  AcctIDSource?: number// [9] 660 (Int)
  RegistAcctType?: string// [10] 493 (String)
  TaxAdvantageType?: number// [11] 495 (Int)
  OwnershipType?: string// [12] 517 (String)
  RgstDtlsGrp?: IRgstDtlsGrp// [13] NoRegistDtls.473, RegistDtls.509 .. InvestorCountryOfResidence.475
  RgstDistInstGrp?: IRgstDistInstGrp// [14] NoDistribInsts.510, DistribPaymentMethod.477 .. CashDistribAgentAcctName.502
  StandardTrailer: IStandardTrailer// [15] SignatureLength.93, Signature.89, CheckSum.10
}
