import 'reflect-metadata'

import { EncodeProxy } from '../buffer'
import { FixDefinitions } from '../dictionary/definition'
import { ILooseObject } from '../collections/collection'
import { Setup } from './env/setup'

let definitions: FixDefinitions
let proxyFactory: EncodeProxy
let setup: Setup

beforeAll(async () => {
  setup = new Setup('session/qf-fix44.json', 'session/qf-fix44.json')
  await setup.init()
  definitions = setup.definitions
  proxyFactory = new EncodeProxy(definitions)
}, 45000)

test('check wrapper will reject unknown field', () => {
  const proxy: ILooseObject = proxyFactory.wrap('ExecutionReport')
  expect(proxy).toBeTruthy()
  function run (): void {
    proxy.Unknown = 999
  }
  expect(run).toThrow(/no field named Unknown/)
})

test('check wrapper will accept known field', () => {
  const proxy: ILooseObject = proxyFactory.wrap('ExecutionReport')
  expect(proxy).toBeTruthy()
  function run (): void {
    proxy.OrderID = 'ipsum'
  }
  run()
  expect(proxy.OrderID).toEqual('ipsum')
})

test('check wrapper rejects unknown enum value', () => {
  const proxy: ILooseObject = proxyFactory.wrap('ExecutionReport')
  expect(proxy).toBeTruthy()
  function run (): void {
    proxy.SettlType = '23'
  }
  expect(run).toThrow(/enum field SettlType does not support "23"/)
})

test('check wrapper will accept known enum field', () => {
  const proxy: ILooseObject = proxyFactory.wrap('ExecutionReport')
  expect(proxy).toBeTruthy()
  function run (): void {
    proxy.SettlType = '1'
  }
  run()
  expect(proxy.SettlType).toEqual('1')
})

test('check wrapper rejects Date field when not given Date', () => {
  const proxy: ILooseObject = proxyFactory.wrap('ExecutionReport')
  expect(proxy).toBeTruthy()
  function run (): void {
    proxy.SettlDate = "I'm not a good date"
  }
  expect(run).toThrow(/expects Date but receives/)
})

test('check wrapper will accept Date field when given Date', () => {
  const proxy: ILooseObject = proxyFactory.wrap('ExecutionReport')
  expect(proxy).toBeTruthy()
  function run (): void {
    proxy.SettlDate = new Date()
  }
  run()
  expect(proxy.SettlDate).toBeTruthy()
})

test('check wrapper rejects boolean field when not given boolean', () => {
  const proxy: ILooseObject = proxyFactory.wrap('ExecutionReport')
  expect(proxy).toBeTruthy()
  function run (): void {
    proxy.LastRptRequested = "I'm not a good boolean"
  }
  expect(run).toThrow(/expects boolean but receives/)
})

test('check wrapper will accept boolean field when given boolean', () => {
  const proxy: ILooseObject = proxyFactory.wrap('ExecutionReport')
  expect(proxy).toBeTruthy()
  function run (): void {
    proxy.LastRptRequested = true
  }
  run()
  expect(proxy.LastRptRequested).toEqual(true)
})

test('check wrapper rejects Buffer field when not given Buffer', () => {
  const proxy: ILooseObject = proxyFactory.wrap('ExecutionReport')
  expect(proxy).toBeTruthy()
  function run (): void {
    proxy.EncodedText = "I'm not a Buffer, don't accept me!"
  }
  expect(run).toThrow(/expects Buffer but receives/)
})

test('check wrapper will accept Buffer field when given Buffer', () => {
  const proxy: ILooseObject = proxyFactory.wrap('ExecutionReport')
  expect(proxy).toBeTruthy()
  function run (): void {
    proxy.EncodedText = Buffer.from('I am a buffer.', 'utf8')
  }
  run()
  expect(proxy.EncodedText).toBeTruthy()
})

test('check wrapper rejects string field when not given string', () => {
  const proxy: ILooseObject = proxyFactory.wrap('ExecutionReport')
  expect(proxy).toBeTruthy()
  function run (): void {
    proxy.ClOrdID = 123
  }
  expect(run).toThrow(/expects string but receives/)
})

test('check wrapper will accept string field when given string', () => {
  const proxy: ILooseObject = proxyFactory.wrap('ExecutionReport')
  expect(proxy).toBeTruthy()
  function run (): void {
    proxy.ClOrdID = "I'm a great string"
  }
  run()
  expect(proxy.ClOrdID).toEqual("I'm a great string")
})

test('check wrapper rejects number field when not given number', () => {
  const proxy: ILooseObject = proxyFactory.wrap('ExecutionReport')
  expect(proxy).toBeTruthy()
  function run (): void {
    proxy.GrossTradeAmt = "I'm no number"
  }
  expect(run).toThrow(/expects number but receives/)
})

test('check wrapper will accept number field when given number', () => {
  const proxy: ILooseObject = proxyFactory.wrap('ExecutionReport')
  expect(proxy).toBeTruthy()
  function run (): void {
    proxy.GrossTradeAmt = 12234
  }
  run()
  expect(proxy.GrossTradeAmt).toEqual(12234)
})

test('check wrapper rejects non object field when assigning component', () => {
  const proxy: ILooseObject = proxyFactory.wrap('ExecutionReport')
  expect(proxy).toBeTruthy()
  function run (): void {
    proxy.Parties = 'I should be an object, but I am sadly not'
  }
  expect(run).toThrow(/is a component but/)
})

test('check wrapper accepts object field when assigning component', () => {
  const proxy: ILooseObject = proxyFactory.wrap('ExecutionReport')
  expect(proxy).toBeTruthy()
  function run (): void {
    proxy.Parties = {
    }
  }
  run()
  expect(proxy.Parties).toBeTruthy()
})

test('check wrapper when assigned component wraps so it can be checked.', () => {
  const proxy: ILooseObject = proxyFactory.wrap('ExecutionReport')
  expect(proxy).toBeTruthy()
  function run (): void {
    proxy.YieldData = {
    }
  }
  run()
  function run2 (): void {
    proxy.YieldData.GrossTradeAmt = 999
  }
  // reject this
  expect(run2).toThrow(/no field named GrossTradeAmt/)
  proxy.YieldData.YieldCalcDate = new Date()
  // accept this
  expect(proxy.YieldData).toBeTruthy()
})

test('check wrapper when given populated component.', () => {
  const proxy: ILooseObject = proxyFactory.wrap('ExecutionReport')
  expect(proxy).toBeTruthy()
  function run (): void {
    proxy.YieldData = {
      ClOrdID: "I don't belong here."
    }
  }
  // reject this
  expect(run).toThrow(/no field named ClOrdID/)
})

test('check wrapper accepts number for group field and wraps n elements', () => {
  const proxy: ILooseObject = proxyFactory.wrap('ExecutionReport')
  expect(proxy).toBeTruthy()
  function run (): void {
    proxy.Parties = {
      NoPartyIDs: 2
    }
  }
  run()
  expect(proxy.Parties).toBeTruthy()
  expect(Array.isArray(proxy.Parties.NoPartyIDs)).toEqual(true)
  expect(proxy.Parties.NoPartyIDs.length).toEqual(2)
  // now assign a field, this should also be wrapped
  proxy.Parties.NoPartyIDs[0].PartyID = 'hello'
  expect(proxy.Parties.NoPartyIDs[0].PartyID).toBeTruthy()
  function run2 (): void {
    proxy.Parties.NoPartyIDs[0].GrossTradeAmt = 999
  }
  // reject this
  expect(run2).toThrow(/no field named GrossTradeAmt/)
})

test('check wrapper accepts array of objects in group component', () => {
  const proxy: ILooseObject = proxyFactory.wrap('ExecutionReport')
  expect(proxy).toBeTruthy()
  function run (): void {
    proxy.Parties = {
      NoPartyIDs: getParties()
    }
  }
  run()
  function run2 (): void {
    proxy.Parties.NoPartyIDs[0].GrossTradeAmt = 999
  }
  // reject this
  expect(run2).toThrow(/no field named GrossTradeAmt/)
})

function getParties (): ILooseObject {
  return [
    {
      PartyID: 'magna.',
      PartyIDSource: '9',
      PartyRole: 28,
      PtysSubGrp: {
        NoPartySubIDs: [
          {
            PartySubID: 'et',
            PartySubIDType: 22
          },
          {
            PartySubID: 'leo,',
            PartySubIDType: 10
          }
        ]
      }
    },
    {
      PartyID: 'iaculis',
      PartyIDSource: 'F',
      PartyRole: 2,
      PtysSubGrp: {
        NoPartySubIDs: [
          {
            PartySubID: 'Nullam',
            PartySubIDType: 12
          },
          {
            PartySubID: 'lectus,',
            PartySubIDType: 13
          },
          {
            PartySubID: 'eget',
            PartySubIDType: 18
          }
        ]
      }
    },
    {
      PartyID: 'vitae,',
      PartyIDSource: '9',
      PartyRole: 5,
      PtysSubGrp: {
        NoPartySubIDs: [
          {
            PartySubID: 'ac',
            PartySubIDType: 6
          }
        ]
      }
    }
  ]
}
