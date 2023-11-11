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
  AccountSummaryReportID: string// [2] 1699 (String)
  ClearingBusinessDate: Date// [2] 715 (LocalDate)
  Currency?: string// [2] 15 (String)
  TotalNetValue?: number// [2] 900 (Float)
  MarginExcess?: number// [2] 899 (Float)
  SettlSessID?: string// [2] 716 (String)
  SettlSessSubID?: string// [2] 717 (String)
  TransactTime?: Date// [2] 60 (UtcTimestamp)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
  SettlementAmountGrp?: ISettlementAmountGrp[]// [2] Amt.1701, Ccy.1702
  MarginAmount?: IMarginAmount[]// [3] Amt.1645, Typ.139 .. MktID.1715
  Parties?: IParties[]// [4] ID.448, Src.447 .. Qual.2376
  CollateralAmountGrp?: ICollateralAmountGrp[]// [5] Amt.1704, Ccy.1705 .. MktPx.2689
  PayCollectGrp?: IPayCollectGrp[]// [6] Typ.1708, Ccy.1709 .. MktID.1713
  PositionAmountData?: IPositionAmountData[]// [7] Typ.707, Amt.708 .. MktID.2100
}
