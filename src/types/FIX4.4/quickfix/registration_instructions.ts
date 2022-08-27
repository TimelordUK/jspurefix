import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IRgstDtlsGrp } from './set/rgst_dtls_grp'
import { IRgstDistInstGrp } from './set/rgst_dist_inst_grp'
import { IStandardTrailer } from './set/standard_trailer'

export interface IRegistrationInstructions {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  RegistID: string// [2] 513 (String)
  RegistTransType: string// [3] 514 (String)
  RegistRefID: string// [4] 508 (String)
  ClOrdID?: string// [5] 11 (String)
  Parties?: IParties// [6] NoPartyIDs.453, PartyID.448 .. PartySubIDType.803
  Account?: string// [7] 1 (String)
  AcctIDSource?: number// [8] 660 (Int)
  RegistAcctType?: string// [9] 493 (String)
  TaxAdvantageType?: number// [10] 495 (Int)
  OwnershipType?: string// [11] 517 (String)
  RgstDtlsGrp?: IRgstDtlsGrp// [12] NoRegistDtls.473, RegistDtls.509 .. InvestorCountryOfResidence.475
  RgstDistInstGrp?: IRgstDistInstGrp// [13] NoDistribInsts.510, DistribPaymentMethod.477 .. CashDistribAgentAcctName.502
  StandardTrailer: IStandardTrailer// [14] SignatureLength.93, Signature.89, CheckSum.10
}
