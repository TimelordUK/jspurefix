import * as path from 'path'
import { FixDefinitions } from '../dictionary/definition/fix-definitions'
import { AsciiEncoder } from '../buffer/ascii/ascii-encoder'
import { Ascii } from '../buffer/ascii'
import { MessageDefinition } from '../dictionary/definition/message-definition'
import { ILooseObject } from '../collections/collection'
import { ComponentFieldDefinition } from '../dictionary/definition/component-field-definition'
import { ContainedFieldSet } from '../dictionary/contained/contained-field-set'
import { AsciiMsgTransmitter } from '../transport/ascii/ascii-msg-transmitter'
import { ISessionDescription } from '../transport/session-description'
import { TimeFormatter } from '../buffer/ascii/time-formatter'

import { getDefinitions } from '../util/dictionary-definitions'
import { JsFixConfig } from '../config/js-fix-config'

const root: string = path.join(__dirname, '../../data')

let definitions: FixDefinitions
let session: AsciiMsgTransmitter
let encoder: AsciiEncoder
let nos: MessageDefinition
let er: MessageDefinition

const localDate: Date = new Date(2018, 6, 25)
const utcTimeStamp: Date = new Date(Date.UTC(2018, 5, 10, 16, 35, 0, 246))
const utcDate: Date = new Date(Date.UTC(2018, 5, 10, 0, 0, 0, 0))
const utcTime: Date = new Date(Date.UTC(2018, 0, 1, 16, 35, 0, 246))

beforeAll(async () => {
  const sessionDescription: ISessionDescription = require(path.join(root, 'session/qf-fix44.json'))
  definitions = await getDefinitions(sessionDescription.application.dictionary)
  const config = new JsFixConfig(null, definitions, sessionDescription, Ascii.Pipe)
  session = new AsciiMsgTransmitter(config)
  encoder = new AsciiEncoder(session.buffer, definitions, new TimeFormatter(session.buffer), Ascii.Pipe)
  nos = definitions.message.get('NewOrderSingle')
  er = definitions.message.get('ExecutionReport')
})

test('expect a definition ', () => {
  expect(nos).toBeTruthy()
})

function toFix (o: ILooseObject, set?: ContainedFieldSet): string {
  session.buffer.reset()
  if (set) {
    encoder.encode(o, set.name)
  } else {
    encoder.encode(o, nos.name)
  }
  return session.buffer.toString()
}

test('encode string ClOrdID ', () => {
  const no: ILooseObject = {}
  no.ClOrdID = 'Order-a'
  const fix: string = toFix(no)
  expect(fix).toEqual('11=Order-a|')
})

test('encode empty string', () => {
  const no: ILooseObject = {}
  no.ClOrdID = ''
  const fix: string = toFix(no)
  expect(fix).toEqual('11=|')
})

test('encode null string', () => {
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
  const mdGrp: ComponentFieldDefinition = definitions.component.get('MDFullGrp')
  expect(mdGrp).toBeTruthy()
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
  const mdGrp: ComponentFieldDefinition = definitions.component.get('MDFullGrp')
  expect(mdGrp).toBeTruthy()
  const grp: ILooseObject = {
    NoMDEntries: [
      {
        MDEntryType: '0',
        MDEntryTime: utcTime
      }
    ]
  }
  const fix: string = toFix(grp, mdGrp)
  expect(fix).toEqual('268=1|269=0|273=16:35:00.246|')
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
    'Parties': {
      'NoPartyIDs': [
        {
          'PartyID': 'magna.',
          'PartyIDSource': '9',
          'PartyRole': 28
        },
        {
          'PartyID': 'iaculis',
          'PartyIDSource': 'F',
          'PartyRole': 2
        }]
    }
  }
}

function getPartiesNoDelimiter (): ILooseObject {
  return {
    'Parties': {
      'NoPartyIDs': [
        {
                    // missing PartyID
          'PartyIDSource': '9',
          'PartyRole': 28
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

test('encode repeated group with no delimiter - should throw', () => {
  expect(er).toBeTruthy()
  const e: ILooseObject = getPartiesNoDelimiter()
  function run (): void {
    toFix(e, er)
  }
  expect(run).toThrow(/no delimiter/)
})

test('encode repeated group with no array - should throw', () => {
  expect(er).toBeTruthy()
  const e: ILooseObject = {
    'Parties': {
      'NoPartyIDs': 'should be an array'
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
    'Parties': {
      'NoPartyIDs': []
    }
  }
  expect(toFix(e, er)).toEqual('453=0|')
})

function getInstrument (): ILooseObject {
  return {
    'Instrument': {
      'Symbol': 'ac,',
      'SymbolSfx': 'non',
      'SecurityID': 'Pellentesque',
      'SecurityIDSource': 'B',
      'Product': 2
    }
  }
}

function getInstrumentNestedGroup (): ILooseObject {
  return {
    'Instrument': {
      'Symbol': 'ac,',
      'SymbolSfx': 'non',
      'SecurityID': 'Pellentesque',
      'SecurityIDSource': 'B',
      'SecAltIDGrp': {
        'NoSecurityAltID': [
          {
            'SecurityAltID': 'lorem',
            'SecurityAltIDSource': 'consequat'
          },
          {
            'SecurityAltID': 'sapien',
            'SecurityAltIDSource': 'tempor'
          }
        ]
      },
      'Product': 2
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
  delete e.Instrument.SecAltIDGrp.NoSecurityAltID[0]['SecurityAltID']
  function run () {
    toFix(e, er)
  }
  expect(run).toThrow(/group instance with no delimiter field SecurityAltID/)
})

test('encode group not an array of', () => {
  expect(er).toBeTruthy()
  const e: ILooseObject = {
    'Instrument': {
      'Symbol': 'ac,',
      'SymbolSfx': 'non',
      'SecurityID': 'Pellentesque',
      'SecurityIDSource': 'B',
      'SecAltIDGrp': {
        'NoSecurityAltID': {
          elements: []
        }
      },
      'Product': 2
    }
  }
  function run () {
    toFix(e, er)
  }
  expect(run).toThrow(/expected array instance for group NoSecurityAltID/)
})
