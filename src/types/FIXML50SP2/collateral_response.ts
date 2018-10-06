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
  CollRespID: string// 904
  CollAsgnID?: string// 902
  CollReqID?: string// 894
  CollAsgnReason?: number// 895
  CollAsgnTransType?: number// 903
  CollAsgnRespType: number// 905
  OrdRejReason?: number// 103
  TransactTime: Date// 60
  CollApplType?: number// 1043
  FinancialStatus?: string// 291
  ClearingBusinessDate?: Date// 715
  Account?: string// 1
  AccountType?: number// 581
  ClOrdID?: string// 11
  OrderID?: string// 37
  SecondaryOrderID?: string// 198
  SecondaryClOrdID?: string// 526
  SettlDate?: Date// 64
  Quantity?: number// 53
  QtyType?: number// 854
  Currency?: string// 15
  MarginExcess?: number// 899
  TotalNetValue?: number// 900
  CashOutstanding?: number// 901
  Side?: string// 54
  Price?: number// 44
  PriceType?: number// 423
  AccruedInterestAmt?: number// 159
  EndAccruedInterestAmt?: number// 920
  StartCash?: number// 921
  EndCash?: number// 922
  WireReference?: string// 2486
  TradeDate?: Date// 75
  TransactionID?: string// 2485
  FirmTransactionID?: string// 2484
  CollateralRequestLinkID?: string// 2517
  TotNumCollateralRequests?: number// 2519
  CollateralRequestNumber?: number// 2518
  CollateralRequestInstruction?: string// 2516
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  WarningText?: string// 2520
  EncodedWarningTextLen?: number// 2522
  EncodedWarningText?: Buffer// 2521
  RejectText?: string// 1328
  EncodedRejectTextLen?: number// 1664
  EncodedRejectText?: Buffer// 1665
  StandardHeader?: IStandardHeader
  Parties?: IParties[]
  ExecCollGrp?: IExecCollGrp[]
  TrdCollGrp?: ITrdCollGrp[]
  Instrument?: IInstrument
  FinancingDetails?: IFinancingDetails
  InstrmtLegGrp?: IInstrmtLegGrp[]
  UndInstrmtCollGrp?: IUndInstrmtCollGrp[]
  CollateralAmountGrp?: ICollateralAmountGrp[]
  TrdRegTimestamps?: ITrdRegTimestamps[]
  MiscFeesGrp?: IMiscFeesGrp[]
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData
  Stipulations?: IStipulations[]
}
