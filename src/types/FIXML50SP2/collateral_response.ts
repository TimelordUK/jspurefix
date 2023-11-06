import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IExecCollGrp } from './set/exec_coll_grp'
import { ITrdCollGrp } from './set/trd_coll_grp'
import { IInstrument } from './set/instrument'
import { IFinancingDetails } from './set/financing_details'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { IUndInstrmtCollGrp } from './set/und_instrmt_coll_grp'
import { ICollateralAmountGrp } from './set/collateral_amount_grp'
import { ITrdRegTimestamps } from './set/trd_reg_timestamps'
import { IMiscFeesGrp } from './set/misc_fees_grp'
import { ISpreadOrBenchmarkCurveData } from './set/spread_or_benchmark_curve_data'
import { IStipulations } from './set/stipulations'

/*
******************************************************
* CollateralResponse can be found in Volume 5 of the *
*                                                    *
* specification                                      *
******************************************************
*/
export interface ICollateralResponse {
  CollRespID: string// [2] 904 (String)
  CollAsgnID?: string// [2] 902 (String)
  CollReqID?: string// [2] 894 (String)
  CollAsgnReason?: number// [2] 895 (Int)
  CollAsgnTransType?: number// [2] 903 (Int)
  CollAsgnRespType: number// [2] 905 (Int)
  OrdRejReason?: number// [2] 103 (Int)
  TransactTime: Date// [2] 60 (UtcTimestamp)
  CollApplType?: number// [2] 1043 (Int)
  FinancialStatus?: string// [2] 291 (String)
  ClearingBusinessDate?: Date// [2] 715 (LocalDate)
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
  WireReference?: string// [2] 2486 (String)
  TradeDate?: Date// [2] 75 (LocalDate)
  TransactionID?: string// [2] 2485 (String)
  FirmTransactionID?: string// [2] 2484 (String)
  CollateralRequestLinkID?: string// [2] 2517 (String)
  TotNumCollateralRequests?: number// [2] 2519 (Int)
  CollateralRequestNumber?: number// [2] 2518 (Int)
  CollateralRequestInstruction?: string// [2] 2516 (String)
  Text?: string// [2] 58 (String)
  EncodedTextLen?: number// [2] 354 (Length)
  EncodedText?: Buffer// [2] 355 (RawData)
  WarningText?: string// [2] 2520 (String)
  EncodedWarningTextLen?: number// [2] 2522 (Length)
  EncodedWarningText?: Buffer// [2] 2521 (RawData)
  RejectText?: string// [2] 1328 (String)
  EncodedRejectTextLen?: number// [2] 1664 (Length)
  EncodedRejectText?: Buffer// [2] 1665 (RawData)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
  Parties?: IParties[]// [2] ID.448, Src.447 .. Qual.2376
  ExecCollGrp?: IExecCollGrp[]// [3] ExecID.17
  TrdCollGrp?: ITrdCollGrp[]// [4] RptID.571, TrdRptID2.818
  Instrument?: IInstrument// [5] Sym.55, Sfx.65 .. ExchLookAlike.2603
  FinancingDetails?: IFinancingDetails// [6] AgmtDesc.913, AgmtID.914 .. MgnRatio.898
  InstrmtLegGrp?: IInstrmtLegGrp[]// [7] Sym.600, Sfx.601 .. ExchLookAlike.2607
  UndInstrmtCollGrp?: IUndInstrmtCollGrp[]// [8] Actn.944
  CollateralAmountGrp?: ICollateralAmountGrp[]// [9] Amt.1704, Ccy.1705 .. MktPx.2689
  TrdRegTimestamps?: ITrdRegTimestamps[]// [10] TS.769, Typ.770 .. InfoBrrID.1727
  MiscFeesGrp?: IMiscFeesGrp[]// [11] Amt.137, Curr.138 .. AmtDue.2217
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData// [12] Spread.218, Ccy.220 .. SecIDSrc.761
  Stipulations?: IStipulations[]// [13] Typ.233, Val.234
}
