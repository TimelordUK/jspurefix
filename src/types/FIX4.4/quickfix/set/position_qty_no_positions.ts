import { INestedParties } from './nested_parties'

export interface IPositionQtyNoPositions {
  PosType?: string// 703
  LongQty?: number// 704
  ShortQty?: number// 705
  PosQtyStatus?: number// 706
  NestedParties?: INestedParties
}
