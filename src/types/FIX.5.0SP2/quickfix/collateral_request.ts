import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IExecCollGrp } from './set/exec_coll_grp'
import { ITrdCollGrp } from './set/trd_coll_grp'
import { IInstrument } from './set/instrument'
import { IFinancingDetails } from './set/financing_details'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { IUndInstrmtCollGrp } from './set/und_instrmt_coll_grp'
import { ITrdRegTimestamps } from './set/trd_reg_timestamps'
import { IMiscFeesGrp } from './set/misc_fees_grp'
import { ISpreadOrBenchmarkCurveData } from './set/spread_or_benchmark_curve_data'
import { IStipulations } from './set/stipulations'
import { IStandardTrailer } from './set/standard_trailer'

export interface ICollateralRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  CollReqID: string// [2] 894 (String)
  CollAsgnReason: number// [3] 895 (Int)
  TransactTime: Date// [4] 60 (UtcTimestamp)
  ExpireTime?: Date// [5] 126 (UtcTimestamp)
  Parties?: IParties// [6] NoPartyIDs.453, PartyID.448 .. PartySubIDType.803
  Account?: string// [7] 1 (String)
  AccountType?: number// [8] 581 (Int)
  ClOrdID?: string// [9] 11 (String)
  OrderID?: string// [10] 37 (String)
  SecondaryOrderID?: string// [11] 198 (String)
  SecondaryClOrdID?: string// [12] 526 (String)
  ExecCollGrp?: IExecCollGrp// [13] NoExecs.124, ExecID.17
  TrdCollGrp?: ITrdCollGrp// [14] NoTrades.897, TradeReportID.571, SecondaryTradeReportID.818
  Instrument?: IInstrument// [15] Symbol.55, SymbolSfx.65 .. ExchangeLookAlike.2603
  FinancingDetails?: IFinancingDetails// [16] AgreementDesc.913, AgreementID.914 .. MarginRatio.898
  SettlDate?: Date// [17] 64 (LocalDate)
  Quantity?: number// [18] 53 (Float)
  QtyType?: number// [19] 854 (Int)
  Currency?: string// [20] 15 (String)
  CurrencyCodeSource?: string// [21] 2897 (String)
  InstrmtLegGrp?: IInstrmtLegGrp// [22] NoLegs.555, LegSymbol.600 .. LegMarginRatio.2508
  UndInstrmtCollGrp?: IUndInstrmtCollGrp// [23] NoUnderlyings.711, UnderlyingSymbol.311 .. CollAction.944
  MarginExcess?: number// [24] 899 (Float)
  TotalNetValue?: number// [25] 900 (Float)
  CashOutstanding?: number// [26] 901 (Float)
  TrdRegTimestamps?: ITrdRegTimestamps// [27] NoTrdRegTimestamps.768, TrdRegTimestamp.769 .. NBBOSource.2834
  Side?: string// [28] 54 (String)
  MiscFeesGrp?: IMiscFeesGrp// [29] NoMiscFees.136, MiscFeeAmt.137 .. MiscFeeDesc.2713
  Price?: number// [30] 44 (Float)
  PriceType?: number// [31] 423 (Int)
  AccruedInterestAmt?: number// [32] 159 (Float)
  EndAccruedInterestAmt?: number// [33] 920 (Float)
  StartCash?: number// [34] 921 (Float)
  EndCash?: number// [35] 922 (Float)
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData// [36] Spread.218, BenchmarkCurveCurrency.220 .. BenchmarkSecurityIDSource.761
  Stipulations?: IStipulations// [37] NoStipulations.232, StipulationType.233, StipulationValue.234
  TradingSessionID?: string// [38] 336 (String)
  TradingSessionSubID?: string// [39] 625 (String)
  SettlSessID?: string// [40] 716 (String)
  SettlSessSubID?: string// [41] 717 (String)
  ClearingBusinessDate?: Date// [42] 715 (LocalDate)
  Text?: string// [43] 58 (String)
  EncodedTextLen?: number// [44] 354 (Length)
  EncodedText?: Buffer// [45] 355 (RawData)
  StandardTrailer: IStandardTrailer// [46] SignatureLength.93, Signature.89, CheckSum.10
}
