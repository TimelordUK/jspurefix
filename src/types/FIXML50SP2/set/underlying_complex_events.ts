import { IUnderlyingComplexEventDates } from './underlying_complex_event_dates'
import { IUnderlyingComplexEventRateSourceGrp } from './underlying_complex_event_rate_source_grp'
import { IUnderlyingComplexEventRelativeDate } from './underlying_complex_event_relative_date'
import { IUnderlyingComplexEventPeriodGrp } from './underlying_complex_event_period_grp'
import { IUnderlyingComplexEventCreditEventSourceGrp } from './underlying_complex_event_credit_event_source_grp'
import { IUnderlyingComplexEventCreditEventGrp } from './underlying_complex_event_credit_event_grp'

export interface IUnderlyingComplexEvents {
  UnderlyingComplexEventType?: number// 2046
  UnderlyingComplexOptPayoutPaySide?: number// 2261
  UnderlyingComplexOptPayoutReceiveSide?: number// 2262
  UnderlyingComplexOptPayoutUnderlier?: string// 2263
  UnderlyingComplexOptPayoutAmount?: number// 2047
  UnderlyingComplexOptPayoutPercentage?: number// 2264
  UnderlyingComplexOptPayoutTime?: number// 2265
  UnderlyingComplexOptPayoutCurrency?: string// 2266
  UnderlyingComplexEventPrice?: number// 2048
  UnderlyingComplexEventPricePercentage?: number// 2267
  UnderlyingComplexEventPriceBoundaryMethod?: number// 2049
  UnderlyingComplexEventPriceBoundaryPrecision?: number// 2050
  UnderlyingComplexEventPriceTimeType?: number// 2051
  UnderlyingComplexEventCondition?: number// 2052
  UnderlyingComplexEventCurrencyOne?: string// 2268
  UnderlyingComplexEventCurrencyTwo?: string// 2269
  UnderlyingComplexEventQuoteBasis?: number// 2270
  UnderlyingComplexEventFixedFXRate?: number// 2271
  UnderlyingComplexEventSpotRate?: number// 2419
  UnderlyingComplexEventForwardPoints?: number// 2420
  UnderlyingComplexEventDeterminationMethod?: string// 2272
  UnderlyingComplexEventCalculationAgent?: number// 2273
  UnderlyingComplexEventStrikePrice?: number// 2274
  UnderlyingComplexEventStrikeFactor?: number// 2275
  UnderlyingComplexEventStrikeNumberOfOptions?: number// 2276
  UnderlyingComplexEventCreditEventsXIDRef?: string// 2277
  UnderlyingComplexEventCreditEventNotifyingParty?: number// 2278
  UnderlyingComplexEventCreditEventBusinessCenter?: string// 2279
  UnderlyingComplexEventCreditEventStandardSources?: boolean// 2280
  UnderlyingComplexEventCreditEventMinimumSources?: number// 2281
  UnderlyingComplexEventFuturesPriceValuation?: boolean// 2611
  UnderlyingComplexEventOptionsPriceValuation?: boolean// 2612
  UnderlyingComplexEventPVFinalPriceElectionFallback?: number// 2613
  UnderlyingComplexEventXID?: string// 2282
  UnderlyingComplexEventXIDRef?: string// 2283
  UnderlyingComplexEventDates?: IUnderlyingComplexEventDates[]
  UnderlyingComplexEventRateSourceGrp?: IUnderlyingComplexEventRateSourceGrp[]
  UnderlyingComplexEventRelativeDate?: IUnderlyingComplexEventRelativeDate
  UnderlyingComplexEventPeriodGrp?: IUnderlyingComplexEventPeriodGrp[]
  UnderlyingComplexEventCreditEventSourceGrp?: IUnderlyingComplexEventCreditEventSourceGrp[]
  UnderlyingComplexEventCreditEventGrp?: IUnderlyingComplexEventCreditEventGrp[]
}
