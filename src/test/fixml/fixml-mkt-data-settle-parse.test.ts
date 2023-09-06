// use the compiled interfaces for intelisense
import 'reflect-metadata'

import { ToViews } from '../env/to-views'
import { IBatch } from '../../types/FIXML50SP2/set/batch'

const testFolder: string = 'examples/FIXML/cme/md/settle/'
const toViews: ToViews = new ToViews(testFolder)

beforeAll(async () => {
  await toViews.load()
}, 45000)

test('expect 2 views from fix msg', () => {
  const views = toViews.views
  expect(views.length).toEqual(2)
  const v0 = views[0]
  expect(v0).toBeTruthy()
  const v1 = views[1]
  expect(v1).toBeTruthy()
})

test('expect 1 batch from fix msg', () => {
  const batch: IBatch = toViews?.batch?.toObject() as IBatch
  expect(batch).toBeTruthy()
  expect(batch.Batch).toBeTruthy()
  expect(Array.isArray(batch.Batch)).toBeTruthy()
  expect(batch.Batch.length).toEqual(2)
})
