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
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. OnBehalfOfSendingTime.370
  ClOrdID?: string// [2] 11 (String)
  Parties?: IParties[]// [3] 
  Account?: string// [4] 1 (String)
  NestedParties?: INestedParties[]// [5] 
  StandardTrailer: IStandardTrailer// [6] SignatureLength.93, Signature.89, CheckSum.10
}
