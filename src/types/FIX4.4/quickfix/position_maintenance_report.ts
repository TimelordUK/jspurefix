import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IInstrument } from './set/instrument'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { ITrdgSesGrp } from './set/trdg_ses_grp'
import { IPositionQty } from './set/position_qty'
import { IPositionAmountData } from './set/position_amount_data'
import { IStandardTrailer } from './set/standard_trailer'

export interface IPositionMaintenanceReport {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  PosMaintRptID: string// [2] 721 (String)
  PosTransType: number// [3] 709 (Int)
  PosReqID?: string// [4] 710 (String)
  PosMaintAction: number// [5] 712 (Int)
  OrigPosReqRefID: string// [6] 713 (String)
  PosMaintStatus: number// [7] 722 (Int)
  PosMaintResult?: number// [8] 723 (Int)
  ClearingBusinessDate: Date// [9] 715 (LocalDate)
  SettlSessID?: string// [10] 716 (String)
  SettlSessSubID?: string// [11] 717 (String)
  Parties?: IParties// [12] NoPartyIDs.453, PartyID.448 .. PartySubIDType.803
  Account: string// [13] 1 (String)
  AcctIDSource?: number// [14] 660 (Int)
  AccountType: number// [15] 581 (Int)
  Instrument?: IInstrument// [16] Symbol.55, SymbolSfx.65 .. InterestAccrualDate.874
  Currency?: string// [17] 15 (String)
  InstrmtLegGrp?: IInstrmtLegGrp// [18] NoLegs.555, LegSymbol.600 .. LegInterestAccrualDate.956
  UndInstrmtGrp?: IUndInstrmtGrp// [19] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingStipValue.889
  TrdgSesGrp?: ITrdgSesGrp// [20] NoTradingSessions.386, TradingSessionID.336, TradingSessionSubID.625
  TransactTime: Date// [21] 60 (UtcTimestamp)
  PositionQty?: IPositionQty// [22] NoPositions.702, PosType.703 .. NestedPartySubIDType.805
  PositionAmountData?: IPositionAmountData// [23] NoPosAmt.753, PosAmtType.707, PosAmt.708
  AdjustmentType?: number// [24] 718 (Int)
  ThresholdAmount?: number// [25] 834 (Float)
  Text?: string// [26] 58 (String)
  EncodedTextLen?: number// [27] 354 (Length)
  EncodedText?: Buffer// [28] 355 (RawData)
  StandardTrailer: IStandardTrailer// [29] SignatureLength.93, Signature.89, CheckSum.10
}
