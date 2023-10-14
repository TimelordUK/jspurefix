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
****************************************************************
* The Position Maintenance Request message allows the position *
* owner to submit requests to the holder of a position which   *
* will result in a specific action being taken which will      *
* affect the position. Generally, the holder of the position   *
* is a central counter party or clearing organization but can  *
* also be a party providing investment services.               *
****************************************************************
*/
export interface IPositionMaintenanceRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  PosReqID?: string// [2] 710 (String)
  PosTransType: number// [3] 709 (Int)
  PosMaintAction: number// [4] 712 (Int)
  OrigPosReqRefID?: string// [5] 713 (String)
  PosMaintRptRefID?: string// [6] 714 (String)
  ClearingBusinessDate: Date// [7] 715 (LocalDate)
  SettlSessID?: string// [8] 716 (String)
  SettlSessSubID?: string// [9] 717 (String)
  Parties: IParties[]// [10] PartyID.448, PartyIDSource.447 .. PartySubIDType.803
  Account?: string// [11] 1 (String)
  AcctIDSource?: number// [12] 660 (Int)
  AccountType?: number// [13] 581 (Int)
  Instrument: IInstrument// [14] Symbol.55, SymbolSfx.65 .. ComplexEventEndTime.1496
  Currency?: string// [15] 15 (String)
  InstrmtLegGrp?: IInstrmtLegGrp// [16] NoLegs.555, LegSymbol.600 .. LegFlowScheduleType.1440
  UndInstrmtGrp?: IUndInstrmtGrp// [17] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingDetachmentPoint.1460
  TrdgSesGrp?: ITrdgSesGrp[]// [18] TradingSessionID.336, TradingSessionSubID.625
  TransactTime?: Date// [19] 60 (UtcTimestamp)
  PositionQty: IPositionQty[]// [20] PosType.703, LongQty.704 .. NestedPartySubIDType.805
  PositionAmountData?: IPositionAmountData[]// [21] PosAmtType.707, PosAmt.708, PositionCurrency.1055
  AdjustmentType?: number// [22] 718 (Int)
  ContraryInstructionIndicator?: boolean// [23] 719 (Boolean)
  PriorSpreadIndicator?: boolean// [24] 720 (Boolean)
  ThresholdAmount?: number// [25] 834 (Float)
  Text?: string// [26] 58 (String)
  EncodedTextLen?: number// [27] 354 (Int)
  EncodedText?: Buffer// [28] 355 (RawData)
  SettlCurrency?: string// [29] 120 (String)
  StandardTrailer: IStandardTrailer// [30] SignatureLength.93, Signature.89, CheckSum.10
}
