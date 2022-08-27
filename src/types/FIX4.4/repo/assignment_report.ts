import { IStandardHeader } from './set/standard_header'
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
  AsgnRptID: string// [2] 833 (String)
  TotNumAssignmentReports?: number// [3] 832 (Int)
  LastRptRequested?: boolean// [4] 912 (Boolean)
  Parties: IParties[]// [5] PartyID.448, PartyIDSource.447 .. PartySubIDType.803
  Account?: string// [6] 1 (String)
  AccountType: number// [7] 581 (Int)
  Instrument?: IInstrument// [8] Symbol.55, SymbolSfx.65 .. InterestAccrualDate.874
  Currency?: string// [9] 15 (String)
  InstrmtLegGrp?: IInstrmtLegGrp[]// [10] LegSymbol.600, LegSymbolSfx.601 .. LegInterestAccrualDate.956
  UndInstrmtGrp?: IUndInstrmtGrp[]// [11] UnderlyingSymbol.311, UnderlyingSymbolSfx.312 .. UnderlyingStipValue.889
  PositionQty: IPositionQty[]// [12] PosType.703, LongQty.704 .. NestedPartySubIDType.805
  PositionAmountData: IPositionAmountData[]// [13] PosAmtType.707, PosAmt.708
  ThresholdAmount?: number// [14] 834 (Float)
  SettlPrice: number// [15] 730 (Float)
  SettlPriceType: number// [16] 731 (Int)
  UnderlyingSettlPrice: number// [17] 732 (Float)
  ExpireDate?: Date// [18] 432 (LocalDate)
  AssignmentMethod: string// [19] 744 (String)
  AssignmentUnit?: number// [20] 745 (Float)
  OpenInterest: number// [21] 746 (Float)
  ExerciseMethod: string// [22] 747 (String)
  SettlSessID: string// [23] 716 (String)
  SettlSessSubID: string// [24] 717 (String)
  ClearingBusinessDate: Date// [25] 715 (LocalDate)
  Text?: string// [26] 58 (String)
  EncodedTextLen?: number// [27] 354 (Int)
  EncodedText?: Buffer// [28] 355 (RawData)
  StandardTrailer: IStandardTrailer// [29] SignatureLength.93, Signature.89, CheckSum.10
}
