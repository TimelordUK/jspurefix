import { IAllocRegulatoryTradeIDGrp } from './alloc_regulatory_trade_id_grp'
import { INestedParties } from './nested_parties'
import { ICommissionData } from './commission_data'
import { IAllocCommissionDataGrp } from './alloc_commission_data_grp'
import { IMiscFeesGrp } from './misc_fees_grp'
import { IClrInstGrp } from './clr_inst_grp'
import { ISettlInstructionsData } from './settl_instructions_data'
import { ITradeAllocAmtGrp } from './trade_alloc_amt_grp'

export interface IAllocGrp {
  AllocAccount?: string// [1] 79 (String)
  AllocAcctIDSource?: number// [1] 661 (Int)
  MatchStatus?: string// [1] 573 (String)
  AllocPrice?: number// [1] 366 (Float)
  AllocQty?: number// [1] 80 (Float)
  AllocCalculatedCcyQty?: number// [1] 2515 (Float)
  CustodialLotID?: string// [1] 1752 (String)
  VersusPurchaseDate?: Date// [1] 1753 (LocalDate)
  VersusPurchasePrice?: number// [1] 1754 (Float)
  CurrentCostBasis?: number// [1] 1755 (Float)
  IndividualAllocID?: string// [1] 467 (String)
  FirmMnemonic?: string// [1] 1729 (String)
  ParentAllocID?: string// [1] 1593 (String)
  ProcessCode?: string// [1] 81 (String)
  SecondaryIndividualAllocID?: string// [1] 989 (String)
  AllocMethod?: number// [1] 1002 (Int)
  AllocationRollupInstruction?: number// [1] 1735 (Int)
  AllocCustomerCapacity?: string// [1] 993 (String)
  AllocPositionEffect?: string// [1] 1047 (String)
  IndividualAllocType?: number// [1] 992 (Int)
  NotifyBrokerOfCredit?: boolean// [1] 208 (Boolean)
  AllocHandlInst?: number// [1] 209 (Int)
  AllocText?: string// [1] 161 (String)
  EncodedAllocTextLen?: number// [1] 360 (Length)
  EncodedAllocText?: Buffer// [1] 361 (RawData)
  FirmAllocText?: string// [1] 1732 (String)
  AllocAvgPx?: number// [1] 153 (Float)
  AllocNetMoney?: number// [1] 154 (Float)
  SettlCurrAmt?: number// [1] 119 (Float)
  AllocGrossTradeAmt?: number// [1] 2300 (Float)
  AllocSettlCurrAmt?: number// [1] 737 (Float)
  SettlCurrency?: string// [1] 120 (String)
  AllocSettlCurrency?: string// [1] 736 (String)
  SettlCurrFxRate?: number// [1] 155 (Float)
  SettlCurrFxRateCalc?: string// [1] 156 (String)
  AllocAccruedInterestAmt?: number// [1] 742 (Float)
  AllocInterestAtMaturity?: number// [1] 741 (Float)
  ClearingFeeIndicator?: string// [1] 635 (String)
  AllocSettlInstType?: number// [1] 780 (Int)
  AllocRefRiskLimitCheckID?: string// [1] 2392 (String)
  AllocRefRiskLimitCheckIDType?: number// [1] 2393 (Int)
  AllocRiskLimitCheckStatus?: number// [1] 2483 (Int)
  SecondaryTradeID?: string// [1] 1040 (String)
  OriginalSecondaryTradeID?: string// [1] 60006 (String)
  AllocRegulatoryTradeIDGrp?: IAllocRegulatoryTradeIDGrp[]// [1] ID.1909, Src.1910 .. Scope.2399
  NestedParties?: INestedParties[]// [2] ID.524, Src.525 .. Qual.2384
  CommissionData?: ICommissionData// [3] Comm.12, CommTyp.13 .. FundRenewWaiv.497
  AllocCommissionDataGrp?: IAllocCommissionDataGrp[]// [4] Amt.2654, Typ.2655 .. EncDesc.2666
  MiscFeesGrp?: IMiscFeesGrp[]// [5] Amt.137, Curr.138 .. AmtDue.2217
  ClrInstGrp?: IClrInstGrp[]// [6] ClrngInstrctn.577
  SettlInstructionsData?: ISettlInstructionsData// [7] DlvryTyp.172, StandInstDbTyp.169 .. StandInstDbID.171
  TradeAllocAmtGrp?: ITradeAllocAmtGrp[]// [8] Typ.1845, Amt.1846 .. Rsn.1583
}
