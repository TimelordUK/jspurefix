import * as path from 'path'
import { FixDefinitions } from '../dictionary/definition/fix-definitions'
import { MsgView } from '../buffer/msg-view'
import { ISessionDescription } from '../transport/session-description'
import { Ascii } from '../buffer/ascii'
import { ILooseObject } from '../collections/collection'
import { MessageDefinition } from '../dictionary/definition/message-definition'
import { replayFixFile } from '../util/replay'
import { getDefinitions } from '../util/dictionary-definitions'

const root: string = path.join(__dirname, '../../data')

let definitions: FixDefinitions
let views: MsgView[]
let expected: ILooseObject

beforeAll(async () => {
  const sessionDescription: ISessionDescription = require(path.join(root, 'session/test-initiator.json'))
  expected = require(path.join(root, 'examples/FIX.4.4/fix.json'))
  definitions = await getDefinitions(sessionDescription.application.dictionary)
  views = await replayFixFile(definitions, sessionDescription, path.join(root, 'examples/FIX.4.4/fix.txt'), Ascii.Pipe)
}, 30000)

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
