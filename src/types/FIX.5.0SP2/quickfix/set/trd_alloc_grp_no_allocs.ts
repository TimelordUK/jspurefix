import { IAllocRegulatoryTradeIDGrp } from './alloc_regulatory_trade_id_grp'
import { INestedParties2 } from './nested_parties_2'
import { ITradeAllocAmtGrp } from './trade_alloc_amt_grp'
import { IAllocCommissionDataGrp } from './alloc_commission_data_grp'

export interface ITrdAllocGrpNoAllocs {
  AllocAccount?: string// [1] 79 (String)
  AllocAcctIDSource?: number// [2] 661 (Int)
  AllocSettlCurrency?: string// [3] 736 (String)
  AllocSettlCurrencyCodeSource?: string// [4] 2927 (String)
  IndividualAllocID?: string// [5] 467 (String)
  ParentAllocID?: string// [6] 1593 (String)
  AllocLegRefID?: string// [7] 2727 (String)
  AllocRegulatoryTradeIDGrp?: IAllocRegulatoryTradeIDGrp// [8] NoAllocRegulatoryTradeIDs.1908, AllocRegulatoryTradeID.1909 .. AllocRegulatoryTradeIDScope.2399
  FirmMnemonic?: string// [9] 1729 (String)
  NestedParties2?: INestedParties2// [10] NoNested2PartyIDs.756, Nested2PartyID.757 .. Nested2PartySubIDType.807
  AllocHandlInst?: number// [11] 209 (Int)
  AllocQty?: number// [12] 80 (Float)
  AllocCalculatedCcyQty?: number// [13] 2515 (Float)
  CustodialLotID?: string// [14] 1752 (String)
  VersusPurchaseDate?: Date// [15] 1753 (LocalDate)
  VersusPurchasePrice?: number// [16] 1754 (Float)
  CurrentCostBasis?: number// [17] 1755 (Float)
  AllocCustomerCapacity?: string// [18] 993 (String)
  AllocMethod?: number// [19] 1002 (Int)
  SecondaryIndividualAllocID?: string// [20] 989 (String)
  AllocClearingFeeIndicator?: string// [21] 1136 (String)
  TradeAllocAmtGrp?: ITradeAllocAmtGrp// [22] NoTradeAllocAmts.1844, TradeAllocAmtType.1845 .. TradeAllocAmtReason.1850
  TradeAllocStatus?: number// [23] 1840 (Int)
  AllocationRollupInstruction?: number// [24] 1735 (Int)
  AllocText?: string// [25] 161 (String)
  EncodedAllocTextLen?: number// [26] 360 (Length)
  EncodedAllocText?: Buffer// [27] 361 (RawData)
  FirmAllocText?: string// [28] 1732 (String)
  EncodedFirmAllocTextLen?: number// [29] 1733 (Length)
  EncodedFirmAllocText?: Buffer// [30] 1734 (RawData)
  AllocRefRiskLimitCheckID?: string// [31] 2392 (String)
  AllocRefRiskLimitCheckIDType?: number// [32] 2393 (Int)
  AllocCommissionDataGrp?: IAllocCommissionDataGrp// [33] NoAllocCommissions.2653, AllocCommissionAmount.2654 .. EncodedAllocCommissionDesc.2666
}
