export interface IEvntGrp {
  EventType?: number // [1] 865 (Int)
  EventDate?: Date// [1] 866 (LocalDate)
  EventTime?: Date// [1] 1145 (UtcTimestamp)
  EventTimeUnit?: string// [1] 1827 (String)
  EventTimePeriod?: number// [1] 1826 (Int)
  EventMonthYear?: string// [1] 2340 (String)
  EventPx?: number// [1] 867 (Float)
  EventText?: string// [1] 868 (String)
  EncodedEventTextLen?: number// [1] 1578 (Length)
  EncodedEventText?: Buffer// [1] 1579 (RawData)
}
