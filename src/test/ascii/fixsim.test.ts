import 'reflect-metadata'

import * as path from 'path'
import { FixDefinitions, MessageDefinition } from '../../dictionary/definition'
import { MsgView } from '../../buffer'
import { ILooseObject } from '../../collections/collection'
import { Setup } from '../env/setup'

const root: string = path.join(__dirname, '../../../data')

let definitions: FixDefinitions
let views: MsgView[]
let setup: Setup

beforeAll(async () => {
  setup = new Setup('session/fixsim-qf44-initiator.json', null)
  await setup.init()
  definitions = setup.client.config.definitions
  views = await setup.client.getViews('examples/FIX.4.4/fixsim/fix.txt')
}, 45000)

test('expect 46 messages in fixsim log', () => {
  expect(views.length).toEqual(46)
})

test('expect correct message type counts', () => {
  const counts = views.reduce<ILooseObject>((a: ILooseObject, latest: MsgView) => {
    const def: MessageDefinition | undefined = definitions.message.get(latest.segment.name)
    if (def) {
      a[def.msgType] = (a[def.msgType] || 0) + 1
    }
    return a
  }, {})
  expect(counts['A']).toEqual(2)   // Logon
  expect(counts['0']).toEqual(38)  // Heartbeat
  expect(counts['6']).toEqual(1)   // IOI
  expect(counts['1']).toEqual(1)   // TestRequest
  expect(counts['V']).toEqual(1)   // MarketDataRequest
  expect(counts['D']).toEqual(1)   // NewOrderSingle
  expect(counts['8']).toEqual(1)   // ExecutionReport
  expect(counts['R']).toEqual(1)   // QuoteRequest
})

/*
 * NewOrderSingle (line 18 of fixsim-examples.txt) has fragmented Instrument component:
 * 8=FIX.4.4|...|35=D|...|11=567...|15=GBP|21=2|22=5|38=100|40=2|44=100|48=VOD.L|54=1|55=VOD.L|59=0|60=...|388=1|10=091|
 *
 * Instrument tags (15=Currency, 22=SecurityIDSource, 48=SecurityID, 55=Symbol) are
 * interleaved with order tags (21=HandlInst, 38=OrderQty, 40=OrdType, 44=Price, 54=Side).
 * The segment parser must handle this non-contiguous layout.
 */
test('parse NewOrderSingle with fragmented Instrument', () => {
  const nos = views.find(v => {
    const def = definitions.message.get(v.segment.name)
    return def?.msgType === 'D'
  })
  expect(nos).toBeDefined()
  if (!nos) return

  const obj: any = nos.toObject()
  expect(obj.ClOrdID).toBeDefined()
  expect(obj.Side).toEqual('1')
  expect(obj.OrdType).toEqual('2')
  expect(obj.OrderQtyData?.OrderQty).toEqual(100)
  expect(obj.Price).toEqual(100)

  // Instrument component - these tags are scattered in the raw message
  // Note: In QF44 dictionary, Currency (tag 15) is at message level, not in Instrument
  expect(obj.Instrument).toBeDefined()
  expect(obj.Instrument?.Symbol).toEqual('VOD.L')
  expect(obj.Instrument?.SecurityID).toEqual('VOD.L')
  expect(obj.Instrument?.SecurityIDSource).toEqual('5')
  expect(obj.Currency).toEqual('GBP')
})

/*
 * ExecutionReport (line 29) also has fragmented Instrument:
 * 8=FIX.4.4|...|35=8|...|6=100|14=100|15=GBP|17=...|18=VOD.L|21=2|22=5|31=100|32=100|
 * 37=...|38=100|39=2|40=2|44=100|48=VOD.L|54=1|55=VOD.L|59=0|60=...|150=2|151=0|10=207|
 */
test('parse ExecutionReport with fragmented Instrument', () => {
  const er = views.find(v => {
    const def = definitions.message.get(v.segment.name)
    return def?.msgType === '8'
  })
  expect(er).toBeDefined()
  if (!er) return

  const obj: any = er.toObject()
  expect(obj.OrdStatus).toEqual('2')
  expect(obj.ExecType).toEqual('2')
  expect(obj.Side).toEqual('1')
  expect(obj.LeavesQty).toEqual(0)
  expect(obj.CumQty).toEqual(100)
  expect(obj.AvgPx).toEqual(100)

  // Instrument component - scattered tags
  // Note: In QF44 dictionary, Currency (tag 15) is at message level, not in Instrument
  expect(obj.Instrument).toBeDefined()
  expect(obj.Instrument?.Symbol).toEqual('VOD.L')
  expect(obj.Instrument?.SecurityID).toEqual('VOD.L')
  expect(obj.Instrument?.SecurityIDSource).toEqual('5')
  expect(obj.Currency).toEqual('GBP')
})
