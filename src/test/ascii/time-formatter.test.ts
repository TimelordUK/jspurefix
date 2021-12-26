import 'reflect-metadata'

import { ElasticBuffer } from '../../buffer'
import { ITimeFormatter, TimeFormatter } from '../../buffer/ascii'

const buffer = new ElasticBuffer()
let timeFormatter: ITimeFormatter
const localDateTime: Date = new Date(2010, 7, 6, 15, 55, 59, 123)
const localDateTimeMidnight: Date = new Date(2010, 4, 6, 0, 0, 0, 0)
const localDate: Date = new Date(localDateTime.getFullYear(), localDateTime.getMonth(), localDateTime.getDate(), 0, 0, 0, 0)
const localTime: Date = new Date(0, 0, 0, localDateTime.getHours(), localDateTime.getMinutes(), localDateTime.getSeconds(), localDateTime.getMilliseconds())
const localTimeMidnight: Date = new Date(0, 0, 0, localDateTimeMidnight.getHours(), localDateTimeMidnight.getMinutes(), localDateTimeMidnight.getSeconds(), localDateTimeMidnight.getMilliseconds())
const utcDateTime: Date = new Date(Date.UTC(localDateTime.getFullYear(), localDateTime.getMonth(), localDateTime.getDate(), localDateTime.getHours(), localDateTime.getMinutes(), localDateTime.getSeconds(), localDateTime.getMilliseconds()))
const utcTime: Date = new Date(Date.UTC(0, 0, 0, localDateTime.getHours(), localDateTime.getMinutes(), localDateTime.getSeconds(), localDateTime.getMilliseconds()))
const utcDate: Date = new Date(Date.UTC(localDateTime.getFullYear(), localDateTime.getMonth(), localDateTime.getDate()))
const dateLength = 4 + 2 + 2
const timeLength = 2 + 1 + 2 + 1 + 2 + 1 + 3
const dateTimeLength = dateLength + 1 + timeLength

beforeAll(async () => {
  timeFormatter = new TimeFormatter(buffer)
})

test('check LocalDate', () => {
  buffer.reset()
  timeFormatter.writeLocalDate(localDateTime)
  expect(buffer.getPos()).toEqual(dateLength)
  expect(buffer.toString()).toEqual('20100806')
  expect(timeFormatter.getLocalDate(0)).toEqual(localDate)
})

test('check LocalTime', () => {
  buffer.reset()
  timeFormatter.writeLocalTime(localDateTime)
  expect(buffer.getPos()).toEqual(timeLength)
  expect(buffer.toString()).toEqual('15:55:59.123')
  expect(timeFormatter.getLocalTime(0)).toEqual(localTime)
})

test('check LocalTime Midnight', () => {
  buffer.reset()
  timeFormatter.writeLocalTime(localDateTimeMidnight)
  expect(buffer.getPos()).toEqual(timeLength)
  expect(buffer.toString()).toEqual('00:00:00.000')
  expect(timeFormatter.getLocalTime(0)).toEqual(localTimeMidnight)
})

test('check LocalTimestamp Midnight', () => {
  buffer.reset()
  timeFormatter.writeLocalTimestamp(localDateTimeMidnight)
  expect(buffer.getPos()).toEqual(dateTimeLength)
  expect(buffer.toString()).toEqual('20100506-00:00:00.000')
  expect(timeFormatter.getLocalTimestamp(0, dateTimeLength)).toEqual(localDateTimeMidnight)
})

test('check LocalTimestamp', () => {
  buffer.reset()
  timeFormatter.writeLocalTimestamp(localDateTime)
  expect(buffer.getPos()).toEqual(dateTimeLength)
  expect(buffer.toString()).toEqual('20100806-15:55:59.123')
  expect(timeFormatter.getLocalTimestamp(0, dateTimeLength)).toEqual(localDateTime)
})

test('check UtcDate', () => {
  buffer.reset()
  timeFormatter.writeUtcDate(utcDateTime)
  expect(buffer.getPos()).toEqual(dateLength)
  expect(buffer.toString()).toEqual('20100806')
  expect(timeFormatter.getUtcDate(0)).toEqual(utcDate)
})

test('check LocalTime', () => {
  buffer.reset()
  timeFormatter.writeUtcTime(utcDateTime)
  expect(buffer.getPos()).toEqual(timeLength)
  expect(buffer.toString()).toEqual('15:55:59.123')
  expect(timeFormatter.getUtcTime(0)).toEqual(utcTime)
})
