export interface ITimeFormatter {
  writeLocalDate (v: Date): void
  writeUtcDate (v: Date): void

  writeLocalTimestamp (v: Date): void
  writeUtcTimestamp (v: Date): void

  writeLocalTime (v: Date): void
  writeUtcTime (v: Date): void

  getLocalDate (start: number): Date
  getUtcDate (start: number): Date

  getLocalTime (start: number): Date
  getUtcTime (start: number): Date

  getLocalTimestamp (start: number, end: number): Date
  getUtcTimestamp (start: number, end: number): Date
}
