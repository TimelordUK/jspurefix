import { IAllocRegulatoryTradeIDGrp } from './alloc_regulatory_trade_id_grp'
import { INestedParties } from './nested_parties'

export interface IAllocAckGrp {
  AllocAccount?: string// [1] 79 (String)
  AllocAcctIDSource?: number// [1] 661 (Int)
  AllocPrice?: number// [1] 366 (Float)
  AllocPositionEffect?: string// [1] 1047 (String)
  IndividualAllocID?: string// [1] 467 (String)
  ParentAllocID?: string// [1] 1593 (String)
  FirmMnemonic?: string// [1] 1729 (String)
  ClearedIndicator?: number// [1] 1832 (Int)
  IndividualAllocRejCode?: number// [1] 776 (Int)
  AllocText?: string// [1] 161 (String)
  EncodedAllocTextLen?: number// [1] 360 (Length)
  EncodedAllocText?: Buffer// [1] 361 (RawData)
  FirmAllocText?: string// [1] 1732 (String)
  SecondaryIndividualAllocID?: string// [1] 989 (String)
  AllocCustomerCapacity?: string// [1] 993 (String)
  IndividualAllocType?: number// [1] 992 (Int)
  AllocQty?: number// [1] 80 (Float)
  AllocCalculatedCcyQty?: number// [1] 2515 (Float)
  CustodialLotID?: string// [1] 1752 (String)
  VersusPurchaseDate?: Date// [1] 1753 (LocalDate)
  VersusPurchasePrice?: number// [1] 1754 (Float)
  CurrentCostBasis?: number// [1] 1755 (Float)
  AllocRegulatoryTradeIDGrp?: IAllocRegulatoryTradeIDGrp[]// [1] ID.1909, Src.1910 .. Scope.2399
  NestedParties?: INestedParties[]// [2] ID.524, Src.525 .. Qual.2384
}
