import 'reflect-metadata'

import { ComponentFieldDefinition, FixDefinitions, MessageDefinition } from '../../dictionary/definition'
import { ElasticBuffer, Tags } from '../../buffer'
import { AsciiChars, AsciiEncoder, TimeFormatter } from '../../buffer/ascii'
import { ILooseObject } from '../../collections/collection'
import {
  IInstrument,
  INewOrderSingle,
  IOrderQtyData,
  IStandardHeader,
  ITradeCaptureReportRequest,
  ITrdCapDtGrpNoDates,
  OrdType,
  SecurityIDSource,
  SecurityType,
  Side,
  SubscriptionRequestType,
  TimeInForce,
  TradeRequestType
} from '../../types/FIX4.4/quickfix'
import { MsgType } from '../../index'
import { ContainedFieldSet } from '../../dictionary/contained'
import { AsciiMsgTransmitter } from '../../transport/ascii/ascii-msg-transmitter'
import { Setup } from '../env/setup'
import { ParsingResult } from '../env/parsing-result'

let definitions: FixDefinitions
let session: AsciiMsgTransmitter
let encoder: AsciiEncoder
let nos: MessageDefinition | null
let er: MessageDefinition

const localDate: Date = new Date(2018, 6, 25)
const utcTimeStamp: Date = new Date(Date.UTC(2018, 5, 10, 16, 35, 0, 246))
const utcDate: Date = new Date(Date.UTC(2018, 5, 10, 0, 0, 0, 0))
const utcTime: Date = new Date(Date.UTC(2018, 0, 1, 16, 35, 0, 246))
let setup: Setup
let buffer: ElasticBuffer

beforeAll(async () => {
  setup = new Setup('session/qf-fix44.json', null)
  await setup.init()
  definitions = setup.definitions
  const config = setup.clientConfig
  definitions = config.definitions
  session = setup.client.transmitter as AsciiMsgTransmitter
  buffer = setup.client.txBuffer
  encoder = session.encoder as AsciiEncoder
  nos = definitions.message.get('NewOrderSingle')
  const erd = definitions.message.get('ExecutionReport')
  if (erd) {
    er = erd
  }
}, 45000)

test('expect a definition ', () => {
  expect(nos).toBeTruthy()
})

function toFix (o: ILooseObject, set?: ContainedFieldSet, enc?: AsciiEncoder): string {
  const theEncode = enc ?? encoder
  session.buffer.reset()
  if (set) {
    theEncode.encode(o, set.name)
  } else {
    theEncode.encode(o, nos?.name ?? '')
  }
  return session.buffer.toString()
}

function toFixMessage (o: ILooseObject, msg: MessageDefinition): string {
  session.encodeMessage(msg.msgType, o)
  return session.buffer.toString()
}

test('encode heartbeat', async () => {
  const factory = session.config.factory
  expect(factory).toBeTruthy()
  if (!factory) return
  const hb = factory.heartbeat('test01')
  const hbd = definitions.message.get('Heartbeat')
  expect(hbd).toBeTruthy()
  if (!hbd) return
  const fix = toFixMessage(hb, hbd)
  expect(fix).toBeTruthy()
  const res: ParsingResult = await setup.client.parseText(fix)
  expect(res.event).toEqual('msg')
  expect(res.msgType).toEqual('0')
  const len = res.view?.getTyped(Tags.BodyLengthTag)
  const expected = fix.length - '8=FIX.4.4|9=0000081|'.length - '10=159|'.length
  expect(len).toEqual(expected)
})

test('encode custom header PossDupFlag', () => {
  const no: ILooseObject = {
    StandardHeader: {
      PossDupFlag: true
    }
  }
  const hb = definitions.message.get('Heartbeat')
  const fix: string = hb ? toFixMessage(no, hb) : ''
  expect(fix).toMatch('43=Y|')
})

test('encode custom header PossDupFlag', () => {
  const no: ILooseObject = {
    StandardHeader: {
      MsgSeqNum: 9999
    }
  }
  const hb = definitions.message.get('Heartbeat')
  const fix: string = hb ? toFixMessage(no, hb) : ''
  expect(fix).toMatch('34=9999|')
})

test('encode string ClOrdID ', () => {
  const no: ILooseObject = {}
  no.ClOrdID = 'Order-a'
  const fix: string = toFix(no)
  expect(fix).toEqual('11=Order-a|')
})

test('should not encode empty string', () => {
  const no: ILooseObject = {}
  no.ClOrdID = ''
  const fix: string = toFix(no)
  expect(fix).toEqual('')
})

test('should not encode null string', () => {
  const no: ILooseObject = {}
  no.ClOrdID = null
  const fix: string = toFix(no)
  expect(fix).toEqual('')
})

test('encode +ve numeric (int) Price ', () => {
  const no: ILooseObject = {}
  no.Price = 100
  const fix: string = toFix(no)
  expect(fix).toEqual('44=100|')
})

test('encode -ve numeric (int) Price ', () => {
  const no: ILooseObject = {}
  no.Price = -100
  const fix: string = toFix(no)
  expect(fix).toEqual('44=-100|')
})

test('encode +ve numeric (double 8dp) Price ', () => {
  const no: ILooseObject = {}
  no.Price = 123.12345678
  const fix: string = toFix(no)
  expect(fix).toEqual('44=123.12345678|')
})

test('encode +ve numeric (double 14dp) Price ', () => {
  const no: ILooseObject = {}
  no.Price = 123.12345678901234
  const fix: string = toFix(no)
  expect(fix).toEqual('44=123.12345678901234|')
})

test('encode -ve numeric (double 14dp) Price ', () => {
  const no: ILooseObject = {}
  no.Price = -123.12345678901234
  const fix: string = toFix(no)
  expect(fix).toEqual('44=-123.12345678901234|')
})

test('encode +ve string Price ', () => {
  const no: ILooseObject = {}
  no.Price = '123.12345678901234'
  const fix: string = toFix(no)
  expect(fix).toEqual('44=123.12345678901234|')
})

test('encode LocalDate TradeDate ', () => {
  const no: ILooseObject = {}
  no.TradeDate = localDate
  const fix: string = toFix(no)
  expect(fix).toEqual('75=20180725|')
})

test('encode UTCTIMESTAMP ExpireTime ', () => {
  const no: ILooseObject = {}
  no.ExpireTime = utcTimeStamp
  const fix: string = toFix(no)
  expect(fix).toEqual('126=20180610-16:35:00.246|')
})

test('encode UTCTIMESTAMP ExpireTime - check padding', () => {
  const no: ILooseObject = {}
  no.ExpireTime = new Date(Date.UTC(2018, 0, 1, 0, 0, 0, 1))
  const fix: string = toFix(no)
  expect(fix).toEqual('126=20180101-00:00:00.001|')
})

test('encode UTCDATEONLY MDEntryDate', () => {
  const mdGrp: ComponentFieldDefinition | null = definitions.component.get('MDFullGrp')
  expect(mdGrp).toBeTruthy()
  if (!mdGrp) return
  const grp: ILooseObject = {
    NoMDEntries: [
      {
        MDEntryType: '0',
        MDEntryDate: utcDate
      }
    ]
  }
  const fix: string = toFix(grp, mdGrp)
  expect(fix).toEqual('268=1|269=0|272=20180610|')
})

test('encode UTCTIMEONLY MDEntryTime', () => {
  const mdGrp: ComponentFieldDefinition | null = definitions.component.get('MDFullGrp')
  expect(mdGrp).toBeTruthy()
  const grp: ILooseObject = {
    NoMDEntries: [
      {
        MDEntryType: '0',
        MDEntryTime: utcTime
      }
    ]
  }
  if (!mdGrp) return
  const fix: string = toFix(grp, mdGrp)
  expect(fix).toEqual('268=1|269=0|273=16:35:00.246|')
})

function getTCR1 (): ITradeCaptureReportRequest {
  const d0 = new Date(Date.UTC(2018, 11, 1, 0, 0, 0))
  const d1 = new Date(Date.UTC(2018, 11, 2, 0, 0, 0))
  return {
    TradeRequestID: 'all-trades',
    TradeRequestType: TradeRequestType.AllTrades,
    SubscriptionRequestType: SubscriptionRequestType.SnapshotPlusUpdates,
    TrdCapDtGrp: {
      NoDates: [
        {
          TransactTime: d0
        },
        {
          TransactTime: d1
        }
      ] as ITrdCapDtGrpNoDates[]
    }
  } as ITradeCaptureReportRequest
}

test('encode TradeCaptureReportRequest with TransactTime', () => {
  const tcr = getTCR1()
  const d = definitions.message.get('TradeCaptureReportRequest')
  if (!d) return
  const fix: string = toFix(tcr, d)
  expect(fix).toEqual('568=all-trades|569=0|263=1|580=2|60=20181201-00:00:00.000|60=20181202-00:00:00.000|')
})

test('encode BOOLEAN (true) ReportToExch', () => {
  expect(er).toBeTruthy()
  const e: ILooseObject = {}
  e.ReportToExch = true
  const fix: string = toFix(e, er)
  expect(fix).toEqual('113=Y|')
})

test('encode BOOLEAN (truthy) ReportToExch', () => {
  expect(er).toBeTruthy()
  const e: ILooseObject = {}
  e.ReportToExch = 1
  const fix: string = toFix(e, er)
  expect(fix).toEqual('113=Y|')
})

test('encode BOOLEAN (string) ReportToExch', () => {
  expect(er).toBeTruthy()
  const e: ILooseObject = {}
  e.ReportToExch = 'TRUE'
  const fix: string = toFix(e, er)
  expect(fix).toEqual('113=Y|')
})

test('encode BOOLEAN (false) ReportToExch', () => {
  expect(er).toBeTruthy()
  const e: ILooseObject = {}
  e.ReportToExch = false
  const fix: string = toFix(e, er)
  expect(fix).toEqual('113=N|')
})

test('encode BOOLEAN (falsy) ReportToExch', () => {
  expect(er).toBeTruthy()
  const e: ILooseObject = {}
  e.ReportToExch = 0
  const fix: string = toFix(e, er)
  expect(fix).toEqual('113=N|')
})

test('encode RawData EncodedText', () => {
  expect(er).toBeTruthy()
  const toEncode: string = 'this is fix'
  const e: ILooseObject = {
    EncodedText: Buffer.alloc(toEncode.length, toEncode, 'utf8')
  }
  const fix: string = toFix(e, er)
  expect(fix).toEqual('354=11|355=this is fix|')
})

test('encode empty RawData EncodedText', () => {
  expect(er).toBeTruthy()
  const toEncode: string = ''
  const e: ILooseObject = {
    EncodedText: Buffer.alloc(toEncode.length, toEncode, 'utf8')
  }
  const fix: string = toFix(e, er)
  expect(fix).toEqual('354=0|355=|')
})

function getParties (): ILooseObject {
  return {
    Parties: {
      NoPartyIDs: [
        {
          PartyID: 'magna.',
          PartyIDSource: '9',
          PartyRole: 28
        },
        {
          PartyID: 'iaculis',
          PartyIDSource: 'F',
          PartyRole: 2
        }]
    }
  }
}

function getPartiesNoPartyID (): ILooseObject {
  return {
    Parties: {
      NoPartyIDs: [
        {
          // missing PartyID
          PartyIDSource: '9',
          PartyRole: 28
        }
      ]
    }
  }
}

test('encode repeated group of simple repository Parties', () => {
  expect(er).toBeTruthy()
  const e: ILooseObject = getParties()
  const fix: string = toFix(e, er)
  expect(fix).toEqual('453=2|448=magna.|447=9|452=28|448=iaculis|447=F|452=2|')
})

test('use a carat as log delimiter', () => {
  expect(er).toBeTruthy()
  const caratEncoder = new AsciiEncoder(session.buffer, definitions, new TimeFormatter(session.buffer), AsciiChars.Soh, AsciiChars.Carat)
  const e: ILooseObject = getParties()
  const fix: string = toFix(e, er, caratEncoder)
  expect(fix).toEqual('453=2^448=magna.^447=9^452=28^448=iaculis^447=F^452=2^')
})

test('use a carat as log delimiter with Soh in buffer to show encoding still works', () => {
  expect(er).toBeTruthy()
  const caratEncoder = new AsciiEncoder(session.buffer, definitions, new TimeFormatter(session.buffer), AsciiChars.Soh, AsciiChars.Carat)
  const e: ILooseObject = getParties()
  const fix: string = toFix(e, er, caratEncoder)
  expect(fix).toEqual('453=2^448=magna.^447=9^452=28^448=iaculis^447=F^452=2^')
  const trimmed = caratEncoder.trim().toString()
  expect(trimmed).toEqual('453=2448=magna.447=9452=28448=iaculis447=F452=2')
})

test('encode repeated group with no PartyID - should encode', () => {
  expect(er).toBeTruthy()
  const e: ILooseObject = getPartiesNoPartyID()
  const fix: string = toFix(e, er)
  expect(fix).toEqual('453=1|447=9|452=28|')
})

test('encode repeated group with no array - should throw', () => {
  expect(er).toBeTruthy()
  const e: ILooseObject = {
    Parties: {
      NoPartyIDs: 'should be an array'
    }
  }
  function run (): void {
    toFix(e, er)
  }
  expect(run).toThrow(/expected array/)
})

test('encode repeated group with empty array', () => {
  expect(er).toBeTruthy()
  const e: ILooseObject = {
    Parties: {
      NoPartyIDs: []
    }
  }
  expect(toFix(e, er)).toEqual('453=0|')
})

function getInstrument (): ILooseObject {
  return {
    Instrument: {
      Symbol: 'ac,',
      SymbolSfx: 'non',
      SecurityID: 'Pellentesque',
      SecurityIDSource: 'B',
      Product: 2
    }
  }
}

function getInstrumentNestedGroup (): ILooseObject {
  return {
    Instrument: {
      Symbol: 'ac,',
      SymbolSfx: 'non',
      SecurityID: 'Pellentesque',
      SecurityIDSource: 'B',
      SecAltIDGrp: {
        NoSecurityAltID: [
          {
            SecurityAltID: 'lorem',
            SecurityAltIDSource: 'consequat'
          },
          {
            SecurityAltID: 'sapien',
            SecurityAltIDSource: 'tempor'
          }
        ]
      },
      Product: 2
    }
  }
}

test('encode component', () => {
  expect(er).toBeTruthy()
  const e: ILooseObject = getInstrument()
  expect(toFix(e, er)).toEqual('55=ac,|65=non|48=Pellentesque|22=B|460=2|')
})

test('encode component nested group', () => {
  expect(er).toBeTruthy()
  const e: ILooseObject = getInstrumentNestedGroup()
  expect(toFix(e, er)).toEqual('55=ac,|65=non|48=Pellentesque|22=B|454=2|455=lorem|456=consequat|455=sapien|456=tempor|460=2|')
})

test('encode group missing delimiter', () => {
  expect(er).toBeTruthy()
  const e: ILooseObject = getInstrumentNestedGroup()
  delete e.Instrument.SecAltIDGrp.NoSecurityAltID[0].SecurityAltID
  function run (): void {
    toFix(e, er)
  }
  expect(run).toThrow(/group instance \[1] inconsistent delimiter 455 expected tag 456/)
})

test('encode group not an array of', () => {
  expect(er).toBeTruthy()
  const e: ILooseObject = {
    Instrument: {
      Symbol: 'ac,',
      SymbolSfx: 'non',
      SecurityID: 'Pellentesque',
      SecurityIDSource: 'B',
      SecAltIDGrp: {
        NoSecurityAltID: {
          elements: []
        }
      },
      Product: 2
    }
  }
  function run (): void {
    toFix(e, er)
  }
  expect(run).toThrow(/expected array instance for group NoSecurityAltID/)
})

function getCompID (securityType: SecurityType): string {
  switch (securityType) {
    case SecurityType.CommonStock: {
      return 'DepA'
    }

    case SecurityType.CorporateBond: {
      return 'DepB'
    }

    case SecurityType.ConvertibleBond: {
      return 'DepC'
    }

    default:
      return 'DepD'
  }
}

function createOrder (id: number, symbol: string, securityType: SecurityType, side: Side, qty: number, price: number): INewOrderSingle {
  return {
    StandardHeader: {
      DeliverToCompID: getCompID(securityType)
    } as IStandardHeader,
    ClOrdID: `Cli${id}`,
    Account: 'MyAcc',
    Side: side,
    Price: price,
    OrdType: OrdType.Limit,
    OrderQtyData: {
      OrderQty: qty
    } as IOrderQtyData,
    Instrument: {
      SecurityType: securityType,
      Symbol: symbol,
      SecurityID: '459200101',
      SecurityIDSource: SecurityIDSource.IsinNumber
    } as IInstrument,
    TimeInForce: TimeInForce.Day
  } as INewOrderSingle
}

test('encode custom header 1 - expect DeliverToCompID DepA', async () => {
  const type = SecurityType.CommonStock
  const o1 = createOrder(1, 'MS', type, Side.Buy, 100, 1000.0)
  const nosd = definitions.message.get('NewOrderSingle')
  expect(nosd).toBeTruthy()
  if (!nosd) return
  const fix = toFixMessage(o1, nosd)
  expect(fix).toBeTruthy()
  const res: ParsingResult = await setup.client.parseText(fix)
  const tag = res.view?.getTyped('DeliverToCompID')
  expect(tag).toEqual('DepA')
  expect(res.event).toEqual('msg')
  expect(res.msgType).toEqual(MsgType.NewOrderSingle)
  const parsed: INewOrderSingle = res.view?.toObject()
  expect(parsed.StandardHeader.DeliverToCompID).toEqual('DepA')
})

test('encode custom header 2 - expect DeliverToCompID DepC', async () => {
  const type = SecurityType.ConvertibleBond
  const o1 = createOrder(1, 'MSCb', type, Side.Buy, 100, 1000.0)
  const nosd = definitions.message.get('NewOrderSingle')
  expect(nosd).toBeTruthy()
  if (!nosd) return
  const fix = toFixMessage(o1, nosd)
  expect(fix).toBeTruthy()
  const res: ParsingResult = await setup.client.parseText(fix)
  const tag = res.view?.getTyped('DeliverToCompID')
  expect(tag).toEqual('DepC')
  expect(res.event).toEqual('msg')
  expect(res.msgType).toEqual(MsgType.NewOrderSingle)
  const parsed: INewOrderSingle = res.view?.toObject()
  expect(parsed.StandardHeader.DeliverToCompID).toEqual('DepC')
})

test('encode custom header - include MsgSeqNum (for resends we do not want to overwrite)', async () => {
  const type = SecurityType.ConvertibleBond
  const seqNum: number = 10
  const o1 = createOrder(1, 'MSCb', type, Side.Buy, 100, 1000.0)
  o1.StandardHeader.MsgSeqNum = seqNum
  o1.StandardHeader.PossDupFlag = true
  const nosd = definitions.message.get('NewOrderSingle')
  expect(nosd).toBeTruthy()
  if (!nosd) return
  const fix = toFixMessage(o1, nosd)
  expect(fix).toBeTruthy()
  const res: ParsingResult = await setup.client.parseText(fix)
  expect(res.event).toEqual('msg')
  expect(res.msgType).toEqual(MsgType.NewOrderSingle)
  const parsed: INewOrderSingle = res.view?.toObject()
  const h: IStandardHeader = parsed.StandardHeader
  expect(h.DeliverToCompID).toEqual('DepC')
  expect(h.MsgSeqNum).toEqual(seqNum)
  expect(h.BeginString).toEqual('FIX.4.4')
  expect(h.PossDupFlag).toEqual(true)
  expect(h.MsgType).toEqual(MsgType.NewOrderSingle)
})
