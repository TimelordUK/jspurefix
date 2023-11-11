import { IOrdListStatGrpNoOrders } from './ord_list_stat_grp_no_orders'

export interface IOrdListStatGrp {
  NoOrders?: IOrdListStatGrpNoOrders[]// [1] ClOrdID.11, OrderID.37 .. EncodedText.355
}
