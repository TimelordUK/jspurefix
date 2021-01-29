import { IStandardHeader } from './set/standard_header'
import { IApplicationSequenceControl } from './set/application_sequence_control'
import { IParties } from './set/parties'
import { IInstrument } from './set/instrument'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { IPosUndInstrmtGrp } from './set/pos_und_instrmt_grp'
import { IPositionQty } from './set/position_qty'
import { IPositionAmountData } from './set/position_amount_data'
import { IStandardTrailer } from './set/standard_trailer'

/*
***************************************************************
* The Position Report message is returned by the holder of a  *
* position in response to a Request for Position message. The *
* purpose of the message is to report all aspects of a        *
* position and may be provided on a standing basis to report  *
* end of day positions to an owner.                           *
***************************************************************
*/
export interface IPositionReport {
  StandardHeader: IStandardHeader
  ApplicationSequenceControl?: IApplicationSequenceControl
  PosMaintRptID: string// 721
  PosReqID?: string// 710
  PosReqType?: number// 724
  SubscriptionRequestType?: string// 263
  TotalNumPosReports?: number// 727
  PosReqResult?: number// 728
  UnsolicitedIndicator?: boolean// 325
  ClearingBusinessDate: Date// 715
  SettlSessID?: string// 716
  SettlSessSubID?: string// 717
  PriceType?: number// 423
  SettlCurrency?: string// 120
  MessageEventSource?: string// 1011
  Parties: IParties[]
  Account?: string// 1
  AcctIDSource?: number// 660
  AccountType?: number// 581
  Instrument?: IInstrument
  Currency?: string// 15
  SettlPrice?: number// 730
  SettlPriceType?: number// 731
  PriorSettlPrice?: number// 734
  MatchStatus?: string// 573
  InstrmtLegGrp?: IInstrmtLegGrp
  PosUndInstrmtGrp?: IPosUndInstrmtGrp[]
  PositionQty?: IPositionQty[]
  PositionAmountData?: IPositionAmountData[]
  RegistStatus?: string// 506
  DeliveryDate?: Date// 743
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  StandardTrailer: IStandardTrailer
  ModelType?: number// 1434
  PriceDelta?: number// 811
}
