import 'reflect-metadata'

import * as path from 'path'
import { Structure, MsgView } from '../../buffer'
import { ILooseObject } from '../../collections/collection'
import { FixDefinitions, MessageDefinition } from '../../dictionary/definition'
import { IInstrumentLeg, IMarketDataRequest, MDEntryType, SubscriptionRequestType } from '../../types/FIX4.4/quickfix'
import { AsciiMsgTransmitter } from '../../transport/ascii/ascii-msg-transmitter'
import { Setup } from '../env/setup'
import { ParsingResult } from '../env/parsing-result'

const root: string = path.join(__dirname, '../../../data')

let definitions: FixDefinitions
let session: AsciiMsgTransmitter
let views: MsgView[]
let structure: Structure
let view: MsgView
let setup: Setup = null

beforeAll(async () => {
  setup = new Setup('session/qf-fix44.json',null)
  await setup.init()
  definitions = setup.definitions
  session = setup.client.transmitter as AsciiMsgTransmitter
  views = await setup.client.replayer.replayFixFile(path.join(root, 'examples/FIX.4.4/quickfix/md-data-snapshot/fix.txt'))
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
  expect(mmEntryDateAsString).toEqual('20210129')
  expect(mmEntryView.getString(272)).toEqual('20210129')
  const asUtc: Date = new Date(Date.UTC(2021, 0, 29))
  expect(instance.MDEntryDate).toEqual(asUtc)
})

// <field number='273' name='MDEntryTime' type='UTCTIMEONLY' />

test('get UTCTIMEONLY from NoMDEntries instance 0', () => {
  const noMdEntriesAsObjects: ILooseObject[] = getMdEntriesObjects()
  const noMDEntriesView: MsgView = view.getView('NoMDEntries')
  const mmEntryView: MsgView = noMDEntriesView.getGroupInstance(0)

  const instance: ILooseObject = noMdEntriesAsObjects[0]
  const mmEntryTimeAsString: string = mmEntryView.getString('MDEntryTime')
  expect(mmEntryTimeAsString).toEqual('19:45:19.852')
  expect(mmEntryView.getString(273)).toEqual('19:45:19.852')
  const asUtc: Date = new Date(Date.UTC(0, 0, 0, 19, 45, 19, 852))
  expect(instance.MDEntryTime).toEqual(asUtc)
})

//   <field number='126' name='ExpireTime' type='UTCTIMESTAMP' />

test('get UTCTIMESTAMP from NoMDEntries instance 1', () => {
  const noMdEntriesAsObjects: ILooseObject[] = getMdEntriesObjects()
  const noMDEntriesView: MsgView = view.getView('NoMDEntries')
  const mmEntryView: MsgView = noMDEntriesView.getGroupInstance(1)

  const instance: ILooseObject = noMdEntriesAsObjects[1]
  const mmEntryExpireTimeAsString: string = mmEntryView.getString('ExpireTime')
  expect(mmEntryExpireTimeAsString).toEqual('20210129-19:45:19.000')
  expect(mmEntryView.getString(126)).toEqual('20210129-19:45:19.000')
  const asUtc: Date = new Date(Date.UTC(2021, 0, 29, 19, 45, 19, 0))
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
  expect(mmEntryMinQtyAsString).toEqual('9.6478')
  expect(mmEntryView.getString(110)).toEqual('9.6478')
  expect(instance.MinQty).toEqual(9.6478)
})

test('get selection tags one call - tag ids', () => {
  const [a, b, c, d] = view.getTypedTags([8, 9, 35, 49])
  expect(a).toEqual('FIX4.4')
  expect(b).toEqual(3957)
  expect(c).toEqual('W')
  expect(d).toEqual('init-comp')
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
  expect(b).toEqual(3957)
  expect(c).toEqual('W')
  expect(d).toEqual(1)
  expect(e).toEqual('Lorem')
  expect(f).toEqual('ipsum')
})

test('nested view fetch' , () => {
  const legGrpView = view.getView('InstrmtLegGrp.NoLegs')
  expect(legGrpView).toBeTruthy()
  const legGrp: IInstrumentLeg[] = legGrpView.toObject()
  expect(legGrp).toBeTruthy()
  expect(Array.isArray(legGrp))
  expect(legGrp.length).toEqual(3)
})

function toFixMessage (o: ILooseObject, msg: MessageDefinition): string {
  session.encodeMessage(msg.msgType, o)
  return session.buffer.toString()
}

function BidOfferRequest (symbol: string): IMarketDataRequest {
  return {
    MDReqID: '1',
    SubscriptionRequestType: SubscriptionRequestType.SnapshotPlusUpdates,
    MarketDepth: 0,
    MDReqGrp: {
      NoMDEntryTypes: [
        {
          MDEntryType: MDEntryType.Bid
        },
        {
          MDEntryType: MDEntryType.Offer
        }
      ]
    },
    InstrmtMDReqGrp: {
      NoRelatedSym: [
        {
          Instrument: {
            Symbol: symbol
          }
        }
      ]
    }
  } as IMarketDataRequest
}

test('market data request', async () => {
  const mdr = BidOfferRequest('EUR/USD')
  const def = definitions.message.get('MarketDataRequest')
  const fix = toFixMessage(mdr, def)
  expect(fix).toBeTruthy()
  const res: ParsingResult = await setup.client.parseText(fix)
  expect(res.event).toEqual('msg')
  expect(res.msgType).toEqual(def.msgType)
  const gv = res.view.getView('MDReqGrp')
  expect(gv).toBeTruthy()
  const s = gv.toString()
  const newLine = require('os').EOL
  expect(s).toEqual(`[0] 267 (NoMDEntryTypes) = 2, [1] 269 (MDEntryType) = 0[Bid]${newLine}[2] 269 (MDEntryType) = 1[Offer]`)
  const iv = res.view.getView('InstrmtMDReqGrp.NoRelatedSym')
  expect(iv).toBeTruthy()
  const s2 = iv.toString()
  expect(s2).toEqual(`[0] 146 (NoRelatedSym) = 1, [1] 55 (Symbol) = EUR/USD${newLine}`)
})
