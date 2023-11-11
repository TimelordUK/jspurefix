export interface ILegEvntGrp {
  LegEventType?: number// [1] 2060 (Int)
  LegEventDate?: Date// [1] 2061 (LocalDate)
  LegEventTime?: Date// [1] 2062 (UtcTimestamp)
  LegEventTimeUnit?: string// [1] 2063 (String)
  LegEventTimePeriod?: number// [1] 2064 (Int)
  LegEventMonthYear?: string// [1] 2341 (String)
  LegEventPx?: number// [1] 2065 (Float)
  LegEventText?: string// [1] 2066 (String)
  EncodedLegEventTextLen?: number// [1] 2074 (Length)
  EncodedLegEventText?: Buffer// [1] 2075 (RawData)
}
