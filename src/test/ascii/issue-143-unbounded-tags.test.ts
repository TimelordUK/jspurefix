import 'reflect-metadata'

import { Tags } from '../../buffer/tag/tags'
import { AsciiParser } from '../../buffer/ascii'
import { StringDuplex, StringDuplexTraits } from '../../transport'
import { Setup } from '../env/setup'

/**
 * Reproduction for https://github.com/TimelordUK/jspurefix/issues/143
 *
 * The tag store grew with no upper bound, so a misaligned or oversized stream
 * that never reaches a frame boundary could drive an unbounded new Array(N)
 * and crash the process with a fatal V8 heap OOM.  Growth is now capped and
 * an over-long message is rejected with a thrown error instead.
 */

let setup: Setup
beforeAll(async () => {
  setup = new Setup()
  await setup.init()
}, 45000)

test('tag store throws once growth would exceed the maximum', () => {
  const tags = new Tags(2, 4)
  for (let i = 0; i < 4; ++i) {
    tags.store(0, 1, i)
  }
  expect(() => { tags.store(0, 1, 4) }).toThrow(/exceeds maximum/)
})

test('misaligned stream is rejected rather than growing tags unbounded', async () => {
  const header = '8=FIX4.4|9=101|35=A|'
  let stream = header
  for (let i = 0; i < 64; ++i) {
    stream += `${100 + i}=x|`
  }
  const parser = new AsciiParser(setup.client.config,
    new StringDuplex(stream, StringDuplexTraits.Terminate).readable,
    setup.client.rxBuffer,
    16)
  await expect(new Promise((resolve, reject) => {
    parser.on('error', (e: Error) => { reject(e) })
    parser.on('done', () => { resolve(null) })
    parser.on('msg', () => { resolve(null) })
  })).rejects.toThrow(/exceeds maximum/)
})

test('a normal message within the maximum still parses', async () => {
  const res = await setup.client.parseText('8=FIX4.4|9=101|35=A|')
  expect(res.event).toEqual('done')
})

test('initial allocation is clamped to the maximum when starting length is larger', () => {
  const tags = new Tags(1000, 4)
  expect(tags.tagPos.length).toEqual(4)
})

test('clone preserves the maximum so a clone cannot grow unbounded either', () => {
  const tags = new Tags(2, 4)
  for (let i = 0; i < 3; ++i) {
    tags.store(0, 1, i)
  }
  const cloned = tags.clone()
  expect(cloned.maxLength).toEqual(4)
  cloned.store(0, 1, 3)
  expect(() => { cloned.store(0, 1, 4) }).toThrow(/exceeds maximum/)
})
