import { IOrderAggregationGrpNoOrders } from './order_aggregation_grp_no_orders'

export interface IOrderAggregationGrp {
  NoOrders?: IOrderAggregationGrpNoOrders[]// [1] ClOrdID.11, OrderID.37 .. OrderAvgPx.799
}
