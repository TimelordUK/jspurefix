export interface ILegEvntGrp {
  LegEventType?: number// 2060
  LegEventDate?: Date// 2061
  LegEventTime?: Date// 2062
  LegEventTimeUnit?: string// 2063
  LegEventTimePeriod?: number// 2064
  LegEventMonthYear?: string// 2341
  LegEventPx?: number// 2065
  LegEventText?: string// 2066
  EncodedLegEventTextLen?: number// 2074
  EncodedLegEventText?: Buffer// 2075
}
