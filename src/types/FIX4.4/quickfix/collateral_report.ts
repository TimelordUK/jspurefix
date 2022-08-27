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

export interface ICollateralReport {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  CollRptID: string// [2] 908 (String)
  CollInquiryID?: string// [3] 909 (String)
  CollStatus: number// [4] 910 (Int)
  TotNumReports?: number// [5] 911 (Int)
  LastRptRequested?: boolean// [6] 912 (Boolean)
  Parties?: IParties// [7] NoPartyIDs.453, PartyID.448 .. PartySubIDType.803
  Account?: string// [8] 1 (String)
  AccountType?: number// [9] 581 (Int)
  ClOrdID?: string// [10] 11 (String)
  OrderID?: string// [11] 37 (String)
  SecondaryOrderID?: string// [12] 198 (String)
  SecondaryClOrdID?: string// [13] 526 (String)
  ExecCollGrp?: IExecCollGrp// [14] NoExecs.124, ExecID.17
  TrdCollGrp?: ITrdCollGrp// [15] NoTrades.897, TradeReportID.571, SecondaryTradeReportID.818
  Instrument?: IInstrument// [16] Symbol.55, SymbolSfx.65 .. InterestAccrualDate.874
  FinancingDetails?: IFinancingDetails// [17] AgreementDesc.913, AgreementID.914 .. MarginRatio.898
  SettlDate?: Date// [18] 64 (LocalDate)
  Quantity?: number// [19] 53 (Float)
  QtyType?: number// [20] 854 (Int)
  Currency?: string// [21] 15 (String)
  InstrmtLegGrp?: IInstrmtLegGrp// [22] NoLegs.555, LegSymbol.600 .. LegInterestAccrualDate.956
  UndInstrmtGrp?: IUndInstrmtGrp// [23] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingStipValue.889
  MarginExcess?: number// [24] 899 (Float)
  TotalNetValue?: number// [25] 900 (Float)
  CashOutstanding?: number// [26] 901 (Float)
  TrdRegTimestamps?: ITrdRegTimestamps// [27] NoTrdRegTimestamps.768, TrdRegTimestamp.769 .. TrdRegTimestampOrigin.771
  Side?: string// [28] 54 (String)
  MiscFeesGrp?: IMiscFeesGrp// [29] NoMiscFees.136, MiscFeeAmt.137 .. MiscFeeBasis.891
  Price?: number// [30] 44 (Float)
  PriceType?: number// [31] 423 (Int)
  AccruedInterestAmt?: number// [32] 159 (Float)
  EndAccruedInterestAmt?: number// [33] 920 (Float)
  StartCash?: number// [34] 921 (Float)
  EndCash?: number// [35] 922 (Float)
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData// [36] Spread.218, BenchmarkCurveCurrency.220 .. BenchmarkSecurityIDSource.761
  Stipulations?: IStipulations// [37] NoStipulations.232, StipulationType.233, StipulationValue.234
  SettlInstructionsData?: ISettlInstructionsData// [38] SettlDeliveryType.172, StandInstDbType.169 .. SettlPartySubIDType.786
  TradingSessionID?: string// [39] 336 (String)
  TradingSessionSubID?: string// [40] 625 (String)
  SettlSessID?: string// [41] 716 (String)
  SettlSessSubID?: string// [42] 717 (String)
  ClearingBusinessDate?: Date// [43] 715 (LocalDate)
  Text?: string// [44] 58 (String)
  EncodedTextLen?: number// [45] 354 (Length)
  EncodedText?: Buffer// [46] 355 (RawData)
  StandardTrailer: IStandardTrailer// [47] SignatureLength.93, Signature.89, CheckSum.10
}
