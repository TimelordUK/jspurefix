import { ILegComplexEventDates } from './leg_complex_event_dates'
import { ILegComplexEventRateSourceGrp } from './leg_complex_event_rate_source_grp'
import { ILegComplexEventRelativeDate } from './leg_complex_event_relative_date'
import { ILegComplexEventPeriodGrp } from './leg_complex_event_period_grp'
import { ILegComplexEventCreditEventSourceGrp } from './leg_complex_event_credit_event_source_grp'
import { ILegComplexEventCreditEventGrp } from './leg_complex_event_credit_event_grp'

export interface ILegComplexEventsNoLegComplexEvents {
  LegComplexEventType?: number// [1] 2219 (Int)
  LegComplexOptPayoutPaySide?: number// [2] 2220 (Int)
  LegComplexOptPayoutReceiveSide?: number// [3] 2221 (Int)
  LegComplexOptPayoutUnderlier?: string// [4] 2222 (String)
  LegComplexOptPayoutAmount?: number// [5] 2223 (Float)
  LegComplexOptPayoutPercentage?: number// [6] 2224 (Float)
  LegComplexOptPayoutTime?: number// [7] 2225 (Int)
  LegComplexOptPayoutCurrency?: string// [8] 2226 (String)
  LegComplexOptPayoutCurrencyCodeSource?: string// [9] 2944 (String)
  LegComplexEventPrice?: number// [10] 2227 (Float)
  LegComplexEventPricePercentage?: number// [11] 2228 (Float)
  LegComplexEventPriceBoundaryMethod?: number// [12] 2229 (Int)
  LegComplexEventPriceBoundaryPrecision?: number// [13] 2230 (Float)
  LegComplexEventPriceTimeType?: number// [14] 2231 (Int)
  LegComplexEventCondition?: number// [15] 2232 (Int)
  LegComplexEventDates?: ILegComplexEventDates// [16] NoLegComplexEventDates.2250, LegComplexEventStartDate.2251 .. LegComplexEventEndTime.2247
  LegComplexEventCurrencyOne?: string// [17] 2233 (String)
  LegComplexEventCurrencyOneCodeSource?: string// [18] 2945 (String)
  LegComplexEventCurrencyTwo?: string// [19] 2234 (String)
  LegComplexEventCurrencyTwoCodeSource?: string// [20] 2946 (String)
  LegComplexEventQuoteBasis?: number// [21] 2235 (Int)
  LegComplexEventFixedFXRate?: number// [22] 2236 (Float)
  LegComplexEventSpotRate?: number// [23] 2409 (Float)
  LegComplexEventForwardPoints?: number// [24] 2410 (Float)
  LegComplexEventDeterminationMethod?: string// [25] 2237 (String)
  LegComplexEventCalculationAgent?: number// [26] 2238 (Int)
  LegComplexEventStrikePrice?: number// [27] 2239 (Float)
  LegComplexEventStrikeFactor?: number// [28] 2240 (Float)
  LegComplexEventStrikeNumberOfOptions?: number// [29] 2241 (Int)
  LegComplexEventRateSourceGrp?: ILegComplexEventRateSourceGrp// [30] NoLegComplexEventRateSources.41382, LegComplexEventRateSource.41383 .. LegComplexEvenReferencePageHeading.41386
  LegComplexEventRelativeDate?: ILegComplexEventRelativeDate// [31] LegComplexEventDateUnadjusted.41389, LegComplexEventDateRelativeTo.41390 .. LegComplexEventFixingTimeBusinessCenter.41397
  LegComplexEventPeriodGrp?: ILegComplexEventPeriodGrp// [32] NoLegComplexEventPeriods.41379, LegComplexEventPeriodType.41380 .. LegComplexEventAveragingWeight.41365
  LegComplexEventCreditEventsXIDRef?: string// [33] 2242 (String)
  LegComplexEventCreditEventNotifyingParty?: number// [34] 2243 (Int)
  LegComplexEventCreditEventBusinessCenter?: string// [35] 2244 (String)
  LegComplexEventCreditEventStandardSources?: boolean// [36] 2245 (Boolean)
  LegComplexEventCreditEventMinimumSources?: number// [37] 2246 (Int)
  LegComplexEventCreditEventSourceGrp?: ILegComplexEventCreditEventSourceGrp// [38] NoLegComplexEventCreditEventSources.41398, LegComplexEventCreditEventSource.41399
  LegComplexEventCreditEventGrp?: ILegComplexEventCreditEventGrp// [39] NoLegComplexEventCreditEvents.41366, LegComplexEventCreditEventType.41367 .. LegComplexEventCreditEventQualifier.41375
  LegComplexEventFuturesPriceValuation?: boolean// [40] 2608 (Boolean)
  LegComplexEventOptionsPriceValuation?: boolean// [41] 2609 (Boolean)
  LegComplexEventPVFinalPriceElectionFallback?: number// [42] 2610 (Int)
  LegComplexEventXID?: string// [43] 2248 (String)
  LegComplexEventXIDRef?: string// [44] 2249 (String)
}
