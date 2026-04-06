import { FileSessionStore } from '../../store/file-session-store'
import { MemorySessionStreamProvider } from '../../store/memory-session-stream-provider'
import { SessionId } from '../../store/session-id'
import { FixMsgStoreRecord } from '../../store/fix-msg-store-record'
import * as fs from 'fs'
import * as path from 'path'
import * as os from 'os'

const sessionId = new SessionId('FIX.4.4', 'SENDER', 'TARGET')

function makeStore (): { store: FileSessionStore, provider: MemorySessionStreamProvider } {
  const provider = new MemorySessionStreamProvider()
  const store = new FileSessionStore(sessionId, provider)
  return { store, provider }
}

function makeRecord (seqNum: number, msgType: string = 'D', encoded?: string): FixMsgStoreRecord {
  const msg = encoded ?? `8=FIX.4.4\x0135=${msgType}\x0134=${seqNum}\x0152=20260402-12:00:00.000\x01`
  return new FixMsgStoreRecord(msgType, new Date(), seqNum, undefined, msg)
}

test('initialize with empty provider', async () => {
  const { store } = makeStore()
  await store.initialize()
  expect(store.senderSeqNum).toBe(1)
  expect(store.targetSeqNum).toBe(1)
  expect(store.creationTime).toBeTruthy()
})

test('set and persist sender seq num', async () => {
  const { store, provider } = makeStore()
  await store.initialize()
  await store.setSenderSeqNum(42)
  expect(store.senderSeqNum).toBe(42)

  const content = provider.getSeqNumsContent()
  expect(content).toBeTruthy()
  expect(content).toContain('42')
})

test('set and persist target seq num', async () => {
  const { store, provider } = makeStore()
  await store.initialize()
  await store.setTargetSeqNum(99)
  expect(store.targetSeqNum).toBe(99)

  const content = provider.getSeqNumsContent()
  expect(content).toContain('99')
})

test('next sender seq num increments and persists', async () => {
  const { store } = makeStore()
  await store.initialize()
  const next = await store.nextSenderSeqNum()
  expect(next).toBe(2)
  expect(store.senderSeqNum).toBe(2)
})

test('put and get message', async () => {
  const { store } = makeStore()
  await store.initialize()

  const record = makeRecord(1)
  await store.put(record)

  const retrieved = await store.get(1)
  expect(retrieved).toBeTruthy()
  expect(retrieved!.seqNum).toBe(1)
  expect(retrieved!.msgType).toBe('D')
  expect(retrieved!.encoded).toContain('35=D')
})

test('put stores in body and header', async () => {
  const { store, provider } = makeStore()
  await store.initialize()

  await store.put(makeRecord(1))
  await store.put(makeRecord(2, 'A'))

  const bodyStr = provider.getBodyString()
  expect(bodyStr).toContain('35=D')
  expect(bodyStr).toContain('35=A')

  const headerLines = provider.getHeaderLinesSnapshot()
  expect(headerLines.length).toBe(2)
  expect(headerLines[0]).toMatch(/^1,0,\d+$/)
  expect(headerLines[1]).toMatch(/^2,\d+,\d+$/)
})

test('get returns null for missing seq', async () => {
  const { store } = makeStore()
  await store.initialize()
  const retrieved = await store.get(999)
  expect(retrieved).toBeNull()
})

test('get range returns ordered records', async () => {
  const { store } = makeStore()
  await store.initialize()

  await store.put(makeRecord(1))
  await store.put(makeRecord(2, 'A'))
  await store.put(makeRecord(3, '8'))

  const range = await store.getRange(1, 3)
  expect(range.length).toBe(3)
  expect(range[0].seqNum).toBe(1)
  expect(range[1].seqNum).toBe(2)
  expect(range[2].seqNum).toBe(3)
})

test('get range skips missing', async () => {
  const { store } = makeStore()
  await store.initialize()

  await store.put(makeRecord(1))
  await store.put(makeRecord(3))

  const range = await store.getRange(1, 3)
  expect(range.length).toBe(2)
  expect(range[0].seqNum).toBe(1)
  expect(range[1].seqNum).toBe(3)
})

test('reset clears everything', async () => {
  const { store } = makeStore()
  await store.initialize()
  await store.setSenderSeqNum(10)
  await store.setTargetSeqNum(20)
  await store.put(makeRecord(5))

  await store.reset()

  expect(store.senderSeqNum).toBe(1)
  expect(store.targetSeqNum).toBe(1)
  expect(await store.get(5)).toBeNull()
})

test('reload state from provider', async () => {
  const provider = new MemorySessionStreamProvider()

  // First store writes state
  const store1 = new FileSessionStore(sessionId, provider)
  await store1.initialize()
  await store1.setSenderSeqNum(15)
  await store1.setTargetSeqNum(25)
  await store1.put(makeRecord(1))
  await store1.put(makeRecord(2, 'A'))

  // Second store loads the same provider state
  const store2 = new FileSessionStore(sessionId, provider)
  await store2.initialize()

  expect(store2.senderSeqNum).toBe(15)
  expect(store2.targetSeqNum).toBe(25)

  const record = await store2.get(1)
  expect(record).toBeTruthy()
  expect(record!.msgType).toBe('D')
})

test('extract tag from SOH-delimited message', () => {
  const msg = '8=FIX.4.4\x0135=D\x0134=5\x0149=SENDER\x01'
  expect(FileSessionStore.extractTag(msg, '35')).toBe('D')
  expect(FileSessionStore.extractTag(msg, '34')).toBe('5')
  expect(FileSessionStore.extractTag(msg, '49')).toBe('SENDER')
  expect(FileSessionStore.extractTag(msg, '8')).toBe('FIX.4.4')
  expect(FileSessionStore.extractTag(msg, '999')).toBeNull()
})

test('extract tag from pipe-delimited message', () => {
  const msg = '8=FIX.4.4|35=D|34=5|49=SENDER|'
  expect(FileSessionStore.extractTag(msg, '35')).toBe('D')
  expect(FileSessionStore.extractTag(msg, '34')).toBe('5')
})

test('format and parse session time roundtrip', () => {
  const date = new Date('2026-04-02T12:30:45.123Z')
  const formatted = FileSessionStore.formatSessionTime(date)
  expect(formatted).toBe('20260402-12:30:45.123000')

  const parsed = FileSessionStore.parseSessionTime(formatted)
  expect(parsed).toBeTruthy()
  expect(parsed!.getTime()).toBe(date.getTime())
})

test('seqnums format matches QuickFix', async () => {
  const { store, provider } = makeStore()
  await store.initialize()
  await store.setSenderSeqNum(5)
  await store.setTargetSeqNum(10)

  const content = provider.getSeqNumsContent()!
  // QuickFix format: 20-char right-justified sender : target
  expect(content).toMatch(/^\s+5 : \s+10$/)
  const parts = content.split(':')
  expect(parts[0].trim()).toBe('5')
  expect(parts[1].trim()).toBe('10')
})

// Integration test with real files
test('file-based store roundtrip', async () => {
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'jspurefix-store-'))
  try {
    const store1 = FileSessionStore.createWithFiles(sessionId, tmpDir)
    await store1.initialize()
    await store1.setSenderSeqNum(7)
    await store1.setTargetSeqNum(14)
    await store1.put(makeRecord(1))
    await store1.put(makeRecord(2, 'A'))
    await store1.dispose()

    // Verify files exist
    expect(fs.existsSync(path.join(tmpDir, 'FIX.4.4-SENDER-TARGET.seqnums'))).toBe(true)
    expect(fs.existsSync(path.join(tmpDir, 'FIX.4.4-SENDER-TARGET.session'))).toBe(true)
    expect(fs.existsSync(path.join(tmpDir, 'FIX.4.4-SENDER-TARGET.header'))).toBe(true)
    expect(fs.existsSync(path.join(tmpDir, 'FIX.4.4-SENDER-TARGET.body'))).toBe(true)

    // Reload from files
    const store2 = FileSessionStore.createWithFiles(sessionId, tmpDir)
    await store2.initialize()

    expect(store2.senderSeqNum).toBe(7)
    expect(store2.targetSeqNum).toBe(14)

    const record = await store2.get(1)
    expect(record).toBeTruthy()
    expect(record!.msgType).toBe('D')

    const record2 = await store2.get(2)
    expect(record2).toBeTruthy()
    expect(record2!.msgType).toBe('A')

    await store2.dispose()
  } finally {
    fs.rmSync(tmpDir, { recursive: true, force: true })
  }
})
