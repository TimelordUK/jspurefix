import { ILegComplexEventDates } from './leg_complex_event_dates'
import { ILegComplexEventRateSourceGrp } from './leg_complex_event_rate_source_grp'
import { ILegComplexEventRelativeDate } from './leg_complex_event_relative_date'
import { ILegComplexEventPeriodGrp } from './leg_complex_event_period_grp'
import { ILegComplexEventCreditEventSourceGrp } from './leg_complex_event_credit_event_source_grp'
import { ILegComplexEventCreditEventGrp } from './leg_complex_event_credit_event_grp'

export interface ILegComplexEvents {
  LegComplexEventType?: number// 2219
  LegComplexOptPayoutPaySide?: number// 2220
  LegComplexOptPayoutReceiveSide?: number// 2221
  LegComplexOptPayoutUnderlier?: string// 2222
  LegComplexOptPayoutAmount?: number// 2223
  LegComplexOptPayoutPercentage?: number// 2224
  LegComplexOptPayoutTime?: number// 2225
  LegComplexOptPayoutCurrency?: string// 2226
  LegComplexEventPrice?: number// 2227
  LegComplexEventPricePercentage?: number// 2228
  LegComplexEventPriceBoundaryMethod?: number// 2229
  LegComplexEventPriceBoundaryPrecision?: number// 2230
  LegComplexEventPriceTimeType?: number// 2231
  LegComplexEventCondition?: number// 2232
  LegComplexEventCurrencyOne?: string// 2233
  LegComplexEventCurrencyTwo?: string// 2234
  LegComplexEventQuoteBasis?: number// 2235
  LegComplexEventFixedFXRate?: number// 2236
  LegComplexEventSpotRate?: number// 2409
  LegComplexEventForwardPoints?: number// 2410
  LegComplexEventDeterminationMethod?: string// 2237
  LegComplexEventCalculationAgent?: number// 2238
  LegComplexEventStrikePrice?: number// 2239
  LegComplexEventStrikeFactor?: number// 2240
  LegComplexEventStrikeNumberOfOptions?: number// 2241
  LegComplexEventCreditEventsXIDRef?: string// 2242
  LegComplexEventCreditEventNotifyingParty?: number// 2243
  LegComplexEventCreditEventBusinessCenter?: string// 2244
  LegComplexEventCreditEventStandardSources?: boolean// 2245
  LegComplexEventCreditEventMinimumSources?: number// 2246
  LegComplexEventFuturesPriceValuation?: boolean// 2608
  LegComplexEventOptionsPriceValuation?: boolean// 2609
  LegComplexEventPVFinalPriceElectionFallback?: number// 2610
  LegComplexEventXID?: string// 2248
  LegComplexEventXIDRef?: string// 2249
  LegComplexEventDates?: ILegComplexEventDates[]
  LegComplexEventRateSourceGrp?: ILegComplexEventRateSourceGrp[]
  LegComplexEventRelativeDate?: ILegComplexEventRelativeDate
  LegComplexEventPeriodGrp?: ILegComplexEventPeriodGrp[]
  LegComplexEventCreditEventSourceGrp?: ILegComplexEventCreditEventSourceGrp[]
  LegComplexEventCreditEventGrp?: ILegComplexEventCreditEventGrp[]
}
