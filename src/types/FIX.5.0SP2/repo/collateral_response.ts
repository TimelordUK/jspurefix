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
  StandardHeader: IStandardHeader
  CollRespID: string// 904
  CollAsgnID?: string// 902
  CollReqID?: string// 894
  CollAsgnReason?: number// 895
  CollAsgnTransType?: number// 903
  CollAsgnRespType: number// 905
  CollAsgnRejectReason?: number// 906
  TransactTime: Date// 60
  CollApplType?: number// 1043
  FinancialStatus?: string// 291
  ClearingBusinessDate?: Date// 715
  Parties?: IParties[]
  Account?: string// 1
  AccountType?: number// 581
  ClOrdID?: string// 11
  OrderID?: string// 37
  SecondaryOrderID?: string// 198
  SecondaryClOrdID?: string// 526
  ExecCollGrp?: IExecCollGrp[]
  TrdCollGrp?: ITrdCollGrp[]
  Instrument?: IInstrument
  FinancingDetails?: IFinancingDetails
  SettlDate?: Date// 64
  Quantity?: number// 53
  QtyType?: number// 854
  Currency?: string// 15
  InstrmtLegGrp?: IInstrmtLegGrp
  UndInstrmtCollGrp?: IUndInstrmtCollGrp[]
  MarginExcess?: number// 899
  TotalNetValue?: number// 900
  CashOutstanding?: number// 901
  TrdRegTimestamps?: ITrdRegTimestamps[]
  Side?: string// 54
  MiscFeesGrp?: IMiscFeesGrp[]
  Price?: number// 44
  PriceType?: number// 423
  AccruedInterestAmt?: number// 159
  EndAccruedInterestAmt?: number// 920
  StartCash?: number// 921
  EndCash?: number// 922
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData
  Stipulations?: IStipulations[]
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  StandardTrailer: IStandardTrailer
}
