import { IComplexEventDates } from './complex_event_dates'
import { IComplexEventRateSourceGrp } from './complex_event_rate_source_grp'
import { IComplexEventRelativeDate } from './complex_event_relative_date'
import { IComplexEventPeriodGrp } from './complex_event_period_grp'
import { IComplexEventCreditEventSourceGrp } from './complex_event_credit_event_source_grp'
import { IComplexEventCreditEventGrp } from './complex_event_credit_event_grp'

export interface IComplexEventsNoComplexEvents {
  ComplexEventType?: number// [1] 1484 (Int)
  ComplexOptPayoutPaySide?: number// [2] 2117 (Int)
  ComplexOptPayoutReceiveSide?: number// [3] 2118 (Int)
  ComplexOptPayoutUnderlier?: string// [4] 2119 (String)
  ComplexOptPayoutAmount?: number// [5] 1485 (Float)
  ComplexOptPayoutPercentage?: number// [6] 2120 (Float)
  ComplexOptPayoutTime?: number// [7] 2121 (Int)
  ComplexOptPayoutCurrency?: string// [8] 2122 (String)
  ComplexOptPayoutCurrencyCodeSource?: string// [9] 2941 (String)
  ComplexEventPrice?: number// [10] 1486 (Float)
  ComplexEventPricePercentage?: number// [11] 2123 (Float)
  ComplexEventPriceBoundaryMethod?: number// [12] 1487 (Int)
  ComplexEventPriceBoundaryPrecision?: number// [13] 1488 (Float)
  ComplexEventPriceTimeType?: number// [14] 1489 (Int)
  ComplexEventCondition?: number// [15] 1490 (Int)
  ComplexEventDates?: IComplexEventDates// [16] NoComplexEventDates.1491, ComplexEventStartDate.1492 .. ComplexEventEndTime.1496
  ComplexEventCurrencyOne?: string// [17] 2124 (String)
  ComplexEventCurrencyOneCodeSource?: string// [18] 2942 (String)
  ComplexEventCurrencyTwo?: string// [19] 2125 (String)
  ComplexEventCurrencyTwoCodeSource?: string// [20] 2943 (String)
  ComplexEventQuoteBasis?: number// [21] 2126 (Int)
  ComplexEventFixedFXRate?: number// [22] 2127 (Float)
  ComplexEventSpotRate?: number// [23] 2407 (Float)
  ComplexEventForwardPoints?: number// [24] 2408 (Float)
  ComplexEventDeterminationMethod?: string// [25] 2128 (String)
  ComplexEventCalculationAgent?: number// [26] 2129 (Int)
  ComplexEventStrikePrice?: number// [27] 2130 (Float)
  ComplexEventStrikeFactor?: number// [28] 2131 (Float)
  ComplexEventStrikeNumberOfOptions?: number// [29] 2132 (Int)
  ComplexEventRateSourceGrp?: IComplexEventRateSourceGrp// [30] NoComplexEventRateSources.41013, ComplexEventRateSource.41014 .. ComplexEventReferencePageHeading.41017
  ComplexEventRelativeDate?: IComplexEventRelativeDate// [31] ComplexEventDateUnadjusted.41020, ComplexEventDateRelativeTo.41021 .. ComplexEventFixingTimeBusinessCenter.41028
  ComplexEventPeriodGrp?: IComplexEventPeriodGrp// [32] NoComplexEventPeriods.41010, ComplexEventPeriodType.41011 .. ComplexEventAveragingWeight.40996
  ComplexEventCreditEventsXIDRef?: string// [33] 2133 (String)
  ComplexEventCreditEventNotifyingParty?: number// [34] 2134 (Int)
  ComplexEventCreditEventBusinessCenter?: string// [35] 2135 (String)
  ComplexEventCreditEventStandardSources?: boolean// [36] 2136 (Boolean)
  ComplexEventCreditEventMinimumSources?: number// [37] 2137 (Int)
  ComplexEventCreditEventSourceGrp?: IComplexEventCreditEventSourceGrp// [38] NoComplexEventCreditEventSources.41029, ComplexEventCreditEventSource.41030
  ComplexEventCreditEventGrp?: IComplexEventCreditEventGrp// [39] NoComplexEventCreditEvents.40997, ComplexEventCreditEventType.40998 .. ComplexEventCreditEventQualifier.41006
  ComplexEventFuturesPriceValuation?: boolean// [40] 2597 (Boolean)
  ComplexEventOptionsPriceValuation?: boolean// [41] 2598 (Boolean)
  ComplexEventPVFinalPriceElectionFallback?: number// [42] 2599 (Int)
  ComplexEventXID?: string// [43] 2138 (String)
  ComplexEventXIDRef?: string// [44] 2139 (String)
}
