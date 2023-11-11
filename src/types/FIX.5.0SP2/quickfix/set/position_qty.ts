import { IPositionQtyNoPositions } from './position_qty_no_positions'

export interface IPositionQty {
  NoPositions?: IPositionQtyNoPositions[]// [1] PosType.703, LongQty.704 .. NestedPartySubIDType.805
}
