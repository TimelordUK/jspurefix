import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IInstrument } from './set/instrument'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { IPosUndInstrmtGrp } from './set/pos_und_instrmt_grp'
import { IPositionQty } from './set/position_qty'
import { IPositionAmountData } from './set/position_amount_data'
import { IStandardTrailer } from './set/standard_trailer'

export interface IPositionReport {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  PosMaintRptID: string// [2] 721 (String)
  PosReqID?: string// [3] 710 (String)
  PosReqType?: number// [4] 724 (Int)
  SubscriptionRequestType?: string// [5] 263 (String)
  TotalNumPosReports?: number// [6] 727 (Int)
  UnsolicitedIndicator?: boolean// [7] 325 (Boolean)
  PosReqResult: number// [8] 728 (Int)
  ClearingBusinessDate: Date// [9] 715 (LocalDate)
  SettlSessID?: string// [10] 716 (String)
  SettlSessSubID?: string// [11] 717 (String)
  Parties?: IParties// [12] NoPartyIDs.453, PartyID.448 .. PartySubIDType.803
  Account: string// [13] 1 (String)
  AcctIDSource?: number// [14] 660 (Int)
  AccountType: number// [15] 581 (Int)
  Instrument?: IInstrument// [16] Symbol.55, SymbolSfx.65 .. InterestAccrualDate.874
  Currency?: string// [17] 15 (String)
  SettlPrice: number// [18] 730 (Float)
  SettlPriceType: number// [19] 731 (Int)
  PriorSettlPrice: number// [20] 734 (Float)
  InstrmtLegGrp?: IInstrmtLegGrp// [21] NoLegs.555, LegSymbol.600 .. LegInterestAccrualDate.956
  PosUndInstrmtGrp?: IPosUndInstrmtGrp// [22] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingSettlPriceType.733
  PositionQty?: IPositionQty// [23] NoPositions.702, PosType.703 .. NestedPartySubIDType.805
  PositionAmountData?: IPositionAmountData// [24] NoPosAmt.753, PosAmtType.707, PosAmt.708
  RegistStatus?: string// [25] 506 (String)
  DeliveryDate?: Date// [26] 743 (LocalDate)
  Text?: string// [27] 58 (String)
  EncodedTextLen?: number// [28] 354 (Length)
  EncodedText?: Buffer// [29] 355 (RawData)
  StandardTrailer: IStandardTrailer// [30] SignatureLength.93, Signature.89, CheckSum.10
}
