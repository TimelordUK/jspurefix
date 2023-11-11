import { IUnderlyingComplexEventDates } from './underlying_complex_event_dates'
import { IUnderlyingComplexEventRateSourceGrp } from './underlying_complex_event_rate_source_grp'
import { IUnderlyingComplexEventRelativeDate } from './underlying_complex_event_relative_date'
import { IUnderlyingComplexEventPeriodGrp } from './underlying_complex_event_period_grp'
import { IUnderlyingComplexEventCreditEventSourceGrp } from './underlying_complex_event_credit_event_source_grp'
import { IUnderlyingComplexEventCreditEventGrp } from './underlying_complex_event_credit_event_grp'

export interface IUnderlyingComplexEvents {
  UnderlyingComplexEventType?: number// [1] 2046 (Int)
  UnderlyingComplexOptPayoutPaySide?: number// [1] 2261 (Int)
  UnderlyingComplexOptPayoutReceiveSide?: number// [1] 2262 (Int)
  UnderlyingComplexOptPayoutUnderlier?: string// [1] 2263 (String)
  UnderlyingComplexOptPayoutAmount?: number// [1] 2047 (Float)
  UnderlyingComplexOptPayoutPercentage?: number// [1] 2264 (Float)
  UnderlyingComplexOptPayoutTime?: number// [1] 2265 (Int)
  UnderlyingComplexOptPayoutCurrency?: string// [1] 2266 (String)
  UnderlyingComplexEventPrice?: number// [1] 2048 (Float)
  UnderlyingComplexEventPricePercentage?: number// [1] 2267 (Float)
  UnderlyingComplexEventPriceBoundaryMethod?: number// [1] 2049 (Int)
  UnderlyingComplexEventPriceBoundaryPrecision?: number// [1] 2050 (Float)
  UnderlyingComplexEventPriceTimeType?: number// [1] 2051 (Int)
  UnderlyingComplexEventCondition?: number// [1] 2052 (Int)
  UnderlyingComplexEventCurrencyOne?: string// [1] 2268 (String)
  UnderlyingComplexEventCurrencyTwo?: string// [1] 2269 (String)
  UnderlyingComplexEventQuoteBasis?: number// [1] 2270 (Int)
  UnderlyingComplexEventFixedFXRate?: number// [1] 2271 (Float)
  UnderlyingComplexEventSpotRate?: number// [1] 2419 (Float)
  UnderlyingComplexEventForwardPoints?: number// [1] 2420 (Float)
  UnderlyingComplexEventDeterminationMethod?: string// [1] 2272 (String)
  UnderlyingComplexEventCalculationAgent?: number// [1] 2273 (Int)
  UnderlyingComplexEventStrikePrice?: number// [1] 2274 (Float)
  UnderlyingComplexEventStrikeFactor?: number// [1] 2275 (Float)
  UnderlyingComplexEventStrikeNumberOfOptions?: number// [1] 2276 (Int)
  UnderlyingComplexEventCreditEventsXIDRef?: string// [1] 2277 (String)
  UnderlyingComplexEventCreditEventNotifyingParty?: number// [1] 2278 (Int)
  UnderlyingComplexEventCreditEventBusinessCenter?: string// [1] 2279 (String)
  UnderlyingComplexEventCreditEventStandardSources?: boolean// [1] 2280 (Boolean)
  UnderlyingComplexEventCreditEventMinimumSources?: number// [1] 2281 (Int)
  UnderlyingComplexEventFuturesPriceValuation?: boolean// [1] 2611 (Boolean)
  UnderlyingComplexEventOptionsPriceValuation?: boolean// [1] 2612 (Boolean)
  UnderlyingComplexEventPVFinalPriceElectionFallback?: number// [1] 2613 (Int)
  UnderlyingComplexEventXID?: string// [1] 2282 (String)
  UnderlyingComplexEventXIDRef?: string// [1] 2283 (String)
  UnderlyingComplexEventDates?: IUnderlyingComplexEventDates[]// [1] StartDt.2054, EndDt.2055
  UnderlyingComplexEventRateSourceGrp?: IUnderlyingComplexEventRateSourceGrp[]// [2] RtSrc.41733, RtSrcTyp.41734 .. RefHdg.41736
  UnderlyingComplexEventRelativeDate?: IUnderlyingComplexEventRelativeDate// [3] DtUnadj.41739, Reltv.41740 .. FixngBizCtr.41747
  UnderlyingComplexEventPeriodGrp?: IUnderlyingComplexEventPeriodGrp[]// [4] Typ.41730, BizCtr.41731
  UnderlyingComplexEventCreditEventSourceGrp?: IUnderlyingComplexEventCreditEventSourceGrp[]// [5] Src.41749
  UnderlyingComplexEventCreditEventGrp?: IUnderlyingComplexEventCreditEventGrp[]// [6] Typ.41717, Val.41718 .. RtSrc.41723
}
