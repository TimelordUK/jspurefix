import { IAllocRegulatoryTradeIDGrp } from './alloc_regulatory_trade_id_grp'
import { INestedParties2 } from './nested_parties_2'
import { ITradeAllocAmtGrp } from './trade_alloc_amt_grp'
import { IAllocCommissionDataGrp } from './alloc_commission_data_grp'

export interface ITrdAllocGrp {
  AllocAccount?: string// 79
  AllocAcctIDSource?: number// 661
  AllocSettlCurrency?: string// 736
  IndividualAllocID?: string// 467
  ParentAllocID?: string// 1593
  FirmMnemonic?: string// 1729
  AllocQty?: number// 80
  AllocCalculatedCcyQty?: number// 2515
  CustodialLotID?: string// 1752
  VersusPurchaseDate?: Date// 1753
  VersusPurchasePrice?: number// 1754
  CurrentCostBasis?: number// 1755
  AllocCustomerCapacity?: string// 993
  AllocMethod?: number// 1002
  SecondaryIndividualAllocID?: string// 989
  AllocClearingFeeIndicator?: string// 1136
  TradeAllocStatus?: number// 1840
  AllocationRollupInstruction?: number// 1735
  AllocText?: string// 161
  EncodedAllocTextLen?: number// 360
  EncodedAllocText?: Buffer// 361
  FirmAllocText?: string// 1732
  AllocRefRiskLimitCheckID?: string// 2392
  AllocRefRiskLimitCheckIDType?: number// 2393
  AllocRegulatoryTradeIDGrp?: IAllocRegulatoryTradeIDGrp[]
  NestedParties2?: INestedParties2[]
  TradeAllocAmtGrp?: ITradeAllocAmtGrp[]
  AllocCommissionDataGrp?: IAllocCommissionDataGrp[]
}
