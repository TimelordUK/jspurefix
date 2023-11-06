import { IInstrumentScopeSecurityAltIDGrp } from './instrument_scope_security_alt_id_grp'

export interface IRiskInstrumentScopeGrp {
  InstrumentScopeOperator?: number// [1] 1535 (Int)
  InstrumentScopeSymbol?: string// [1] 1536 (String)
  InstrumentScopeSymbolSfx?: string// [1] 1537 (String)
  InstrumentScopeSecurityID?: string// [1] 1538 (String)
  InstrumentScopeSecurityIDSource?: string// [1] 1539 (String)
  InstrumentScopeProduct?: number// [1] 1543 (Int)
  InstrumentScopeProductComplex?: string// [1] 1544 (String)
  InstrumentScopeSecurityGroup?: string// [1] 1545 (String)
  InstrumentScopeCFICode?: string// [1] 1546 (String)
  InstrumentScopeSecurityType?: string// [1] 1547 (String)
  InstrumentScopeSecuritySubType?: string// [1] 1548 (String)
  InstrumentScopeMaturityMonthYear?: string// [1] 1549 (String)
  InstrumentScopeMaturityTime?: string// [1] 1550 (String)
  InstrumentScopeRestructuringType?: string// [1] 1551 (String)
  InstrumentScopeSeniority?: string// [1] 1552 (String)
  InstrumentScopePutOrCall?: number// [1] 1553 (Int)
  InstrumentScopeFlexibleIndicator?: boolean// [1] 1554 (Boolean)
  InstrumentScopeCouponRate?: number// [1] 1555 (Float)
  InstrumentScopeSecurityExchange?: string// [1] 1616 (String)
  InstrumentScopeSecurityDesc?: string// [1] 1556 (String)
  SettlType?: string// [1] 63 (String)
  InstrumentScopeSecurityAltIDGrp?: IInstrumentScopeSecurityAltIDGrp[]// [1] AltID.1541, AltIDSrc.1542
}
