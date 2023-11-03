import 'reflect-metadata'

import * as path from 'path'
import { FixDefinitions } from '../../dictionary/definition'
import { DefinitionFactory } from '../../util'
import { ContainedField, ContainedFieldSet, ContainedFieldType } from '../../dictionary/contained'

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
