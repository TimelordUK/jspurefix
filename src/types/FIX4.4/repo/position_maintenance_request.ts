import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IInstrument } from './set/instrument'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { ITrdgSesGrp } from './set/trdg_ses_grp'
import { IPositionQty } from './set/position_qty'
import { IStandardTrailer } from './set/standard_trailer'

/*
********************************
* Position Maintenance Request *
********************************
*/
export interface IPositionMaintenanceRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  PosReqID: string// [2] 710 (String)
  PosTransType: number// [3] 709 (Int)
  PosMaintAction: number// [4] 712 (Int)
  OrigPosReqRefID?: string// [5] 713 (String)
  PosMaintRptRefID?: string// [6] 714 (String)
  ClearingBusinessDate: Date// [7] 715 (LocalDate)
  SettlSessID?: string// [8] 716 (String)
  SettlSessSubID?: string// [9] 717 (String)
  Parties: IParties[]// [10] PartyID.448, PartyIDSource.447 .. PartySubIDType.803
  Account: string// [11] 1 (String)
  AcctIDSource?: number// [12] 660 (Int)
  AccountType: number// [13] 581 (Int)
  Instrument: IInstrument// [14] Symbol.55, SymbolSfx.65 .. InterestAccrualDate.874
  Currency?: string// [15] 15 (String)
  InstrmtLegGrp?: IInstrmtLegGrp[]// [16] LegSymbol.600, LegSymbolSfx.601 .. LegInterestAccrualDate.956
  UndInstrmtGrp?: IUndInstrmtGrp[]// [17] UnderlyingSymbol.311, UnderlyingSymbolSfx.312 .. UnderlyingStipValue.889
  TrdgSesGrp?: ITrdgSesGrp[]// [18] TradingSessionID.336, TradingSessionSubID.625
  TransactTime: Date// [19] 60 (UtcTimestamp)
  PositionQty: IPositionQty[]// [20] PosType.703, LongQty.704 .. NestedPartySubIDType.805
  AdjustmentType?: number// [21] 718 (Int)
  ContraryInstructionIndicator?: boolean// [22] 719 (Boolean)
  PriorSpreadIndicator?: boolean// [23] 720 (Boolean)
  ThresholdAmount?: number// [24] 834 (Float)
  Text?: string// [25] 58 (String)
  EncodedTextLen?: number// [26] 354 (Int)
  EncodedText?: Buffer// [27] 355 (RawData)
  StandardTrailer: IStandardTrailer// [28] SignatureLength.93, Signature.89, CheckSum.10
}
