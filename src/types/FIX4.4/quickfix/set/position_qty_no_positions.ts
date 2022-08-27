import { INestedParties } from './nested_parties'

export interface IPositionQtyNoPositions {
  PosType?: string// [1] 703 (String)
  LongQty?: number// [2] 704 (Float)
  ShortQty?: number// [3] 705 (Float)
  PosQtyStatus?: number// [4] 706 (Int)
  NestedParties?: INestedParties// [5] NoNestedPartyIDs.539, NestedPartyID.524 .. NestedPartySubIDType.805
}
