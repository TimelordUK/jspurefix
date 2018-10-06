import { IStandardHeader } from './set/standard_header'
import { ISettlementAmountGrp } from './set/settlement_amount_grp'
import { IMarginAmount } from './set/margin_amount'
import { IParties } from './set/parties'
import { ICollateralAmountGrp } from './set/collateral_amount_grp'
import { IPayCollectGrp } from './set/pay_collect_grp'
import { IPositionAmountData } from './set/position_amount_data'

/*
********************************************************
* AccountSummaryReport can be found in Volume 5 of the *
*                                                      *
* specification                                        *
********************************************************
*/
export interface IAccountSummaryReport {
  AccountSummaryReportID: string// 1699
  ClearingBusinessDate: Date// 715
  Currency?: string// 15
  TotalNetValue?: number// 900
  MarginExcess?: number// 899
  SettlSessID?: string// 716
  SettlSessSubID?: string// 717
  TransactTime?: Date// 60
  StandardHeader?: IStandardHeader
  SettlementAmountGrp?: ISettlementAmountGrp[]
  MarginAmount?: IMarginAmount[]
  Parties?: IParties[]
  CollateralAmountGrp?: ICollateralAmountGrp[]
  PayCollectGrp?: IPayCollectGrp[]
  PositionAmountData?: IPositionAmountData[]
}
