import { ILegComplexEventDates } from './leg_complex_event_dates'
import { ILegComplexEventRateSourceGrp } from './leg_complex_event_rate_source_grp'
import { ILegComplexEventRelativeDate } from './leg_complex_event_relative_date'
import { ILegComplexEventPeriodGrp } from './leg_complex_event_period_grp'
import { ILegComplexEventCreditEventSourceGrp } from './leg_complex_event_credit_event_source_grp'
import { ILegComplexEventCreditEventGrp } from './leg_complex_event_credit_event_grp'

export interface ILegComplexEvents {
  UnderlyingReturnRateValuationDateType?: number// 43073
  UnderlyingComplexOptPayoutPaySide?: number// 2261
  UnderlyingComplexOptPayoutReceiveSide?: number// 2262
  UnderlyingComplexOptPayoutUnderlier?: string// 2263
  LegComplexOptPayoutAmount?: number// 2223
  UnderlyingComplexOptPayoutPercentage?: number// 2264
  UnderlyingComplexOptPayoutTime?: number// 2265
  UnderlyingComplexOptPayoutCurrency?: string// 2266
  UnderlyingReturnRatePrice?: number// 43066
  UnderlyingComplexEventPricePercentage?: number// 2267
  LegComplexEventPriceBoundaryMethod?: number// 2229
  LegComplexEventPriceBoundaryPrecision?: number// 2230
  LegComplexEventPriceTimeType?: number// 2231
  LegComplexEventCondition?: number// 2232
  UnderlyingComplexEventCurrencyOne?: string// 2268
  UnderlyingComplexEventCurrencyTwo?: string// 2269
  UnderlyingComplexEventQuoteBasis?: number// 2270
  PaymentStubRate?: number// 40875
  UnderlyingComplexEventSpotRate?: number// 2419
  UnderlyingComplexEventForwardPoints?: string// 2420
  UnderlyingComplexEventDeterminationMethod?: string// 2272
  UnderlyingProvisionCalculationAgent?: number// 42156
  UnderlyingDividendPeriodStrikePrice?: number// 42867
  UnderlyingComplexEventStrikeFactor?: string// 2275
  UnderlyingComplexEventStrikeNumberOfOptions?: number// 2276
  UnderlyingComplexEventCreditEventsXIDRef?: string// 2277
  UnderlyingComplexEventCreditEventNotifyingParty?: number// 2278
  UnderlyingProtectionTermEventBusinessCenter?: string// 42073
  UnderlyingProtectionTermStandardSources?: string// 42074
  UnderlyingProtectionTermEventMinimumSources?: number// 42075
  UnderlyingComplexEventFuturesPriceValuation?: string// 2611
  UnderlyingComplexEventOptionsPriceValuation?: string// 2612
  UnderlyingComplexEventPVFinalPriceElectionFallback?: number// 2613
  UnderlyingDividendPeriodXID?: string// 42881
  UnderlyingStreamCommoditySettlPeriodXIDRef?: string// 42015
  LegComplexEventDates?: ILegComplexEventDates[]
  LegComplexEventRateSourceGrp?: ILegComplexEventRateSourceGrp[]
  LegComplexEventRelativeDate?: ILegComplexEventRelativeDate
  LegComplexEventPeriodGrp?: ILegComplexEventPeriodGrp[]
  LegComplexEventCreditEventSourceGrp?: ILegComplexEventCreditEventSourceGrp[]
  LegComplexEventCreditEventGrp?: ILegComplexEventCreditEventGrp[]
}
