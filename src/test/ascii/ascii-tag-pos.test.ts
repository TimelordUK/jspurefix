import 'reflect-metadata'

import * as path from 'path'
import { MsgView, TagPos } from '../../buffer'
import { Setup } from '../env/setup'

const root: string = path.join(__dirname, '../../../data')

let views: MsgView[]
let tp: TagPos[] | undefined

const testTags: TagPos[] = [
  new TagPos(0, 120, 0, 1), // 3
  new TagPos(1, 50, 1, 1), // 0
  new TagPos(2, 50, 2, 1), // 1
  new TagPos(3, 120, 3, 1), // 4
  new TagPos(4, 100, 4, 1) // 2
]

const expected: TagPos[] = [
  new TagPos(1, 50, 1, 1), // 0
  new TagPos(2, 50, 2, 1), // 1
  new TagPos(4, 100, 4, 1), // 2
  new TagPos(0, 120, 0, 1), // 3
  new TagPos(3, 120, 3, 1) // 4
]

const unsortedLogon = [
  new TagPos(0, 8, 2, 6),
  new TagPos(1, 9, 11, 7),
  new TagPos(2, 35, 22, 1),
  new TagPos(3, 49, 27, 9),
  new TagPos(4, 56, 40, 9),
  new TagPos(5, 34, 53, 1),
  new TagPos(6, 57, 58, 5),
  new TagPos(7, 52, 67, 21),
  new TagPos(8, 98, 92, 1),
  new TagPos(9, 108, 98, 5),
  new TagPos(10, 95, 107, 2),
  new TagPos(11, 96, 113, 20),
  new TagPos(12, 141, 138, 1),
  new TagPos(13, 789, 144, 4),
  new TagPos(14, 383, 153, 2),
  new TagPos(15, 384, 160, 1),
  new TagPos(16, 372, 166, 5),
  new TagPos(17, 385, 176, 1),
  new TagPos(18, 464, 182, 1),
  new TagPos(19, 553, 188, 3),
  new TagPos(20, 554, 196, 11)
]

let setup: Setup
beforeAll(async () => {
  setup = new Setup('session/test-initiator.json', null)
  await setup.init()
  views = await setup.client.replayer.replayFixFile(path.join(root, 'examples/FIX.4.4/quickfix/logon/fix.txt'))
  if (views && views.length > 0) {
    tp = views[0].structure?.tags.tagPos.slice(0, views[0].segment.endPosition)
  }
}, 45000)

test('logon tags parsed fully', () => {
  expect(tp).toEqual(unsortedLogon)
})

test('expect tags to sort in tag first order', () => {
  const sorted = testTags.slice().sort(TagPos.compare)
  const sortedTags = sorted.map(e => e.tag)
  expect(sortedTags).toEqual([50, 50, 100, 120, 120])
})

test('expect tags to sort in tag then start order', () => {
  const sorted = testTags.slice().sort(TagPos.compare)
  expect(sorted[0].tag).toEqual(sorted[1].tag)
  expect(sorted[0].start < sorted[1].start).toEqual(true)
})

test('expect start to carry with its tag', () => {
  const sorted = testTags.slice().sort(TagPos.compare)
  expect(sorted).toEqual(expected)
})

test('binary search on sorted', () => {
  const sorted = testTags.slice().sort(TagPos.compare)
  expect(TagPos.binarySearch(sorted, 100)).toEqual(2)
})

test('binary search for non existing tag', () => {
  const sorted = testTags.slice().sort(TagPos.compare)
  expect(TagPos.binarySearch(sorted, 1000) < 0).toEqual(true)
})

test('binary search duplicate tag', () => {
  const sorted = testTags.slice().sort(TagPos.compare)
  expect(TagPos.binarySearch(sorted, 50) <= 1).toEqual(true)
})

test('check logon', () => {
  const sorted = tp?.slice().sort(TagPos.compare)
  expect(sorted).toBeTruthy()
  if (!sorted) return
  expect(sorted[0].tag).toEqual(8)
  expect(sorted[sorted.length - 1].tag).toEqual(789)
})
