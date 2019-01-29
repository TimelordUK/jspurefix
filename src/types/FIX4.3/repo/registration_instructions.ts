import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { INestedParties } from './set/nested_parties'
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
  StandardHeader: IStandardHeader
  ClOrdID?: string// 11
  Parties?: IParties[]
  Account?: string// 1
  NestedParties?: INestedParties[]
  StandardTrailer: IStandardTrailer
}
