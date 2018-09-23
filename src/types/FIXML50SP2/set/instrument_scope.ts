import { IInstrumentScopeSecurityAltIDGrp } from './instrument_scope_security_alt_id_grp'

export interface IInstrumentScope {
  RelatedSymbol?: string// 1649
  InstrumentScopeSymbolSfx?: string// 1537
  BatchID?: string// 50000
  LegContractualMatrixSource?: string// 42204
  InstrumentScopeProduct?: number// 1543
  UnderlyingProductComplex?: string// 2007
  UnderlyingSecurityGroup?: string// 2008
  InstrumentScopeCFICode?: string// 1546
  RelatedSecurityType?: string// 1652
  InstrumentScopeSecuritySubType?: string// 1548
  RelatedMaturityMonthYear?: string// 1653
  InstrumentScopeMaturityTime?: string// 1550
  InstrumentScopeRestructuringType?: string// 1551
  UnderlyingAdditionalTermBondSeniority?: string// 42027
  InstrumentScopePutOrCall?: number// 1553
  LegFlexibleIndicator?: string// 2202
  UnderlyingAdditionalTermBondCouponRate?: number// 42029
  UnderlyingStreamCommodityExchange?: string// 41973
  PaymentDesc?: string// 43087
  InstrumentScopeSettlType?: string// 1557
  InstrumentScopeSecurityAltIDGrp?: IInstrumentScopeSecurityAltIDGrp[]
}
