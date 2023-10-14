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
*******************************************************
* Used to respond to a Collateral Assignment message. *
*******************************************************
*/
export interface ICollateralResponse {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  CollRespID: string// [2] 904 (String)
  CollAsgnID?: string// [3] 902 (String)
  CollReqID?: string// [4] 894 (String)
  CollAsgnReason?: number// [5] 895 (Int)
  CollAsgnTransType?: number// [6] 903 (Int)
  CollAsgnRespType: number// [7] 905 (Int)
  CollAsgnRejectReason?: number// [8] 906 (Int)
  TransactTime: Date// [9] 60 (UtcTimestamp)
  CollApplType?: number// [10] 1043 (Int)
  FinancialStatus?: string// [11] 291 (String)
  ClearingBusinessDate?: Date// [12] 715 (LocalDate)
  Parties?: IParties[]// [13] PartyID.448, PartyIDSource.447 .. PartySubIDType.803
  Account?: string// [14] 1 (String)
  AccountType?: number// [15] 581 (Int)
  ClOrdID?: string// [16] 11 (String)
  OrderID?: string// [17] 37 (String)
  SecondaryOrderID?: string// [18] 198 (String)
  SecondaryClOrdID?: string// [19] 526 (String)
  ExecCollGrp?: IExecCollGrp[]// [20] ExecID.17
  TrdCollGrp?: ITrdCollGrp[]// [21] TradeReportID.571, SecondaryTradeReportID.818
  Instrument?: IInstrument// [22] Symbol.55, SymbolSfx.65 .. ComplexEventEndTime.1496
  FinancingDetails?: IFinancingDetails// [23] AgreementDesc.913, AgreementID.914 .. MarginRatio.898
  SettlDate?: Date// [24] 64 (LocalDate)
  Quantity?: number// [25] 53 (Float)
  QtyType?: number// [26] 854 (Int)
  Currency?: string// [27] 15 (String)
  InstrmtLegGrp?: IInstrmtLegGrp// [28] NoLegs.555, LegSymbol.600 .. LegFlowScheduleType.1440
  UndInstrmtCollGrp?: IUndInstrmtCollGrp[]// [29] UnderlyingSymbol.311, UnderlyingSymbolSfx.312 .. CollAction.944
  MarginExcess?: number// [30] 899 (Float)
  TotalNetValue?: number// [31] 900 (Float)
  CashOutstanding?: number// [32] 901 (Float)
  TrdRegTimestamps?: ITrdRegTimestamps[]// [33] TrdRegTimestamp.769, TrdRegTimestampType.770 .. DeskOrderHandlingInst.1035
  Side?: string// [34] 54 (String)
  MiscFeesGrp?: IMiscFeesGrp[]// [35] MiscFeeAmt.137, MiscFeeCurr.138 .. MiscFeeBasis.891
  Price?: number// [36] 44 (Float)
  PriceType?: number// [37] 423 (Int)
  AccruedInterestAmt?: number// [38] 159 (Float)
  EndAccruedInterestAmt?: number// [39] 920 (Float)
  StartCash?: number// [40] 921 (Float)
  EndCash?: number// [41] 922 (Float)
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData// [42] Spread.218, BenchmarkCurveCurrency.220 .. BenchmarkSecurityIDSource.761
  Stipulations?: IStipulations[]// [43] StipulationType.233, StipulationValue.234
  Text?: string// [44] 58 (String)
  EncodedTextLen?: number// [45] 354 (Int)
  EncodedText?: Buffer// [46] 355 (RawData)
  StandardTrailer: IStandardTrailer// [47] SignatureLength.93, Signature.89, CheckSum.10
}
