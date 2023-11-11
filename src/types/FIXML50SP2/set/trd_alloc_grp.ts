import { IAllocRegulatoryTradeIDGrp } from './alloc_regulatory_trade_id_grp'
import { INestedParties2 } from './nested_parties_2'
import { ITradeAllocAmtGrp } from './trade_alloc_amt_grp'
import { IAllocCommissionDataGrp } from './alloc_commission_data_grp'

export interface ITrdAllocGrp {
  AllocAccount?: string// [1] 79 (String)
  AllocAcctIDSource?: number// [1] 661 (Int)
  AllocSettlCurrency?: string// [1] 736 (String)
  IndividualAllocID?: string// [1] 467 (String)
  ParentAllocID?: string// [1] 1593 (String)
  FirmMnemonic?: string// [1] 1729 (String)
  AllocQty?: number// [1] 80 (Float)
  AllocCalculatedCcyQty?: number// [1] 2515 (Float)
  CustodialLotID?: string// [1] 1752 (String)
  VersusPurchaseDate?: Date// [1] 1753 (LocalDate)
  VersusPurchasePrice?: number// [1] 1754 (Float)
  CurrentCostBasis?: number// [1] 1755 (Float)
  AllocCustomerCapacity?: string// [1] 993 (String)
  AllocMethod?: number// [1] 1002 (Int)
  SecondaryIndividualAllocID?: string// [1] 989 (String)
  AllocClearingFeeIndicator?: string// [1] 1136 (String)
  TradeAllocStatus?: number// [1] 1840 (Int)
  AllocationRollupInstruction?: number// [1] 1735 (Int)
  AllocText?: string// [1] 161 (String)
  EncodedAllocTextLen?: number// [1] 360 (Length)
  EncodedAllocText?: Buffer// [1] 361 (RawData)
  FirmAllocText?: string// [1] 1732 (String)
  AllocRefRiskLimitCheckID?: string// [1] 2392 (String)
  AllocRefRiskLimitCheckIDType?: number// [1] 2393 (Int)
  AllocRegulatoryTradeIDGrp?: IAllocRegulatoryTradeIDGrp[]// [1] ID.1909, Src.1910 .. Scope.2399
  NestedParties2?: INestedParties2[]// [2] ID.757, Src.758 .. Qual.2381
  TradeAllocAmtGrp?: ITradeAllocAmtGrp[]// [3] Typ.1845, Amt.1846 .. Rsn.1583
  AllocCommissionDataGrp?: IAllocCommissionDataGrp[]// [4] Amt.2654, Typ.2655 .. EncDesc.2666
}
