import 'reflect-metadata'

import * as path from 'path'
import { ComponentFieldDefinition, FixDefinitions } from '../../dictionary/definition'
import { DefinitionFactory } from '../../util'
import { ContainedComponentField, ContainedFieldSet, ContainedFieldType } from '../../dictionary/contained'

const root: string = path.join(__dirname, '../env/data')

let definitions: FixDefinitions

beforeAll(async () => {
  definitions = await new DefinitionFactory().getDefinitions(`${root}/fix5-mod.xml` ?? '')
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

function isComponent (set: (ContainedFieldSet | null), index: number, name: string, expected: boolean): void {
  expect(set).toBeTruthy()
  const field = set?.fields[index]
  expect(field?.type).toEqual(ContainedFieldType.Component)
  expect(field?.name).toEqual(name)
  expect(field?.required).toEqual(expected)
  expect(set?.components.get(name)).toBeTruthy()
}

function isGroup (set: (ContainedFieldSet | null), index: number, name: string, expected: boolean): void {
  expect(set).toBeTruthy()
  const field = set?.fields[index]
  expect(field?.type).toEqual(ContainedFieldType.Group)
  expect(field?.name).toEqual(name)
  expect(field?.required).toEqual(expected)
  expect(set?.groups.get(name)).toBeTruthy()
}

function isSimple (set: (ContainedFieldSet | null), index: number, name: string, expected: boolean): void {
  expect(set).toBeTruthy()
  const field = set?.fields[index]
  expect(field?.type).toEqual(ContainedFieldType.Simple)
  expect(field?.name).toEqual(name)
  expect(field?.required).toEqual(expected)
  const masterDef = definitions.simple.get(name)
  expect(masterDef).toBeTruthy()
  expect(masterDef?.name).toEqual(name)
  const tag = masterDef?.tag ?? -1
  expect(set?.containedTag[tag]).toBeTruthy()
  expect(set?.simple.get(name)).toBeTruthy()
  expect(set?.localTag[tag]).toBeTruthy()
  expect(set?.tagToSimple[tag]).toBeTruthy()
  expect(set?.localNameToField.get(name)).toBeTruthy()
  expect(set?.tagToField[tag]).toBeFalsy()
}

test('check message', () => {
  const securityList = definitions.message.get('SecurityList')
  expect(securityList).toBeTruthy()
  let index = 0
  isComponent(securityList, index++, 'StandardHeader', true)
  isSimple(securityList, index++, 'SecurityReqID', false)
  isSimple(securityList, index++, 'SecurityResponseID', false)
  isSimple(securityList, index++, 'SecurityRequestResult', false)
  isSimple(securityList, index++, 'SecurityListRequestType', false)
  isSimple(securityList, index++, 'TotNoRelatedSym', false)
  isSimple(securityList, index++, 'LastFragment', false)
  isComponent(securityList, index++, 'SecListGrp', false)
  isSimple(securityList, index++, 'SecurityReportID', false)
  isSimple(securityList, index++, 'ClearingBusinessDate', false)
  isSimple(securityList, index++, 'MarketID', false)
  isSimple(securityList, index++, 'MarketSegmentID', false)
  isSimple(securityList, index++, 'SecurityListID', false)
  isSimple(securityList, index++, 'SecurityListRefID', false)
  isSimple(securityList, index++, 'SecurityListDesc', false)
  isSimple(securityList, index++, 'EncodedSecurityListDescLen', false)
  isSimple(securityList, index++, 'EncodedSecurityListDesc', false)
  isSimple(securityList, index++, 'SecurityListType', false)
  isSimple(securityList, index++, 'SecurityListTypeSource', false)
  isSimple(securityList, index++, 'TransactTime', false)
  isComponent(securityList, index++, 'StandardTrailer', true)
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

function getSecListGrp (): (ContainedComponentField | null) {
  const securityList = definitions.message.get('SecurityList')
  expect(securityList).toBeTruthy()
  const secListGrp = securityList?.components.get('SecListGrp')
  expect(secListGrp).toBeTruthy()
  return secListGrp ?? null
}

function getNumRelatedSym (): (ComponentFieldDefinition | null) {
  const secListGrp = getSecListGrp()
  const noRelatedField = secListGrp?.definition?.fields[0] as ContainedComponentField
  expect(noRelatedField).toBeTruthy()
  const noRelatedSym = noRelatedField?.definition ?? null
  expect(noRelatedSym).toBeTruthy()
  return noRelatedSym
}

function getSecurityTradingRules (): (ComponentFieldDefinition | null) {
  const numRelatedSym = getNumRelatedSym()
  const securityTradingRules = numRelatedSym?.components.get('SecurityTradingRules')
  expect(securityTradingRules).toBeTruthy()
  return securityTradingRules?.definition ?? null
}

test('check SecListGrp', () => {
  const secListGrp = getSecListGrp()
  expect(secListGrp).toBeTruthy()
  expect(secListGrp?.definition?.fields?.length).toEqual(1)
  isGroup(secListGrp?.definition ?? null, 0, 'NoRelatedSym', false)
})

test('check NoRelatedSym', () => {
  let index = 0
  const noRelatedSym = getNumRelatedSym()
  isComponent(noRelatedSym, index++, 'Instrument', false)
  isComponent(noRelatedSym, index++, 'InstrumentExtension', false)
  isComponent(noRelatedSym, index++, 'FinancingDetails', false)
  isComponent(noRelatedSym, index++, 'UndInstrmtGrp', false)
  isSimple(noRelatedSym, index++, 'Currency', false)
  isSimple(noRelatedSym, index++, 'ContractPositionNumber', false)
  isComponent(noRelatedSym, index++, 'Stipulations', false)
  isComponent(noRelatedSym, index++, 'InstrmtLegSecListGrp', false)
  isComponent(noRelatedSym, index++, 'SpreadOrBenchmarkCurveData', false)
  isComponent(noRelatedSym, index++, 'YieldData', false)
  isSimple(noRelatedSym, index++, 'Text', false)
  isSimple(noRelatedSym, index++, 'EncodedTextLen', false)
  isSimple(noRelatedSym, index++, 'EncodedText', false)
  isComponent(noRelatedSym, index++, 'SecurityTradingRules', false)
  isComponent(noRelatedSym, index++, 'StrikeRules', false)
  isSimple(noRelatedSym, index++, 'RelSymTransactTime', false)
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
  const securityTradingRules = getSecurityTradingRules()
  isComponent(securityTradingRules, index++, 'BaseTradingRules', false)
  isComponent(securityTradingRules, index++, 'TradingSessionRulesGrp', false)
  isComponent(securityTradingRules, index++, 'NestedInstrumentAttribute', false)
})
