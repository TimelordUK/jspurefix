import { INestedParties } from './nested_parties'
import { ICommissionData } from './commission_data'
import { IAllocationNoAllocsNoMiscFees } from './allocation_no_allocs_no_misc_fees'

export interface IAllocationNoAllocs {
  AllocAccount?: string// [1] 79 (String)
  AllocPrice?: number// [2] 366 (Float)
  AllocQty?: number// [3] 80 (Float)
  IndividualAllocID?: string// [4] 467 (String)
  ProcessCode?: string// [5] 81 (String)
  NestedParties?: INestedParties// [6] NoNestedPartyIDs.539, NestedPartyID.524 .. NestedPartySubID.545
  NotifyBrokerOfCredit?: boolean// [7] 208 (Boolean)
  AllocHandlInst?: number// [8] 209 (Int)
  AllocText?: string// [9] 161 (String)
  EncodedAllocTextLen?: number// [10] 360 (Length)
  EncodedAllocText?: Buffer// [11] 361 (RawData)
  CommissionData?: ICommissionData// [12] Commission.12, CommType.13 .. FundRenewWaiv.497
  AllocAvgPx?: number// [13] 153 (Float)
  AllocNetMoney?: number// [14] 154 (Float)
  SettlCurrAmt?: number// [15] 119 (Float)
  SettlCurrency?: string// [16] 120 (String)
  SettlCurrFxRate?: number// [17] 155 (Float)
  SettlCurrFxRateCalc?: string// [18] 156 (String)
  AccruedInterestAmt?: number// [19] 159 (Float)
  SettlInstMode?: string// [20] 160 (String)
  NoMiscFees?: IAllocationNoAllocsNoMiscFees[]// [21] MiscFeeAmt.137, MiscFeeCurr.138, MiscFeeType.139
}
