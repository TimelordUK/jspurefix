import 'reflect-metadata'

import * as path from 'path'
import { FixDefinitions, MessageDefinition } from '../../dictionary/definition'
import { MsgView } from '../../buffer'
import { ILooseObject } from '../../collections/collection'
import { Setup } from '../env/setup'

const root: string = path.join(__dirname, '../../../data')

let definitions: FixDefinitions
let views: MsgView[]
let expected: ILooseObject
let setup: Setup

beforeAll(async () => {
  setup = new Setup('session/test-initiator.json', null)
  await setup.init()
  definitions = setup.client.config.definitions
  expected = require(path.join(root, 'examples/FIX.4.4/fix.json'))
  views = await setup.client.getViews()
}, 45000)

test('expect 50 messages in log', () => {
  expect(views.length).toEqual(50)
})

test('expect 50 messages of specific types in log', () => {
  const layout = views.reduce<ILooseObject>((a: ILooseObject, latest: MsgView) => {
    const def: MessageDefinition | undefined = definitions.message.get(latest.segment.name)
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
  }, {})
  expect(layout).toEqual(expected)
})
