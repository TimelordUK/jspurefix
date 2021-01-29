/*
****************************************************************
* The ComplexEventTime component is nested within the          *
* ComplexEventDate in order to further qualify any dates       *
* placed on the event and is used to specify time ranges for   *
* which a complex event is effective. It is always provided    *
* within the context of start and end dates. The time range is *
* assumed to be in effect for the entirety of the date or date *
* range specified.                                             *
****************************************************************
*/
export interface IComplexEventTimes {
  ComplexEventStartTime?: string// 1495
  ComplexEventEndTime?: string// 1496
}
