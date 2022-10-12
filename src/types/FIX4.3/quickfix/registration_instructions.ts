import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IRegistrationInstructionsNoRegistDtls } from './set/registration_instructions_no_regist_dtls'
import { IRegistrationInstructionsNoDistribInsts } from './set/registration_instructions_no_distrib_insts'
import { IStandardTrailer } from './set/standard_trailer'

export interface IRegistrationInstructions {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  RegistID: string// [2] 513 (String)
  RegistTransType: string// [3] 514 (String)
  RegistRefID: string// [4] 508 (String)
  ClOrdID?: string// [5] 11 (String)
  Parties?: IParties// [6] NoPartyIDs.453, PartyID.448 .. PartySubID.523
  Account?: string// [7] 1 (String)
  RegistAcctType?: string// [8] 493 (String)
  TaxAdvantageType?: number// [9] 495 (Int)
  OwnershipType?: string// [10] 517 (String)
  NoRegistDtls?: IRegistrationInstructionsNoRegistDtls[]// [11] RegistDetls.509, RegistEmail.511 .. InvestorCountryOfResidence.475
  NoDistribInsts?: IRegistrationInstructionsNoDistribInsts[]// [12] DistribPaymentMethod.477, DistribPercentage.512 .. CashDistribPayRef.501
  StandardTrailer: IStandardTrailer// [13] SignatureLength.93, Signature.89, CheckSum.10
}
