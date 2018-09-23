import { IUnderlyingLegSecurityAltIDGrp } from './underlying_leg_security_alt_id_grp'

export interface IUnderlyingLegInstrument {
  RelatedSymbol?: string// 1649
  InstrumentScopeSymbolSfx?: string// 1537
  BatchID?: string// 50000
  LegContractualMatrixSource?: string// 42204
  InstrumentScopeCFICode?: string// 1546
  UnderlyingLegSecurityType?: string// 1337
  UnderlyingLegSecuritySubType?: string// 1338
  RelatedMaturityMonthYear?: string// 1653
  UnderlyingAdditionalTermBondMaturityDate?: Date// 42030
  InstrumentScopeMaturityTime?: string// 1550
  UnderlyingDividendPeriodStrikePrice?: number// 42867
  UnderlyingLegOptAttribute?: string// 1391
  InstrumentScopePutOrCall?: number// 1553
  UnderlyingStreamCommodityExchange?: string// 41973
  PaymentDesc?: string// 43087
  UnderlyingLegSecurityAltIDGrp?: IUnderlyingLegSecurityAltIDGrp[]
}
