import { IUnderlyingComplexEventDates } from './underlying_complex_event_dates'
import { IUnderlyingComplexEventRateSourceGrp } from './underlying_complex_event_rate_source_grp'
import { IUnderlyingComplexEventRelativeDate } from './underlying_complex_event_relative_date'
import { IUnderlyingComplexEventPeriodGrp } from './underlying_complex_event_period_grp'
import { IUnderlyingComplexEventCreditEventSourceGrp } from './underlying_complex_event_credit_event_source_grp'
import { IUnderlyingComplexEventCreditEventGrp } from './underlying_complex_event_credit_event_grp'

export interface IUnderlyingComplexEventsNoUnderlyingComplexEvents {
  UnderlyingComplexEventType?: number// [1] 2046 (Int)
  UnderlyingComplexOptPayoutPaySide?: number// [2] 2261 (Int)
  UnderlyingComplexOptPayoutReceiveSide?: number// [3] 2262 (Int)
  UnderlyingComplexOptPayoutUnderlier?: string// [4] 2263 (String)
  UnderlyingComplexOptPayoutAmount?: number// [5] 2047 (Float)
  UnderlyingComplexOptPayoutPercentage?: number// [6] 2264 (Float)
  UnderlyingComplexOptPayoutTime?: number// [7] 2265 (Int)
  UnderlyingComplexOptPayoutCurrency?: string// [8] 2266 (String)
  UnderlyingComplexOptPayoutCurrencyCodeSource?: string// [9] 2947 (String)
  UnderlyingComplexEventPrice?: number// [10] 2048 (Float)
  UnderlyingComplexEventPricePercentage?: number// [11] 2267 (Float)
  UnderlyingComplexEventPriceBoundaryMethod?: number// [12] 2049 (Int)
  UnderlyingComplexEventPriceBoundaryPrecision?: number// [13] 2050 (Float)
  UnderlyingComplexEventPriceTimeType?: number// [14] 2051 (Int)
  UnderlyingComplexEventCondition?: number// [15] 2052 (Int)
  UnderlyingComplexEventDates?: IUnderlyingComplexEventDates// [16] NoUnderlyingComplexEventDates.2053, UnderlyingComplexEventStartDate.2054 .. UnderlyingComplexEventEndTime.2058
  UnderlyingComplexEventCurrencyOne?: string// [17] 2268 (String)
  UnderlyingComplexEventCurrencyOneCodeSource?: string// [18] 2948 (String)
  UnderlyingComplexEventCurrencyTwo?: string// [19] 2269 (String)
  UnderlyingComplexEventCurrencyTwoCodeSource?: string// [20] 2949 (String)
  UnderlyingComplexEventQuoteBasis?: number// [21] 2270 (Int)
  UnderlyingComplexEventFixedFXRate?: number// [22] 2271 (Float)
  UnderlyingComplexEventSpotRate?: number// [23] 2419 (Float)
  UnderlyingComplexEventForwardPoints?: number// [24] 2420 (Float)
  UnderlyingComplexEventDeterminationMethod?: string// [25] 2272 (String)
  UnderlyingComplexEventCalculationAgent?: number// [26] 2273 (Int)
  UnderlyingComplexEventStrikePrice?: number// [27] 2274 (Float)
  UnderlyingComplexEventStrikeFactor?: number// [28] 2275 (Float)
  UnderlyingComplexEventStrikeNumberOfOptions?: number// [29] 2276 (Int)
  UnderlyingComplexEventRateSourceGrp?: IUnderlyingComplexEventRateSourceGrp// [30] NoUnderlyingComplexEventRateSources.41732, UnderlyingComplexEventRateSource.41733 .. UnderlyingComplexEventReferencePageHeading.41736
  UnderlyingComplexEventRelativeDate?: IUnderlyingComplexEventRelativeDate// [31] UnderlyingComplexEventDateUnadjusted.41739, UnderlyingComplexEventDateRelativeTo.41740 .. UnderlyingComplexEventFixingTimeBusinessCenter.41747
  UnderlyingComplexEventPeriodGrp?: IUnderlyingComplexEventPeriodGrp// [32] NoUnderlyingComplexEventPeriods.41729, UnderlyingComplexEventPeriodType.41730 .. UnderlyingComplexEventAveragingWeight.41715
  UnderlyingComplexEventCreditEventsXIDRef?: string// [33] 2277 (String)
  UnderlyingComplexEventCreditEventNotifyingParty?: number// [34] 2278 (Int)
  UnderlyingComplexEventCreditEventBusinessCenter?: string// [35] 2279 (String)
  UnderlyingComplexEventCreditEventStandardSources?: boolean// [36] 2280 (Boolean)
  UnderlyingComplexEventCreditEventMinimumSources?: number// [37] 2281 (Int)
  UnderlyingComplexEventCreditEventSourceGrp?: IUnderlyingComplexEventCreditEventSourceGrp// [38] NoUnderlyingComplexEventCreditEventSources.41748, UnderlyingComplexEventCreditEventSource.41749
  UnderlyingComplexEventCreditEventGrp?: IUnderlyingComplexEventCreditEventGrp// [39] NoUnderlyingComplexEventCreditEvents.41716, UnderlyingComplexEventCreditEventType.41717 .. UnderlyingComplexEventCreditEventQualifier.41725
  UnderlyingComplexEventFuturesPriceValuation?: boolean// [40] 2611 (Boolean)
  UnderlyingComplexEventOptionsPriceValuation?: boolean// [41] 2612 (Boolean)
  UnderlyingComplexEventPVFinalPriceElectionFallback?: number// [42] 2613 (Int)
  UnderlyingComplexEventXID?: string// [43] 2282 (String)
  UnderlyingComplexEventXIDRef?: string// [44] 2283 (String)
}
