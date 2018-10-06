import { IEntitlementAttribGrp } from './entitlement_attrib_grp'
import { IInstrumentScopeGrp } from './instrument_scope_grp'
import { IMarketSegmentScopeGrp } from './market_segment_scope_grp'

export interface IEntitlementGrp {
  EntitlementIndicator?: boolean// 1774
  MiscFeeType?: string// 139
  SecuritySubType?: string// 762
  EntitlementID?: string// 1776
  EntitlementPlatform?: string// 1784
  EntitlementStartDate?: Date// 1782
  EntitlementEndDate?: Date// 1783
  EntitlementAttribGrp?: IEntitlementAttribGrp[]
  InstrumentScopeGrp?: IInstrumentScopeGrp[]
  MarketSegmentScopeGrp?: IMarketSegmentScopeGrp[]
}
