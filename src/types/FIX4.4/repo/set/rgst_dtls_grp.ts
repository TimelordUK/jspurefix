import { INestedParties } from './nested_parties'

export interface IRgstDtlsGrp {
  RegistDtls?: string// 509
  RegistEmail?: string// 511
  MailingDtls?: string// 474
  MailingInst?: string// 482
  NestedParties?: INestedParties[]
  OwnerType?: number// 522
  DateOfBirth?: Date// 486
  InvestorCountryOfResidence?: string// 475
}
