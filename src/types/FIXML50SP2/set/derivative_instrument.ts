import { IDerivativeSecurityAltIDGrp } from './derivative_security_alt_id_grp'
import { IDerivativeSecurityXML } from './derivative_security_xml'
import { IDerivativeEventsGrp } from './derivative_events_grp'
import { IDerivativeInstrumentParties } from './derivative_instrument_parties'

export interface IDerivativeInstrument {
  RelatedSymbol?: string// 1649
  InstrumentScopeSymbolSfx?: string// 1537
  BatchID?: string// 50000
  LegContractualMatrixSource?: string// 42204
  InstrumentScopeProduct?: number// 1543
  UnderlyingProductComplex?: string// 2007
  LegFlexProductEligibilityIndicator?: string// 2203
  UnderlyingSecurityGroup?: string// 2008
  InstrumentScopeCFICode?: string// 1546
  RelatedSecurityType?: string// 1652
  InstrumentScopeSecuritySubType?: string// 1548
  RelatedMaturityMonthYear?: string// 1653
  UnderlyingAdditionalTermBondMaturityDate?: Date// 42030
  InstrumentScopeMaturityTime?: string// 1550
  DerivativeSettleOnOpenFlag?: string// 1254
  LegInstrmtAssignmentMethod?: string// 2147
  LegSecurityStatus?: string// 2148
  DerivativeIssueDate?: Date// 1276
  DerivativeInstrRegistry?: string// 1257
  UnderlyingStreamCommoditySettlCountry?: string// 42003
  DerivativeStateOrProvinceOfIssue?: string// 1259
  DerivativeLocaleOfIssue?: string// 1260
  UnderlyingDividendPeriodStrikePrice?: number// 42867
  DerivativeStrikeCurrency?: string// 1262
  LegStrikeMultiplier?: string// 2181
  LegStrikeValue?: string// 2182
  UnderlyingLegOptAttribute?: string// 1391
  RiskInstrumentMultiplier?: string// 1558
  DerivativeContractMultiplierUnit?: number// 1438
  DerivativeFlowScheduleType?: number// 1442
  LegMinPriceIncrement?: string// 2190
  LegMinPriceIncrementAmount?: number// 2191
  UnderlyingStreamCommodityUnitOfMeasure?: string// 41971
  UnderlyingUnitOfMeasureQty?: number// 1423
  AllocCommissionUnitOfMeasureCurrency?: string// 2659
  UnderlyingStreamCommoditySettlPeriodPriceUnitOfMeasure?: string// 42011
  UnderlyingPriceUnitOfMeasureQty?: number// 1425
  DerivativePriceUnitOfMeasureCurrency?: string// 1723
  UnderlyingProvisionCashSettlMethod?: number// 42166
  LegPriceQuoteMethod?: string// 2195
  UnderlyingCashSettlValuationMethod?: number// 42058
  DerivativePriceQuoteCurrency?: string// 1576
  LegListMethod?: number// 2199
  LegCapPrice?: number// 2200
  LegFloorPrice?: number// 2201
  InstrumentScopePutOrCall?: number// 1553
  DerivativeInTheMoneyCondition?: number// 2684
  DerivativeContraryInstructionEligibilityIndicator?: string// 2688
  UnderlyingProvisionOptionExerciseStyle?: number// 42159
  LegComplexOptPayoutAmount?: number// 2223
  LegEventTimeUnit?: string// 2063
  UnderlyingStreamCommodityExchange?: string// 41973
  LegPositionLimit?: number// 2205
  LegNTPositionLimit?: number// 2206
  UnderlyingAdditionalTermBondIssuer?: string// 42017
  EncodedUnderlyingAdditionalTermBondIssuerLen?: string// 42025
  EncodedUnderlyingAdditionalTermBondIssuer?: Buffer// 42026
  PaymentDesc?: string// 43087
  DerivativeEncodedSecurityDescLen?: string// 1280
  DerivativeEncodedSecurityDesc?: Buffer// 1281
  UnderlyingContractSettlMonth?: string// 2040
  DerivativeSecurityAltIDGrp?: IDerivativeSecurityAltIDGrp[]
  DerivativeSecurityXML?: IDerivativeSecurityXML
  DerivativeEventsGrp?: IDerivativeEventsGrp[]
  DerivativeInstrumentParties?: IDerivativeInstrumentParties[]
}
