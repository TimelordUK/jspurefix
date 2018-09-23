import { INestedParties2 } from './nested_parties_2'

export interface IOrdAllocGrp {
  ClOrdID?: string// 11
  NotAffectedOrderID?: string// 1371
  NotAffSecondaryOrderID?: string// 1825
  SecondaryClOrdID?: string// 526
  SecurityListID?: string// 1465
  RelatedTradeQuantity?: number// 1860
  SideAvgPx?: number// 1852
  OrderBookingQty?: number// 800
  NestedParties2?: INestedParties2[]
}
