import { IOrderEntryAckGrpNoOrderEntries } from './order_entry_ack_grp_no_order_entries'

export interface IOrderEntryAckGrp {
  NoOrderEntries?: IOrderEntryAckGrpNoOrderEntries[]// [1] OrdStatus.39, ExecType.150 .. ExchangeLookAlike.2603
}
