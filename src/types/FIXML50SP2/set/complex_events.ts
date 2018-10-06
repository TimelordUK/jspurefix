import { IComplexEventDates } from './complex_event_dates'
import { IComplexEventRateSourceGrp } from './complex_event_rate_source_grp'
import { IComplexEventRelativeDate } from './complex_event_relative_date'
import { IComplexEventPeriodGrp } from './complex_event_period_grp'
import { IComplexEventCreditEventSourceGrp } from './complex_event_credit_event_source_grp'
import { IComplexEventCreditEventGrp } from './complex_event_credit_event_grp'

export interface IComplexEvents {
  ComplexEventType?: number// 1484
  ComplexOptPayoutPaySide?: number// 2117
  ComplexOptPayoutReceiveSide?: number// 2118
  ComplexOptPayoutUnderlier?: string// 2119
  ComplexOptPayoutAmount?: number// 1485
  ComplexOptPayoutPercentage?: number// 2120
  ComplexOptPayoutTime?: number// 2121
  ComplexOptPayoutCurrency?: string// 2122
  ComplexEventPrice?: number// 1486
  ComplexEventPricePercentage?: number// 2123
  ComplexEventPriceBoundaryMethod?: number// 1487
  ComplexEventPriceBoundaryPrecision?: number// 1488
  ComplexEventPriceTimeType?: number// 1489
  ComplexEventCondition?: number// 1490
  ComplexEventCurrencyOne?: string// 2124
  ComplexEventCurrencyTwo?: string// 2125
  ComplexEventQuoteBasis?: number// 2126
  ComplexEventFixedFXRate?: number// 2127
  ComplexEventSpotRate?: number// 2407
  ComplexEventForwardPoints?: number// 2408
  ComplexEventDeterminationMethod?: string// 2128
  ComplexEventCalculationAgent?: number// 2129
  ComplexEventStrikePrice?: number// 2130
  ComplexEventStrikeFactor?: number// 2131
  ComplexEventStrikeNumberOfOptions?: number// 2132
  ComplexEventCreditEventsXIDRef?: string// 2133
  ComplexEventCreditEventNotifyingParty?: number// 2134
  ComplexEventCreditEventBusinessCenter?: string// 2135
  ComplexEventCreditEventStandardSources?: boolean// 2136
  ComplexEventCreditEventMinimumSources?: number// 2137
  ComplexEventFuturesPriceValuation?: boolean// 2597
  ComplexEventOptionsPriceValuation?: boolean// 2598
  ComplexEventPVFinalPriceElectionFallback?: number// 2599
  ComplexEventXID?: string// 2138
  ComplexEventXIDRef?: string// 2139
  ComplexEventDates?: IComplexEventDates[]
  ComplexEventRateSourceGrp?: IComplexEventRateSourceGrp[]
  ComplexEventRelativeDate?: IComplexEventRelativeDate
  ComplexEventPeriodGrp?: IComplexEventPeriodGrp[]
  ComplexEventCreditEventSourceGrp?: IComplexEventCreditEventSourceGrp[]
  ComplexEventCreditEventGrp?: IComplexEventCreditEventGrp[]
}
