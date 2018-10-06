import { IEntitlementAttribGrp } from './entitlement_attrib_grp'
import { IInstrumentScopeGrp } from './instrument_scope_grp'
import { IMarketSegmentScopeGrp } from './market_segment_scope_grp'

export interface IEntitlementGrp {
  EntitlementIndicator?: boolean// 1774
  UnderlyingReturnRateValuationDateType?: number// 43073
  PaymentSubType?: number// 40993
  EntitlementID?: string// 1776
  EntitlementPlatform?: string// 1784
  EntitlementStartDate?: Date// 1782
  EntitlementEndDate?: Date// 1783
  EntitlementAttribGrp?: IEntitlementAttribGrp[]
  InstrumentScopeGrp?: IInstrumentScopeGrp[]
  MarketSegmentScopeGrp?: IMarketSegmentScopeGrp[]
}
