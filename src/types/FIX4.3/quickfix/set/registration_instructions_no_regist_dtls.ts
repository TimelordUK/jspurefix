import { INestedParties } from './nested_parties'

export interface IRegistrationInstructionsNoRegistDtls {
  RegistDetls?: string// [1] 509 (String)
  RegistEmail?: string// [2] 511 (String)
  MailingDtls?: string// [3] 474 (String)
  MailingInst?: string// [4] 482 (String)
  NestedParties?: INestedParties// [5] NoNestedPartyIDs.539, NestedPartyID.524 .. NestedPartySubID.545
  OwnerType?: number// [6] 522 (Int)
  DateOfBirth?: Date// [7] 486 (LocalDate)
  InvestorCountryOfResidence?: string// [8] 475 (String)
}
