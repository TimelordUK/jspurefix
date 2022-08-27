import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IOrdAllocGrp } from './set/ord_alloc_grp'
import { ITrdRegTimestamps } from './set/trd_reg_timestamps'
import { IInstrument } from './set/instrument'
import { IInstrumentExtension } from './set/instrument_extension'
import { IFinancingDetails } from './set/financing_details'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { IYieldData } from './set/yield_data'
import { ICpctyConfGrp } from './set/cpcty_conf_grp'
import { ISpreadOrBenchmarkCurveData } from './set/spread_or_benchmark_curve_data'
import { ISettlInstructionsData } from './set/settl_instructions_data'
import { ICommissionData } from './set/commission_data'
import { IStipulations } from './set/stipulations'
import { IMiscFeesGrp } from './set/misc_fees_grp'
import { IStandardTrailer } from './set/standard_trailer'

export interface IConfirmation {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  ConfirmID: string// [2] 664 (String)
  ConfirmRefID?: string// [3] 772 (String)
  ConfirmReqID?: string// [4] 859 (String)
  ConfirmTransType: number// [5] 666 (Int)
  ConfirmType: number// [6] 773 (Int)
  CopyMsgIndicator?: boolean// [7] 797 (Boolean)
  LegalConfirm?: boolean// [8] 650 (Boolean)
  ConfirmStatus: number// [9] 665 (Int)
  Parties?: IParties// [10] NoPartyIDs.453, PartyID.448 .. PartySubIDType.803
  OrdAllocGrp?: IOrdAllocGrp// [11] NoOrders.73, ClOrdID.11 .. OrderBookingQty.800
  AllocID?: string// [12] 70 (String)
  SecondaryAllocID?: string// [13] 793 (String)
  IndividualAllocID?: string// [14] 467 (String)
  TransactTime: Date// [15] 60 (UtcTimestamp)
  TradeDate: Date// [16] 75 (LocalDate)
  TrdRegTimestamps?: ITrdRegTimestamps// [17] NoTrdRegTimestamps.768, TrdRegTimestamp.769 .. TrdRegTimestampOrigin.771
  Instrument?: IInstrument// [18] Symbol.55, SymbolSfx.65 .. InterestAccrualDate.874
  InstrumentExtension?: IInstrumentExtension// [19] DeliveryForm.668, PctAtRisk.869 .. InstrAttribValue.872
  FinancingDetails?: IFinancingDetails// [20] AgreementDesc.913, AgreementID.914 .. MarginRatio.898
  UndInstrmtGrp?: IUndInstrmtGrp// [21] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingStipValue.889
  InstrmtLegGrp?: IInstrmtLegGrp// [22] NoLegs.555, LegSymbol.600 .. LegInterestAccrualDate.956
  YieldData?: IYieldData// [23] YieldType.235, Yield.236 .. YieldRedemptionPriceType.698
  AllocQty: number// [24] 80 (Float)
  QtyType?: number// [25] 854 (Int)
  Side: string// [26] 54 (String)
  Currency?: string// [27] 15 (String)
  LastMkt?: string// [28] 30 (String)
  CpctyConfGrp?: ICpctyConfGrp// [29] NoCapacities.862, OrderCapacity.528 .. OrderCapacityQty.863
  AllocAccount: string// [30] 79 (String)
  AllocAcctIDSource?: number// [31] 661 (Int)
  AllocAccountType?: number// [32] 798 (Int)
  AvgPx: number// [33] 6 (Float)
  AvgPxPrecision?: number// [34] 74 (Int)
  PriceType?: number// [35] 423 (Int)
  AvgParPx?: number// [36] 860 (Float)
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData// [37] Spread.218, BenchmarkCurveCurrency.220 .. BenchmarkSecurityIDSource.761
  ReportedPx?: number// [38] 861 (Float)
  Text?: string// [39] 58 (String)
  EncodedTextLen?: number// [40] 354 (Length)
  EncodedText?: Buffer// [41] 355 (RawData)
  ProcessCode?: string// [42] 81 (String)
  GrossTradeAmt: number// [43] 381 (Float)
  NumDaysInterest?: number// [44] 157 (Int)
  ExDate?: Date// [45] 230 (LocalDate)
  AccruedInterestRate?: number// [46] 158 (Float)
  AccruedInterestAmt?: number// [47] 159 (Float)
  InterestAtMaturity?: number// [48] 738 (Float)
  EndAccruedInterestAmt?: number// [49] 920 (Float)
  StartCash?: number// [50] 921 (Float)
  EndCash?: number// [51] 922 (Float)
  Concession?: number// [52] 238 (Float)
  TotalTakedown?: number// [53] 237 (Float)
  NetMoney: number// [54] 118 (Float)
  MaturityNetMoney?: number// [55] 890 (Float)
  SettlCurrAmt?: number// [56] 119 (Float)
  SettlCurrency?: string// [57] 120 (String)
  SettlCurrFxRate?: number// [58] 155 (Float)
  SettlCurrFxRateCalc?: string// [59] 156 (String)
  SettlType?: string// [60] 63 (String)
  SettlDate?: Date// [61] 64 (LocalDate)
  SettlInstructionsData?: ISettlInstructionsData// [62] SettlDeliveryType.172, StandInstDbType.169 .. SettlPartySubIDType.786
  CommissionData?: ICommissionData// [63] Commission.12, CommType.13 .. FundRenewWaiv.497
  SharedCommission?: number// [64] 858 (Float)
  Stipulations?: IStipulations// [65] NoStipulations.232, StipulationType.233, StipulationValue.234
  MiscFeesGrp?: IMiscFeesGrp// [66] NoMiscFees.136, MiscFeeAmt.137 .. MiscFeeBasis.891
  StandardTrailer: IStandardTrailer// [67] SignatureLength.93, Signature.89, CheckSum.10
}
