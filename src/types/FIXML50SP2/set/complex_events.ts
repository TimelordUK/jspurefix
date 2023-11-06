import { IComplexEventDates } from './complex_event_dates'
import { IComplexEventRateSourceGrp } from './complex_event_rate_source_grp'
import { IComplexEventRelativeDate } from './complex_event_relative_date'
import { IComplexEventPeriodGrp } from './complex_event_period_grp'
import { IComplexEventCreditEventSourceGrp } from './complex_event_credit_event_source_grp'
import { IComplexEventCreditEventGrp } from './complex_event_credit_event_grp'

export interface IComplexEvents {
  ComplexEventType?: number// [1] 1484 (Int)
  ComplexOptPayoutPaySide?: number// [1] 2117 (Int)
  ComplexOptPayoutReceiveSide?: number// [1] 2118 (Int)
  ComplexOptPayoutUnderlier?: string// [1] 2119 (String)
  ComplexOptPayoutAmount?: number// [1] 1485 (Float)
  ComplexOptPayoutPercentage?: number// [1] 2120 (Float)
  ComplexOptPayoutTime?: number// [1] 2121 (Int)
  ComplexOptPayoutCurrency?: string// [1] 2122 (String)
  ComplexEventPrice?: number// [1] 1486 (Float)
  ComplexEventPricePercentage?: number// [1] 2123 (Float)
  ComplexEventPriceBoundaryMethod?: number// [1] 1487 (Int)
  ComplexEventPriceBoundaryPrecision?: number// [1] 1488 (Float)
  ComplexEventPriceTimeType?: number// [1] 1489 (Int)
  ComplexEventCondition?: number// [1] 1490 (Int)
  ComplexEventCurrencyOne?: string// [1] 2124 (String)
  ComplexEventCurrencyTwo?: string// [1] 2125 (String)
  ComplexEventQuoteBasis?: number// [1] 2126 (Int)
  ComplexEventFixedFXRate?: number// [1] 2127 (Float)
  ComplexEventSpotRate?: number// [1] 2407 (Float)
  ComplexEventForwardPoints?: number// [1] 2408 (Float)
  ComplexEventDeterminationMethod?: string// [1] 2128 (String)
  ComplexEventCalculationAgent?: number// [1] 2129 (Int)
  ComplexEventStrikePrice?: number// [1] 2130 (Float)
  ComplexEventStrikeFactor?: number// [1] 2131 (Float)
  ComplexEventStrikeNumberOfOptions?: number// [1] 2132 (Int)
  ComplexEventCreditEventsXIDRef?: string// [1] 2133 (String)
  ComplexEventCreditEventNotifyingParty?: number// [1] 2134 (Int)
  ComplexEventCreditEventBusinessCenter?: string// [1] 2135 (String)
  ComplexEventCreditEventStandardSources?: boolean// [1] 2136 (Boolean)
  ComplexEventCreditEventMinimumSources?: number// [1] 2137 (Int)
  ComplexEventFuturesPriceValuation?: boolean// [1] 2597 (Boolean)
  ComplexEventOptionsPriceValuation?: boolean// [1] 2598 (Boolean)
  ComplexEventPVFinalPriceElectionFallback?: number// [1] 2599 (Int)
  ComplexEventXID?: string// [1] 2138 (String)
  ComplexEventXIDRef?: string// [1] 2139 (String)
  ComplexEventDates?: IComplexEventDates[]// [1] StartDt.1492, EndDt.1493
  ComplexEventRateSourceGrp?: IComplexEventRateSourceGrp[]// [2] RtSrc.41014, RtSrcTyp.41015 .. RefHdng.41017
  ComplexEventRelativeDate?: IComplexEventRelativeDate// [3] DtUnadj.41020, Reltv.41021 .. FixngBizCtr.41028
  ComplexEventPeriodGrp?: IComplexEventPeriodGrp[]// [4] Typ.41011, BizCtr.41012
  ComplexEventCreditEventSourceGrp?: IComplexEventCreditEventSourceGrp[]// [5] Src.41030
  ComplexEventCreditEventGrp?: IComplexEventCreditEventGrp[]// [6] Typ.40998, Val.40999 .. RtSrc.41004
}
