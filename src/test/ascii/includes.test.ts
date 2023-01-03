import 'reflect-metadata'

import { IncludeGraph } from '../../dictionary/parser/fixml/include-graph'
import * as path from 'path'

let includes: IncludeGraph
const ver: string = '5-0-SP2'
const root: string = path.join(__dirname, '../../../data/fix_repo/fixmlschema_FIX.5.0SP2_EP228')
const dataTypes: string = `fixml-datatypes-${ver}.xsd`
const fieldsBase: string = `fixml-fields-base-${ver}.xsd`
const fieldsImpl: string = `fixml-fields-impl-${ver}.xsd`
const componentsBase: string = `fixml-components-base-${ver}.xsd`
const componentsImpl: string = `fixml-components-impl-${ver}.xsd`

const main: string = `fixml-main-${ver}.xsd`

beforeAll(async () => {
  includes = new IncludeGraph(root, main)
  await includes.build()
}, 45000)

test('test resolving node with no dependencies', async () => {
  expect(includes.resolve(dataTypes)).toEqual([dataTypes])
}, 1000)

test('test resolving fields base with 1 dependency', async () => {
  expect(includes.resolve(fieldsBase)).toEqual([dataTypes, fieldsBase])
}, 1000)

test('test resolving fields impl with 2 dependencies', async () => {
  expect(includes.resolve(fieldsImpl)).toEqual([dataTypes, fieldsBase, fieldsImpl])
}, 1000)

test('test resolving components base depends on fields impl', async () => {
  expect(includes.resolve(componentsBase)).toEqual([dataTypes, fieldsBase, fieldsImpl, componentsBase])
}, 1000)

test('test resolving components impl depends on components base', async () => {
  expect(includes.resolve(componentsImpl)).toEqual([dataTypes, fieldsBase, fieldsImpl, componentsBase, componentsImpl])
}, 1000)
