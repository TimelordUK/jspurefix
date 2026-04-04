import { MemorySessionStreamProvider } from '../../store/memory-session-stream-provider'

function makeProvider (): MemorySessionStreamProvider {
  return new MemorySessionStreamProvider()
}

test('initial state is empty', () => {
  const provider = makeProvider()
  expect(provider.getBodySize()).toBe(0)
  expect(provider.getBodyString()).toBe('')
  expect(provider.getSeqNumsContent()).toBeNull()
  expect(provider.getSessionTimeContent()).toBeNull()
})

test('append and read body', async () => {
  const provider = makeProvider()
  const data1 = Buffer.from('8=FIX.4.4|35=D|')
  const data2 = Buffer.from('8=FIX.4.4|35=A|')

  const offset1 = await provider.appendBody(data1)
  expect(offset1).toBe(0)

  const offset2 = await provider.appendBody(data2)
  expect(offset2).toBe(data1.length)

  const read1 = await provider.readBody(offset1, data1.length)
  expect(read1.toString('utf8')).toBe('8=FIX.4.4|35=D|')

  const read2 = await provider.readBody(offset2, data2.length)
  expect(read2.toString('utf8')).toBe('8=FIX.4.4|35=A|')

  expect(provider.getBodySize()).toBe(data1.length + data2.length)
})

test('header lines', async () => {
  const provider = makeProvider()
  await provider.appendHeaderLine('1,0,16')
  await provider.appendHeaderLine('2,16,16')

  const lines = await provider.readHeaderLines()
  expect(lines.length).toBe(2)
  expect(lines[0]).toBe('1,0,16')
  expect(lines[1]).toBe('2,16,16')
})

test('seq nums read/write', async () => {
  const provider = makeProvider()
  expect(await provider.readSeqNums()).toBeNull()

  await provider.writeSeqNums('00000000000000000005 : 00000000000000000010')
  expect(await provider.readSeqNums()).toBe('00000000000000000005 : 00000000000000000010')
})

test('session time read/write', async () => {
  const provider = makeProvider()
  expect(await provider.readSessionTime()).toBeNull()

  await provider.writeSessionTime('20260402-12:00:00.000')
  expect(await provider.readSessionTime()).toBe('20260402-12:00:00.000')
})

test('reset clears everything', async () => {
  const provider = makeProvider()
  await provider.appendBody(Buffer.from('data'))
  await provider.appendHeaderLine('1,0,4')
  await provider.writeSeqNums('seq')
  await provider.writeSessionTime('time')

  await provider.reset()

  expect(provider.getBodySize()).toBe(0)
  expect((await provider.readHeaderLines()).length).toBe(0)
  expect(await provider.readSeqNums()).toBeNull()
  expect(await provider.readSessionTime()).toBeNull()
})

test('inspection methods', async () => {
  const provider = makeProvider()
  const data = Buffer.from('hello')
  await provider.appendBody(data)
  await provider.appendHeaderLine('line1')

  expect(provider.getBodyBytes().toString('utf8')).toBe('hello')
  expect(provider.getBodyString()).toBe('hello')
  expect(provider.getHeaderString()).toBe('line1')
  expect(provider.getHeaderLinesSnapshot()).toEqual(['line1'])
})
