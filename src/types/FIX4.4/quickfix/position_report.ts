import { IParties } from './set/parties'
import { IInstrument } from './set/instrument'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { IPosUndInstrmtGrp } from './set/pos_und_instrmt_grp'
import { IPositionQty } from './set/position_qty'
import { IPositionAmountData } from './set/position_amount_data'

export interface IPositionReport {
  PosMaintRptID: string// 721
  PosReqID?: string// 710
  PosReqType?: number// 724
  SubscriptionRequestType?: string// 263
  TotalNumPosReports?: number// 727
  UnsolicitedIndicator?: boolean// 325
  PosReqResult: number// 728
  ClearingBusinessDate: Date// 715
  SettlSessID?: string// 716
  SettlSessSubID?: string// 717
  Parties?: IParties
  Account: string// 1
  AcctIDSource?: number// 660
  AccountType: number// 581
  Instrument?: IInstrument
  Currency?: number// 15
  SettlPrice: number// 730
  SettlPriceType: number// 731
  PriorSettlPrice: number// 734
  InstrmtLegGrp?: IInstrmtLegGrp
  PosUndInstrmtGrp?: IPosUndInstrmtGrp
  PositionQty?: IPositionQty
  PositionAmountData?: IPositionAmountData
  RegistStatus?: string// 506
  DeliveryDate?: Date// 743
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
}
