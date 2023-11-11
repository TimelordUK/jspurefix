import { IAllocRegulatoryTradeIDGrp } from './alloc_regulatory_trade_id_grp'
import { INestedParties } from './nested_parties'
import { ICommissionData } from './commission_data'
import { IAllocCommissionDataGrp } from './alloc_commission_data_grp'
import { IMiscFeesGrp } from './misc_fees_grp'
import { IClrInstGrp } from './clr_inst_grp'
import { ISettlInstructionsData } from './settl_instructions_data'
import { ITradeAllocAmtGrp } from './trade_alloc_amt_grp'

export interface IAllocGrpNoAllocs {
  AllocAccount?: string// [1] 79 (String)
  AllocAcctIDSource?: number// [2] 661 (Int)
  MatchStatus?: string// [3] 573 (String)
  AllocPrice?: number// [4] 366 (Float)
  AllocQty?: number// [5] 80 (Float)
  AllocCalculatedCcyQty?: number// [6] 2515 (Float)
  CustodialLotID?: string// [7] 1752 (String)
  VersusPurchaseDate?: Date// [8] 1753 (LocalDate)
  VersusPurchasePrice?: number// [9] 1754 (Float)
  CurrentCostBasis?: number// [10] 1755 (Float)
  IndividualAllocID?: string// [11] 467 (String)
  FirmMnemonic?: string// [12] 1729 (String)
  ParentAllocID?: string// [13] 1593 (String)
  AllocLegRefID?: string// [14] 2727 (String)
  AllocRegulatoryTradeIDGrp?: IAllocRegulatoryTradeIDGrp// [15] NoAllocRegulatoryTradeIDs.1908, AllocRegulatoryTradeID.1909 .. AllocRegulatoryTradeIDScope.2399
  ProcessCode?: string// [16] 81 (String)
  SecondaryIndividualAllocID?: string// [17] 989 (String)
  AllocMethod?: number// [18] 1002 (Int)
  AllocationRollupInstruction?: number// [19] 1735 (Int)
  AllocCustomerCapacity?: string// [20] 993 (String)
  AllocPositionEffect?: string// [21] 1047 (String)
  IndividualAllocType?: number// [22] 992 (Int)
  NestedParties?: INestedParties// [23] NoNestedPartyIDs.539, NestedPartyID.524 .. NestedPartySubIDType.805
  NotifyBrokerOfCredit?: boolean// [24] 208 (Boolean)
  AllocHandlInst?: number// [25] 209 (Int)
  AllocText?: string// [26] 161 (String)
  EncodedAllocTextLen?: number// [27] 360 (Length)
  EncodedAllocText?: Buffer// [28] 361 (RawData)
  FirmAllocText?: string// [29] 1732 (String)
  EncodedFirmAllocTextLen?: number// [30] 1733 (Length)
  EncodedFirmAllocText?: Buffer// [31] 1734 (RawData)
  CommissionData?: ICommissionData// [32] Commission.12, CommType.13 .. FundRenewWaiv.497
  AllocCommissionDataGrp?: IAllocCommissionDataGrp// [33] NoAllocCommissions.2653, AllocCommissionAmount.2654 .. EncodedAllocCommissionDesc.2666
  AllocAvgPx?: number// [34] 153 (Float)
  AllocNetMoney?: number// [35] 154 (Float)
  SettlCurrAmt?: number// [36] 119 (Float)
  AllocGrossTradeAmt?: number// [37] 2300 (Float)
  AllocSettlCurrAmt?: number// [38] 737 (Float)
  SettlCurrency?: string// [39] 120 (String)
  AllocSettlCurrency?: string// [40] 736 (String)
  AllocSettlCurrencyCodeSource?: string// [41] 2927 (String)
  SettlCurrFxRate?: number// [42] 155 (Float)
  SettlCurrFxRateCalc?: string// [43] 156 (String)
  AllocAccruedInterestAmt?: number// [44] 742 (Float)
  AllocInterestAtMaturity?: number// [45] 741 (Float)
  MiscFeesGrp?: IMiscFeesGrp// [46] NoMiscFees.136, MiscFeeAmt.137 .. MiscFeeDesc.2713
  ClrInstGrp?: IClrInstGrp// [47] NoClearingInstructions.576, ClearingInstruction.577
  ClearingFeeIndicator?: string// [48] 635 (String)
  AllocSettlInstType?: number// [49] 780 (Int)
  SettlInstructionsData?: ISettlInstructionsData// [50] SettlDeliveryType.172, StandInstDbType.169 .. SettlPartySubIDType.786
  AllocRefRiskLimitCheckID?: string// [51] 2392 (String)
  AllocRefRiskLimitCheckIDType?: number// [52] 2393 (Int)
  AllocRiskLimitCheckStatus?: number// [53] 2483 (Int)
  AllocGroupAmount?: number// [54] 2761 (Float)
  AllocAvgPxGroupID?: string// [55] 2770 (String)
  AllocAvgPxIndicator?: number// [56] 2769 (Int)
  TradeAllocAmtGrp?: ITradeAllocAmtGrp// [57] NoTradeAllocAmts.1844, TradeAllocAmtType.1845 .. TradeAllocAmtReason.1850
}
