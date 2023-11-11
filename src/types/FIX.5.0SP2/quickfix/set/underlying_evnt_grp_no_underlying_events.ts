export interface IUnderlyingEvntGrpNoUnderlyingEvents {
  UnderlyingEventType?: number// [1] 1982 (Int)
  UnderlyingEventDate?: Date// [2] 1983 (LocalDate)
  UnderlyingEventTime?: Date// [3] 1984 (UtcTimestamp)
  UnderlyingEventTimeUnit?: string// [4] 1985 (String)
  UnderlyingEventTimePeriod?: number// [5] 1986 (Int)
  UnderlyingEventMonthYear?: string// [6] 2342 (String)
  UnderlyingEventPx?: number// [7] 1987 (Float)
  UnderlyingEventText?: string// [8] 2071 (String)
  EncodedUnderlyingEventTextLen?: number// [9] 2072 (Length)
  EncodedUnderlyingEventText?: Buffer// [10] 2073 (RawData)
}
