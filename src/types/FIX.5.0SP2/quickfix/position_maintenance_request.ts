import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IInstrument } from './set/instrument'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { IRelatedInstrumentGrp } from './set/related_instrument_grp'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { ITrdgSesGrp } from './set/trdg_ses_grp'
import { IPositionQty } from './set/position_qty'
import { IPositionAmountData } from './set/position_amount_data'
import { IStandardTrailer } from './set/standard_trailer'

export interface IPositionMaintenanceRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  PosReqID?: string// [2] 710 (String)
  PosTransType: number// [3] 709 (Int)
  PosMaintAction: number// [4] 712 (Int)
  OrigPosReqRefID?: string// [5] 713 (String)
  PosMaintRptRefID?: string// [6] 714 (String)
  ClearingBusinessDate: Date// [7] 715 (LocalDate)
  SettlDate?: Date// [8] 64 (LocalDate)
  SettlSessID?: string// [9] 716 (String)
  SettlSessSubID?: string// [10] 717 (String)
  Parties?: IParties// [11] NoPartyIDs.453, PartyID.448 .. PartySubIDType.803
  Account?: string// [12] 1 (String)
  AcctIDSource?: number// [13] 660 (Int)
  AccountType?: number// [14] 581 (Int)
  Instrument?: IInstrument// [15] Symbol.55, SymbolSfx.65 .. ExchangeLookAlike.2603
  Currency?: string// [16] 15 (String)
  CurrencyCodeSource?: string// [17] 2897 (String)
  InstrmtLegGrp?: IInstrmtLegGrp// [18] NoLegs.555, LegSymbol.600 .. LegMarginRatio.2508
  RelatedInstrumentGrp?: IRelatedInstrumentGrp// [19] NoRelatedInstruments.1647, RelatedInstrumentType.1648 .. RelatedToDividendPeriodXIDRef.2417
  UndInstrmtGrp?: IUndInstrmtGrp// [20] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingInstrumentXID.2631
  TrdgSesGrp?: ITrdgSesGrp// [21] NoTradingSessions.386, TradingSessionID.336, TradingSessionSubID.625
  TransactTime?: Date// [22] 60 (UtcTimestamp)
  PositionQty?: IPositionQty// [23] NoPositions.702, PosType.703 .. NestedPartySubIDType.805
  PositionAmountData?: IPositionAmountData// [24] NoPosAmt.753, PosAmtType.707 .. PosAmtPriceType.2877
  AdjustmentType?: number// [25] 718 (Int)
  ContraryInstructionIndicator?: boolean// [26] 719 (Boolean)
  PriorSpreadIndicator?: boolean// [27] 720 (Boolean)
  ThresholdAmount?: number// [28] 834 (Float)
  Text?: string// [29] 58 (String)
  EncodedTextLen?: number// [30] 354 (Length)
  EncodedText?: Buffer// [31] 355 (RawData)
  SettlCurrency?: string// [32] 120 (String)
  SettlCurrencyCodeSource?: string// [33] 2899 (String)
  StandardTrailer: IStandardTrailer// [34] SignatureLength.93, Signature.89, CheckSum.10
}
