import { IEntitlementAttribGrp } from './entitlement_attrib_grp'
import { IInstrumentScopeGrp } from './instrument_scope_grp'
import { IMarketSegmentScopeGrp } from './market_segment_scope_grp'

export interface IEntitlementGrp {
  EntitlementIndicator?: string// 1774
  UnderlyingReturnRateValuationDateType?: number// 43073
  PaymentSubType?: number// 40993
  RiskLimitID?: string// 1670
  EntitlementPlatform?: string// 1784
  UnderlyingReturnRateValuationStartDateAdjusted?: Date// 43019
  UnderlyingReturnRateValuationEndDateAdjusted?: Date// 43025
  EntitlementAttribGrp?: IEntitlementAttribGrp[]
  InstrumentScopeGrp?: IInstrumentScopeGrp[]
  MarketSegmentScopeGrp?: IMarketSegmentScopeGrp[]
}
