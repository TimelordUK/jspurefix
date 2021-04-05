import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IStandardTrailer } from './set/standard_trailer'

export interface IRegistrationInstructionsResponse {
  StandardHeader: IStandardHeader
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
  StandardTrailer: IStandardTrailer
}
