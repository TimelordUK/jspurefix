import { INestedParties } from './nested_parties'
import { ICommissionData } from './commission_data'
import { IMiscFeesGrp } from './misc_fees_grp'
import { IClrInstGrp } from './clr_inst_grp'
import { ISettlInstructionsData } from './settl_instructions_data'

export interface IAllocGrp {
  AllocAccount?: string// [1] 79 (String)
  AllocAcctIDSource?: number// [2] 661 (Int)
  MatchStatus?: string// [3] 573 (String)
  AllocPrice?: number// [4] 366 (Float)
  AllocQty?: number// [5] 80 (Float)
  IndividualAllocID?: string// [6] 467 (String)
  ProcessCode?: string// [7] 81 (String)
  SecondaryIndividualAllocID?: string// [8] 989 (String)
  AllocMethod?: number// [9] 1002 (Int)
  AllocCustomerCapacity?: string// [10] 993 (String)
  AllocPositionEffect?: string// [11] 1047 (String)
  IndividualAllocType?: number// [12] 992 (Int)
  NestedParties?: INestedParties[]// [13] NestedPartyID.524, NestedPartyIDSource.525 .. NestedPartySubIDType.805
  NotifyBrokerOfCredit?: boolean// [14] 208 (Boolean)
  AllocHandlInst?: number// [15] 209 (Int)
  AllocText?: string// [16] 161 (String)
  EncodedAllocTextLen?: number// [17] 360 (Int)
  EncodedAllocText?: Buffer// [18] 361 (RawData)
  CommissionData?: ICommissionData// [19] Commission.12, CommType.13 .. FundRenewWaiv.497
  AllocAvgPx?: number// [20] 153 (Float)
  AllocNetMoney?: number// [21] 154 (Float)
  SettlCurrAmt?: number// [22] 119 (Float)
  AllocSettlCurrAmt?: number// [23] 737 (Float)
  SettlCurrency?: string// [24] 120 (String)
  AllocSettlCurrency?: string// [25] 736 (String)
  SettlCurrFxRate?: number// [26] 155 (Float)
  SettlCurrFxRateCalc?: string// [27] 156 (String)
  AllocAccruedInterestAmt?: number// [28] 742 (Float)
  AllocInterestAtMaturity?: number// [29] 741 (Float)
  MiscFeesGrp?: IMiscFeesGrp[]// [30] MiscFeeAmt.137, MiscFeeCurr.138 .. MiscFeeBasis.891
  ClrInstGrp?: IClrInstGrp[]// [31] ClearingInstruction.577
  ClearingFeeIndicator?: string// [32] 635 (String)
  AllocSettlInstType?: number// [33] 780 (Int)
  SettlInstructionsData?: ISettlInstructionsData// [34] SettlDeliveryType.172, StandInstDbType.169 .. SettlPartySubIDType.786
}
