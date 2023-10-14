import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IExecCollGrp } from './set/exec_coll_grp'
import { ITrdCollGrp } from './set/trd_coll_grp'
import { IInstrument } from './set/instrument'
import { IFinancingDetails } from './set/financing_details'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { ITrdRegTimestamps } from './set/trd_reg_timestamps'
import { IMiscFeesGrp } from './set/misc_fees_grp'
import { ISpreadOrBenchmarkCurveData } from './set/spread_or_benchmark_curve_data'
import { IStipulations } from './set/stipulations'
import { ISettlInstructionsData } from './set/settl_instructions_data'
import { IStandardTrailer } from './set/standard_trailer'

/*
*********************************************************
* Used to report collateral status when responding to a *
* Collateral Inquiry message.                           *
*********************************************************
*/
export interface ICollateralReport {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  CollRptID: string// [2] 908 (String)
  CollInquiryID?: string// [3] 909 (String)
  TransactTime?: Date// [4] 60 (UtcTimestamp)
  CollApplType?: number// [5] 1043 (Int)
  FinancialStatus?: string// [6] 291 (String)
  CollStatus: number// [7] 910 (Int)
  TotNumReports?: number// [8] 911 (Int)
  LastRptRequested?: boolean// [9] 912 (Boolean)
  Parties?: IParties[]// [10] PartyID.448, PartyIDSource.447 .. PartySubIDType.803
  Account?: string// [11] 1 (String)
  AccountType?: number// [12] 581 (Int)
  ClOrdID?: string// [13] 11 (String)
  OrderID?: string// [14] 37 (String)
  SecondaryOrderID?: string// [15] 198 (String)
  SecondaryClOrdID?: string// [16] 526 (String)
  ExecCollGrp?: IExecCollGrp[]// [17] ExecID.17
  TrdCollGrp?: ITrdCollGrp[]// [18] TradeReportID.571, SecondaryTradeReportID.818
  Instrument?: IInstrument// [19] Symbol.55, SymbolSfx.65 .. ComplexEventEndTime.1496
  FinancingDetails?: IFinancingDetails// [20] AgreementDesc.913, AgreementID.914 .. MarginRatio.898
  SettlDate?: Date// [21] 64 (LocalDate)
  Quantity?: number// [22] 53 (Float)
  QtyType?: number// [23] 854 (Int)
  Currency?: string// [24] 15 (String)
  InstrmtLegGrp?: IInstrmtLegGrp// [25] NoLegs.555, LegSymbol.600 .. LegFlowScheduleType.1440
  UndInstrmtGrp?: IUndInstrmtGrp// [26] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingDetachmentPoint.1460
  MarginExcess?: number// [27] 899 (Float)
  TotalNetValue?: number// [28] 900 (Float)
  CashOutstanding?: number// [29] 901 (Float)
  TrdRegTimestamps?: ITrdRegTimestamps[]// [30] TrdRegTimestamp.769, TrdRegTimestampType.770 .. DeskOrderHandlingInst.1035
  Side?: string// [31] 54 (String)
  MiscFeesGrp?: IMiscFeesGrp[]// [32] MiscFeeAmt.137, MiscFeeCurr.138 .. MiscFeeBasis.891
  Price?: number// [33] 44 (Float)
  PriceType?: number// [34] 423 (Int)
  AccruedInterestAmt?: number// [35] 159 (Float)
  EndAccruedInterestAmt?: number// [36] 920 (Float)
  StartCash?: number// [37] 921 (Float)
  EndCash?: number// [38] 922 (Float)
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData// [39] Spread.218, BenchmarkCurveCurrency.220 .. BenchmarkSecurityIDSource.761
  Stipulations?: IStipulations[]// [40] StipulationType.233, StipulationValue.234
  SettlInstructionsData?: ISettlInstructionsData// [41] SettlDeliveryType.172, StandInstDbType.169 .. SettlPartySubIDType.786
  TradingSessionID?: string// [42] 336 (String)
  TradingSessionSubID?: string// [43] 625 (String)
  SettlSessID?: string// [44] 716 (String)
  SettlSessSubID?: string// [45] 717 (String)
  ClearingBusinessDate?: Date// [46] 715 (LocalDate)
  Text?: string// [47] 58 (String)
  EncodedTextLen?: number// [48] 354 (Int)
  EncodedText?: Buffer// [49] 355 (RawData)
  StandardTrailer: IStandardTrailer// [50] SignatureLength.93, Signature.89, CheckSum.10
}
