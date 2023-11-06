import { IEntitlementAttribGrp } from './entitlement_attrib_grp'
import { IInstrumentScopeGrp } from './instrument_scope_grp'
import { IMarketSegmentScopeGrp } from './market_segment_scope_grp'

export interface IEntitlementGrp {
  EntitlementIndicator?: boolean// [1] 1774 (Boolean)
  MiscFeeType?: string// [1] 139 (String)
  SecuritySubType?: string// [1] 762 (String)
  EntitlementID?: string// [1] 1776 (String)
  EntitlementPlatform?: string// [1] 1784 (String)
  EntitlementStartDate?: Date// [1] 1782 (LocalDate)
  EntitlementEndDate?: Date// [1] 1783 (LocalDate)
  EntitlementAttribGrp?: IEntitlementAttribGrp[]// [1] Typ.1778, Datatyp.1779 .. Ccy.1781
  InstrumentScopeGrp?: IInstrumentScopeGrp[]// [2] Oper.1535, Sym.1536 .. SettlTyp.63
  MarketSegmentScopeGrp?: IMarketSegmentScopeGrp[]// [3] MktID.1301, MktSegID.1300
}
