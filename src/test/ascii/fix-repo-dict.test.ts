import 'reflect-metadata'

import * as path from 'path'
import { FixDefinitions } from '../../dictionary/definition'
import { ISessionDescription } from '../../transport'
import { DefinitionFactory } from '../../util'
import { IContainedSet, ContainedFieldType } from '../../dictionary/contained'
import { SetConstraintHelper } from '../env/set-constraint-helper'

const root: string = path.join(__dirname, '../../../data')

let definitions: FixDefinitions
let setHelper: SetConstraintHelper

beforeAll(async () => {
  const sessionDescription: ISessionDescription = require(path.join(root, 'session/test-initiator.json'))
  definitions = await new DefinitionFactory().getDefinitions(sessionDescription?.application?.dictionary ?? '')
  setHelper = new SetConstraintHelper(definitions)
}, 45000)
// eslint-disable no-tabs
/*
<Field added="FIX.2.7">
    <Tag>1</Tag>
    <Name>Account</Name>
    <Type>String</Type>
    <AbbrName>Acct</AbbrName>
    <NotReqXML>0</NotReqXML>
    <Description>Account mnemonic as agreed between buy and sell sides, e.g. broker and institution or investor/intermediary and fund manager.</Description>
  </Field>
 */

test('field check tag 1', () => {
  const simple = definitions.simple.get('1')
  expect(simple).toBeTruthy()
  expect(simple?.tag).toEqual(1)
  expect(simple?.name).toEqual('Account')
  expect(simple?.type.toLowerCase()).toEqual('string')
})

/*
  <Field added="FIX.2.7">
    <Tag>15</Tag>
    <Name>Currency</Name>
    <Type>Currency</Type>
    <AbbrName>Ccy</AbbrName>
    <NotReqXML>0</NotReqXML>
    <Description>Identifies currency used for price. Absence of this field is interpreted as the default for the security. It is recommended that systems provide the currency value whenever possible. See "Appendix 6-A: Valid Currency Codes" for information on obtaining valid values.</Description>
  </Field>
 */

test('field check tag 15', () => {
  const simple = definitions.simple.get('15')
  expect(simple).toBeTruthy()
  expect(simple?.tag).toEqual(15)
  expect(simple?.name).toEqual('Currency')
  expect(simple?.type.toLowerCase()).toEqual('string') // maps to string
})

/*
  <Field added="FIX.2.7">
    <Tag>35</Tag>
    <Name>MsgType</Name>
    <Type>String</Type>
    <AbbrName>MsgTyp</AbbrName>
    <NotReqXML>1</NotReqXML>
    <Description>Defines message type ALWAYS THIRD FIELD IN MESSAGE. (Always unencrypted)
Note: A "U" as the first character in the MsgType field (i.e. U, U2, etc) indicates that the message format is privately defined between the sender and receiver.</Description>
  </Field>
 */

test('field check tag 35', () => {
  const simple = definitions.simple.get('35')
  expect(simple).toBeTruthy()
  expect(simple?.tag).toEqual(35)
  expect(simple?.name).toEqual('MsgType')
  expect(simple?.type.toLowerCase()).toEqual('string')
  expect(simple?.enums).toBeTruthy()
  expect(simple?.enums.get('ZZZ')).toBeUndefined()
  expect(simple?.enums.get('0')?.val).toEqual('Heartbeat')
  expect(simple?.enums.get('8')?.val).toEqual('ExecutionReport')
  expect(simple?.enums.get('AE')?.val).toEqual('TradeCaptureReport')
})

/*
  <Field added="FIX.2.7">
    <Tag>54</Tag>
    <Name>Side</Name>
    <Type>char</Type>
    <AbbrName>Side</AbbrName>
    <NotReqXML>0</NotReqXML>
    <Description>Side of order</Description>
  </Field>
 */

test('field check tag 54', () => {
  const simple = definitions.simple.get('54')
  expect(simple).toBeTruthy()
  expect(simple?.tag).toEqual(54)
  expect(simple?.name).toEqual('Side')
  expect(simple?.type.toLowerCase()).toEqual('char')
  expect(simple?.enums).toBeTruthy()
  expect(simple?.enums?.get('1')?.val).toEqual('Buy')
  expect(simple?.enums?.get('2')?.val).toEqual('Sell')
  expect(simple?.enums?.get('3')?.val).toEqual('BuyMinus')
  expect(simple?.enums?.get('8')?.val).toEqual('Cross')
})

/*
  <Field added="FIX.2.7">
    <Tag>99</Tag>
    <Name>StopPx</Name>
    <Type>Price</Type>
    <AbbrName>StopPx</AbbrName>
    <NotReqXML>0</NotReqXML>
    <Description>Price per unit of quantity (e.g. per share)</Description>
  </Field>
 */

test('field check tag 99', () => {
  const simple = definitions.simple.get('99')
  expect(simple).toBeTruthy()
  expect(simple?.tag).toEqual(99)
  expect(simple?.name).toEqual('StopPx')
  expect(simple?.type.toLowerCase()).toEqual('float') // maps to float
})

/*
  <Field added="FIX.3.0">
    <Tag>113</Tag>
    <Name>ReportToExch</Name>
    <Type>Boolean</Type>
    <AbbrName>RptToExch</AbbrName>
    <NotReqXML>0</NotReqXML>
    <Description>Identifies party of trade responsible for exchange reporting.</Description>
  </Field>
 */

test('field check tag 113', () => {
  const simple = definitions.simple.get('113')
  expect(simple).toBeTruthy()
  expect(simple?.tag).toEqual(113)
  expect(simple?.name).toEqual('ReportToExch')
  expect(simple?.type.toLowerCase()).toEqual('boolean')
})

/*
  <Field added="FIX.4.0">
    <Tag>119</Tag>
    <Name>SettlCurrAmt</Name>
    <Type>Amt</Type>
    <AbbrName>SettlCurrAmt</AbbrName>
    <NotReqXML>0</NotReqXML>
    <Description>Total amount due expressed in settlement currency (includes the effect of the forex transaction)</Description>
  </Field>
 */

test('field check tag 119', () => {
  const simple = definitions.simple.get('119')
  expect(simple).toBeTruthy()
  expect(simple?.tag).toEqual(119)
  expect(simple?.name).toEqual('SettlCurrAmt')
  expect(simple?.type.toLowerCase()).toEqual('float') // maps to float
})

/*
  <Field added="FIX.4.0">
    <Tag>135</Tag>
    <Name>OfferSize</Name>
    <Type>Qty</Type>
    <AbbrName>OfrSz</AbbrName>
    <NotReqXML>0</NotReqXML>
    <Description>Quantity of offer
(Prior to FIX 4.2 this field was of type int)</Description>
  </Field>
 */

test('field check tag 135', () => {
  const simple = definitions.simple.get('135')
  expect(simple).toBeTruthy()
  expect(simple?.tag).toEqual(135)
  expect(simple?.name).toEqual('OfferSize')
  expect(simple?.type.toLowerCase()).toEqual('float') // maps to float
})

/*
  <Field added="FIX.4.1">
    <Tag>168</Tag>
    <Name>EffectiveTime</Name>
    <Type>UTCTimestamp</Type>
    <AbbrName>EfctvTm</AbbrName>
    <NotReqXML>0</NotReqXML>
    <Description>Time the details within the message should take effect (always expressed in UTC (Universal Time Coordinated, also known as "GMT")</Description>
  </Field>
 */

test('field check tag 168', () => {
  const simple = definitions.simple.get('168')
  expect(simple).toBeTruthy()
  expect(simple?.tag).toEqual(168)
  expect(simple?.name).toEqual('EffectiveTime')
  expect(simple?.type.toLowerCase()).toEqual('utctimestamp')
})

/*
  <Field added="FIX.2.7">
    <Tag>95</Tag>
    <Name>RawDataLength</Name>
    <Type>Length</Type>
    <AssociatedDataTag>96</AssociatedDataTag>
    <AbbrName>RawDataLength</AbbrName>
    <NotReqXML>0</NotReqXML>
    <Description>Number of bytes in raw data field.</Description>
  </Field>
 */

test('field check tag 95', () => {
  const simple = definitions.simple.get('95')
  expect(simple).toBeTruthy()
  expect(simple?.tag).toEqual(95)
  expect(simple?.name).toEqual('RawDataLength')
  expect(simple?.type.toLowerCase()).toEqual('length')
})

/*
  <Field added="FIX.2.7">
    <Tag>96</Tag>
    <Name>RawData</Name>
    <Type>data</Type>
    <AbbrName>RawData</AbbrName>
    <NotReqXML>0</NotReqXML>
    <Description>Unformatted raw data, can include bitmaps, word processor documents, etc.</Description>
  </Field>
 */

test('field check tag 96', () => {
  const simple = definitions.simple.get('96')
  expect(simple).toBeTruthy()
  expect(simple?.tag).toEqual(96)
  expect(simple?.name).toEqual('RawData')
  expect(simple?.type.toLowerCase()).toEqual('data')
})

/*
 <Field added="FIX.2.7">
    <Tag>100</Tag>
    <Name>ExDestination</Name>
    <Type>Exchange</Type>
    <AbbrName>ExDest</AbbrName>
    <NotReqXML>0</NotReqXML>
    <Description>Execution destination as defined by institution when order is entered.
Valid values:
See "Appendix 6-C"</Description>
</Field>
 */

test('field check tag 100', () => {
  const simple = definitions.simple.get('100')
  expect(simple).toBeTruthy()
  expect(simple?.tag).toEqual(100)
  expect(simple?.name).toEqual('ExDestination')
  expect(simple?.type.toLowerCase()).toEqual('string')
})

test('message check TestRequest', () => {
  const msg = definitions.message.get('TestRequest')
  expect(msg).toBeTruthy()
  expect(msg?.msgType).toEqual('1')
  expect(msg?.fields.length).toEqual(3)
  expect(msg?.fields[0].type).toEqual(ContainedFieldType.Component)
  expect(msg?.fields[0].name).toEqual('StandardHeader')
  expect(msg?.fields[1].type).toEqual(ContainedFieldType.Simple)
  expect(msg?.fields[1].name).toEqual('TestReqID')
  expect(msg?.fields[2].type).toEqual(ContainedFieldType.Component)
  expect(msg?.fields[2].name).toEqual('StandardTrailer')
})

/*
 StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  EmailThreadID: string// [2] 164 (String)
  EmailType: string// [3] 94 (String)
  OrigTime?: Date// [4] 42 (UtcTimestamp)
  Subject: string// [5] 147 (String)
  EncodedSubjectLen?: number// [6] 356 (Int)
  EncodedSubject?: Buffer// [7] 357 (RawData)
  RoutingGrp?: IRoutingGrp[]// [8] RoutingType.216, RoutingID.217
  InstrmtGrp?: IInstrmtGrp[]// [9] Symbol.55, SymbolSfx.65 .. InterestAccrualDate.874
  UndInstrmtGrp?: IUndInstrmtGrp[]// [10] UnderlyingSymbol.311, UnderlyingSymbolSfx.312 .. UnderlyingStipValue.889
  InstrmtLegGrp?: IInstrmtLegGrp[]// [11] LegSymbol.600, LegSymbolSfx.601 .. LegInterestAccrualDate.956
  OrderID?: string// [12] 37 (String)
  ClOrdID?: string// [13] 11 (String)
  LinesOfTextGrp: ILinesOfTextGrp[]// [14] Text.58, EncodedTextLen.354, EncodedText.355
  RawDataLength?: number// [15] 95 (Int)
  RawData?: Buffer// [16] 96 (RawData)
  StandardTrailer: IStandardTrailer// [17] SignatureLength.93, Signature.89, CheckSum.10
 */
test('message check Email', () => {
  const email = definitions.message.get('Email')
  expect(email).toBeTruthy()
  let index = 0
  setHelper.isComponent(email, index++, 'StandardHeader', true)
  setHelper.isSimple(email, index++, 'EmailThreadID', true)
  setHelper.isSimple(email, index++, 'EmailType', true)
  setHelper.isSimple(email, index++, 'OrigTime', false)
  setHelper.isSimple(email, index++, 'Subject', true)
  setHelper.isSimple(email, index++, 'EncodedSubjectLen', false)
  setHelper.isSimple(email, index++, 'EncodedSubject', false)
  setHelper.isGroup(email, index++, 'RoutingGrp', false)
  setHelper.isGroup(email, index++, 'InstrmtGrp', false)
  setHelper.isGroup(email, index++, 'UndInstrmtGrp', false)
  setHelper.isGroup(email, index++, 'InstrmtLegGrp', false)
  setHelper.isSimple(email, index++, 'OrderID', false)
  setHelper.isSimple(email, index++, 'ClOrdID', false)
  setHelper.isGroup(email, index++, 'LinesOfTextGrp', true)
  setHelper.isSimple(email, index++, 'RawDataLength', false)
  setHelper.isSimple(email, index++, 'RawData', false)
  setHelper.isComponent(email, index++, 'StandardTrailer', true)
})

test('message check Email rawfields', () => {
  const email = definitions.message.get('Email')
  expect(email).toBeTruthy()
  isRaw(email, 'RawDataLength')
  isRaw(email, 'EncodedSubjectLen')
})

function isRaw (set: (IContainedSet | undefined), name: string): void {
  const field = set?.simple.get(name)
  expect(field).toBeTruthy()
  expect(set?.containsRaw).toBeTruthy()
  const masterDef = definitions.simple.get(name)
  expect(set?.containedLength[masterDef?.tag ?? -1]).toBeTruthy()
}
