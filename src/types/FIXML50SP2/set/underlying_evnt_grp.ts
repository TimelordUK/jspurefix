export interface IUnderlyingEvntGrp {
  UnderlyingEventType?: number// [1] 1982 (Int)
  UnderlyingEventDate?: Date// [1] 1983 (LocalDate)
  UnderlyingEventTime?: Date// [1] 1984 (UtcTimestamp)
  UnderlyingEventTimeUnit?: string// [1] 1985 (String)
  UnderlyingEventTimePeriod?: number// [1] 1986 (Int)
  UnderlyingEventMonthYear?: string// [1] 2342 (String)
  UnderlyingEventPx?: number// [1] 1987 (Float)
  UnderlyingEventText?: string// [1] 2071 (String)
  EncodedUnderlyingEventTextLen?: number// [1] 2072 (Length)
  EncodedUnderlyingEventText?: Buffer// [1] 2073 (RawData)
}
