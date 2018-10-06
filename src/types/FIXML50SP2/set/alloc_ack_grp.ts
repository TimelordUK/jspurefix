import { IAllocRegulatoryTradeIDGrp } from './alloc_regulatory_trade_id_grp'
import { INestedParties } from './nested_parties'

export interface IAllocAckGrp {
  AllocAccount?: string// 79
  AllocAcctIDSource?: number// 661
  AllocPrice?: number// 366
  AllocPositionEffect?: string// 1047
  IndividualAllocID?: string// 467
  ParentAllocID?: string// 1593
  FirmMnemonic?: string// 1729
  ClearedIndicator?: number// 1832
  IndividualAllocRejCode?: number// 776
  AllocText?: string// 161
  EncodedAllocTextLen?: number// 360
  EncodedAllocText?: Buffer// 361
  FirmAllocText?: string// 1732
  SecondaryIndividualAllocID?: string// 989
  AllocCustomerCapacity?: string// 993
  IndividualAllocType?: number// 992
  AllocQty?: number// 80
  AllocCalculatedCcyQty?: number// 2515
  CustodialLotID?: string// 1752
  VersusPurchaseDate?: Date// 1753
  VersusPurchasePrice?: number// 1754
  CurrentCostBasis?: number// 1755
  AllocRegulatoryTradeIDGrp?: IAllocRegulatoryTradeIDGrp[]
  NestedParties?: INestedParties[]
}
