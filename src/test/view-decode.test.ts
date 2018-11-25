import * as path from 'path'
import { Structure } from '../buffer/structure'
import { ILooseObject } from '../collections/collection'
import { FixDefinitions } from '../dictionary/definition/fix-definitions'
import { Ascii } from '../buffer/ascii'
import { MsgView } from '../buffer/msg-view'
import { AsciiMsgTransmitter } from '../transport/ascii/ascii-msg-transmitter'
import { ISessionDescription } from '../transport/session-description'
import { JsFixConfig } from '../config/js-fix-config'
import { IInstrumentLeg } from '../types/FIX4.4/quickfix/set/instrument_leg'
import { getDefinitions } from '../util/dictionary-definitions'
import { replayFixFile } from '../util/replay'

const root: string = path.join(__dirname, '../../data')

let definitions: FixDefinitions
let session: AsciiMsgTransmitter
let views: MsgView[]
let structure: Structure
let view: MsgView

beforeAll(async () => {
  const sessionDescription: ISessionDescription = require(path.join(root, 'session/qf-fix44.json'))
  definitions = await getDefinitions(sessionDescription.application.dictionary)
  const config = new JsFixConfig(null, definitions, sessionDescription, Ascii.Pipe)
  session = new AsciiMsgTransmitter(config)
  views = await replayFixFile(definitions, sessionDescription, path.join(root, 'examples/FIX.4.4/quickfix/md-data-snapshot/fix.txt'), Ascii.Pipe)
  if (views && views.length > 0) {
    view = views[0]
    structure = view.structure
  }
}, 45000)

test('expect a structure from fix msg', () => {
  expect(structure).toBeTruthy()
})

test('get NoMDEntries directly - expect an array', () => {
  const noMDEntriesView: MsgView = view.getView('NoMDEntries')
  expect(noMDEntriesView).toBeTruthy()
  const noMDEntries: ILooseObject[] = noMDEntriesView.toObject()
  expect(Array.isArray(noMDEntries)).toEqual(true)
  expect(noMDEntries.length).toEqual(2)
})

test('get NoMDEntries via MDFullGrp - array within a component', () => {
  const mdFullGrp: MsgView = view.getView('MDFullGrp')
  expect(mdFullGrp).toBeTruthy()
  const mdFullGrpAsObject: ILooseObject = mdFullGrp.toObject()
  const noMDEntries: ILooseObject[] = mdFullGrpAsObject.NoMDEntries
  expect(Array.isArray(noMDEntries)).toEqual(true)
  expect(noMDEntries.length).toEqual(2)
})

function getMdEntriesObjects (): ILooseObject[] {
  const noMDEntriesView: MsgView = view.getView('NoMDEntries')
  expect(noMDEntriesView).toBeTruthy()
  const noMDEntries: ILooseObject[] = noMDEntriesView.toObject()
  expect(Array.isArray(noMDEntries)).toEqual(true)
  expect(noMDEntries.length).toEqual(2)
  return noMDEntries
}

//  <field number='272' name='MDEntryDate' type='UTCDATEONLY' />

test('get UTCDATEONLY from NoMDEntries instance 1', () => {
  const noMdEntriesAsObjects: ILooseObject[] = getMdEntriesObjects()
  const noMDEntriesView: MsgView = view.getView('NoMDEntries')
  const mmEntryView: MsgView = noMDEntriesView.getGroupInstance(1)

  const instance: ILooseObject = noMdEntriesAsObjects[1]
  const mmEntryDateAsString: string = mmEntryView.getString('MDEntryDate')
  expect(mmEntryDateAsString).toEqual('20180608')
  expect(mmEntryView.getString(272)).toEqual('20180608')
  const asUtc: Date = new Date(Date.UTC(2018, 5, 8))
  expect(instance.MDEntryDate).toEqual(asUtc)
})

// <field number='273' name='MDEntryTime' type='UTCTIMEONLY' />

test('get UTCTIMEONLY from NoMDEntries instance 1', () => {
  const noMdEntriesAsObjects: ILooseObject[] = getMdEntriesObjects()
  const noMDEntriesView: MsgView = view.getView('NoMDEntries')
  const mmEntryView: MsgView = noMDEntriesView.getGroupInstance(1)

  const instance: ILooseObject = noMdEntriesAsObjects[1]
  const mmEntryTimeAsString: string = mmEntryView.getString('MDEntryTime')
  expect(mmEntryTimeAsString).toEqual('20:53:14.717')
  expect(mmEntryView.getString(273)).toEqual('20:53:14.717')
  const asUtc: Date = new Date(Date.UTC(0, 0, 0, 20, 53, 14, 717))
  expect(instance.MDEntryTime).toEqual(asUtc)
})

//   <field number='126' name='ExpireTime' type='UTCTIMESTAMP' />

test('get UTCTIMESTAMP from NoMDEntries instance 1', () => {
  const noMdEntriesAsObjects: ILooseObject[] = getMdEntriesObjects()
  const noMDEntriesView: MsgView = view.getView('NoMDEntries')
  const mmEntryView: MsgView = noMDEntriesView.getGroupInstance(1)

  const instance: ILooseObject = noMdEntriesAsObjects[1]
  const mmEntryExpireTimeAsString: string = mmEntryView.getString('ExpireTime')
  expect(mmEntryExpireTimeAsString).toEqual('20180608-20:53:14.000')
  expect(mmEntryView.getString(126)).toEqual('20180608-20:53:14.000')
  const asUtc: Date = new Date(Date.UTC(2018, 5, 8, 20, 53, 14, 0))
  const d: Date = instance.ExpireTime
  expect(d).toEqual(asUtc)
})

//   <field number='110' name='MinQty' type='QTY' />

test('get MinQty from NoMDEntries instance 1', () => {
  const noMdEntriesAsObjects: ILooseObject[] = getMdEntriesObjects()
  const noMDEntriesView: MsgView = view.getView('NoMDEntries')
  const mmEntryView: MsgView = noMDEntriesView.getGroupInstance(1)

  const instance: ILooseObject = noMdEntriesAsObjects[1]
  const mmEntryMinQtyAsString: string = mmEntryView.getString('MinQty')
  expect(mmEntryMinQtyAsString).toEqual('53495')
  expect(mmEntryView.getString(110)).toEqual('53495')
  expect(instance.MinQty).toEqual(53495)
})

test('get selection tags one call - tag ids', () => {
  const [a, b, c, d] = view.getTypedTags([8, 9, 35, 49])
  expect(a).toEqual('FIX4.4')
  expect(b).toEqual(2955)
  expect(c).toEqual('W')
  expect(d).toEqual('sender-10')
})

/*
[0] 8 (BeginString) = FIX4.4, [1] 9 (BodyLength) = 0002955
[2] 35 (MsgType) = W[MARKET_DATA_SNAPSHOT_FULL_REFRESH], [3] 49 (SenderCompID) = sender-10
[4] 56 (TargetCompID) = target-20, [5] 34 (MsgSeqNum) = 1
[6] 57 (TargetSubID) = sub-a, [7] 52 (SendingTime) = 20180608-21:10:59.047
[8] 262 (MDReqID) = ipsum, [9] 55 (Symbol) = sit
 */

test('get selection tags one call - tag names', () => {
  const [a, b, c, d, e, f] = view.getTypedTags([
    'BeginString',
    'BodyLength',
    'MsgType',
    'MsgSeqNum',
    'MDReqID',
    'Symbol'])
  expect(a).toEqual('FIX4.4')
  expect(b).toEqual(2955)
  expect(c).toEqual('W')
  expect(d).toEqual(1)
  expect(e).toEqual('ipsum')
  expect(f).toEqual('sit')
})

test('nested view fetch' , () => {
  const legGrpView = view.getView('InstrmtLegGrp.NoLegs')
  expect(legGrpView).toBeTruthy()
  const legGrp: IInstrumentLeg[] = legGrpView.toObject()
  expect(legGrp).toBeTruthy()
  expect(Array.isArray(legGrp))
  expect(legGrp.length).toEqual(2)
})
