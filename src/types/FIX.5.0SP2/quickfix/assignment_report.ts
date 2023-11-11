import { IStandardHeader } from './set/standard_header'
import { IApplicationSequenceControl } from './set/application_sequence_control'
import { IParties } from './set/parties'
import { IInstrument } from './set/instrument'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IPositionQty } from './set/position_qty'
import { IPositionAmountData } from './set/position_amount_data'
import { IStandardTrailer } from './set/standard_trailer'

export interface IAssignmentReport {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  ApplicationSequenceControl?: IApplicationSequenceControl// [2] ApplID.1180, ApplSeqNum.1181 .. ApplResendFlag.1352
  AsgnRptID: string// [3] 833 (String)
  PosReqID?: string// [4] 710 (String)
  TotNumAssignmentReports?: number// [5] 832 (Int)
  LastRptRequested?: boolean// [6] 912 (Boolean)
  Parties?: IParties// [7] NoPartyIDs.453, PartyID.448 .. PartySubIDType.803
  Account?: string// [8] 1 (String)
  AccountType?: number// [9] 581 (Int)
  Instrument?: IInstrument// [10] Symbol.55, SymbolSfx.65 .. ExchangeLookAlike.2603
  Currency?: string// [11] 15 (String)
  CurrencyCodeSource?: string// [12] 2897 (String)
  InstrmtLegGrp?: IInstrmtLegGrp// [13] NoLegs.555, LegSymbol.600 .. LegMarginRatio.2508
  UndInstrmtGrp?: IUndInstrmtGrp// [14] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingInstrumentXID.2631
  PositionQty?: IPositionQty// [15] NoPositions.702, PosType.703 .. NestedPartySubIDType.805
  PositionAmountData?: IPositionAmountData// [16] NoPosAmt.753, PosAmtType.707 .. PosAmtPriceType.2877
  ThresholdAmount?: number// [17] 834 (Float)
  SettlPrice?: number// [18] 730 (Float)
  SettlPriceType?: number// [19] 731 (Int)
  UnderlyingSettlPrice?: number// [20] 732 (Float)
  PriorSettlPrice?: number// [21] 734 (Float)
  PositionContingentPrice?: number// [22] 1595 (Float)
  ExpireDate?: Date// [23] 432 (LocalDate)
  AssignmentMethod?: string// [24] 744 (String)
  AssignmentUnit?: number// [25] 745 (Float)
  OpenInterest?: number// [26] 746 (Float)
  ExerciseMethod?: string// [27] 747 (String)
  SettlSessID?: string// [28] 716 (String)
  SettlSessSubID?: string// [29] 717 (String)
  ClearingBusinessDate: Date// [30] 715 (LocalDate)
  Text?: string// [31] 58 (String)
  EncodedTextLen?: number// [32] 354 (Length)
  EncodedText?: Buffer// [33] 355 (RawData)
  StandardTrailer: IStandardTrailer// [34] SignatureLength.93, Signature.89, CheckSum.10
}
