import { IStandardHeader } from './set/standard_header'
import { IApplicationSequenceControl } from './set/application_sequence_control'
import { ISettlementAmountGrp } from './set/settlement_amount_grp'
import { IMarginAmount } from './set/margin_amount'
import { IParties } from './set/parties'
import { ICollateralAmountGrp } from './set/collateral_amount_grp'
import { IPayCollectGrp } from './set/pay_collect_grp'
import { IPositionAmountData } from './set/position_amount_data'
import { IStandardTrailer } from './set/standard_trailer'

export interface IAccountSummaryReport {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  ApplicationSequenceControl?: IApplicationSequenceControl// [2] ApplID.1180, ApplSeqNum.1181 .. ApplResendFlag.1352
  AccountSummaryReportID: string// [3] 1699 (String)
  ClearingBusinessDate: Date// [4] 715 (LocalDate)
  Currency?: string// [5] 15 (String)
  TotalNetValue?: number// [6] 900 (Float)
  MarginExcess?: number// [7] 899 (Float)
  SettlSessID?: string// [8] 716 (String)
  SettlSessSubID?: string// [9] 717 (String)
  TransactTime?: Date// [10] 60 (UtcTimestamp)
  SettlementAmountGrp?: ISettlementAmountGrp// [11] NoSettlementAmounts.1700, SettlementAmount.1701 .. SettlementAmountCurrencyCodeSource.2903
  MarginAmount?: IMarginAmount// [12] NoMarginAmt.1643, MarginAmt.1645 .. MarginDirection.2851
  Parties?: IParties// [13] NoPartyIDs.453, PartyID.448 .. PartySubIDType.803
  CollateralAmountGrp?: ICollateralAmountGrp// [14] NoCollateralAmounts.1703, CurrentCollateralAmount.1704 .. UnderlyingRefID.2841
  PayCollectGrp?: IPayCollectGrp// [15] NoPayCollects.1707, PayCollectType.1708 .. PayCollectMarketID.1713
  PositionAmountData?: IPositionAmountData// [16] NoPosAmt.753, PosAmtType.707 .. PosAmtPriceType.2877
  StandardTrailer: IStandardTrailer// [17] SignatureLength.93, Signature.89, CheckSum.10
}
