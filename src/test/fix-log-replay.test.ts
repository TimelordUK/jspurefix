import * as path from 'path'
import { FixDefinitions, MessageDefinition } from '../dictionary/definition'
import { MsgView } from '../buffer'
import { AsciiChars } from '../buffer/ascii'
import { ISessionDescription } from '../transport'
import { ILooseObject } from '../collections/collection'
import { replayFixFile, getDefinitions } from '../util'

const root: string = path.join(__dirname, '../../data')

let definitions: FixDefinitions
let views: MsgView[]
let expected: ILooseObject

beforeAll(async () => {
  const sessionDescription: ISessionDescription = require(path.join(root, 'session/test-initiator.json'))
  expected = require(path.join(root, 'examples/FIX.4.4/fix.json'))
  definitions = await getDefinitions(sessionDescription.application.dictionary)
  views = await replayFixFile(definitions, sessionDescription, path.join(root, 'examples/FIX.4.4/fix.txt'), AsciiChars.Pipe)
}, 45000)

test('expect 50 messages in log', () => {
  expect(views.length).toEqual(50)
})

test('expect 50 messages of specific types in log', () => {
  const layout = views.reduce((a: ILooseObject, latest: MsgView) => {
    const def: MessageDefinition = definitions.message.get(latest.segment.name)
    if (def) {
      let lookup = a[def.msgType]
      if (!lookup) {
        lookup = 1
      } else {
        lookup++
      }
      a[def.msgType] = lookup
    }
    return a
  }, {} as ILooseObject)
  expect(layout).toEqual(expected)
})
