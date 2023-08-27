// use the compiled interfaces for intelisense
import 'reflect-metadata'

import { ToViews } from '../env/to-views'
import { IInstrument, IMDFullGrp, IMarketDataSnapshotFullRefresh } from '../../types/FIXML50SP2'

const testFolder: string = 'examples/FIXML/cme/md/futures/'
const toViews: ToViews = new ToViews(testFolder)

beforeAll(async () => {
  await toViews.load()
}, 45000)

test('expect a view from fix msg', () => {
  const views = toViews.views
  expect(views.length).toEqual(1)
  const v0 = views[0]
  expect(v0).toBeTruthy()
})

test('test msg structure', () => {
  const views = toViews.views
  const v0: IMarketDataSnapshotFullRefresh = views[0].toObject() as IMarketDataSnapshotFullRefresh
  expect(v0).toBeTruthy()
  expect(v0.ClearingBusinessDate).toEqual(new Date('2008-12-09T00:00:00.000Z'))
  expect(v0.Instrument).toBeTruthy()
  expect(v0.MDFullGrp).toBeTruthy()
})

test('expect an instrument from fix msg', () => {
  const views = toViews.views
  const v0 = views[0].getView('Instrument')
  expect(v0).toBeTruthy()
  const i: IInstrument = v0?.toObject() as IInstrument
  expect(i).toBeTruthy()
  expect(i.Symbol).toEqual('ZCZ9')
  expect(i.SecurityID).toEqual('01')
  expect(i.SecurityIDSource).toEqual('H')
  expect(i.CFICode).toEqual('FFCPSO')
  expect(i.SecurityType).toEqual('FUT')
  expect(i.MaturityMonthYear).toEqual('200906')
  expect(i.SecurityExchange).toEqual('CME')
})

test('expect an md group from fix msg', () => {
  const views = toViews.views
  const v0 = views[0].getView('MDFullGrp')
  expect(v0).toBeTruthy()
  const fullGrp: IMDFullGrp[] = v0?.toObject() as IMDFullGrp[]
  expect(fullGrp).toBeTruthy()
  expect(Array.isArray(fullGrp))
  expect(fullGrp.length).toEqual(1)
  const first: IMDFullGrp = fullGrp[0]
  expect(first).toBeTruthy()
  expect(first.MDEntryPx).toEqual(18.97)
  expect(first.MDEntryType).toEqual('6')
  expect(first.MDMkt).toEqual('CME')
})
