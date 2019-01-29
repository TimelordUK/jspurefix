import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IStandardTrailer } from './set/standard_trailer'

/*
**************************************************************
* The Registration Instructions Response message type may be *
* used by broker or fund manager (for CIV) in response to a  *
* Registration Instructions message submitted by an          *
* institution or retail intermediary for an order or for an  *
* allocation.                                                *
**************************************************************
*/
export interface IRegistrationInstructionsResponse {
  StandardHeader: IStandardHeader
  ClOrdID?: string// 11
  Parties?: IParties[]
  Account?: string// 1
  StandardTrailer: IStandardTrailer
}
