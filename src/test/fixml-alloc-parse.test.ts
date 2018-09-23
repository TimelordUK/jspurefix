import { MsgView } from '../buffer/msg-view'
import { ILooseObject } from '../collections/collection'
// use the compiled interfaces for intelisense
import { IStandardHeader } from '../types/FIXML50SP2/set/standard_header'
import { IInstrument } from '../types/FIXML50SP2/set/instrument'
import { IPtysSubGrp } from '../types/FIXML50SP2/set/ptys_sub_grp'
import { IParties } from '../types/FIXML50SP2/set/parties'
import { INstdPtysSubGrp } from '../types/FIXML50SP2/set/nstd_ptys_sub_grp'
import { IAllocationInstruction } from '../types/FIXML50SP2/allocation_instruction'
import { IAllocationReport } from '../types/FIXML50SP2/allocation_report'

import { ToViews } from './to-views'
import * as moment from 'moment'

const testFolder: string = 'examples/FIXML/cme/alloc/Clearing System Notifies Allocation to the Claiming Firm - Cross-Exchange'
const toViews: ToViews = new ToViews(testFolder)

beforeAll(async () => {
  await toViews.load()
}, 15000)

test('expect a view from fix msg', () => {
  const views = toViews.views
  expect(views.length).toEqual(1)
})

test('expect Hdr view to be available', () => {
  const views = toViews.views
  const v = views[0]
  const hdr: MsgView = v.getView('Hdr')
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
  const hdr: IStandardHeader = v.getView('Hdr').toObject() as IStandardHeader
  expect(hdr).toBeTruthy()
  expect(hdr.SenderCompID).toEqual('CME')
  expect(v.getTyped('SID')).toEqual('CME')
  expect(v.getTyped('TID')).toEqual('560')
  expect(hdr.SenderSubID).toEqual('CME')
  expect(hdr.TargetSubID).toEqual('CME')
  expect(hdr.HopSendingTime).toEqual(new Date('2015-08-13T10:12:09-05:00'))
  const snt: Date = v.getTyped('Snt')
  expect(snt).toEqual(new Date('2015-08-13T10:12:09-05:00'))
})

test('fetch attributes from main object', () => {
  const views = toViews.views
  const v = views[0]
  const allocation: IAllocationReport = v.toObject() as IAllocationReport
  expect(allocation.MDStatisticRptID).toEqual('12E251CB2133225C1CC112533311')
  expect(allocation.TradeMatchID).toEqual('12A80D9ED85HI04008310')
  expect(allocation.TransferReportType).toEqual(16)
  expect(allocation.AllocStatus).toEqual(6)
  expect(allocation.TrdType).toEqual(2)
  expect(allocation.SideMultiLegReportingType).toEqual(1)
  expect(allocation.AllocCustomerCapacity).toEqual('4')
})

test('test complex sub structure OrdAllocGrp', () => {
  const views = toViews.views
  const v = views[0]
  const allocInstruction: IAllocationInstruction = v.toObject()
  expect(allocInstruction).toBeTruthy()
  expect(allocInstruction.OrdAllocGrp[0].ClOrdID).toEqual('SX1')
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
  const instrument: ILooseObject = v.getView('Instrmt').toObject()
  expect(instrument).toBeTruthy()
})

test('test instrument attributes', () => {
  const views = toViews.views
  const v = views[0]
  const instrument: IInstrument = v.getView('Instrmt').toObject() as IInstrument
  expect(instrument).toBeTruthy()
  expect(instrument.BatchID).toEqual('ED')
  expect(instrument.InstrumentScopeCFICode).toEqual('FFDCSO')
  expect(instrument.RelatedSecurityType).toEqual('FUT')
  expect(instrument.RelatedMaturityMonthYear).toEqual('201512')
  expect(instrument.DerivativePriceQuoteCurrency).toEqual('USD')
  expect(instrument.UnderlyingStreamCommodityExchange).toEqual('CME')
})

test('test instrument on fixml allocation - use full name', () => {
  const views = toViews.views
  const v = views[0]
  const instrument: ILooseObject = v.getView('Instrument').toObject()
  expect(instrument).toBeTruthy()
})

test('test complex sub structure AllocGrp', () => {
  const views = toViews.views
  const v = views[0]
  const allocInstruction: IAllocationInstruction = v.toObject()
  expect(allocInstruction).toBeTruthy()
  expect(Array.isArray(allocInstruction.AllocGrp)).toBeTruthy()
  expect(allocInstruction.AllocGrp.length).toEqual(1)
  expect(allocInstruction.AllocGrp[0].RelatedTradeQuantity).toEqual(4)
  expect(allocInstruction.AllocGrp[0].LegIndividualAllocID).toEqual('307006')
  expect(allocInstruction.AllocGrp[0].SecondaryIndividualAllocID).toEqual('178004')
  expect(allocInstruction.AllocGrp[0].AllocCustomerCapacity).toEqual('4')
  expect(allocInstruction.AllocGrp[0].SecondaryTradeID).toEqual('12A80D9ED85HI040083A')
  expect(allocInstruction.AllocGrp[0].OriginalSecondaryTradeID).toEqual('12A80D9ED85HI040083A')

})

test('test OrdAllocGrp', () => {
  const views = toViews.views
  const v = views[0]
  const ordAlloc: ILooseObject[] = v.getView('OrdAllocGrp').toObject()
  expect(ordAlloc).toBeTruthy()
  expect(Array.isArray(ordAlloc)).toBeTruthy()
  expect(ordAlloc.length).toEqual(1)
  expect(ordAlloc[0].ClOrdID).toEqual('SX1')
})

test('main Party Group', () => {
  const views = toViews.views
  const v = views[0]
  const parties: IParties[] = v.getView('Parties').toObject()
  expect(parties).toBeTruthy()
  expect(Array.isArray(parties)).toBeTruthy()
  expect(parties.length).toEqual(4)
  expect(parties[0]).toEqual({
    BatchID: 'CME',
    UnderlyingProvisionPartyRole: 21
  })
  expect(parties[1]).toEqual({
    BatchID: 'CME',
    UnderlyingProvisionPartyRole: 22
  })
  expect(parties[2]).toEqual({
    BatchID: '560',
    UnderlyingProvisionPartyRole: 1
  })
})

test('test party sub group', () => {
  const views = toViews.views
  const v = views[0]
  const parties: IPtysSubGrp[] = v.getView('Parties.PtysSubGrp').toObject()
  expect(parties).toBeTruthy()
  expect(Array.isArray(parties)).toBeTruthy()
  expect(parties.length).toEqual(1)
  expect(parties[0]).toEqual(
    {
      BatchID: '1',
      UnderlyingReturnRateValuationDateType: 26
    })
})

test('test AllocGrp.NestedParties.NstdPtysSubGrp', () => {
  const views = toViews.views
  const v = views[0]
  const parties: INstdPtysSubGrp[] = v.getView('AllocGrp.NestedParties.NstdPtysSubGrp').toObject()
  expect(parties).toBeTruthy()
  expect(Array.isArray(parties)).toBeTruthy()
  expect(parties.length).toEqual(1)
  expect(parties[0]).toEqual(
    {
      BatchID: '1',
      UnderlyingReturnRateValuationDateType: 26
    })
})

test('main attributes', () => {
  const views = toViews.views
  const v = views[0]
  expect(v.getTyped('MDStatisticRptID')).toEqual('12E251CB2133225C1CC112533311')
  expect(v.getTyped('MtchID')).toEqual('12A80D9ED85HI04008310')
  expect(v.getTyped('RptTyp')).toEqual(16)
  expect(v.getTyped('TrdType')).toEqual(2)
  expect(v.getTyped('SideAvgPx')).toEqual(95.5)
  expect(v.getTyped('TradeDate')).toEqual(moment('2015-08-05').toDate())
  expect(v.getTyped('TradeMatchID')).toEqual('12A80D9ED85HI04008310')
})
