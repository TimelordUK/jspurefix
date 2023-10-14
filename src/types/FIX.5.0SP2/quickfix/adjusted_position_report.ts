import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IPositionQty } from './set/position_qty'
import { IInstrmtGrp } from './set/instrmt_grp'
import { IStandardTrailer } from './set/standard_trailer'

/*
***********************************************************
* Used to report changes in position, primarily in equity *
* options, due to modifications to the underlying due to  *
* corporate actions                                       *
***********************************************************
*/
export interface IAdjustedPositionReport {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  PosMaintRptID: string// [2] 721 (String)
  PosReqType?: number// [3] 724 (Int)
  ClearingBusinessDate: Date// [4] 715 (LocalDate)
  SettlSessID?: string// [5] 716 (String)
  PosMaintRptRefID?: string// [6] 714 (String)
  Parties: IParties[]// [7] PartyID.448, PartyIDSource.447 .. PartySubIDType.803
  PositionQty: IPositionQty[]// [8] PosType.703, LongQty.704 .. NestedPartySubIDType.805
  InstrmtGrp?: IInstrmtGrp[]// [9] Symbol.55, SymbolSfx.65 .. ComplexEventEndTime.1496
  SettlPrice?: number// [10] 730 (Float)
  PriorSettlPrice?: number// [11] 734 (Float)
  StandardTrailer: IStandardTrailer// [12] SignatureLength.93, Signature.89, CheckSum.10
}
