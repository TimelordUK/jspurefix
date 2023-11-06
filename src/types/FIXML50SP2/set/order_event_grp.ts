export interface IOrderEventGrp {
  OrdType?: string// [1] 40 (String)
  OrderEventExecID?: string// [1] 1797 (String)
  SecurityClassificationReason?: number// [1] 1583 (Int)
  OrderEventPx?: number// [1] 1799 (Float)
  OrderEventQty?: number// [1] 1800 (Float)
  OrderEventLiquidityIndicator?: number// [1] 1801 (Int)
  OrderEventText?: string// [1] 1802 (String)
}
