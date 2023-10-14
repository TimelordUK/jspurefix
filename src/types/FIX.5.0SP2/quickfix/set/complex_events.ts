import { IComplexEventDates } from './complex_event_dates'

/*
***************************************************************
* The ComplexEvent Group is a repeating block which allows an *
* unlimited number and types of events in the lifetime of an  *
* option to be specified.                                     *
***************************************************************
*/
export interface IComplexEvents {
  ComplexEventType?: number// [1] 1484 (Int)
  ComplexOptPayoutAmount?: number// [2] 1485 (Float)
  ComplexEventPrice?: number// [3] 1486 (Float)
  ComplexEventPriceBoundaryMethod?: number// [4] 1487 (Int)
  ComplexEventPriceBoundaryPrecision?: number// [5] 1488 (Float)
  ComplexEventPriceTimeType?: number// [6] 1489 (Int)
  ComplexEventCondition?: number// [7] 1490 (Int)
  ComplexEventDates?: IComplexEventDates[]// [8] ComplexEventStartDate.1492, ComplexEventEndDate.1493 .. ComplexEventEndTime.1496
}
