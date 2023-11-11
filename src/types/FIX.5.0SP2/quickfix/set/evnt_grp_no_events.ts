export interface IEvntGrpNoEvents {
  EventType?: number// [1] 865 (Int)
  EventDate?: Date// [2] 866 (LocalDate)
  EventTime?: Date// [3] 1145 (UtcTimestamp)
  EventTimeUnit?: string// [4] 1827 (String)
  EventTimePeriod?: number// [5] 1826 (Int)
  EventMonthYear?: string// [6] 2340 (String)
  EventPx?: number// [7] 867 (Float)
  EventText?: string// [8] 868 (String)
  EncodedEventTextLen?: number// [9] 1578 (Length)
  EncodedEventText?: Buffer// [10] 1579 (RawData)
}
