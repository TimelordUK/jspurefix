import { IAllocRegulatoryTradeIDGrp } from './alloc_regulatory_trade_id_grp'
import { INestedParties } from './nested_parties'
import { ICommissionData } from './commission_data'
import { IAllocCommissionDataGrp } from './alloc_commission_data_grp'
import { IMiscFeesGrp } from './misc_fees_grp'
import { IClrInstGrp } from './clr_inst_grp'
import { ISettlInstructionsData } from './settl_instructions_data'
import { ITradeAllocAmtGrp } from './trade_alloc_amt_grp'

export interface IAllocGrp {
  AllocAccount?: string// 79
  AllocAcctIDSource?: number// 661
  MatchStatus?: string// 573
  AllocPrice?: number// 366
  AllocQty?: number// 80
  AllocCalculatedCcyQty?: number// 2515
  CustodialLotID?: string// 1752
  VersusPurchaseDate?: Date// 1753
  VersusPurchasePrice?: number// 1754
  CurrentCostBasis?: number// 1755
  IndividualAllocID?: string// 467
  FirmMnemonic?: string// 1729
  ParentAllocID?: string// 1593
  ProcessCode?: string// 81
  SecondaryIndividualAllocID?: string// 989
  AllocMethod?: number// 1002
  AllocationRollupInstruction?: number// 1735
  AllocCustomerCapacity?: string// 993
  AllocPositionEffect?: string// 1047
  IndividualAllocType?: number// 992
  NotifyBrokerOfCredit?: boolean// 208
  AllocHandlInst?: number// 209
  AllocText?: string// 161
  EncodedAllocTextLen?: number// 360
  EncodedAllocText?: Buffer// 361
  FirmAllocText?: string// 1732
  AllocAvgPx?: number// 153
  AllocNetMoney?: number// 154
  SettlCurrAmt?: number// 119
  AllocGrossTradeAmt?: number// 2300
  AllocSettlCurrAmt?: number// 737
  SettlCurrency?: string// 120
  AllocSettlCurrency?: string// 736
  SettlCurrFxRate?: number// 155
  SettlCurrFxRateCalc?: string// 156
  AllocAccruedInterestAmt?: number// 742
  AllocInterestAtMaturity?: number// 741
  ClearingFeeIndicator?: string// 635
  AllocSettlInstType?: number// 780
  AllocRefRiskLimitCheckID?: string// 2392
  AllocRefRiskLimitCheckIDType?: number// 2393
  AllocRiskLimitCheckStatus?: number// 2483
  AllocRegulatoryTradeIDGrp?: IAllocRegulatoryTradeIDGrp[]
  NestedParties?: INestedParties[]
  CommissionData?: ICommissionData
  AllocCommissionDataGrp?: IAllocCommissionDataGrp[]
  MiscFeesGrp?: IMiscFeesGrp[]
  ClrInstGrp?: IClrInstGrp[]
  SettlInstructionsData?: ISettlInstructionsData
  TradeAllocAmtGrp?: ITradeAllocAmtGrp[]
}
