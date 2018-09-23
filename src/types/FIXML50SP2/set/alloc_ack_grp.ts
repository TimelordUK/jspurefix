import { IAllocRegulatoryTradeIDGrp } from './alloc_regulatory_trade_id_grp'
import { INestedParties } from './nested_parties'

export interface IAllocAckGrp {
  LegAccount?: string// 2680
  AllocAcctIDSource?: number// 661
  UnderlyingReturnRatePrice?: number// 43066
  AllocPositionEffect?: string// 1047
  LegIndividualAllocID?: string// 672
  ParentAllocID?: string// 1593
  FirmMnemonic?: string// 1729
  ClearedIndicator?: number// 1832
  IndividualAllocRejCode?: number// 776
  UnderlyingProvisionText?: string// 42170
  EncodedAllocTextLen?: string// 360
  EncodedAllocText?: Buffer// 361
  FirmAllocText?: string// 1732
  SecondaryIndividualAllocID?: string// 989
  AllocCustomerCapacity?: string// 993
  AllocType?: number// 626
  RelatedTradeQuantity?: number// 1860
  AllocCalculatedCcyQty?: number// 2515
  LegCustodialLotID?: string// 1756
  LegVersusPurchaseDate?: Date// 1757
  LegVersusPurchasePrice?: number// 1758
  LegCurrentCostBasis?: number// 1759
  AllocRegulatoryTradeIDGrp?: IAllocRegulatoryTradeIDGrp[]
  NestedParties?: INestedParties[]
}
