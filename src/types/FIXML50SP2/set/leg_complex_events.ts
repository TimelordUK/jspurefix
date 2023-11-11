import { ILegComplexEventDates } from './leg_complex_event_dates'
import { ILegComplexEventRateSourceGrp } from './leg_complex_event_rate_source_grp'
import { ILegComplexEventRelativeDate } from './leg_complex_event_relative_date'
import { ILegComplexEventPeriodGrp } from './leg_complex_event_period_grp'
import { ILegComplexEventCreditEventSourceGrp } from './leg_complex_event_credit_event_source_grp'
import { ILegComplexEventCreditEventGrp } from './leg_complex_event_credit_event_grp'

export interface ILegComplexEvents {
  LegComplexEventType?: number// [1] 2219 (Int)
  LegComplexOptPayoutPaySide?: number// [1] 2220 (Int)
  LegComplexOptPayoutReceiveSide?: number// [1] 2221 (Int)
  LegComplexOptPayoutUnderlier?: string// [1] 2222 (String)
  LegComplexOptPayoutAmount?: number// [1] 2223 (Float)
  LegComplexOptPayoutPercentage?: number// [1] 2224 (Float)
  LegComplexOptPayoutTime?: number// [1] 2225 (Int)
  LegComplexOptPayoutCurrency?: string// [1] 2226 (String)
  LegComplexEventPrice?: number// [1] 2227 (Float)
  LegComplexEventPricePercentage?: number// [1] 2228 (Float)
  LegComplexEventPriceBoundaryMethod?: number// [1] 2229 (Int)
  LegComplexEventPriceBoundaryPrecision?: number// [1] 2230 (Float)
  LegComplexEventPriceTimeType?: number// [1] 2231 (Int)
  LegComplexEventCondition?: number// [1] 2232 (Int)
  LegComplexEventCurrencyOne?: string// [1] 2233 (String)
  LegComplexEventCurrencyTwo?: string// [1] 2234 (String)
  LegComplexEventQuoteBasis?: number// [1] 2235 (Int)
  LegComplexEventFixedFXRate?: number// [1] 2236 (Float)
  LegComplexEventSpotRate?: number// [1] 2409 (Float)
  LegComplexEventForwardPoints?: number// [1] 2410 (Float)
  LegComplexEventDeterminationMethod?: string// [1] 2237 (String)
  LegComplexEventCalculationAgent?: number// [1] 2238 (Int)
  LegComplexEventStrikePrice?: number// [1] 2239 (Float)
  LegComplexEventStrikeFactor?: number// [1] 2240 (Float)
  LegComplexEventStrikeNumberOfOptions?: number// [1] 2241 (Int)
  LegComplexEventCreditEventsXIDRef?: string// [1] 2242 (String)
  LegComplexEventCreditEventNotifyingParty?: number// [1] 2243 (Int)
  LegComplexEventCreditEventBusinessCenter?: string// [1] 2244 (String)
  LegComplexEventCreditEventStandardSources?: boolean// [1] 2245 (Boolean)
  LegComplexEventCreditEventMinimumSources?: number// [1] 2246 (Int)
  LegComplexEventFuturesPriceValuation?: boolean// [1] 2608 (Boolean)
  LegComplexEventOptionsPriceValuation?: boolean// [1] 2609 (Boolean)
  LegComplexEventPVFinalPriceElectionFallback?: number// [1] 2610 (Int)
  LegComplexEventXID?: string// [1] 2248 (String)
  LegComplexEventXIDRef?: string// [1] 2249 (String)
  LegComplexEventDates?: ILegComplexEventDates[]// [1] StartDt.2251, EndDt.2252
  LegComplexEventRateSourceGrp?: ILegComplexEventRateSourceGrp[]// [2] RtSrc.41383, RtSrcTyp.41384 .. RefHdng.41386
  LegComplexEventRelativeDate?: ILegComplexEventRelativeDate// [3] DtUnadj.41389, Reltv.41390 .. FixngBizCtr.41397
  LegComplexEventPeriodGrp?: ILegComplexEventPeriodGrp[]// [4] Typ.41380, BizCtr.41381
  LegComplexEventCreditEventSourceGrp?: ILegComplexEventCreditEventSourceGrp[]// [5] Src.41399
  LegComplexEventCreditEventGrp?: ILegComplexEventCreditEventGrp[]// [6] Typ.41367, Val.41368 .. RtSrc.41373
}
