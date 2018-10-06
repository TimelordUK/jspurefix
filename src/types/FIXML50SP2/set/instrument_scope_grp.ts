import { IInstrumentScopeSecurityAltIDGrp } from './instrument_scope_security_alt_id_grp'

export interface IInstrumentScopeGrp {
  InstrumentScopeOperator?: number// 1535
  InstrumentScopeSymbol?: string// 1536
  InstrumentScopeSymbolSfx?: string// 1537
  InstrumentScopeSecurityID?: string// 1538
  InstrumentScopeSecurityIDSource?: string// 1539
  InstrumentScopeProduct?: number// 1543
  InstrumentScopeProductComplex?: string// 1544
  InstrumentScopeSecurityGroup?: string// 1545
  InstrumentScopeCFICode?: string// 1546
  InstrumentScopeSecurityType?: string// 1547
  InstrumentScopeSecuritySubType?: string// 1548
  InstrumentScopeMaturityMonthYear?: string// 1549
  InstrumentScopeMaturityTime?: string// 1550
  InstrumentScopeRestructuringType?: string// 1551
  InstrumentScopeSeniority?: string// 1552
  InstrumentScopePutOrCall?: number// 1553
  InstrumentScopeFlexibleIndicator?: boolean// 1554
  InstrumentScopeCouponRate?: number// 1555
  InstrumentScopeSecurityExchange?: string// 1616
  InstrumentScopeSecurityDesc?: string// 1556
  SettlType?: string// 63
  InstrumentScopeSecurityAltIDGrp?: IInstrumentScopeSecurityAltIDGrp[]
}
