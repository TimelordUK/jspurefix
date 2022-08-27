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
  NestedParties?: INestedParties[]// [8] NestedPartyID.524, NestedPartyIDSource.525 .. NestedPartySubIDType.805
  NotifyBrokerOfCredit?: boolean// [9] 208 (Boolean)
  AllocHandlInst?: number// [10] 209 (Int)
  AllocText?: string// [11] 161 (String)
  EncodedAllocTextLen?: number// [12] 360 (Int)
  EncodedAllocText?: Buffer// [13] 361 (RawData)
  CommissionData?: ICommissionData// [14] Commission.12, CommType.13 .. FundRenewWaiv.497
  AllocAvgPx?: number// [15] 153 (Float)
  AllocNetMoney?: number// [16] 154 (Float)
  SettlCurrAmt?: number// [17] 119 (Float)
  AllocSettlCurrAmt?: number// [18] 737 (Float)
  SettlCurrency?: string// [19] 120 (String)
  AllocSettlCurrency?: string// [20] 736 (String)
  SettlCurrFxRate?: number// [21] 155 (Float)
  SettlCurrFxRateCalc?: string// [22] 156 (String)
  AllocAccruedInterestAmt?: number// [23] 742 (Float)
  AllocInterestAtMaturity?: number// [24] 741 (Float)
  MiscFeesGrp?: IMiscFeesGrp[]// [25] MiscFeeAmt.137, MiscFeeCurr.138 .. MiscFeeBasis.891
  ClrInstGrp?: IClrInstGrp[]// [26] ClearingInstruction.577
  AllocSettlInstType?: number// [27] 780 (Int)
  SettlInstructionsData?: ISettlInstructionsData// [28] SettlDeliveryType.172, StandInstDbType.169 .. SettlPartySubIDType.786
}
