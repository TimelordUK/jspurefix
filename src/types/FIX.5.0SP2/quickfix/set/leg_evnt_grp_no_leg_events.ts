export interface ILegEvntGrpNoLegEvents {
  LegEventType?: number// [1] 2060 (Int)
  LegEventDate?: Date// [2] 2061 (LocalDate)
  LegEventTime?: Date// [3] 2062 (UtcTimestamp)
  LegEventTimeUnit?: string// [4] 2063 (String)
  LegEventTimePeriod?: number// [5] 2064 (Int)
  LegEventMonthYear?: string// [6] 2341 (String)
  LegEventPx?: number// [7] 2065 (Float)
  LegEventText?: string// [8] 2066 (String)
  EncodedLegEventTextLen?: number// [9] 2074 (Length)
  EncodedLegEventText?: Buffer// [10] 2075 (RawData)
}
