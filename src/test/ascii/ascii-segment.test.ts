import 'reflect-metadata'

import { SegmentDescription } from '../../buffer'
import { ILogon } from '../../types/FIX4.4/repo'
import { MsgType } from '../../index'
import { Setup } from '../env/setup'
import { ParsingResult } from '../env/parsing-result'

const logon: string = '8=FIX4.4|9=0000208|35=A|49=sender-10|56=target-20|34=1|57=sub-a|52=20180610-10:39:01.621|98=2|108=62441|95=20|96=VgfoSqo56NqSVI1fLdlI|141=Y|789=4886|383=20|384=1|372=ipsum|385=R|464=N|553=sit|554=consectetur|10=49|'

let setup: Setup
beforeAll(async () => {
  setup = new Setup()
  await setup.init()
}, 45000)

test('0 gaps', async () => {
  const res: ParsingResult = await setup.client.parseText(logon)
  expect(res.event).toEqual('msg')
  expect(res.msgType).toEqual(MsgType.Logon)
  const unknowns: SegmentDescription[] = res.view?.structure?.layout['.undefined']
  expect(unknowns).toBeFalsy()
  const o: ILogon = res?.view?.toObject() as ILogon
  expect(o).toBeTruthy()
  expect(o.Password).toEqual('consectetur')
  expect(o.Username).toEqual('sit')
})

test('1 gap', async () => {
  const gap = logon.replace('108=62441|', '108=62441|9999=im not here')
  const res: ParsingResult = await setup.client.parseText(gap)
  expect(res.event).toEqual('msg')
  expect(res.msgType).toEqual(MsgType.Logon)
  const unknown: SegmentDescription = res?.view?.structure?.layout['.undefined']
  expect(unknown).toBeTruthy()
  expect(unknown.startTag).toEqual(9999)
  expect(unknown.startPosition).toEqual(10)
  const o: ILogon = res?.view?.toObject() as ILogon
  expect(o).toBeTruthy()
  expect(o.Password).toEqual('consectetur')
  expect(o.Username).toEqual('sit')
})

test('1 gap next to 1 gap', async () => {
  const gap = logon.replace('108=62441|', '108=62441|1=gap|2=gap|')
  const res: ParsingResult = await setup.client.parseText(gap)
  expect(res.event).toEqual('msg')
  expect(res.msgType).toEqual(MsgType.Logon)
  const unknowns: SegmentDescription[] = res?.view?.structure?.layout['.undefined']
  expect(unknowns).toBeTruthy()
  expect(Array.isArray(unknowns)).toEqual(true)
  expect(unknowns[0].startTag).toEqual(1)
  expect(unknowns[0].startPosition).toEqual(10)
  expect(unknowns[1].startTag).toEqual(2)
  expect(unknowns[1].startPosition).toEqual(11)
  const o: ILogon = res?.view?.toObject() as ILogon
  expect(o).toBeTruthy()
  expect(o.Password).toEqual('consectetur')
  expect(o.Username).toEqual('sit')
})

test('1 gap undefined msg', async () => {
  const gap = logon.replace('108=62441|', '108=62441|9999=im not here')
  const res: ParsingResult = await setup.client.parseText(gap)
  expect(res.event).toEqual('msg')
  expect(res.msgType).toEqual(MsgType.Logon)
  expect(res?.view?.getUndefined()).toBeTruthy()
  expect(res?.view?.undefinedForMsg()).toEqual('undefined tag = 9999')
})

test('2 gap undefined msg', async () => {
  const gap = logon.replace('108=62441|', '108=62441|1=gap|2=gap|')
  const res: ParsingResult = await setup.client.parseText(gap)
  expect(res.event).toEqual('msg')
  expect(res.msgType).toEqual(MsgType.Logon)
  expect(res?.view?.getUndefined()).toBeTruthy()
  expect(res?.view?.undefinedForMsg()).toEqual('undefined tags = 1, 2')
})
