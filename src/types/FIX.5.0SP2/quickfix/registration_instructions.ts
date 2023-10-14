import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IRgstDtlsGrp } from './set/rgst_dtls_grp'
import { IRgstDistInstGrp } from './set/rgst_dist_inst_grp'
import { IStandardTrailer } from './set/standard_trailer'

/*
****************************************************************
* The Registration Instructions message type may be used by    *
* institutions or retail intermediaries wishing to             *
* electronically submit registration information to a broker   *
* or fund manager (for CIV) for an order or for an allocation. *
****************************************************************
*/
export interface IRegistrationInstructions {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  RegistID: string// [2] 513 (String)
  RegistTransType: string// [3] 514 (String)
  RegistRefID: string// [4] 508 (String)
  ClOrdID?: string// [5] 11 (String)
  Parties?: IParties[]// [6] PartyID.448, PartyIDSource.447 .. PartySubIDType.803
  Account?: string// [7] 1 (String)
  AcctIDSource?: number// [8] 660 (Int)
  RegistAcctType?: string// [9] 493 (String)
  TaxAdvantageType?: number// [10] 495 (Int)
  OwnershipType?: string// [11] 517 (String)
  RgstDtlsGrp?: IRgstDtlsGrp[]// [12] RegistDtls.509, RegistEmail.511 .. InvestorCountryOfResidence.475
  RgstDistInstGrp?: IRgstDistInstGrp[]// [13] DistribPaymentMethod.477, DistribPercentage.512 .. CashDistribAgentAcctName.502
  StandardTrailer: IStandardTrailer// [14] SignatureLength.93, Signature.89, CheckSum.10
}
