import 'reflect-metadata'

import { Setup } from '../env/setup'
import { IMarketDataRequest } from '../../types/FIX.5.0SP2/quickfix'

let setup: Setup
beforeAll(async () => {
  setup = new Setup('session/test-qf50sp2-initiator.json')
  await setup.init()
}, 45000)

const from = '55=GBPUSD|461=0'
const to = '461=0|55=GBPUSD'
const marketDataMsg = `8=FIX.5.0SP2|9=0000145|35=V|49=init-comp|56=accept-comp|34=2|57=fix|52=20231108-20:13:54.831|262=#GBPUSD#0#|263=1|264=0|267=3|269=0|269=1|269=H|146=1|${from}|10=109|`

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
    Symbol: 'GBPUSD',
    CFICode: '0'
  })
}

test(`parse MD request with instrument ${from}`, async () => {
  await checkMessage(marketDataMsg)
})

// 55=GBPUSD|461=0
test(`parse MD request with instrument ${to}`, async () => {
  const marketDataMsg2 = marketDataMsg.replace(from, to)
  expect(marketDataMsg).not.toEqual(marketDataMsg2)
  await checkMessage(marketDataMsg2)
})
