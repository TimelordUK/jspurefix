import { IStandardHeader } from './set/standard_header'
import { IApplicationSequenceControl } from './set/application_sequence_control'
import { IParties } from './set/parties'
import { IInstrument } from './set/instrument'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IPositionQty } from './set/position_qty'
import { IPositionAmountData } from './set/position_amount_data'
import { IStandardTrailer } from './set/standard_trailer'

/*
**************************************************************
* Assignment Reports are sent from a clearing house to       *
* counterparties, such as a clearing firm as a result of the *
* assignment process.                                        *
**************************************************************
*/
export interface IAssignmentReport {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  ApplicationSequenceControl?: IApplicationSequenceControl// [2] ApplID.1180, ApplSeqNum.1181 .. ApplResendFlag.1352
  AsgnRptID: string// [3] 833 (String)
  TotNumAssignmentReports?: number// [4] 832 (Int)
  LastRptRequested?: boolean// [5] 912 (Boolean)
  Parties: IParties[]// [6] PartyID.448, PartyIDSource.447 .. PartySubIDType.803
  Account?: string// [7] 1 (String)
  AccountType?: number// [8] 581 (Int)
  Instrument?: IInstrument// [9] Symbol.55, SymbolSfx.65 .. ComplexEventEndTime.1496
  Currency?: string// [10] 15 (String)
  InstrmtLegGrp?: IInstrmtLegGrp// [11] NoLegs.555, LegSymbol.600 .. LegFlowScheduleType.1440
  UndInstrmtGrp?: IUndInstrmtGrp// [12] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingDetachmentPoint.1460
  PositionQty?: IPositionQty[]// [13] PosType.703, LongQty.704 .. NestedPartySubIDType.805
  PositionAmountData?: IPositionAmountData[]// [14] PosAmtType.707, PosAmt.708, PositionCurrency.1055
  ThresholdAmount?: number// [15] 834 (Float)
  SettlPrice?: number// [16] 730 (Float)
  SettlPriceType?: number// [17] 731 (Int)
  UnderlyingSettlPrice?: number// [18] 732 (Float)
  PriorSettlPrice?: number// [19] 734 (Float)
  ExpireDate?: Date// [20] 432 (LocalDate)
  AssignmentMethod?: string// [21] 744 (String)
  AssignmentUnit?: number// [22] 745 (Float)
  OpenInterest?: number// [23] 746 (Float)
  ExerciseMethod?: string// [24] 747 (String)
  SettlSessID?: string// [25] 716 (String)
  SettlSessSubID?: string// [26] 717 (String)
  ClearingBusinessDate: Date// [27] 715 (LocalDate)
  Text?: string// [28] 58 (String)
  EncodedTextLen?: number// [29] 354 (Int)
  EncodedText?: Buffer// [30] 355 (RawData)
  StandardTrailer: IStandardTrailer// [31] SignatureLength.93, Signature.89, CheckSum.10
  PosReqID?: string// [32] 710 (String)
}
