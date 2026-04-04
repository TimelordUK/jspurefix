import { MemorySessionStore } from '../../store/memory-session-store'
import { SessionId } from '../../store/session-id'
import { FixMsgStoreRecord } from '../../store/fix-msg-store-record'

function makeStore (): MemorySessionStore {
  return new MemorySessionStore(new SessionId('FIX.4.4', 'SENDER', 'TARGET'))
}

function makeRecord (seqNum: number, msgType: string = 'D'): FixMsgStoreRecord {
  return new FixMsgStoreRecord(msgType, new Date(), seqNum, undefined, `8=FIX.4.4|35=${msgType}|34=${seqNum}|`)
}

test('initial state', () => {
  const store = makeStore()
  expect(store.senderSeqNum).toBe(1)
  expect(store.targetSeqNum).toBe(1)
  expect(store.sessionId.toString()).toBe('FIX.4.4-SENDER-TARGET')
  expect(store.creationTime).toBeTruthy()
})

test('set and get sender seq num', async () => {
  const store = makeStore()
  await store.setSenderSeqNum(5)
  expect(store.senderSeqNum).toBe(5)
})

test('set and get target seq num', async () => {
  const store = makeStore()
  await store.setTargetSeqNum(10)
  expect(store.targetSeqNum).toBe(10)
})

test('next sender seq num increments', async () => {
  const store = makeStore()
  expect(store.senderSeqNum).toBe(1)
  const next = await store.nextSenderSeqNum()
  expect(next).toBe(2)
  expect(store.senderSeqNum).toBe(2)
})

test('next target seq num increments', async () => {
  const store = makeStore()
  const next = await store.nextTargetSeqNum()
  expect(next).toBe(2)
  expect(store.targetSeqNum).toBe(2)
})

test('put and get message', async () => {
  const store = makeStore()
  const record = makeRecord(1)
  await store.put(record)
  const retrieved = await store.get(1)
  expect(retrieved).toBeTruthy()
  expect(retrieved!.seqNum).toBe(1)
  expect(retrieved!.msgType).toBe('D')
  expect(retrieved!.encoded).toBe('8=FIX.4.4|35=D|34=1|')
})

test('get returns null for missing seq', async () => {
  const store = makeStore()
  const retrieved = await store.get(999)
  expect(retrieved).toBeNull()
})

test('put clones record', async () => {
  const store = makeStore()
  const record = makeRecord(1)
  await store.put(record)
  const retrieved = await store.get(1)
  expect(retrieved).not.toBe(record)
})

test('get range returns ordered records', async () => {
  const store = makeStore()
  await store.put(makeRecord(3))
  await store.put(makeRecord(1))
  await store.put(makeRecord(5))
  await store.put(makeRecord(2))

  const range = await store.getRange(1, 3)
  expect(range.length).toBe(3)
  expect(range[0].seqNum).toBe(1)
  expect(range[1].seqNum).toBe(2)
  expect(range[2].seqNum).toBe(3)
})

test('get range returns empty for no matches', async () => {
  const store = makeStore()
  await store.put(makeRecord(1))
  const range = await store.getRange(10, 20)
  expect(range.length).toBe(0)
})

test('reset clears everything', async () => {
  const store = makeStore()
  await store.setSenderSeqNum(10)
  await store.setTargetSeqNum(20)
  await store.put(makeRecord(5))

  await store.reset()

  expect(store.senderSeqNum).toBe(1)
  expect(store.targetSeqNum).toBe(1)
  expect(await store.get(5)).toBeNull()
})

test('session id file prefix', () => {
  const id = new SessionId('FIX.4.4', 'SENDER', 'TARGET')
  expect(id.toFilePrefix()).toBe('FIX.4.4-SENDER-TARGET')
  expect(id.getFilePath('/tmp', 'seqnums')).toContain('FIX.4.4-SENDER-TARGET.seqnums')
})
