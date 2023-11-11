import { IOrderEventGrpNoOrderEvents } from './order_event_grp_no_order_events'

export interface IOrderEventGrp {
  NoOrderEvents?: IOrderEventGrpNoOrderEvents[]// [1] OrderEventType.1796, OrderEventExecID.1797 .. OrderEventText.1802
}
