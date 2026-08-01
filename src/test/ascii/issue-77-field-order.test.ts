import 'reflect-metadata'

import { Setup } from '../env/setup'
import { ILooseObject } from '../../collections/collection'

/**
 * https://github.com/TimelordUK/jspurefix/issues/77
 *
 * A counterparty sent MarketDataRequest with CFICode (461) before Symbol (55)
 * inside the NoRelatedSym group.  Both belong to the Instrument component, and the
 * spec order is Symbol first, so the segment parser threw `unknown tag type 146`
 * and the acceptor rejected the message.
 *
 * FIX does not require fields within a component to appear in dictionary order, so
 * both orderings have to parse to the same object.  Reported against 3.0.0.
 *
 * Fixed since, by the graph based segment parser and fragment detection back-ported
 * from cspurefix (backport plan phases 1 and 6).  Kept as a regression guard with
 * the reporter's exact messages, because nothing else pins this ordering down.
 */

let setup: Setup

beforeAll(async () => {
  setup = new Setup()
  await setup.init()
}, 45000)

// exactly as supplied on the issue, both orderings
const specOrder = '8=FIX.4.4|9=0000115|35=V|49=init-comp|56=accept-comp|34=2|57=fix|' +
  '52=20231108-09:40:46.257|262=1698937860913.38|263=1|264=0|267=3|269=0|269=1|269=H|' +
  '146=1|55=*|461=O|10=033|'

const swappedOrder = '8=FIX.4.4|9=0000115|35=V|49=init-comp|56=accept-comp|34=2|57=fix|' +
  '52=20231108-09:40:46.257|262=1698937860913.38|263=1|264=0|267=3|269=0|269=1|269=H|' +
  '146=1|461=O|55=*|10=033|'

function instrumentOf (o: ILooseObject): ILooseObject {
  const grp = o.InstrmtMDReqGrp ?? []
  expect(grp.length).toEqual(1)
  return grp[0].Instrument
}

describe('issue #77 - field order within a component', () => {
  test('parses with Symbol before CFICode (dictionary order)', async () => {
    const res = await setup.client.parseText(specOrder)
    expect(res.event).toEqual('msg')
    expect(res.msgType).toEqual('V')
    const o = res.view?.toObject() as ILooseObject
    expect(instrumentOf(o)).toEqual({ Symbol: '*', CFICode: 'O' })
  })

  test('parses with CFICode before Symbol (the reported rejection)', async () => {
    const res = await setup.client.parseText(swappedOrder)
    expect(res.event).toEqual('msg')
    expect(res.msgType).toEqual('V')
    const o = res.view?.toObject() as ILooseObject
    expect(instrumentOf(o)).toEqual({ Symbol: '*', CFICode: 'O' })
  })

  test('both orderings produce the same object', async () => {
    const a = await setup.client.parseText(specOrder)
    const b = await setup.client.parseText(swappedOrder)
    expect(b.view?.toObject()).toEqual(a.view?.toObject())
  })

  test('the swapped ordering reports no structural problems', async () => {
    const res = await setup.client.parseText(swappedOrder)
    const view = res.view
    expect(view).toBeTruthy()
    // these are what an acceptor's checkIntegrity rejects on
    expect(view?.invalid()).toEqual([])
    expect(view?.missing()).toEqual([])
    expect(view?.undefinedForMsg()).toBeNull()
  })
})
