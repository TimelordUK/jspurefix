import 'reflect-metadata'

import { ComponentFieldDefinition } from '../../dictionary/definition'
import { Tags } from '../../buffer'
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
import { ParsingResult } from '../env/parsing-result'
import { EncoderTest } from '../env/encoder-test'

const encoderTester: EncoderTest = new EncoderTest()

beforeAll(async () => {
  await encoderTester.init('session/qf-fix44.json')
}, 45000)

test('expect a definition ', () => {
  expect(encoderTester.nos).toBeTruthy()
})

test('encode heartbeat', async () => {
  const session = encoderTester.session
  const factory = session.config.factory
  expect(factory).toBeTruthy()
  if (!factory) return
  const hb = factory.heartbeat('test01')
  const hbd = encoderTester.definitions.message.get('Heartbeat')
  expect(hbd).toBeTruthy()
  if (!hbd) return
  const fix = encoderTester.toFixMessage(hb, hbd)
  expect(fix).toBeTruthy()
  const res: ParsingResult = await encoderTester.setup.client.parseText(fix)
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
  const hb = encoderTester.definitions.message.get('Heartbeat')
  const fix: string = hb ? encoderTester.toFixMessage(no, hb) : ''
  expect(fix).toMatch('43=Y|')
})

test('encode custom header PossDupFlag', () => {
  const no: ILooseObject = {
    StandardHeader: {
      MsgSeqNum: 9999
    }
  }
  const hb = encoderTester.definitions.message.get('Heartbeat')
  const fix: string = hb ? encoderTester.toFixMessage(no, hb) : ''
  expect(fix).toMatch('34=9999|')
})

test('encode string ClOrdID ', () => {
  const no: ILooseObject = {}
  no.ClOrdID = 'Order-a'
  const fix: string = encoderTester.toFix(no)
  expect(fix).toEqual('11=Order-a|')
})

test('should not encode empty string', () => {
  const no: ILooseObject = {}
  no.ClOrdID = ''
  const fix: string = encoderTester.toFix(no)
  expect(fix).toEqual('')
})

test('should not encode null string', () => {
  const no: ILooseObject = {}
  no.ClOrdID = null
  const fix: string = encoderTester.toFix(no)
  expect(fix).toEqual('')
})

test('encode +ve numeric (int) Price ', () => {
  const no: ILooseObject = {}
  no.Price = 100
  const fix: string = encoderTester.toFix(no)
  expect(fix).toEqual('44=100|')
})

test('encode -ve numeric (int) Price ', () => {
  const no: ILooseObject = {}
  no.Price = -100
  const fix: string = encoderTester.toFix(no)
  expect(fix).toEqual('44=-100|')
})

test('encode +ve numeric (double 8dp) Price ', () => {
  const no: ILooseObject = {}
  no.Price = 123.12345678
  const fix: string = encoderTester.toFix(no)
  expect(fix).toEqual('44=123.12345678|')
})

test('encode +ve numeric (double 14dp) Price ', () => {
  const no: ILooseObject = {}
  no.Price = 123.12345678901234
  const fix: string = encoderTester.toFix(no)
  expect(fix).toEqual('44=123.12345678901234|')
})

test('encode -ve numeric (double 14dp) Price ', () => {
  const no: ILooseObject = {}
  no.Price = -123.12345678901234
  const fix: string = encoderTester.toFix(no)
  expect(fix).toEqual('44=-123.12345678901234|')
})

test('encode +ve string Price ', () => {
  const no: ILooseObject = {}
  no.Price = '123.12345678901234'
  const fix: string = encoderTester.toFix(no)
  expect(fix).toEqual('44=123.12345678901234|')
})

test('encode LocalDate TradeDate ', () => {
  const no: ILooseObject = {}
  no.TradeDate = encoderTester.localDate
  const fix: string = encoderTester.toFix(no)
  expect(fix).toEqual('75=20180725|')
})

test('encode UTCTIMESTAMP ExpireTime ', () => {
  const no: ILooseObject = {}
  no.ExpireTime = encoderTester.utcTimeStamp
  const fix: string = encoderTester.toFix(no)
  expect(fix).toEqual('126=20180610-16:35:00.246|')
})

test('encode UTCTIMESTAMP ExpireTime - check padding', () => {
  const no: ILooseObject = {}
  no.ExpireTime = new Date(Date.UTC(2018, 0, 1, 0, 0, 0, 1))
  const fix: string = encoderTester.toFix(no)
  expect(fix).toEqual('126=20180101-00:00:00.001|')
})

test('encode UTCDATEONLY MDEntryDate', () => {
  const mdGrp: ComponentFieldDefinition | undefined = encoderTester.definitions.component.get('MDFullGrp')
  expect(mdGrp).toBeTruthy()
  if (!mdGrp) return
  const grp: ILooseObject = {
    NoMDEntries: [
      {
        MDEntryType: '0',
        MDEntryDate: encoderTester.utcDate
      }
    ]
  }
  const fix: string = encoderTester.toFix(grp, mdGrp)
  expect(fix).toEqual('268=1|269=0|272=20180610|')
})

test('encode UTCTIMEONLY MDEntryTime', () => {
  const mdGrp: ComponentFieldDefinition | undefined = encoderTester.definitions.component.get('MDFullGrp')
  expect(mdGrp).toBeTruthy()
  const grp: ILooseObject = {
    NoMDEntries: [
      {
        MDEntryType: '0',
        MDEntryTime: encoderTester.utcTime
      }
    ]
  }
  if (!mdGrp) return
  const fix: string = encoderTester.toFix(grp, mdGrp)
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
  const d = encoderTester.definitions.message.get('TradeCaptureReportRequest')
  if (!d) return
  const fix: string = encoderTester.toFix(tcr, d)
  expect(fix).toEqual('568=all-trades|569=0|263=1|580=2|60=20181201-00:00:00.000|60=20181202-00:00:00.000|')
})

test('encode BOOLEAN (true) ReportToExch', () => {
  expect(encoderTester.er).toBeTruthy()
  const e: ILooseObject = {}
  e.ReportToExch = true
  const fix: string = encoderTester.toFix(e, encoderTester.er)
  expect(fix).toEqual('113=Y|')
})

test('encode BOOLEAN (truthy) ReportToExch', () => {
  expect(encoderTester.er).toBeTruthy()
  const e: ILooseObject = {}
  e.ReportToExch = 1
  const fix: string = encoderTester.toFix(e, encoderTester.er)
  expect(fix).toEqual('113=Y|')
})

test('encode BOOLEAN (string) ReportToExch', () => {
  expect(encoderTester.er).toBeTruthy()
  const e: ILooseObject = {}
  e.ReportToExch = 'TRUE'
  const fix: string = encoderTester.toFix(e, encoderTester.er)
  expect(fix).toEqual('113=Y|')
})

test('encode BOOLEAN (false) ReportToExch', () => {
  expect(encoderTester.er).toBeTruthy()
  const e: ILooseObject = {}
  e.ReportToExch = false
  const fix: string = encoderTester.toFix(e, encoderTester.er)
  expect(fix).toEqual('113=N|')
})

test('encode BOOLEAN (falsy) ReportToExch', () => {
  expect(encoderTester.er).toBeTruthy()
  const e: ILooseObject = {}
  e.ReportToExch = 0
  const fix: string = encoderTester.toFix(e, encoderTester.er)
  expect(fix).toEqual('113=N|')
})

test('encode RawData EncodedText', () => {
  expect(encoderTester.er).toBeTruthy()
  const toEncode: string = 'this is fix'
  const e: ILooseObject = {
    EncodedText: Buffer.alloc(toEncode.length, toEncode, 'utf8')
  }
  const fix: string = encoderTester.toFix(e, encoderTester.er)
  expect(fix).toEqual('354=11|355=this is fix|')
})

test('encode empty RawData EncodedText', () => {
  expect(encoderTester.er).toBeTruthy()
  const toEncode: string = ''
  const e: ILooseObject = {
    EncodedText: Buffer.alloc(toEncode.length, toEncode, 'utf8')
  }
  const fix: string = encoderTester.toFix(e, encoderTester.er)
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
  expect(encoderTester.er).toBeTruthy()
  const e: ILooseObject = getParties()
  const fix: string = encoderTester.toFix(e, encoderTester.er)
  expect(fix).toEqual('453=2|448=magna.|447=9|452=28|448=iaculis|447=F|452=2|')
})

test('use a carat as log delimiter', () => {
  expect(encoderTester.er).toBeTruthy()
  const caratEncoder = new AsciiEncoder(encoderTester.session.buffer, encoderTester.definitions, new TimeFormatter(encoderTester.session.buffer), AsciiChars.Soh, AsciiChars.Carat)
  const e: ILooseObject = getParties()
  const fix: string = encoderTester.toFix(e, encoderTester.er, caratEncoder)
  expect(fix).toEqual('453=2^448=magna.^447=9^452=28^448=iaculis^447=F^452=2^')
})

test('use a carat as log delimiter with Soh in buffer to show encoding still works', () => {
  expect(encoderTester.er).toBeTruthy()
  const caratEncoder = new AsciiEncoder(encoderTester.session.buffer, encoderTester.definitions, new TimeFormatter(encoderTester.session.buffer), AsciiChars.Soh, AsciiChars.Carat)
  const e: ILooseObject = getParties()
  const fix: string = encoderTester.toFix(e, encoderTester.er, caratEncoder)
  expect(fix).toEqual('453=2^448=magna.^447=9^452=28^448=iaculis^447=F^452=2^')
  const trimmed = caratEncoder.trim().toString()
  expect(trimmed).toEqual('453=2448=magna.447=9452=28448=iaculis447=F452=2')
})

test('encode repeated group with no PartyID - should encode', () => {
  expect(encoderTester.er).toBeTruthy()
  const e: ILooseObject = getPartiesNoPartyID()
  const fix: string = encoderTester.toFix(e, encoderTester.er)
  expect(fix).toEqual('453=1|447=9|452=28|')
})

test('encode repeated group with no array - should throw', () => {
  expect(encoderTester.er).toBeTruthy()
  const e: ILooseObject = {
    Parties: {
      NoPartyIDs: 'should be an array'
    }
  }
  function run (): void {
    encoderTester.toFix(e, encoderTester.er)
  }
  expect(run).toThrow(/expected array/)
})

test('encode repeated group with empty array', () => {
  expect(encoderTester.er).toBeTruthy()
  const e: ILooseObject = {
    Parties: {
      NoPartyIDs: []
    }
  }
  expect(encoderTester.toFix(e, encoderTester.er)).toEqual('453=0|')
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
  expect(encoderTester.er).toBeTruthy()
  const e: ILooseObject = getInstrument()
  expect(encoderTester.toFix(e, encoderTester.er)).toEqual('55=ac,|65=non|48=Pellentesque|22=B|460=2|')
})

test('encode component nested group', () => {
  expect(encoderTester.er).toBeTruthy()
  const e: ILooseObject = getInstrumentNestedGroup()
  expect(encoderTester.toFix(e, encoderTester.er)).toEqual('55=ac,|65=non|48=Pellentesque|22=B|454=2|455=lorem|456=consequat|455=sapien|456=tempor|460=2|')
})

test('encode group missing delimiter', () => {
  expect(encoderTester.er).toBeTruthy()
  const e: ILooseObject = getInstrumentNestedGroup()
  delete e.Instrument.SecAltIDGrp.NoSecurityAltID[0].SecurityAltID
  function run (): void {
    encoderTester.toFix(e, encoderTester.er)
  }
  expect(run).toThrow(/group instance \[1] inconsistent delimiter 455 expected tag 456/)
})

test('encode group not an array of', () => {
  expect(encoderTester.er).toBeTruthy()
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
    encoderTester.toFix(e, encoderTester.er)
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

async function getNewOrderSingle (o1: INewOrderSingle): Promise<any> {
  const nosd = encoderTester.definitions.message.get('NewOrderSingle')
  expect(nosd).toBeTruthy()
  if (!nosd) return
  const fix = encoderTester.toFixMessage(o1, nosd)
  expect(fix).toBeTruthy()
  const res: ParsingResult = await encoderTester.setup.client.parseText(fix)
  const tag = res.view?.getTyped('DeliverToCompID')
  return { res, tag }
}

test('encode custom header 1 - expect DeliverToCompID DepA', async () => {
  const type = SecurityType.CommonStock
  const o1 = createOrder(1, 'MS', type, Side.Buy, 100, 1000.0)
  const { res, tag } = await getNewOrderSingle(o1)
  expect(tag).toEqual('DepA')
  expect(res.event).toEqual('msg')
  expect(res.msgType).toEqual(MsgType.NewOrderSingle)
  const parsed: INewOrderSingle = res.view?.toObject()
  expect(parsed.StandardHeader.DeliverToCompID).toEqual('DepA')
})

test('encode custom header 2 - expect DeliverToCompID DepC', async () => {
  const type = SecurityType.ConvertibleBond
  const o1 = createOrder(1, 'MSCb', type, Side.Buy, 100, 1000.0)
  const { res, tag } = await getNewOrderSingle(o1)
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
  const nosd = encoderTester.definitions.message.get('NewOrderSingle')
  expect(nosd).toBeTruthy()
  if (!nosd) return
  const fix = encoderTester.toFixMessage(o1, nosd)
  expect(fix).toBeTruthy()
  const res: ParsingResult = await encoderTester.setup.client.parseText(fix)
  expect(res.event).toEqual('msg')
  expect(res.msgType).toEqual(MsgType.NewOrderSingle)
  const parsed: INewOrderSingle = res.view?.toObject() as INewOrderSingle
  const h: IStandardHeader = parsed.StandardHeader
  expect(h.DeliverToCompID).toEqual('DepC')
  expect(h.MsgSeqNum).toEqual(seqNum)
  expect(h.BeginString).toEqual('FIX.4.4')
  expect(h.PossDupFlag).toEqual(true)
  expect(h.MsgType).toEqual(MsgType.NewOrderSingle)
})
