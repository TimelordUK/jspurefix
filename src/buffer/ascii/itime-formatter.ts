export interface ITimeFormatter {
  writeLocalDate: (v: Date) => void
  writeUtcDate: (v: Date) => void

  writeLocalTimestamp: (v: Date) => void
  writeUtcTimestamp: (v: Date) => void

  writeLocalTime: (v: Date) => void
  writeUtcTime: (v: Date) => void

  getLocalDate: (start: number) => Date | null
  getUtcDate: (start: number) => Date | null

  getLocalTime: (start: number) => Date | null
  getUtcTime: (start: number) => Date | null

  getLocalTimestamp: (start: number, end: number) => Date | null
  getUtcTimestamp: (start: number, end: number) => Date | null
}
