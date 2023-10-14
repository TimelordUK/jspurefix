import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IInstrument } from './set/instrument'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { ITrdgSesGrp } from './set/trdg_ses_grp'
import { IPositionQty } from './set/position_qty'
import { IPositionAmountData } from './set/position_amount_data'
import { IStandardTrailer } from './set/standard_trailer'

/*
*************************************************************
* The Position Maintenance Report message is sent by the    *
* holder of a positon in response to a Position Maintenance *
* Request and is used to confirm that a request has been    *
* successfully processed or rejected.                       *
*************************************************************
*/
export interface IPositionMaintenanceReport {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  PosMaintRptID: string// [2] 721 (String)
  PosTransType: number// [3] 709 (Int)
  PosReqID?: string// [4] 710 (String)
  PosMaintAction: number// [5] 712 (Int)
  OrigPosReqRefID?: string// [6] 713 (String)
  PosMaintStatus: number// [7] 722 (Int)
  PosMaintResult?: number// [8] 723 (Int)
  ClearingBusinessDate: Date// [9] 715 (LocalDate)
  SettlSessID?: string// [10] 716 (String)
  SettlSessSubID?: string// [11] 717 (String)
  Parties?: IParties[]// [12] PartyID.448, PartyIDSource.447 .. PartySubIDType.803
  Account?: string// [13] 1 (String)
  AcctIDSource?: number// [14] 660 (Int)
  AccountType?: number// [15] 581 (Int)
  PosMaintRptRefID?: string// [16] 714 (String)
  Instrument: IInstrument// [17] Symbol.55, SymbolSfx.65 .. ComplexEventEndTime.1496
  Currency?: string// [18] 15 (String)
  SettlCurrency?: string// [19] 120 (String)
  ContraryInstructionIndicator?: boolean// [20] 719 (Boolean)
  PriorSpreadIndicator?: boolean// [21] 720 (Boolean)
  InstrmtLegGrp?: IInstrmtLegGrp// [22] NoLegs.555, LegSymbol.600 .. LegFlowScheduleType.1440
  UndInstrmtGrp?: IUndInstrmtGrp// [23] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingDetachmentPoint.1460
  TrdgSesGrp?: ITrdgSesGrp[]// [24] TradingSessionID.336, TradingSessionSubID.625
  TransactTime?: Date// [25] 60 (UtcTimestamp)
  PositionQty: IPositionQty[]// [26] PosType.703, LongQty.704 .. NestedPartySubIDType.805
  PositionAmountData?: IPositionAmountData[]// [27] PosAmtType.707, PosAmt.708, PositionCurrency.1055
  AdjustmentType?: number// [28] 718 (Int)
  ThresholdAmount?: number// [29] 834 (Float)
  Text?: string// [30] 58 (String)
  EncodedTextLen?: number// [31] 354 (Int)
  EncodedText?: Buffer// [32] 355 (RawData)
  StandardTrailer: IStandardTrailer// [33] SignatureLength.93, Signature.89, CheckSum.10
}
