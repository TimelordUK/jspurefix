import { ITradePositionQtyNoPositions } from './trade_position_qty_no_positions'

export interface ITradePositionQty {
  NoPositions?: ITradePositionQtyNoPositions[]// [1] PosType.703, LongQty.704 .. QuantityDate.976
}
