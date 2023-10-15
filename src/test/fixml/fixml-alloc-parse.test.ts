import 'reflect-metadata'

import { MsgView } from '../../buffer'
// use the compiled interfaces for intelisense

import {
  IStandardHeader, IInstrument, IPtysSubGrp, IParties, INstdPtysSubGrp,
  IAllocationInstruction, IAllocationReport, IOrdAllocGrp
} from '../../types/FIXML50SP2'

import { ToViews } from '../env/to-views'
import * as moment from 'moment'

const testFolder: string = 'examples/FIXML/cme/alloc/Clearing System Notifies Allocation to the Claiming Firm - Cross-Exchange'
const toViews: ToViews = new ToViews(testFolder)

beforeAll(async () => {
  await toViews.load()
}, 45000)

test('expect a view from fix msg', () => {
  const views = toViews.views
  expect(views.length).toEqual(1)
})

test('expect Hdr view to be available', () => {
  const views = toViews.views
  const v = views[0]
  const hdr: MsgView | null = v.getView('Hdr')
  expect(hdr).toBeTruthy()
})

/*
    "StandardHeader": {
        "SenderCompID": "CME",
        "TargetCompID": "560",
        "SenderSubID": "CME",
        "TargetSubID": "CME",
        "HopSendingTime": "2015-08-13T15:12:09.000Z"
    },
 */

test('fetch attributes from Hdr', () => {
  const views = toViews.views
  const v = views[0]
  const hdr: IStandardHeader | null = v?.getView('Hdr')?.toObject() as IStandardHeader
  expect(hdr).toBeTruthy()
  expect(hdr.SenderCompID).toEqual('CME')
  expect(v.getTyped('SID')).toEqual('CME')
  expect(v.getTyped('TID')).toEqual('560')
  expect(hdr.SenderSubID).toEqual('CME')
  expect(hdr.TargetSubID).toEqual('CME')
  /*
  fails on uni test host
  const st = moment('2015-08-13T16:12:09.000Z').utc(false).toDate()
  expect(hdr.SendingTime).toEqual(st)
  const snt: Date = v.getTyped('SendingTime')
  expect(snt).toEqual(st)
  */
})

test('fetch attributes from main object', () => {
  const views = toViews.views
  const v = views[0]
  const allocation: IAllocationReport = v.toObject() as IAllocationReport
  expect(allocation.AllocReportID).toEqual('12E251CB2133225C1CC112533311')
  expect(allocation.TradeMatchID).toEqual('12A80D9ED85HI04008310')
  expect(allocation.AllocReportType).toEqual(16)
  expect(allocation.AllocStatus).toEqual(6)
  expect(allocation.TrdType).toEqual(2)
  expect(allocation.ExecutingClaimingIndicator).toEqual(1)
  expect(allocation.Quantity).toEqual(4)
})

test('test complex sub structure OrdAllocGrp', () => {
  const views = toViews.views
  const v = views[0]
  const allocInstruction: IAllocationInstruction = v.toObject() as IAllocationInstruction
  expect(allocInstruction).toBeTruthy()
  const ag = allocInstruction?.OrdAllocGrp
  expect(ag).toBeTruthy()
  if (!ag) return
  const f0 = ag[0]
  expect(f0?.ClOrdID).toEqual('SX1')
})

/*
"Instrument": {
    "BatchID": "ED",
    "InstrumentScopeCFICode": "FFDCSO",
    "RelatedSecurityType": "FUT",
    "RelatedMaturityMonthYear": "201512",
    "DerivativePriceQuoteCurrency": "USD",
    "UnderlyingStreamCommodityExchange": "CME"
},
 */

test('test instrument on fixml allocation - use abbreviation', () => {
  const views = toViews.views
  const v = views[0]
  const instrument: IInstrument = v.getView('Instrmt')?.toObject() as IInstrument
  expect(instrument).toBeTruthy()
})

test('test instrument attributes', () => {
  const views = toViews.views
  const v = views[0]
  const instrument: IInstrument = v.getView('Instrmt')?.toObject() as IInstrument
  expect(instrument).toBeTruthy()
  expect(instrument.SecurityID).toEqual('ED')
  expect(instrument.CFICode).toEqual('FFDCSO')
  expect(instrument.SecurityType).toEqual('FUT')
  expect(instrument.MaturityMonthYear).toEqual('201512')
  expect(instrument.PriceQuoteCurrency).toEqual('USD')
  expect(instrument.SecurityExchange).toEqual('CME')
})

test('test instrument on fixml allocation - use full name', () => {
  const views = toViews.views
  const v = views[0]
  const instrument: IInstrument = v.getView('Instrument')?.toObject() as IInstrument
  expect(instrument).toBeTruthy()
})

test('test complex sub structure AllocGrp', () => {
  const views = toViews.views
  const v = views[0]
  const allocInstruction: IAllocationInstruction = v.toObject() as IAllocationInstruction
  expect(allocInstruction).toBeTruthy()
  expect(Array.isArray(allocInstruction.AllocGrp)).toBeTruthy()
  expect(allocInstruction.AllocGrp?.length).toEqual(1)
  const fa = allocInstruction.AllocGrp
  const f0 = fa ? fa[0] : null
  expect(f0).toBeTruthy()
  expect(f0?.AllocQty).toEqual(4)
  expect(f0?.IndividualAllocID).toEqual('307006')
  expect(f0?.SecondaryIndividualAllocID).toEqual('178004')
  expect(f0?.AllocCustomerCapacity).toEqual('4')
  expect(f0?.OriginalSecondaryTradeID).toEqual('12A80D9ED85HI040083A')
})

test('test OrdAllocGrp', () => {
  const views = toViews.views
  const v = views[0]
  const ordAlloc: IOrdAllocGrp[] = v.getView('OrdAllocGrp')?.toObject() as IOrdAllocGrp[]
  expect(ordAlloc).toBeTruthy()
  expect(Array.isArray(ordAlloc)).toBeTruthy()
  expect(ordAlloc.length).toEqual(1)
  expect(ordAlloc[0].ClOrdID).toEqual('SX1')
})

test('main Party Group', () => {
  const views = toViews.views
  const v = views[0]
  const parties: IParties[] = v.getView('Parties')?.toObject() as IParties[]
  expect(parties).toBeTruthy()
  expect(Array.isArray(parties)).toBeTruthy()
  expect(parties.length).toEqual(4)
  expect(parties[0]).toEqual({
    PartyID: 'CME',
    PartyRole: 21
  })
  expect(parties[1]).toEqual({
    PartyID: 'CME',
    PartyRole: 22
  })
  expect(parties[2]).toEqual({
    PartyID: '560',
    PartyRole: 1
  })
})

test('test party sub group', () => {
  const views = toViews.views
  const v = views[0]
  const parties: IPtysSubGrp[] = v.getView('Parties.PtysSubGrp')?.toObject() as IPtysSubGrp[]
  expect(parties).toBeTruthy()
  expect(Array.isArray(parties)).toBeTruthy()
  expect(parties.length).toEqual(1)
  expect(parties[0]).toEqual(
    {
      PartySubID: '1',
      MiscFeeType: '26'
    })
})

test('test AllocGrp.NestedParties.NstdPtysSubGrp', () => {
  const views = toViews.views
  const v = views[0]
  const parties: INstdPtysSubGrp[] = v.getView('AllocGrp.NestedParties.NstdPtysSubGrp')?.toObject() as INstdPtysSubGrp[]
  expect(parties).toBeTruthy()
  expect(Array.isArray(parties)).toBeTruthy()
  expect(parties.length).toEqual(1)
  expect(parties[0]).toEqual(
    {
      NestedPartySubID: '1',
      NestedPartySubIDType: 26
    })
})

test('main attributes', () => {
  const views = toViews.views
  const v = views[0]
  expect(v.getTyped('AllocReportID')).toEqual('12E251CB2133225C1CC112533311')
  expect(v.getTyped('TradeMatchID')).toEqual('12A80D9ED85HI04008310')
  expect(v.getTyped('AllocReportType')).toEqual(16)
  expect(v.getTyped('TrdType')).toEqual(2)
  expect(v.getTyped('AvgPx')).toEqual(95.5)
  expect(v.getTyped('TradeDate')).toEqual(moment('2015-08-05').utc(true).toDate())
  expect(v.getTyped('TradeMatchID')).toEqual('12A80D9ED85HI04008310')
})
