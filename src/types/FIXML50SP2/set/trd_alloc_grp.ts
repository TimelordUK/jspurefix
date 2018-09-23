import { IAllocRegulatoryTradeIDGrp } from './alloc_regulatory_trade_id_grp'
import { INestedParties2 } from './nested_parties_2'
import { ITradeAllocAmtGrp } from './trade_alloc_amt_grp'
import { IAllocCommissionDataGrp } from './alloc_commission_data_grp'

export interface ITrdAllocGrp {
  LegAccount?: string// 2680
  AllocAcctIDSource?: number// 661
  LegAllocSettlCurrency?: string// 1367
  LegIndividualAllocID?: string// 672
  ParentAllocID?: string// 1593
  FirmMnemonic?: string// 1729
  RelatedTradeQuantity?: number// 1860
  AllocCalculatedCcyQty?: number// 2515
  LegCustodialLotID?: string// 1756
  LegVersusPurchaseDate?: Date// 1757
  LegVersusPurchasePrice?: number// 1758
  LegCurrentCostBasis?: number// 1759
  AllocCustomerCapacity?: string// 993
  UnderlyingComplexEventDeterminationMethod?: string// 2272
  SecondaryIndividualAllocID?: string// 989
  AllocClearingFeeIndicator?: string// 1136
  MDStatisticStatus?: number// 2477
  AllocationRollupInstruction?: number// 1735
  UnderlyingProvisionText?: string// 42170
  EncodedAllocTextLen?: string// 360
  EncodedAllocText?: Buffer// 361
  FirmAllocText?: string// 1732
  AllocRefRiskLimitCheckID?: string// 2392
  AllocRefRiskLimitCheckIDType?: number// 2393
  AllocRegulatoryTradeIDGrp?: IAllocRegulatoryTradeIDGrp[]
  NestedParties2?: INestedParties2[]
  TradeAllocAmtGrp?: ITradeAllocAmtGrp[]
  AllocCommissionDataGrp?: IAllocCommissionDataGrp[]
}
