import 'reflect-metadata'

import { FixDefinitions, MessageDefinition } from '../../dictionary/definition'
import { DefinitionFactory } from '../../util'
import { SetConstraintHelper } from '../env/set-constraint-helper'
import { QuickFixXmlFileBuilder } from '../../dictionary/parser/quickfix/quick-fix-xml-file-builder'
import { FieldEnum, FixVersion } from '../../dictionary'
import { QuickFixXmlFileParser } from '../../dictionary/parser'
import { StringDuplex } from '../../transport'
import { EmptyLogger } from '../../config'

let definitions: FixDefinitions
let setHelper: SetConstraintHelper

beforeAll(async () => {
  definitions = await new DefinitionFactory().getDefinitions('data/FIX50SP2.xml')
  setHelper = new SetConstraintHelper(definitions)
}, 45000)

/*
use notepad++ replace with regular expression
.*component name='(.*)' required.*
setHelper.isComponent\(tc, index++, '\1', false\)
 */

function checkTradeCapture (tc: (MessageDefinition | undefined)): void {
  expect(tc).toBeTruthy()
  let index = 0
  setHelper.isComponent(tc, index++, 'StandardHeader', true)
  setHelper.isComponent(tc, index++, 'ApplicationSequenceControl', false)
  setHelper.isSimple(tc, index++, 'TradeReportID', false)
  setHelper.isSimple(tc, index++, 'TradeID', false)
  setHelper.isSimple(tc, index++, 'SecondaryTradeID', false)
  setHelper.isSimple(tc, index++, 'FirmTradeID', false)
  setHelper.isSimple(tc, index++, 'SecondaryFirmTradeID', false)
  setHelper.isSimple(tc, index++, 'PackageID', false)
  setHelper.isSimple(tc, index++, 'TradeNumber', false)
  setHelper.isSimple(tc, index++, 'TradeReportTransType', false)
  setHelper.isSimple(tc, index++, 'TradeReportType', false)
  setHelper.isSimple(tc, index++, 'TrdRptStatus', false)
  setHelper.isSimple(tc, index++, 'TradeRequestID', false)
  setHelper.isSimple(tc, index++, 'TrdType', false)
  setHelper.isSimple(tc, index++, 'TrdSubType', false)
  setHelper.isSimple(tc, index++, 'SecondaryTrdType', false)
  setHelper.isSimple(tc, index++, 'TertiaryTrdType', false)
  setHelper.isSimple(tc, index++, 'AnonymousTradeIndicator', false)
  setHelper.isSimple(tc, index++, 'AlgorithmicTradeIndicator', false)
  setHelper.isSimple(tc, index++, 'OffsetInstruction', false)
  setHelper.isComponent(tc, index++, 'TradePriceConditionGrp', false)
  setHelper.isSimple(tc, index++, 'TradeHandlingInstr', false)
  setHelper.isSimple(tc, index++, 'OrigTradeHandlingInstr', false)
  setHelper.isSimple(tc, index++, 'OrigTradeDate', false)
  setHelper.isSimple(tc, index++, 'OrigTradeID', false)
  setHelper.isSimple(tc, index++, 'OrigSecondaryTradeID', false)
  setHelper.isSimple(tc, index++, 'TransferReason', false)
  setHelper.isSimple(tc, index++, 'ExecType', false)
  setHelper.isSimple(tc, index++, 'TotNumTradeReports', false)
  setHelper.isSimple(tc, index++, 'LastRptRequested', false)
  setHelper.isSimple(tc, index++, 'ManualOrderIndicator', false)
  setHelper.isSimple(tc, index++, 'UnsolicitedIndicator', false)
  setHelper.isSimple(tc, index++, 'SubscriptionRequestType', false)
  setHelper.isSimple(tc, index++, 'TradeReportRefID', false)
  setHelper.isSimple(tc, index++, 'SecondaryTradeReportRefID', false)
  setHelper.isSimple(tc, index++, 'SecondaryTradeReportID', false)
  setHelper.isSimple(tc, index++, 'TradeLinkID', false)
  setHelper.isSimple(tc, index++, 'TrdMatchID', false)
  setHelper.isSimple(tc, index++, 'ExecID', false)
  setHelper.isSimple(tc, index++, 'ExecRefID', false)
  setHelper.isSimple(tc, index++, 'SecondaryExecID', false)
  setHelper.isSimple(tc, index++, 'ExecRestatementReason', false)
  setHelper.isSimple(tc, index++, 'RegulatoryTransactionType', false)
  setHelper.isComponent(tc, index++, 'RegulatoryTradeIDGrp', false)
  setHelper.isSimple(tc, index++, 'PreviouslyReported', false)
  setHelper.isSimple(tc, index++, 'PriceType', false)
  setHelper.isComponent(tc, index++, 'PriceQualifierGrp', false)
  setHelper.isSimple(tc, index++, 'CrossType', false)
  setHelper.isComponent(tc, index++, 'RootParties', false)
  setHelper.isSimple(tc, index++, 'AsOfIndicator', false)
  setHelper.isSimple(tc, index++, 'SettlSessID', false)
  setHelper.isSimple(tc, index++, 'SettlSessSubID', false)
  setHelper.isSimple(tc, index++, 'VenueType', false)
  setHelper.isSimple(tc, index++, 'MarketSegmentID', false)
  setHelper.isSimple(tc, index++, 'MarketID', false)
  setHelper.isSimple(tc, index++, 'TaxonomyType', false)
  setHelper.isComponent(tc, index++, 'Instrument', false)
  setHelper.isComponent(tc, index++, 'InstrumentExtension', false)
  setHelper.isComponent(tc, index++, 'FinancingDetails', false)
  setHelper.isComponent(tc, index++, 'PaymentGrp', false)
  setHelper.isSimple(tc, index++, 'QtyType', false)
  setHelper.isComponent(tc, index++, 'YieldData', false)
  setHelper.isComponent(tc, index++, 'UndInstrmtGrp', false)
  setHelper.isComponent(tc, index++, 'RelatedInstrumentGrp', false)
  setHelper.isComponent(tc, index++, 'CollateralAmountGrp', false)
  setHelper.isSimple(tc, index++, 'CollateralizationValueDate', false)
  setHelper.isComponent(tc, index++, 'RateSource', false)
  setHelper.isComponent(tc, index++, 'TransactionAttributeGrp', false)
  setHelper.isSimple(tc, index++, 'UnderlyingTradingSessionID', false)
  setHelper.isSimple(tc, index++, 'UnderlyingTradingSessionSubID', false)
  setHelper.isSimple(tc, index++, 'LastQty', false)
  setHelper.isSimple(tc, index++, 'LastQtyVariance', false)
  setHelper.isSimple(tc, index++, 'LastQtyChanged', false)
  setHelper.isSimple(tc, index++, 'LastMultipliedQty', false)
  setHelper.isSimple(tc, index++, 'TotalTradeQty', false)
  setHelper.isSimple(tc, index++, 'TotalTradeMultipliedQty', false)
  setHelper.isSimple(tc, index++, 'LastPx', false)
  setHelper.isSimple(tc, index++, 'MidPx', false)
  setHelper.isSimple(tc, index++, 'DifferentialPrice', false)
  setHelper.isSimple(tc, index++, 'CalculatedCcyLastQty', false)
  setHelper.isSimple(tc, index++, 'PriceMarkup', false)
  setHelper.isComponent(tc, index++, 'AveragePriceDetail', false)
  setHelper.isSimple(tc, index++, 'Currency', false)
  setHelper.isSimple(tc, index++, 'CurrencyCodeSource', false)
  setHelper.isSimple(tc, index++, 'SettlCurrency', false)
  setHelper.isSimple(tc, index++, 'SettlCurrencyCodeSource', false)
  setHelper.isSimple(tc, index++, 'SettlPriceFxRateCalc', false)
  setHelper.isSimple(tc, index++, 'LastParPx', false)
  setHelper.isSimple(tc, index++, 'LastSpotRate', false)
  setHelper.isSimple(tc, index++, 'LastForwardPoints', false)
  setHelper.isSimple(tc, index++, 'LastSwapPoints', false)
  setHelper.isSimple(tc, index++, 'PricePrecision', false)
  setHelper.isSimple(tc, index++, 'LastMkt', false)
  setHelper.isSimple(tc, index++, 'ClearingTradePrice', false)
  setHelper.isSimple(tc, index++, 'TradePriceNegotiationMethod', false)
  setHelper.isSimple(tc, index++, 'LastUpfrontPrice', false)
  setHelper.isSimple(tc, index++, 'UpfrontPriceType', false)
  setHelper.isSimple(tc, index++, 'TradeDate', false)
  setHelper.isSimple(tc, index++, 'ClearingBusinessDate', false)
  setHelper.isSimple(tc, index++, 'ClearingPortfolioID', false)
  setHelper.isSimple(tc, index++, 'AvgPx', false)
  setHelper.isComponent(tc, index++, 'SpreadOrBenchmarkCurveData', false)
  setHelper.isSimple(tc, index++, 'AvgPxGroupID', false)
  setHelper.isSimple(tc, index++, 'AvgPxIndicator', false)
  setHelper.isSimple(tc, index++, 'ValuationDate', false)
  setHelper.isSimple(tc, index++, 'ValuationTime', false)
  setHelper.isSimple(tc, index++, 'ValuationBusinessCenter', false)
  setHelper.isComponent(tc, index++, 'PositionAmountData', false)
  setHelper.isSimple(tc, index++, 'MultiLegReportingType', false)
  setHelper.isSimple(tc, index++, 'TradeLegRefID', false)
  setHelper.isComponent(tc, index++, 'TrdInstrmtLegGrp', false)
  setHelper.isSimple(tc, index++, 'TransactTime', false)
  setHelper.isComponent(tc, index++, 'TrdRegTimestamps', false)
  setHelper.isSimple(tc, index++, 'SettlType', false)
  setHelper.isSimple(tc, index++, 'SettlDate', false)
  setHelper.isSimple(tc, index++, 'TerminationDate', false)
  setHelper.isSimple(tc, index++, 'UnderlyingSettlementDate', false)
  setHelper.isSimple(tc, index++, 'MatchStatus', false)
  setHelper.isSimple(tc, index++, 'ExecMethod', false)
  setHelper.isSimple(tc, index++, 'MatchType', false)
  setHelper.isComponent(tc, index++, 'TradeQtyGrp', false)
  setHelper.isComponent(tc, index++, 'TrdCapRptSideGrp', false)
  setHelper.isSimple(tc, index++, 'Volatility', false)
  setHelper.isSimple(tc, index++, 'TimeToExpiration', false)
  setHelper.isSimple(tc, index++, 'DividendYield', false)
  setHelper.isSimple(tc, index++, 'RiskFreeRate', false)
  setHelper.isSimple(tc, index++, 'PriceDelta', false)
  setHelper.isSimple(tc, index++, 'CurrencyRatio', false)
  setHelper.isSimple(tc, index++, 'CopyMsgIndicator', false)
  setHelper.isComponent(tc, index++, 'TrdRepIndicatorsGrp', false)
  setHelper.isSimple(tc, index++, 'TradeReportingIndicator', false)
  setHelper.isSimple(tc, index++, 'PublishTrdIndicator', false)
  setHelper.isSimple(tc, index++, 'TradePublishIndicator', false)
  setHelper.isComponent(tc, index++, 'TrdRegPublicationGrp', false)
  setHelper.isSimple(tc, index++, 'ShortSaleReason', false)
  setHelper.isSimple(tc, index++, 'TierCode', false)
  setHelper.isSimple(tc, index++, 'MessageEventSource', false)
  setHelper.isSimple(tc, index++, 'LastUpdateTime', false)
  setHelper.isSimple(tc, index++, 'RndPx', false)
  setHelper.isSimple(tc, index++, 'TZTransactTime', false)
  setHelper.isSimple(tc, index++, 'ReportedPxDiff', false)
  setHelper.isSimple(tc, index++, 'GrossTradeAmt', false)
  setHelper.isSimple(tc, index++, 'TotalGrossTradeAmt', false)
  setHelper.isSimple(tc, index++, 'TradeReportRejectReason', false)
  setHelper.isSimple(tc, index++, 'RejectText', false)
  setHelper.isSimple(tc, index++, 'EncodedRejectTextLen', false)
  setHelper.isSimple(tc, index++, 'EncodedRejectText', false)
  setHelper.isSimple(tc, index++, 'FeeMultiplier', false)
  setHelper.isSimple(tc, index++, 'ClearedIndicator', false)
  setHelper.isSimple(tc, index++, 'ClearingIntention', false)
  setHelper.isSimple(tc, index++, 'TradeClearingInstruction', false)
  setHelper.isSimple(tc, index++, 'BackloadedTradeIndicator', false)
  setHelper.isSimple(tc, index++, 'ConfirmationMethod', false)
  setHelper.isSimple(tc, index++, 'MandatoryClearingIndicator', false)
  setHelper.isComponent(tc, index++, 'MandatoryClearingJurisdictionGrp', false)
  setHelper.isSimple(tc, index++, 'MixedSwapIndicator', false)
  setHelper.isSimple(tc, index++, 'MultiAssetSwapIndicator', false)
  setHelper.isSimple(tc, index++, 'InternationalSwapIndicator', false)
  setHelper.isSimple(tc, index++, 'OffMarketPriceIndicator', false)
  setHelper.isSimple(tc, index++, 'VerificationMethod', false)
  setHelper.isSimple(tc, index++, 'ClearingRequirementException', false)
  setHelper.isSimple(tc, index++, 'IRSDirection', false)
  setHelper.isSimple(tc, index++, 'RegulatoryReportType', false)
  setHelper.isSimple(tc, index++, 'RegulatoryReportTypeBusinessDate', false)
  setHelper.isSimple(tc, index++, 'VoluntaryRegulatoryReport', false)
  setHelper.isSimple(tc, index++, 'MultiJurisdictionReportingIndicator', false)
  setHelper.isSimple(tc, index++, 'TradeCollateralization', false)
  setHelper.isSimple(tc, index++, 'TradeContinuation', false)
  setHelper.isSimple(tc, index++, 'TradeContingency', false)
  setHelper.isSimple(tc, index++, 'TradeVersion', false)
  setHelper.isSimple(tc, index++, 'HistoricalReportIndicator', false)
  setHelper.isSimple(tc, index++, 'DeltaCrossed', false)
  setHelper.isSimple(tc, index++, 'TradeContinuationText', false)
  setHelper.isSimple(tc, index++, 'EncodedTradeContinuationTextLen', false)
  setHelper.isSimple(tc, index++, 'EncodedTradeContinuationText', false)
  setHelper.isSimple(tc, index++, 'IntraFirmTradeIndicator', false)
  setHelper.isSimple(tc, index++, 'AffiliatedFirmsTradeIndicator', false)
  setHelper.isComponent(tc, index++, 'AttachmentGrp', false)
  setHelper.isSimple(tc, index++, 'RiskLimitCheckStatus', false)
  setHelper.isComponent(tc, index++, 'StandardTrailer', true)
}

test('check definitions version', () => {
  expect(definitions.getMajor()).toEqual(5)
  expect(definitions.getMinor()).toEqual(0)
  expect(definitions.getServicePack()).toEqual(2)
  expect(definitions.version).toEqual(FixVersion.FIX50SP2)
})

test('check trade caputure src xml', () => {
  checkTradeCapture(definitions.message.get('AE'))
})

async function getTrimDefinitions (types: string[]): Promise<FixDefinitions> {
  const builder = new QuickFixXmlFileBuilder(definitions)
  builder.write(types)
  const d = builder.elasticBuffer.toString()
  const parser = new QuickFixXmlFileParser(() => new StringDuplex(d), () => new EmptyLogger())
  return await parser.parse()
}

test('check builder', async () => {
  const msgTypes = ['0', '1', '2', '3', '4', '5', 'AE']
  const newdDefinitions = await getTrimDefinitions(msgTypes)
  expect(newdDefinitions).toBeTruthy()
  msgTypes.forEach(mt => {
    const m = newdDefinitions.message.get(mt)
    expect(m).toBeTruthy()
  })
})

test('check version on trim definitions', async () => {
  const msgTypes = ['0']
  const newdDefinitions = await getTrimDefinitions(msgTypes)
  expect(newdDefinitions.getMajor()).toEqual(definitions.getMajor())
  expect(newdDefinitions.getMinor()).toEqual(definitions.getMinor())
  expect(newdDefinitions.getServicePack()).toEqual(definitions.getServicePack())
  expect(newdDefinitions.version).toEqual(definitions.version)
})

test('check trade capture from trim', async () => {
  const msgTypes = ['0', '1', '2', '3', '4', '5', 'AE']
  const newdDefinitions = await getTrimDefinitions(msgTypes)
  checkTradeCapture(newdDefinitions.message.get('AE'))
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

function checkEnum (enums: (Map<string, FieldEnum> | undefined), key: string, expectedVal: string, expectedDescription: string): void {
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
  const keys = Array.from(def?.enumVals.keys() ?? [])
  expect(def).toBeTruthy()
  checkSimple('AdvSide', 4, 'CHAR')
  expect(def?.isEnum()).toBeTruthy()
  expect(def?.enumVals).toBeTruthy()
  expect(keys.length).toEqual(4)
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
  checkSimple('XmlData', 213, 'XMLDATA')
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
  Array.from(mt?.enums.keys() ?? []).forEach(k => {
    if (k === 'n') return
    const m = definitions.message.get(k)
    expect(k).toBeTruthy()
    expect(m).toBeTruthy()
    expect(m?.msgType).toEqual(k)
  })
})
