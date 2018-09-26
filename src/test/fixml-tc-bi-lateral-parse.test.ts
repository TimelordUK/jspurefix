// use the compiled interfaces for intelisense
import { ILooseObject } from '../collections/collection'
import { IStandardHeader } from '../types/FIXML50SP2/set/standard_header'
import { ITradeCaptureReport } from '../types/FIXML50SP2/trade_capture_report'
import { IInstrument } from '../types/FIXML50SP2/set/instrument'
import { IBatch } from '../types/FIXML50SP2/set/batch'
import { ToViews } from './to-views'

const testFolder: string = 'examples/FIXML/cme/tc/Delivery Fixed Commodity Swap'
const toViews: ToViews = new ToViews(testFolder)

beforeAll(async () => {
  await toViews.load()
}, 30000)

test('expect a view from fix msg', () => {
  const views = toViews.views
  expect(views.length).toEqual(1)
})

test('expect a batch view ', () => {
  const batch = toViews.batch
  expect(batch).toBeTruthy()
  const o: IBatch = batch.toObject()
  expect(o).toBeTruthy()
  const instances: ILooseObject[] = o.Batch
  expect(Array.isArray(instances)).toEqual(true)
  expect(instances.length).toEqual(1)
})

test('expect an instrument', () => {
  const views = toViews.views
  const t: ITradeCaptureReport = views[0].toObject()
  expect(t).toBeTruthy()
  const i = t.Instrument
  expect(i).toBeTruthy()
})

test('check instrument attributes', () => {
  const views = toViews.views
  const t: ITradeCaptureReport = views[0].toObject()
  const i = t.Instrument
  expect(i).toBeTruthy()
  const iv = views[0].getView('Instrument')
  expect(iv).toBeTruthy()
  expect(i.UnderlyingStreamCommodityExchange).toEqual('XXXX')
  expect(iv.getString('Exch')).toEqual('XXXX')
  expect(iv.getString('SecTyp')).toEqual('CMDTYSWAP')
  expect(i.RelatedSecurityType).toEqual('CMDTYSWAP')
})

test('check instrument groups', () => {
  const views = toViews.views
  const t: ITradeCaptureReport = views[0].toObject()
  const i: IInstrument = t.Instrument
  const stream = i.StreamGrp
  expect(stream).toBeTruthy()
  expect(Array.isArray(stream))
  expect(stream.length).toEqual(2)
  const grpView = views[0].getView('Instrument.StreamGrp')
  expect(grpView).toBeTruthy()
  const g0 = grpView.getGroupInstance(0)
  const g1 = grpView.getGroupInstance(1)
  expect(g0).toBeTruthy()
  expect(g1).toBeTruthy()
  // TotNotlUOM="MMBtu" TotNotl="310000.10" NotlUOM="MMBtu" NotlUnit="D" NotlPeriod="1" Notl="10000.20" RcvSide="1" PaySide="2" Typ="1"
  const keys = ['TotNotlUOM', 'TotNotl', 'NotlUOM', 'NotlUnit', 'NotlPeriod', 'Notl', 'RcvSide', 'PaySide', 'Typ']

  const v0: any[] = g0.getTypedTags(keys)
  expect(v0[0]).toEqual('MMBtu')
  expect(v0[1]).toEqual(310000.10)
  expect(v0[2]).toEqual('MMBtu')
  expect(v0[3]).toEqual('D')
  expect(v0[4]).toEqual(1)
  expect(v0[5]).toEqual(10000.20)
  expect(v0[6]).toEqual(1)
  expect(v0[7]).toEqual(2)
  expect(v0[8]).toEqual(1)

  // TotNotlUOM="MMBtu" TotNotl="310000.10" NotlUOM="MMBtu" NotlUnit="D" NotlPeriod="1" Notl="10000.20" RcvSide="2" PaySide="1" Typ="0">
  const v1: any[] = g1.getTypedTags(keys)
  expect(v1[0]).toEqual('MMBtu')
  expect(v1[1]).toEqual(310000.10)
  expect(v1[2]).toEqual('MMBtu')
  expect(v1[3]).toEqual('D')
  expect(v1[4]).toEqual(1)
  expect(v1[5]).toEqual(10000.20)
  expect(v1[6]).toEqual(2)
  expect(v1[7]).toEqual(1)
  expect(v1[8]).toEqual(0)
})

/*{
"SenderCompID": "CME",
"TargetCompID": "ATS_BROKER1",
"SenderSubID": "STP",
"TargetSubID": "STP_API_IRAT_T"
*/

test('expect Hdr view to be on Batch', () => {
  const batch = toViews.batch
  const o: IBatch = batch.toObject()
  const hdr: IStandardHeader = o.StandardHeader
  expect(hdr).toBeTruthy()
  expect(hdr.SenderCompID).toEqual('CME')
  expect(hdr.TargetCompID).toEqual('ATS_BROKER1')
  expect(hdr.SenderSubID).toEqual('STP')
  expect(hdr.TargetSubID).toEqual('STP_API_IRAT_T')
})
