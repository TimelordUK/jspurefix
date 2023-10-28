import { IOrderEntryGrpNoOrderEntries } from './order_entry_grp_no_order_entries'

export interface IOrderEntryGrp {
  NoOrderEntries?: IOrderEntryGrpNoOrderEntries[]// [1] OrderEntryAction.2429, OrderEntryID.2430 .. ExchangeLookAlike.2603
}
