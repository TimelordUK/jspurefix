import { IParties } from './set/parties'

export interface IRegistrationInstructionsResponse {
  RegistID: string// 513
  RegistTransType: string// 514
  RegistRefID: string// 508
  ClOrdID?: string// 11
  Parties?: IParties
  Account?: string// 1
  AcctIDSource?: number// 660
  RegistStatus: string// 506
  RegistRejReasonCode?: number// 507
  RegistRejReasonText?: string// 496
}
