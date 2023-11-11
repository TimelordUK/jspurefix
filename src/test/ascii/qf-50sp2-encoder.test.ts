import 'reflect-metadata'

import { ILooseObject } from '../../collections/collection'
import { EncoderTest } from '../env/encoder-test'
import {
  ExecType,
  IExecutionReport, IInstrument,
  OrdStatus,
  ReturnRatePriceType,
  SecurityIDSource,
  Side
} from '../../types/FIX.5.0SP2/quickfix'
import { MsgType } from '../../types'
import { testEncodeDecode } from '../env/helper-fn.tst'

const encoderTester: EncoderTest = new EncoderTest()

beforeAll(async () => {
  await encoderTester.init('session/test-qf50sp2-initiator.json')
}, 45000)

test('expect a definition ', () => {
  expect(encoderTester.nos).toBeTruthy()
})

function getInstrument (): IInstrument {
  return {
    Symbol: 'EUR=,',
    SymbolSfx: 'non',
    SecurityID: 'Pellentesque',
    SecurityIDSource: SecurityIDSource.ExchangeSymbol,
    Product: 2,
    StreamGrp: {
      NoStreams: [
        {
          StreamCurrency: 'EUR=',
          PaymentStream: {
            PaymentStreamFlatRateIndicator: false,
            PaymentStreamFloatingRate: {
              PaymentStreamRateIndex: '.IND1',
              ReturnRateGrp: {
                NoReturnRates: [
                  {
                    ReturnRateQuoteMethod: 0,
                    ReturnRatePriceGrp: {
                      NoReturnRatePrices: [
                        {
                          ReturnRatePrice: 100.0,
                          ReturnRatePriceBasis: 2,
                          ReturnRatePriceCurrency: 'EUR=',
                          ReturnRatePriceType: ReturnRatePriceType.PercentageOfNotional
                        }
                      ]
                    }
                  }
                ]
              }
            }
          }
        },
        {
          StreamCurrency: 'GBP=',
          PaymentStream: {
            PaymentStreamFlatRateIndicator: false,
            PaymentStreamFloatingRate: {
              PaymentStreamRateIndex: '.IND2',
              ReturnRateGrp: {
                NoReturnRates: [
                  {
                    ReturnRateQuoteMethod: 0,
                    ReturnRatePriceGrp: {
                      NoReturnRatePrices: [
                        {
                          ReturnRatePrice: 120.0,
                          ReturnRatePriceBasis: 1,
                          ReturnRatePriceCurrency: 'GBP=',
                          ReturnRatePriceType: ReturnRatePriceType.PercentageOfNotional
                        }
                      ]
                    }
                  }
                ]
              }
            }
          }
        }
      ]
    }
  }
}

function getExecReport (): IExecutionReport {
  return {
    OrderID: 'o1',
    ExecID: 'o1-e1',
    ExecType: ExecType.New,
    Side: Side.Buy,
    OrdStatus: OrdStatus.New,
    LeavesQty: 1000,
    CumQty: 0,
    Instrument: getInstrument()
  } as IExecutionReport
}

test('encode exec report', () => {
  expect(encoderTester.er).toBeTruthy()
  const e: ILooseObject = getExecReport()
  expect(encoderTester.toFix(e, encoderTester.er)).toEqual('37=o1|17=o1-e1|150=0|39=0|55=EUR=,|65=non|48=Pellentesque|22=8|460=2|40049=2|40055=EUR=|41180=N|40789=.IND1|42735=1|42765=1|42766=2|42767=100|42768=EUR=|42769=1|42745=0|40055=GBP=|41180=N|40789=.IND2|42735=1|42765=1|42766=1|42767=120|42768=GBP=|42769=1|42745=0|54=1|151=1000|14=0|')
})

test('test exec report inc snapshot JSON => object => fix => object', async () => {
  const msg: ILooseObject = getExecReport()
  const msgType: string = MsgType.ExecutionReport
  await expect(testEncodeDecode(encoderTester.session.config, msgType, msg)).resolves.toEqual(msg)
}, 1000)
