// use the compiled interfaces for intelisense

import { ToViews } from './to-views'
import { IInstrument } from '../types/FIXML50SP2/set/instrument'
import { IMDFullGrp } from '../types/FIXML50SP2/set/md_full_grp'
import { IMarketDataSnapshotFullRefresh } from '../types/FIXML50SP2/market_data_snapshot_full_refresh'
import { IBatch } from '../types/FIXML50SP2/set/batch'

const testFolder: string = 'examples/FIXML/cme/md/settle/'
const toViews: ToViews = new ToViews(testFolder)

beforeAll(async () => {
  await toViews.load()
}, 15000)

test('expect 2 views from fix msg', () => {
  const views = toViews.views
  expect(views.length).toEqual(2)
  const v0 = views[0]
  expect(v0).toBeTruthy()
  const v1 = views[1]
  expect(v1).toBeTruthy()
})

test('expect 1 batch from fix msg', () => {
  const batch: IBatch = toViews.batch.toObject()
  expect(batch).toBeTruthy()
  expect(batch.Batch).toBeTruthy()
  expect(Array.isArray(batch.Batch)).toBeTruthy()
  expect(batch.Batch.length).toEqual(2)
})
