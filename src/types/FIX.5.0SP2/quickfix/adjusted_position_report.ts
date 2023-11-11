import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IPositionQty } from './set/position_qty'
import { IInstrmtGrp } from './set/instrmt_grp'
import { IStandardTrailer } from './set/standard_trailer'

export interface IAdjustedPositionReport {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  PosMaintRptID: string// [2] 721 (String)
  PosReqType?: number// [3] 724 (Int)
  ClearingBusinessDate: Date// [4] 715 (LocalDate)
  SettlSessID?: string// [5] 716 (String)
  PosMaintRptRefID?: string// [6] 714 (String)
  Parties?: IParties// [7] NoPartyIDs.453, PartyID.448 .. PartySubIDType.803
  PositionQty?: IPositionQty// [8] NoPositions.702, PosType.703 .. NestedPartySubIDType.805
  InstrmtGrp?: IInstrmtGrp// [9] NoRelatedSym.146, Symbol.55 .. RelatedToDividendPeriodXIDRef.2417
  SettlPrice?: number// [10] 730 (Float)
  PriorSettlPrice?: number// [11] 734 (Float)
  StandardTrailer: IStandardTrailer// [12] SignatureLength.93, Signature.89, CheckSum.10
}
