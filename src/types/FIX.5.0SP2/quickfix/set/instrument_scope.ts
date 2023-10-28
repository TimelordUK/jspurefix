import { IInstrumentScopeSecurityAltIDGrp } from './instrument_scope_security_alt_id_grp'

export interface IInstrumentScope {
  InstrumentScopeSymbol?: string// [1] 1536 (String)
  InstrumentScopeSymbolSfx?: string// [2] 1537 (String)
  InstrumentScopeSecurityID?: string// [3] 1538 (String)
  InstrumentScopeSecurityIDSource?: string// [4] 1539 (String)
  InstrumentScopeSecurityAltIDGrp?: IInstrumentScopeSecurityAltIDGrp// [5] NoInstrumentScopeSecurityAltID.1540, InstrumentScopeSecurityAltID.1541, InstrumentScopeSecurityAltIDSource.1542
  InstrumentScopeProduct?: number// [6] 1543 (Int)
  InstrumentScopeProductComplex?: string// [7] 1544 (String)
  InstrumentScopeSecurityGroup?: string// [8] 1545 (String)
  InstrumentScopeCFICode?: string// [9] 1546 (String)
  InstrumentScopeUPICode?: string// [10] 2895 (String)
  InstrumentScopeSecurityType?: string// [11] 1547 (String)
  InstrumentScopeSecuritySubType?: string// [12] 1548 (String)
  InstrumentScopeMaturityMonthYear?: string// [13] 1549 (String)
  InstrumentScopeMaturityTime?: string// [14] 1550 (String)
  InstrumentScopeRestructuringType?: string// [15] 1551 (String)
  InstrumentScopeSeniority?: string// [16] 1552 (String)
  InstrumentScopePutOrCall?: number// [17] 1553 (Int)
  InstrumentScopeFlexibleIndicator?: boolean// [18] 1554 (Boolean)
  InstrumentScopeCouponRate?: number// [19] 1555 (Float)
  InstrumentScopeSecurityExchange?: string// [20] 1616 (String)
  InstrumentScopeSecurityDesc?: string// [21] 1556 (String)
  InstrumentScopeEncodedSecurityDescLen?: number// [22] 1620 (Length)
  InstrumentScopeEncodedSecurityDesc?: Buffer// [23] 1621 (RawData)
  InstrumentScopeSettlType?: string// [24] 1557 (String)
}
