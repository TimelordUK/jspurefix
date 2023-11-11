import { INestedParties2 } from './nested_parties_2'

export interface IOrdAllocGrp {
  ClOrdID?: string// [1] 11 (String)
  OrderID?: string// [1] 37 (String)
  SecondaryOrderID?: string// [1] 198 (String)
  SecondaryClOrdID?: string// [1] 526 (String)
  ListID?: string// [1] 66 (String)
  OrderQty?: number// [1] 38 (Float)
  OrderAvgPx?: number// [1] 799 (Float)
  OrderBookingQty?: number// [1] 800 (Float)
  NestedParties2?: INestedParties2[]// [1] ID.757, Src.758 .. Qual.2381
}
