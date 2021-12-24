import 'reflect-metadata'

import { ElasticBuffer } from '../buffer'
import { AsciiChars } from '../buffer/ascii'

test('1 char in buffer length 1', () => {
  const buffer = new ElasticBuffer(1)
  buffer.writeChar(AsciiChars.Dot)
  expect(buffer.getPos()).toEqual(1)
  expect(buffer.toString()).toEqual('.')
  expect(buffer.currentSize()).toEqual(1)
})

test('string', () => {
  const s: string = 'fixing up fix'
  const buffer = new ElasticBuffer(1)
  buffer.writeString(s)
  expect(buffer.getPos()).toEqual(s.length)
  expect(buffer.toString()).toEqual(s)
  expect(buffer.currentSize()).toEqual(16)
})

test('whole number', () => {
  const n: number = 12345
  const buffer = new ElasticBuffer(10)
  buffer.writeWholeNumber(n)
  const asString = buffer.toString()
  expect(buffer.getPos()).toEqual(asString.length)
  expect(asString).toEqual('12345')
  expect(buffer.getWholeNumber(0, asString.length - 1)).toEqual(n)
  expect(buffer.currentSize() === 10)
})

test('-ve number', () => {
  const n: number = -2468
  const buffer = new ElasticBuffer(10)
  buffer.writeWholeNumber(n)
  const asString = buffer.toString()
  expect(buffer.getPos()).toEqual(asString.length)
  expect(asString).toEqual('-2468')
  expect(buffer.getWholeNumber(0, asString.length - 1)).toEqual(n)
  expect(buffer.currentSize()).toEqual(10)
})

test('+ve number with explicit sign', () => {
  const n: number = 2468
  const buffer = new ElasticBuffer(10)
  buffer.writeString(`+${n}`)
  const asString = buffer.toString()
  expect(asString).toEqual('+2468')
  expect(buffer.getWholeNumber(0, asString.length - 1)).toEqual(n)
})

test('floating point', () => {
  const n: number = 12345.6789
  const buffer = new ElasticBuffer(10)
  buffer.writeNumber(n)
  const asString = buffer.toString()
  expect(buffer.getPos()).toEqual(asString.length)
  expect(asString).toEqual('12345.6789')
  expect(buffer.getFloat(0, asString.length - 1)).toEqual(n)
  expect(buffer.currentSize()).toEqual(10)
})

test('floating point 1 dp', () => {
  const n: number = 12345678.9
  const buffer = new ElasticBuffer(10)
  buffer.writeNumber(n)
  const asString = buffer.toString()
  expect(buffer.getPos()).toEqual(asString.length)
  expect(asString).toEqual('12345678.9')
  expect(buffer.getFloat(0, asString.length - 1)).toEqual(n)
  expect(buffer.currentSize()).toEqual(10)
})

test('-ve floating point', () => {
  const n: number = -12345.6789
  const buffer = new ElasticBuffer(10)
  buffer.writeNumber(n)
  const asString = buffer.toString()
  expect(buffer.getPos()).toEqual(asString.length)
  expect(buffer.toString()).toEqual('-12345.6789')
  expect(buffer.getFloat(0, asString.length - 1)).toEqual(n)
  expect(buffer.currentSize()).toEqual(20)
})

test('floating point many dp', () => {
  const n: number = 0.123456789
  const buffer = new ElasticBuffer(10)
  buffer.writeNumber(n)
  const asString = buffer.toString()
  expect(buffer.getPos()).toEqual(asString.length)
  expect(asString).toEqual('0.123456789')
  expect(buffer.getFloat(0, asString.length - 1)).toEqual(n)
  expect(buffer.currentSize()).toEqual(20)
})

test('simple floating point 3.90', () => {
  const n: number = 3.90
  const buffer = new ElasticBuffer(10)
  buffer.writeNumber(n)
  const asString = buffer.toString()
  expect(buffer.getPos()).toEqual(asString.length)
  expect(asString).toEqual('3.9')
  expect(buffer.getFloat(0, asString.length - 1)).toEqual(n)
  expect(buffer.currentSize()).toEqual(10)
})

test('simple floating point 35.77', () => {
  const n: number = 35.77
  const buffer = new ElasticBuffer(10)
  buffer.writeNumber(n)
  const asString = buffer.toString()
  expect(buffer.getPos()).toEqual(asString.length)
  expect(asString).toEqual('35.77')
  expect(buffer.getFloat(0, asString.length - 1)).toEqual(n)
  expect(buffer.currentSize()).toEqual(10)
})

test('simple floating point 0.058457', () => {
  const n: number = 0.058457
  const buffer = new ElasticBuffer(10)
  buffer.writeNumber(n)
  const asString = buffer.toString()
  expect(buffer.getPos()).toEqual(asString.length)
  expect(asString).toEqual('0.058457')
  expect(buffer.getFloat(0, asString.length - 1)).toEqual(n)
  expect(buffer.currentSize()).toEqual(10)
})

test('simple floating point -0.06445', () => {
  const n: number = -0.06445
  const buffer = new ElasticBuffer(10)
  buffer.writeNumber(n)
  const asString = buffer.toString()
  expect(buffer.getPos()).toEqual(asString.length)
  expect(asString).toEqual('-0.06445')
  expect(buffer.getFloat(0, asString.length - 1)).toEqual(n)
  expect(buffer.currentSize()).toEqual(10)
})

test('whole number as floating point', () => {
  const n: number = 123456789
  const buffer = new ElasticBuffer(10)
  buffer.writeNumber(n)
  const asString = buffer.toString()
  expect(buffer.getPos()).toEqual(asString.length)
  expect(asString.toString()).toEqual('123456789')
  expect(buffer.getFloat(0, asString.length - 1)).toEqual(n)
  expect(buffer.currentSize()).toEqual(10)
})

test('tiny floating point', () => {
  const n: number = 0.000000000001
  const buffer = new ElasticBuffer(10)
  buffer.writeNumber(n)
  const asString = buffer.toString()
  expect(buffer.getPos()).toEqual(14)
  expect(asString).toEqual('0.000000000001')
  expect(buffer.getFloat(0, asString.length - 1)).toEqual(n)
  expect(buffer.currentSize()).toEqual(20)
})

test('tiny -ve floating point', () => {
  const n: number = -0.000000000001
  const buffer = new ElasticBuffer(10)
  buffer.writeNumber(n)
  const asString = buffer.toString()
  expect(buffer.getPos()).toEqual(asString.length)
  expect(asString).toEqual('-0.000000000001')
  expect(buffer.getFloat(0, asString.length - 1)).toEqual(n)
  expect(buffer.currentSize()).toEqual(20)
})

test('tiny +ve floating point with sign', () => {
  const n: number = 0.000000000001
  const buffer = new ElasticBuffer(10)
  buffer.writeString(`+${n.toFixed(12)}`)
  const asString = buffer.toString()
  expect(buffer.getPos()).toEqual(asString.length)
  expect(asString).toEqual('+0.000000000001')
  expect(buffer.getFloat(0, asString.length - 1)).toEqual(n)
  expect(buffer.currentSize()).toEqual(20)
})

test('boolean true', () => {
  const buffer = new ElasticBuffer(1)
  buffer.writeBoolean(true)
  expect(buffer.getPos()).toEqual(1)
  expect(buffer.toString()).toEqual('Y')
  expect(buffer.currentSize()).toEqual(1)
  expect(buffer.getBoolean(0)).toBe(true)
})

test('boolean false', () => {
  const buffer = new ElasticBuffer(1)
  buffer.writeBoolean(false)
  expect(buffer.getPos()).toEqual(1)
  expect(buffer.toString()).toEqual('N')
  expect(buffer.currentSize()).toEqual(1)
  expect(buffer.getBoolean(0)).toBe(false)
})

test('write buffer', () => {
  const buffer = new ElasticBuffer(1)
  const s: string = 'fixing up fix'
  const b = Buffer.from(s)
  buffer.writeBuffer(b)
  expect(buffer.getPos()).toEqual(b.length)
  expect(buffer.toString()).toEqual(s)
  expect(buffer.currentSize() === 16)
  const fetched: Buffer = buffer.getBuffer(0, b.length)
  expect(fetched).toEqual(b)
})

test('buffer shrinks', () => {
  const buffer = new ElasticBuffer(1)
  const s = '.'.repeat(60 * 1024)
  buffer.writeString(s)
  expect(buffer.getPos()).toEqual(s.length)
  expect(buffer.toString()).toEqual(s)
  expect(buffer.currentSize()).toEqual(65536)
  expect(buffer.reset()).toBe(true)
  expect(buffer.getPos()).toEqual(0)
  expect(buffer.currentSize() < 60 * 1024).toBe(true)
})
