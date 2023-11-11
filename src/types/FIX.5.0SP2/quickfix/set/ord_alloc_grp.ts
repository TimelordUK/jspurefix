import { IOrdAllocGrpNoOrders } from './ord_alloc_grp_no_orders'

export interface IOrdAllocGrp {
  NoOrders?: IOrdAllocGrpNoOrders[]// [1] ClOrdID.11, OrderID.37 .. OrdType.40
}
