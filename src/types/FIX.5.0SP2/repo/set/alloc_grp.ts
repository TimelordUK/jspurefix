import { INestedParties } from './nested_parties'
import { ICommissionData } from './commission_data'
import { IMiscFeesGrp } from './misc_fees_grp'
import { IClrInstGrp } from './clr_inst_grp'
import { ISettlInstructionsData } from './settl_instructions_data'

export interface IAllocGrp {
  AllocAccount?: string// 79
  AllocAcctIDSource?: number// 661
  MatchStatus?: string// 573
  AllocPrice?: number// 366
  AllocQty?: number// 80
  IndividualAllocID?: string// 467
  ProcessCode?: string// 81
  SecondaryIndividualAllocID?: string// 989
  AllocMethod?: number// 1002
  AllocCustomerCapacity?: string// 993
  AllocPositionEffect?: string// 1047
  IndividualAllocType?: number// 992
  NestedParties?: INestedParties[]
  NotifyBrokerOfCredit?: boolean// 208
  AllocHandlInst?: number// 209
  AllocText?: string// 161
  EncodedAllocTextLen?: number// 360
  EncodedAllocText?: Buffer// 361
  CommissionData?: ICommissionData
  AllocAvgPx?: number// 153
  AllocNetMoney?: number// 154
  SettlCurrAmt?: number// 119
  AllocSettlCurrAmt?: number// 737
  SettlCurrency?: string// 120
  AllocSettlCurrency?: string// 736
  SettlCurrFxRate?: number// 155
  SettlCurrFxRateCalc?: string// 156
  AllocAccruedInterestAmt?: number// 742
  AllocInterestAtMaturity?: number// 741
  MiscFeesGrp?: IMiscFeesGrp[]
  ClrInstGrp?: IClrInstGrp[]
  ClearingFeeIndicator?: string// 635
  AllocSettlInstType?: number// 780
  SettlInstructionsData?: ISettlInstructionsData
}
