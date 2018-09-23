import { INestedParties } from './nested_parties'

/*
***************************************************************
* The PositionQty component block specifies the various types *
* of position quantity in the position life-cycle including   *
* start-of-day, intraday, trade, adjustments, and end-of-day  *
* position quantities. Quantities are expressed in terms of   *
* long and short quantities.                                  *
***************************************************************
*/
export interface IPositionQty {
  PosType?: string// 703
  LongQty?: number// 704
  ShortQty?: number// 705
  PosQtyStatus?: number// 706
  QuantityDate?: Date// 976
  NestedParties?: INestedParties[]
}
