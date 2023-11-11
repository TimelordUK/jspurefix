import { IEntitlementAttribGrp } from './entitlement_attrib_grp'
import { IInstrumentScopeGrp } from './instrument_scope_grp'
import { IMarketSegmentScopeGrp } from './market_segment_scope_grp'

export interface IEntitlementGrpNoEntitlements {
  EntitlementIndicator?: boolean// [1] 1774 (Boolean)
  EntitlementType?: number// [2] 1775 (Int)
  EntitlementSubType?: number// [3] 2402 (Int)
  EntitlementAttribGrp?: IEntitlementAttribGrp// [4] NoEntitlementAttrib.1777, EntitlementAttribType.1778 .. EntitlementAttribCurrencyCodeSource.2940
  EntitlementID?: string// [5] 1776 (String)
  EntitlementPlatform?: string// [6] 1784 (String)
  InstrumentScopeGrp?: IInstrumentScopeGrp// [7] NoInstrumentScopes.1656, InstrumentScopeOperator.1535 .. InstrumentScopeSettlType.1557
  MarketSegmentScopeGrp?: IMarketSegmentScopeGrp// [8] NoMarketSegments.1310, MarketID.1301, MarketSegmentID.1300
  EntitlementStartDate?: Date// [9] 1782 (LocalDate)
  EntitlementEndDate?: Date// [10] 1783 (LocalDate)
}
