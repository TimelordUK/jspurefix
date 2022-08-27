import { IStandardHeader } from './set/standard_header'
import { ICollInqQualGrp } from './set/coll_inq_qual_grp'
import { IParties } from './set/parties'
import { IExecCollGrp } from './set/exec_coll_grp'
import { ITrdCollGrp } from './set/trd_coll_grp'
import { IInstrument } from './set/instrument'
import { IFinancingDetails } from './set/financing_details'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { ITrdRegTimestamps } from './set/trd_reg_timestamps'
import { ISpreadOrBenchmarkCurveData } from './set/spread_or_benchmark_curve_data'
import { IStipulations } from './set/stipulations'
import { ISettlInstructionsData } from './set/settl_instructions_data'
import { IStandardTrailer } from './set/standard_trailer'

/*
*****************************************
* Used to inquire for collateral status *
*****************************************
*/
export interface ICollateralInquiry {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  CollInquiryID?: string// [2] 909 (String)
  CollInqQualGrp?: ICollInqQualGrp[]// [3] CollInquiryQualifier.896
  SubscriptionRequestType?: string// [4] 263 (String)
  ResponseTransportType?: number// [5] 725 (Int)
  ResponseDestination?: string// [6] 726 (String)
  Parties?: IParties[]// [7] PartyID.448, PartyIDSource.447 .. PartySubIDType.803
  Account?: string// [8] 1 (String)
  AccountType?: number// [9] 581 (Int)
  ClOrdID?: string// [10] 11 (String)
  OrderID?: string// [11] 37 (String)
  SecondaryOrderID?: string// [12] 198 (String)
  SecondaryClOrdID?: string// [13] 526 (String)
  ExecCollGrp?: IExecCollGrp[]// [14] ExecID.17
  TrdCollGrp?: ITrdCollGrp[]// [15] TradeReportID.571, SecondaryTradeReportID.818
  Instrument?: IInstrument// [16] Symbol.55, SymbolSfx.65 .. InterestAccrualDate.874
  FinancingDetails?: IFinancingDetails// [17] AgreementDesc.913, AgreementID.914 .. MarginRatio.898
  SettlDate?: Date// [18] 64 (LocalDate)
  Quantity?: number// [19] 53 (Float)
  QtyType?: number// [20] 854 (Int)
  Currency?: string// [21] 15 (String)
  InstrmtLegGrp?: IInstrmtLegGrp[]// [22] LegSymbol.600, LegSymbolSfx.601 .. LegInterestAccrualDate.956
  UndInstrmtGrp?: IUndInstrmtGrp[]// [23] UnderlyingSymbol.311, UnderlyingSymbolSfx.312 .. UnderlyingStipValue.889
  MarginExcess?: number// [24] 899 (Float)
  TotalNetValue?: number// [25] 900 (Float)
  CashOutstanding?: number// [26] 901 (Float)
  TrdRegTimestamps?: ITrdRegTimestamps[]// [27] TrdRegTimestamp.769, TrdRegTimestampType.770, TrdRegTimestampOrigin.771
  Side?: string// [28] 54 (String)
  Price?: number// [29] 44 (Float)
  PriceType?: number// [30] 423 (Int)
  AccruedInterestAmt?: number// [31] 159 (Float)
  EndAccruedInterestAmt?: number// [32] 920 (Float)
  StartCash?: number// [33] 921 (Float)
  EndCash?: number// [34] 922 (Float)
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData// [35] Spread.218, BenchmarkCurveCurrency.220 .. BenchmarkSecurityIDSource.761
  Stipulations?: IStipulations[]// [36] StipulationType.233, StipulationValue.234
  SettlInstructionsData?: ISettlInstructionsData// [37] SettlDeliveryType.172, StandInstDbType.169 .. SettlPartySubIDType.786
  TradingSessionID?: string// [38] 336 (String)
  TradingSessionSubID?: string// [39] 625 (String)
  SettlSessID?: string// [40] 716 (String)
  SettlSessSubID?: string// [41] 717 (String)
  ClearingBusinessDate?: Date// [42] 715 (LocalDate)
  Text?: string// [43] 58 (String)
  EncodedTextLen?: number// [44] 354 (Int)
  EncodedText?: Buffer// [45] 355 (RawData)
  StandardTrailer: IStandardTrailer// [46] SignatureLength.93, Signature.89, CheckSum.10
}
