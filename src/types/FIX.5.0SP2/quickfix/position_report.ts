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
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  ApplicationSequenceControl?: IApplicationSequenceControl// [2] ApplID.1180, ApplSeqNum.1181 .. ApplResendFlag.1352
  PosMaintRptID: string// [3] 721 (String)
  PosReqID?: string// [4] 710 (String)
  PosReqType?: number// [5] 724 (Int)
  SubscriptionRequestType?: string// [6] 263 (String)
  TotalNumPosReports?: number// [7] 727 (Int)
  PosReqResult?: number// [8] 728 (Int)
  UnsolicitedIndicator?: boolean// [9] 325 (Boolean)
  ClearingBusinessDate: Date// [10] 715 (LocalDate)
  SettlSessID?: string// [11] 716 (String)
  SettlSessSubID?: string// [12] 717 (String)
  PriceType?: number// [13] 423 (Int)
  SettlCurrency?: string// [14] 120 (String)
  MessageEventSource?: string// [15] 1011 (String)
  Parties: IParties[]// [16] PartyID.448, PartyIDSource.447 .. PartySubIDType.803
  Account?: string// [17] 1 (String)
  AcctIDSource?: number// [18] 660 (Int)
  AccountType?: number// [19] 581 (Int)
  Instrument?: IInstrument// [20] Symbol.55, SymbolSfx.65 .. ComplexEventEndTime.1496
  Currency?: string// [21] 15 (String)
  SettlPrice?: number// [22] 730 (Float)
  SettlPriceType?: number// [23] 731 (Int)
  PriorSettlPrice?: number// [24] 734 (Float)
  MatchStatus?: string// [25] 573 (String)
  InstrmtLegGrp?: IInstrmtLegGrp// [26] NoLegs.555, LegSymbol.600 .. LegFlowScheduleType.1440
  PosUndInstrmtGrp?: IPosUndInstrmtGrp[]// [27] UnderlyingSymbol.311, UnderlyingSymbolSfx.312 .. UnderlyingSettlementStatus.988
  PositionQty?: IPositionQty[]// [28] PosType.703, LongQty.704 .. NestedPartySubIDType.805
  PositionAmountData?: IPositionAmountData[]// [29] PosAmtType.707, PosAmt.708, PositionCurrency.1055
  RegistStatus?: string// [30] 506 (String)
  DeliveryDate?: Date// [31] 743 (LocalDate)
  Text?: string// [32] 58 (String)
  EncodedTextLen?: number// [33] 354 (Int)
  EncodedText?: Buffer// [34] 355 (RawData)
  StandardTrailer: IStandardTrailer// [35] SignatureLength.93, Signature.89, CheckSum.10
  ModelType?: number// [36] 1434 (Int)
  PriceDelta?: number// [37] 811 (Float)
}
