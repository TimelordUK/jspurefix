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

/*
*****************************************************
* CollateralRequest can be found in Volume 5 of the *
*                                                   *
* specification                                     *
*****************************************************
*/
export interface ICollateralRequest {
  CollReqID: string// [2] 894 (String)
  CollAsgnReason: number// [2] 895 (Int)
  TransactTime: Date// [2] 60 (UtcTimestamp)
  ExpireTime?: Date// [2] 126 (UtcTimestamp)
  Account?: string// [2] 1 (String)
  AccountType?: number// [2] 581 (Int)
  ClOrdID?: string// [2] 11 (String)
  OrderID?: string// [2] 37 (String)
  SecondaryOrderID?: string// [2] 198 (String)
  SecondaryClOrdID?: string// [2] 526 (String)
  SettlDate?: Date// [2] 64 (LocalDate)
  Quantity?: number// [2] 53 (Float)
  QtyType?: number// [2] 854 (Int)
  Currency?: string// [2] 15 (String)
  MarginExcess?: number// [2] 899 (Float)
  TotalNetValue?: number// [2] 900 (Float)
  CashOutstanding?: number// [2] 901 (Float)
  Side?: string// [2] 54 (String)
  Price?: number// [2] 44 (Float)
  PriceType?: number// [2] 423 (Int)
  AccruedInterestAmt?: number// [2] 159 (Float)
  EndAccruedInterestAmt?: number// [2] 920 (Float)
  StartCash?: number// [2] 921 (Float)
  EndCash?: number// [2] 922 (Float)
  TradingSessionID?: string// [2] 336 (String)
  TradingSessionSubID?: string// [2] 625 (String)
  SettlSessID?: string// [2] 716 (String)
  SettlSessSubID?: string// [2] 717 (String)
  ClearingBusinessDate?: Date// [2] 715 (LocalDate)
  Text?: string// [2] 58 (String)
  EncodedTextLen?: number// [2] 354 (Length)
  EncodedText?: Buffer// [2] 355 (RawData)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
  Parties?: IParties[]// [2] ID.448, Src.447 .. Qual.2376
  ExecCollGrp?: IExecCollGrp[]// [3] ExecID.17
  TrdCollGrp?: ITrdCollGrp[]// [4] RptID.571, TrdRptID2.818
  Instrument?: IInstrument// [5] Sym.55, Sfx.65 .. ExchLookAlike.2603
  FinancingDetails?: IFinancingDetails// [6] AgmtDesc.913, AgmtID.914 .. MgnRatio.898
  InstrmtLegGrp?: IInstrmtLegGrp[]// [7] Sym.600, Sfx.601 .. ExchLookAlike.2607
  UndInstrmtCollGrp?: IUndInstrmtCollGrp[]// [8] Actn.944
  TrdRegTimestamps?: ITrdRegTimestamps[]// [9] TS.769, Typ.770 .. InfoBrrID.1727
  MiscFeesGrp?: IMiscFeesGrp[]// [10] Amt.137, Curr.138 .. AmtDue.2217
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData// [11] Spread.218, Ccy.220 .. SecIDSrc.761
  Stipulations?: IStipulations[]// [12] Typ.233, Val.234
}
