import 'reflect-metadata'

import * as path from 'path'
import { FixDefinitions } from '../../dictionary/definition'
import { DefinitionFactory } from '../../util'
import { IContainedSet } from '../../dictionary/contained'
import { SetConstraintHelper } from '../env/set-constraint-helper'

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
  public getSecListGrp (): (IContainedSet | undefined) {
    return this.definitions.getSet('SecurityList.SecListGrp')
  }

  public getNumRelatedSym (): (IContainedSet | undefined) {
    return this.getSecListGrp()?.getSet('NoRelatedSym') ?? undefined
  }

  public getSecurityTradingRules (): (IContainedSet | undefined) {
    return this.getNumRelatedSym()?.getSet('SecurityTradingRules') ?? undefined
  }

  public getBaseTradingRules (): (IContainedSet | undefined) {
    return this.getSecurityTradingRules()?.getSet('BaseTradingRules') ?? undefined
  }

  public getTickRules (): (IContainedSet | undefined) {
    return this.getBaseTradingRules()?.getSet('TickRules') ?? undefined
  }

  public getNoTickRules (): (IContainedSet | undefined) {
    return this.getTickRules()?.getSet('NoTickRules') ?? undefined
  }
}

test('check message SecurityList', () => {
  const securityList: (IContainedSet | undefined) = definitions?.getSet('SecurityList') ?? undefined
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
  setHelper.isGroup(secListGrp ?? undefined, 0, 'NoRelatedSym', false)
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
