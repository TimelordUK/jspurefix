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

/*
******************************************************
* Used to respond to a Collateral Assignment message *
******************************************************
*/
export interface ICollateralResponse {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  CollRespID: string// [2] 904 (String)
  CollAsgnID: string// [3] 902 (String)
  CollReqID?: string// [4] 894 (String)
  CollAsgnReason: number// [5] 895 (Int)
  CollAsgnTransType?: number// [6] 903 (Int)
  CollAsgnRespType: number// [7] 905 (Int)
  CollAsgnRejectReason?: number// [8] 906 (Int)
  TransactTime: Date// [9] 60 (UtcTimestamp)
  Parties?: IParties[]// [10] PartyID.448, PartyIDSource.447 .. PartySubIDType.803
  Account?: string// [11] 1 (String)
  AccountType?: number// [12] 581 (Int)
  ClOrdID?: string// [13] 11 (String)
  OrderID?: string// [14] 37 (String)
  SecondaryOrderID?: string// [15] 198 (String)
  SecondaryClOrdID?: string// [16] 526 (String)
  ExecCollGrp?: IExecCollGrp[]// [17] ExecID.17
  TrdCollGrp?: ITrdCollGrp[]// [18] TradeReportID.571, SecondaryTradeReportID.818
  Instrument?: IInstrument// [19] Symbol.55, SymbolSfx.65 .. InterestAccrualDate.874
  FinancingDetails?: IFinancingDetails// [20] AgreementDesc.913, AgreementID.914 .. MarginRatio.898
  SettlDate?: Date// [21] 64 (LocalDate)
  Quantity?: number// [22] 53 (Float)
  QtyType?: number// [23] 854 (Int)
  Currency?: string// [24] 15 (String)
  InstrmtLegGrp?: IInstrmtLegGrp[]// [25] LegSymbol.600, LegSymbolSfx.601 .. LegInterestAccrualDate.956
  UndInstrmtCollGrp?: IUndInstrmtCollGrp[]// [26] UnderlyingSymbol.311, UnderlyingSymbolSfx.312 .. CollAction.944
  MarginExcess?: number// [27] 899 (Float)
  TotalNetValue?: number// [28] 900 (Float)
  CashOutstanding?: number// [29] 901 (Float)
  TrdRegTimestamps?: ITrdRegTimestamps[]// [30] TrdRegTimestamp.769, TrdRegTimestampType.770, TrdRegTimestampOrigin.771
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
  Text?: string// [41] 58 (String)
  EncodedTextLen?: number// [42] 354 (Int)
  EncodedText?: Buffer// [43] 355 (RawData)
  StandardTrailer: IStandardTrailer// [44] SignatureLength.93, Signature.89, CheckSum.10
}
