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
  PosType?: string// [1] 703 (String)
  LongQty?: number// [2] 704 (Float)
  ShortQty?: number// [3] 705 (Float)
  PosQtyStatus?: number// [4] 706 (Int)
  NestedParties?: INestedParties[]// [5] NestedPartyID.524, NestedPartyIDSource.525 .. NestedPartySubIDType.805
}
