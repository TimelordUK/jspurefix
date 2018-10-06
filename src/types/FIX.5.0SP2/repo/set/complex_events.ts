import { IComplexEventDates } from './complex_event_dates'

/*
***************************************************************
* The ComplexEvent Group is a repeating block which allows an *
* unlimited number and types of events in the lifetime of an  *
* option to be specified.                                     *
***************************************************************
*/
export interface IComplexEvents {
  ComplexEventType?: number// 1484
  ComplexOptPayoutAmount?: number// 1485
  ComplexEventPrice?: number// 1486
  ComplexEventPriceBoundaryMethod?: number// 1487
  ComplexEventPriceBoundaryPrecision?: number// 1488
  ComplexEventPriceTimeType?: number// 1489
  ComplexEventCondition?: number// 1490
  ComplexEventDates?: IComplexEventDates[]
}
