import { INestedParties } from './nested_parties'

export interface IRgstDtlsGrp {
  RegistDtls?: string// [1] 509 (String)
  RegistEmail?: string// [1] 511 (String)
  MailingDtls?: string// [1] 474 (String)
  MailingInst?: string// [1] 482 (String)
  OwnerType?: number// [1] 522 (Int)
  DateOfBirth?: Date// [1] 486 (LocalDate)
  InvestorCountryOfResidence?: string// [1] 475 (String)
  NestedParties?: INestedParties[]// [1] ID.524, Src.525 .. Qual.2384
}
