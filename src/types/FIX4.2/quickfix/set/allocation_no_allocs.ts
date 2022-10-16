import { IAllocationNoAllocsNoMiscFees } from './allocation_no_allocs_no_misc_fees'

export interface IAllocationNoAllocs {
  AllocAccount?: string// [1] 79 (String)
  AllocPrice?: number// [2] 366 (Float)
  AllocShares: number// [3] 80 (Float)
  ProcessCode?: string// [4] 81 (String)
  BrokerOfCredit?: string// [5] 92 (String)
  NotifyBrokerOfCredit?: boolean// [6] 208 (Boolean)
  AllocHandlInst?: number// [7] 209 (Int)
  AllocText?: string// [8] 161 (String)
  EncodedAllocTextLen?: number// [9] 360 (Length)
  EncodedAllocText?: Buffer// [10] 361 (RawData)
  ExecBroker?: string// [11] 76 (String)
  ClientID?: string// [12] 109 (String)
  Commission?: number// [13] 12 (Float)
  CommType?: string// [14] 13 (String)
  AllocAvgPx?: number// [15] 153 (Float)
  AllocNetMoney?: number// [16] 154 (Float)
  SettlCurrAmt?: number// [17] 119 (Float)
  SettlCurrency?: string// [18] 120 (String)
  SettlCurrFxRate?: number// [19] 155 (Float)
  SettlCurrFxRateCalc?: string// [20] 156 (String)
  AccruedInterestAmt?: number// [21] 159 (Float)
  SettlInstMode?: string// [22] 160 (String)
  NoMiscFees?: IAllocationNoAllocsNoMiscFees[]// [23] MiscFeeAmt.137, MiscFeeCurr.138, MiscFeeType.139
}
