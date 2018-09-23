import { IAllocRegulatoryTradeIDGrp } from './alloc_regulatory_trade_id_grp'
import { INestedParties } from './nested_parties'
import { ICommissionData } from './commission_data'
import { IAllocCommissionDataGrp } from './alloc_commission_data_grp'
import { IMiscFeesGrp } from './misc_fees_grp'
import { IClrInstGrp } from './clr_inst_grp'
import { ISettlInstructionsData } from './settl_instructions_data'
import { ITradeAllocAmtGrp } from './trade_alloc_amt_grp'

export interface IAllocGrp {
  LegAccount?: string// 2680
  AllocAcctIDSource?: number// 661
  MatchStatus?: string// 573
  UnderlyingReturnRatePrice?: number// 43066
  RelatedTradeQuantity?: number// 1860
  AllocCalculatedCcyQty?: number// 2515
  LegCustodialLotID?: string// 1756
  LegVersusPurchaseDate?: Date// 1757
  LegVersusPurchasePrice?: number// 1758
  LegCurrentCostBasis?: number// 1759
  LegIndividualAllocID?: string// 672
  FirmMnemonic?: string// 1729
  ParentAllocID?: string// 1593
  ProcessCode?: string// 81
  SecondaryIndividualAllocID?: string// 989
  UnderlyingComplexEventDeterminationMethod?: string// 2272
  AllocationRollupInstruction?: number// 1735
  AllocCustomerCapacity?: string// 993
  AllocPositionEffect?: string// 1047
  AllocType?: number// 626
  NotifyBrokerOfCredit?: string// 208
  AllocHandlInst?: number// 209
  UnderlyingProvisionText?: string// 42170
  EncodedAllocTextLen?: string// 360
  EncodedAllocText?: Buffer// 361
  FirmAllocText?: string// 1732
  SideAvgPx?: number// 1852
  AllocNetMoney?: number// 154
  SettlCurrAmt?: number// 119
  AllocGrossTradeAmt?: number// 2300
  AllocSettlCurrAmt?: number// 737
  UnderlyingProvisionCashSettlCurrency?: string// 42167
  LegAllocSettlCurrency?: string// 1367
  SettlCurrFxRate?: string// 155
  SettlCurrFxRateCalc?: string// 156
  AllocAccruedInterestAmt?: number// 742
  AllocInterestAtMaturity?: number// 741
  AllocClearingFeeIndicator?: string// 1136
  AllocSettlInstType?: number// 780
  AllocRefRiskLimitCheckID?: string// 2392
  AllocRefRiskLimitCheckIDType?: number// 2393
  AllocRiskLimitCheckStatus?: number// 2483
  SecondaryTradeID?: string// 1
  OriginalSecondaryTradeID?: string// 1
  AllocRegulatoryTradeIDGrp?: IAllocRegulatoryTradeIDGrp[]
  NestedParties?: INestedParties[]
  CommissionData?: ICommissionData
  AllocCommissionDataGrp?: IAllocCommissionDataGrp[]
  MiscFeesGrp?: IMiscFeesGrp[]
  ClrInstGrp?: IClrInstGrp[]
  SettlInstructionsData?: ISettlInstructionsData
  TradeAllocAmtGrp?: ITradeAllocAmtGrp[]
}
