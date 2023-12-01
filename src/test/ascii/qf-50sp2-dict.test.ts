import 'reflect-metadata'

import * as path from 'path'
import { FixDefinitions } from '../../dictionary/definition'
import { DefinitionFactory } from '../../util'
import { ContainedFieldSet } from '../../dictionary/contained'
import { SetConstraintHelper } from '../env/set-constraint-helper'
import { QuickFixXmlFileBuilder } from '../../dictionary/parser/quickfix/quick-fix-xml-file-builder'
import { FieldEnum } from '../../dictionary'
import { Dictionary } from '../../collections'

const root: string = path.join(__dirname, '../env/data')

let definitions: FixDefinitions
let secHelper: SecDefHelper
let setHelper: SetConstraintHelper

beforeAll(async () => {
  definitions = await new DefinitionFactory().getDefinitions(`${root}/fix5-mod.xml` ?? '')
  secHelper = new SecDefHelper(definitions)
  setHelper = new SetConstraintHelper(definitions)
}, 45000)

/*
  <message name="SecurityList" msgtype="y" msgcat="app">
            <field name="SecurityReqID" required="N"/>
            <field name="SecurityResponseID" required="N"/>
            <field name="SecurityRequestResult" required="N"/>
            <field name="SecurityListRequestType" required="N" />
            <field name="TotNoRelatedSym" required="N"/>
            <field name="LastFragment" required="N"/>
            <component name="SecListGrp" required="N"/>
            <field name="SecurityReportID" required="N"/>
            <field name="ClearingBusinessDate" required="N"/>
            <field name="MarketID" required="N" />
            <field name="MarketSegmentID" required="N" />
            <field name="SecurityListID" required="N" />
            <field name="SecurityListRefID" required="N" />
            <field name="SecurityListDesc" required="N" />
            <field name="EncodedSecurityListDescLen" required="N" />
            <field name="EncodedSecurityListDesc" required="N" />
            <field name="SecurityListType" required="N" />
            <field name="SecurityListTypeSource" required="N" />
            <field name="TransactTime" required="N" />
        </message>
 */

class SecDefHelper {
  constructor (public definitions: FixDefinitions) {}
  public getSecListGrp (): (ContainedFieldSet | null) {
    return this.definitions.getSet('SecurityList.SecListGrp')
  }

  public getNumRelatedSym (): (ContainedFieldSet | null) {
    return this.getSecListGrp()?.getSet('NoRelatedSym') ?? null
  }

  public getSecurityTradingRules (): (ContainedFieldSet | null) {
    return this.getNumRelatedSym()?.getSet('SecurityTradingRules') ?? null
  }

  public getBaseTradingRules (): (ContainedFieldSet | null) {
    return this.getSecurityTradingRules()?.getSet('BaseTradingRules') ?? null
  }

  public getTickRules (): (ContainedFieldSet | null) {
    return this.getBaseTradingRules()?.getSet('TickRules') ?? null
  }

  public getNoTickRules (): (ContainedFieldSet | null) {
    return this.getTickRules()?.getSet('NoTickRules') ?? null
  }
}

test('check message', () => {
  const securityList: (ContainedFieldSet | null) = definitions?.getSet('SecurityList') ?? null
  expect(securityList).toBeTruthy()
  let index = 0
  setHelper.isComponent(securityList, index++, 'StandardHeader', true)
  setHelper.isSimple(securityList, index++, 'SecurityReqID', false)
  setHelper.isSimple(securityList, index++, 'SecurityResponseID', false)
  setHelper.isSimple(securityList, index++, 'SecurityRequestResult', false)
  setHelper.isSimple(securityList, index++, 'SecurityListRequestType', false)
  setHelper.isSimple(securityList, index++, 'TotNoRelatedSym', false)
  setHelper.isSimple(securityList, index++, 'LastFragment', false)
  setHelper.isComponent(securityList, index++, 'SecListGrp', false)
  setHelper.isSimple(securityList, index++, 'SecurityReportID', false)
  setHelper.isSimple(securityList, index++, 'ClearingBusinessDate', false)
  setHelper.isSimple(securityList, index++, 'MarketID', false)
  setHelper.isSimple(securityList, index++, 'MarketSegmentID', false)
  setHelper.isSimple(securityList, index++, 'SecurityListID', false)
  setHelper.isSimple(securityList, index++, 'SecurityListRefID', false)
  setHelper.isSimple(securityList, index++, 'SecurityListDesc', false)
  setHelper.isSimple(securityList, index++, 'EncodedSecurityListDescLen', false)
  setHelper.isSimple(securityList, index++, 'EncodedSecurityListDesc', false)
  setHelper.isSimple(securityList, index++, 'SecurityListType', false)
  setHelper.isSimple(securityList, index++, 'SecurityListTypeSource', false)
  setHelper.isSimple(securityList, index++, 'TransactTime', false)
  setHelper.isComponent(securityList, index++, 'StandardTrailer', true)
})

/*
 <component name="SecListGrp">
            <group name="NoRelatedSym" required="N">
                <component name="Instrument"/>
                <component name="InstrumentExtension"/>
                <component name="FinancingDetails"/>
                <component name="UndInstrmtGrp"/>
                <field name="Currency" required="N"/>
                <field name="ContractPositionNumber" required="N"/>
                <component name="Stipulations"/>
                <component name="InstrmtLegSecListGrp"/>
                <component name="SpreadOrBenchmarkCurveData"/>
                <component name="YieldData"/>
                <field name="Text" required="N"/>
                <field name="EncodedTextLen" required="N"/>
                <field name="EncodedText" required="N"/>
                <component name="SecurityTradingRules" required="N" />
                <component name="StrikeRules" required="N" />
                <field name="RelSymTransactTime" required="N" />
            </group>
        </component>
 */

test('check SecListGrp', () => {
  const secListGrp = secHelper.getSecListGrp()
  expect(secListGrp).toBeTruthy()
  expect(secListGrp?.fields?.length).toEqual(1)
  setHelper.isGroup(secListGrp ?? null, 0, 'NoRelatedSym', false)
})

test('check NoRelatedSym', () => {
  let index = 0
  const noRelatedSym = secHelper.getNumRelatedSym()
  setHelper.isComponent(noRelatedSym, index++, 'Instrument', false)
  setHelper.isComponent(noRelatedSym, index++, 'InstrumentExtension', false)
  setHelper.isComponent(noRelatedSym, index++, 'FinancingDetails', false)
  setHelper.isComponent(noRelatedSym, index++, 'UndInstrmtGrp', false)
  setHelper.isSimple(noRelatedSym, index++, 'Currency', false)
  setHelper.isSimple(noRelatedSym, index++, 'ContractPositionNumber', false)
  setHelper.isComponent(noRelatedSym, index++, 'Stipulations', false)
  setHelper.isComponent(noRelatedSym, index++, 'InstrmtLegSecListGrp', false)
  setHelper.isComponent(noRelatedSym, index++, 'SpreadOrBenchmarkCurveData', false)
  setHelper.isComponent(noRelatedSym, index++, 'YieldData', false)
  setHelper.isSimple(noRelatedSym, index++, 'Text', false)
  setHelper.isSimple(noRelatedSym, index++, 'EncodedTextLen', false)
  setHelper.isSimple(noRelatedSym, index++, 'EncodedText', false)
  setHelper.isComponent(noRelatedSym, index++, 'SecurityTradingRules', false)
  setHelper.isComponent(noRelatedSym, index++, 'StrikeRules', false)
  setHelper.isSimple(noRelatedSym, index++, 'RelSymTransactTime', false)
})

/*
        <component name="SecurityTradingRules">
            <component name="BaseTradingRules" required="N" />
            <component name="TradingSessionRulesGrp" required="N" />
            <component name="NestedInstrumentAttribute" required="N" />
        </component>
 */

test('check SecurityTradingRules', () => {
  let index = 0
  const securityTradingRules = secHelper.getSecurityTradingRules()
  setHelper.isComponent(securityTradingRules, index++, 'BaseTradingRules', false)
  setHelper.isComponent(securityTradingRules, index++, 'TradingSessionRulesGrp', false)
  setHelper.isComponent(securityTradingRules, index++, 'NestedInstrumentAttribute', false)
})

/*
        <component name="BaseTradingRules">
            <component name="TickRules" required="N" />
            <component name="LotTypeRules" required="N" />
            <component name="PriceLimits" required="N" />
            <field name="ExpirationCycle" required="N" />
            <field name="MinTradeVol" required="N" />
            <field name="MaxTradeVol" required="N" />
            <field name="MaxPriceVariation" required="N" />
            <field name="ImpliedMarketIndicator" required="N" />
            <field name="TradingCurrency" required="N" />
            <field name="RoundLot" required="N" />
            <field name="MultilegModel" required="N" />
            <field name="MultilegPriceMethod" required="N" />
            <field name="PriceType" required="N" />
        </component>
 */

test('check BaseTradingRules', () => {
  let index = 0
  const securityTradingRules = secHelper.getBaseTradingRules()
  setHelper.isComponent(securityTradingRules, index++, 'TickRules', false)
  setHelper.isComponent(securityTradingRules, index++, 'LotTypeRules', false)
  setHelper.isComponent(securityTradingRules, index++, 'PriceLimits', false)
  setHelper.isSimple(securityTradingRules, index++, 'ExpirationCycle', false)
  setHelper.isSimple(securityTradingRules, index++, 'MinTradeVol', false)
  setHelper.isSimple(securityTradingRules, index++, 'MaxTradeVol', false)
  setHelper.isSimple(securityTradingRules, index++, 'MaxPriceVariation', false)
  setHelper.isSimple(securityTradingRules, index++, 'ImpliedMarketIndicator', false)
  setHelper.isSimple(securityTradingRules, index++, 'TradingCurrency', false)
  setHelper.isSimple(securityTradingRules, index++, 'RoundLot', false)
  setHelper.isSimple(securityTradingRules, index++, 'MultilegModel', false)
  setHelper.isSimple(securityTradingRules, index++, 'MultilegPriceMethod', false)
  setHelper.isSimple(securityTradingRules, index++, 'PriceType', false)
})

/*
        <component name="TickRules">
            <group name="NoTickRules" required="N">
                <field name="StartTickPriceRange" required="N" />
                <field name="EndTickPriceRange" required="N" />
                <field name="TickIncrement" required="N" />
                <field name="TickRuleType" required="N" />
            </group>
        </component>
 */

test('check TickRules', () => {
  let index = 0
  const tickRules = secHelper.getTickRules()
  setHelper.isGroup(tickRules, index++, 'NoTickRules', false)
})

test('check NoTickRules', () => {
  let index = 0
  const noTickRules = secHelper.getNoTickRules()
  setHelper.isSimple(noTickRules, index++, 'StartTickPriceRange', false)
  setHelper.isSimple(noTickRules, index++, 'EndTickPriceRange', false)
  setHelper.isSimple(noTickRules, index++, 'TickIncrement', false)
  setHelper.isSimple(noTickRules, index++, 'TickRuleType', false)
})

test('check builder', () => {
  const builder = new QuickFixXmlFileBuilder(definitions)
  builder.write(['0', '1', '2', '3', '4', '5', 'AE'])
  const d = builder.elasticBuffer.toString()
})

/*
  <field number='4' name='AdvSide' type='CHAR'>
   <value enum='B' description='BUY' />
   <value enum='S' description='SELL' />
   <value enum='X' description='CROSS' />
   <value enum='T' description='TRADE' />
  </field>
 */
test('field fetch by name AdvSide', () => {
  const def = definitions.simple.get('AdvSide')
  expect(def).toBeTruthy()
  expect(def?.tag).toEqual(4)
})

test('field fetch by name 4', () => {
  const def = definitions.tagToSimple[4]
  expect(def).toBeTruthy()
  expect(def?.name).toEqual('AdvSide')
})

function checkEnum (enums: (Dictionary<FieldEnum> | undefined), key: string, expectedVal: string, expectedDescription: string): void {
  expect(enums).toBeTruthy()
  const en = enums?.get(key)
  expect(en).toBeTruthy()
  expect(en?.val).toEqual(expectedVal)
  expect(en?.description).toEqual(expectedDescription)
  expect(en?.key).toEqual(key)
}

function checkSimple (name: string, tag: number, type: string): void {
  const def = definitions.simple.get(name)
  expect(def).toBeTruthy()
  expect(def?.tag).toEqual(tag)
  expect(def?.name).toEqual(name)
  expect(def?.type).toEqual(type)
}

test('field check AdvSide', () => {
  const def = definitions.simple.get('AdvSide')
  expect(def).toBeTruthy()
  checkSimple('AdvSide', 4, 'CHAR')
  expect(def?.isEnum()).toBeTruthy()
  expect(def?.enumVals).toBeTruthy()
  expect(def?.enumVals.keys().length).toEqual(4)
  checkEnum(def?.enums, 'B', 'Buy', 'BUY')
  checkEnum(def?.enums, 'S', 'Sell', 'SELL')
  checkEnum(def?.enums, 'X', 'Cross', 'CROSS')
  checkEnum(def?.enums, 'T', 'Trade', 'TRADE')
})
//  <field number='8' name='BeginString' type='STRING' />
test('field check 8', () => {
  checkSimple('BeginString', 8, 'STRING')
})

//   <field number='9' name='BodyLength' type='LENGTH' />
test('field check 9', () => {
  checkSimple('BodyLength', 9, 'LENGTH')
})

//    <field number='12' name='Commission' type='AMT' />
test('field check 12', () => {
  checkSimple('Commission', 12, 'AMT')
})

//   <field number='16' name='EndSeqNo' type='SEQNUM' />
test('field check 16', () => {
  checkSimple('EndSeqNo', 16, 'SEQNUM')
})

//   <field number='38' name='OrderQty' type='QTY' />
test('field check 38', () => {
  checkSimple('OrderQty', 38, 'QTY')
})

//   <field number='212' name='XmlDataLen' type='LENGTH' />
test('field check 212', () => {
  checkSimple('XmlDataLen', 212, 'LENGTH')
})
//   <field number='213' name='XmlData' type='DATA' />
test('field check 213', () => {
  checkSimple('XmlData', 213, 'DATA')
})

/*
  <message name='Logon' msgcat='admin' msgtype='A'>
         <field name='EncryptMethod' required='Y' />
         <field name='HeartBtInt' required='Y' />
         <field name='RawDataLength' required='N' />
         <field name='RawData' required='N' />
         <field name='ResetSeqNumFlag' required='N' />
         <field name='NextExpectedMsgSeqNum' required='N' />
         <field name='MaxMessageSize' required='N' />
         <group name='NoMsgTypes' required='N'>
             <field name='RefMsgType' required='N' />
             <field name='MsgDirection' required='N' />
         </group>
         <field name='TestMessageIndicator' required='N' />
         <field name='Username' required='N' />
         <field name='Password' required='N' />
         <field name='NewPassword' required='N' />
         <field name='EncryptedPasswordMethod' required='N' />
         <field name='EncryptedPasswordLen' required='N' />
         <field name='EncryptedPassword' required='N' />
         <field name='EncryptedNewPasswordLen' required='N' />
         <field name='EncryptedNewPassword' required='N' />
         <field name='SessionStatus' required='N' />
         <field name='DefaultApplVerID' required='N' />
         <field name='DefaultApplExtID' required='N' />
         <field name='DefaultCstmApplVerID' required='N' />
         <field name='Text' required='N' />
         <field name='EncodedTextLen' required='N' />
         <field name='EncodedText' required='N' />
     </message>
 */
test('check logon fields', () => {
  const logon = definitions.message.get('Logon')
  expect(logon).toBeTruthy()
  let index = 0
  setHelper.isComponent(logon, index++, 'StandardHeader', true)
  setHelper.isSimple(logon, index++, 'EncryptMethod', true)
  setHelper.isSimple(logon, index++, 'HeartBtInt', true)
  setHelper.isSimple(logon, index++, 'RawDataLength', false)
  setHelper.isSimple(logon, index++, 'RawData', false)
  setHelper.isSimple(logon, index++, 'ResetSeqNumFlag', false)
  setHelper.isSimple(logon, index++, 'NextExpectedMsgSeqNum', false)
  setHelper.isSimple(logon, index++, 'MaxMessageSize', false)
  setHelper.isGroup(logon, index++, 'NoMsgTypes', false)
  setHelper.isSimple(logon, index++, 'TestMessageIndicator', false)
  setHelper.isSimple(logon, index++, 'Username', false)
  setHelper.isSimple(logon, index++, 'Password', false)
  setHelper.isSimple(logon, index++, 'NewPassword', false)
  setHelper.isSimple(logon, index++, 'EncryptedPasswordMethod', false)
  setHelper.isSimple(logon, index++, 'EncryptedPasswordLen', false)
  setHelper.isSimple(logon, index++, 'EncryptedPassword', false)
  setHelper.isSimple(logon, index++, 'EncryptedNewPasswordLen', false)
  setHelper.isSimple(logon, index++, 'EncryptedNewPassword', false)
  setHelper.isSimple(logon, index++, 'SessionStatus', false)
  setHelper.isSimple(logon, index++, 'DefaultApplVerID', false)
  setHelper.isSimple(logon, index++, 'DefaultApplExtID', false)
  setHelper.isSimple(logon, index++, 'DefaultCstmApplVerID', false)
  setHelper.isSimple(logon, index++, 'Text', false)
  setHelper.isSimple(logon, index++, 'EncodedTextLen', false)
  setHelper.isSimple(logon, index++, 'EncodedText', false)
  expect(logon?.containsRaw).toBeTruthy()
})

test('check message existance', () => {
  const mt = definitions.simple.get('MsgType')
  expect(mt?.isEnum()).toBeTruthy()
  expect(mt?.enums.get('0')).toBeTruthy()
  expect(mt?.enums.get('1')).toBeTruthy()
  mt?.enums.keys().forEach(k => {
    if (k === 'n') return
    const m = definitions.message.get(k)
    expect(k).toBeTruthy()
    expect(m).toBeTruthy()
    expect(m?.msgType).toEqual(k)
  })
})
