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
  Instrument?: IInstrument// [15] Symbol.55, SymbolSfx.65 .. InterestAccrualDate.874
  FinancingDetails?: IFinancingDetails// [16] AgreementDesc.913, AgreementID.914 .. MarginRatio.898
  SettlDate?: Date// [17] 64 (LocalDate)
  Quantity?: number// [18] 53 (Float)
  QtyType?: number// [19] 854 (Int)
  Currency?: string// [20] 15 (String)
  InstrmtLegGrp?: IInstrmtLegGrp// [21] NoLegs.555, LegSymbol.600 .. LegInterestAccrualDate.956
  UndInstrmtCollGrp?: IUndInstrmtCollGrp// [22] NoUnderlyings.711, UnderlyingSymbol.311 .. CollAction.944
  MarginExcess?: number// [23] 899 (Float)
  TotalNetValue?: number// [24] 900 (Float)
  CashOutstanding?: number// [25] 901 (Float)
  TrdRegTimestamps?: ITrdRegTimestamps// [26] NoTrdRegTimestamps.768, TrdRegTimestamp.769 .. TrdRegTimestampOrigin.771
  Side?: string// [27] 54 (String)
  MiscFeesGrp?: IMiscFeesGrp// [28] NoMiscFees.136, MiscFeeAmt.137 .. MiscFeeBasis.891
  Price?: number// [29] 44 (Float)
  PriceType?: number// [30] 423 (Int)
  AccruedInterestAmt?: number// [31] 159 (Float)
  EndAccruedInterestAmt?: number// [32] 920 (Float)
  StartCash?: number// [33] 921 (Float)
  EndCash?: number// [34] 922 (Float)
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData// [35] Spread.218, BenchmarkCurveCurrency.220 .. BenchmarkSecurityIDSource.761
  Stipulations?: IStipulations// [36] NoStipulations.232, StipulationType.233, StipulationValue.234
  TradingSessionID?: string// [37] 336 (String)
  TradingSessionSubID?: string// [38] 625 (String)
  SettlSessID?: string// [39] 716 (String)
  SettlSessSubID?: string// [40] 717 (String)
  ClearingBusinessDate?: Date// [41] 715 (LocalDate)
  Text?: string// [42] 58 (String)
  EncodedTextLen?: number// [43] 354 (Length)
  EncodedText?: Buffer// [44] 355 (RawData)
  StandardTrailer: IStandardTrailer// [45] SignatureLength.93, Signature.89, CheckSum.10
}
