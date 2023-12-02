import 'reflect-metadata'

import { Setup } from '../env/setup'
import { IMarketDataRequest } from '../../types/FIX4.4/quickfix'
import { FixVersion } from '../../dictionary'

let setup: Setup
beforeAll(async () => {
  setup = new Setup('session/qf-fix44.json')
  await setup.init()
}, 45000)

const from = '461=O|55=*'
const to = '55=*|461=O'
const marketDataMsg = '8=FIX.4.4|9=0000170|35=V|49=init-comp|56=accept-comp|34=2|57=fix|52=20231108-09:40:46.257|262=1698937860913.38|263=1|264=0|267=3|269=0|269=1|269=H|146=1|461=O|55=*|10=033|'

/*
55 (Symbol) =*
461 (CFICode) =O
 */

async function checkMessage (txt: string): Promise<void> {
  const res = await setup.client.parseText(txt)
  expect(res.view).toBeTruthy()
  const o = res.view?.toObject() as IMarketDataRequest
  expect(o).toBeTruthy()
  expect(o.InstrmtMDReqGrp).toBeTruthy()
  expect(o.InstrmtMDReqGrp?.NoRelatedSym).toBeTruthy()
  const grp = o.InstrmtMDReqGrp?.NoRelatedSym ?? []
  expect(grp.length).toEqual(1)
  expect(grp[0].Instrument).toEqual({
    Symbol: '*',
    CFICode: 'O'
  })
  // console.log(JSON.stringify(o, null, 4))
}

test('check definitions version', () => {
  expect(setup.definitions.getMajor()).toEqual(4)
  expect(setup.definitions.getMinor()).toEqual(4)
  expect(setup.definitions.getServicePack()).toEqual(0)
  expect(setup.definitions.version).toEqual(FixVersion.FIX44)
})

test(`parse MD request with instrument ${from}`, async () => {
  await checkMessage(marketDataMsg)
})

// 55=GBPUSD|461=0
test(`parse MD request with instrument ${to}`, async () => {
  const marketDataMsg2 = marketDataMsg.replace(from, to)
  expect(marketDataMsg).not.toEqual(marketDataMsg2)
  await checkMessage(marketDataMsg2)
})
