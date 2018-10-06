import { INestedParties2 } from './nested_parties_2'

export interface IOrdAllocGrp {
  ClOrdID?: string// 11
  OrderID?: string// 37
  SecondaryOrderID?: string// 198
  SecondaryClOrdID?: string// 526
  ListID?: string// 66
  NestedParties2?: INestedParties2[]
  OrderQty?: number// 38
  OrderAvgPx?: number// 799
  OrderBookingQty?: number// 800
}
