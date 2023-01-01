import {
  OrdStatus,
  SubscriptionRequestType,
  TradeReportType,
  TradeRequestResult,
  TradeRequestStatus,
  TradeRequestType,
  TrdType,
  ITradeCaptureReportRequestAck,
  ITradeCaptureReport,
  ITradeCaptureReportRequest
} from '../../../types/FIX4.4/repo'

import { TradeReportTransType } from '../../../types/FIXML50SP2'

export class TradeFactory {
  private nextTradeId: number = 100000
  private nextExecId: number = 600000
  private readonly securities: string[] =
    [
      'Gold',
      'Silver',
      'Platinum',
      'Magnesium',
      'Steel'
    ]

  public static tradeCaptureReportRequestAck (tcr: ITradeCaptureReportRequest, status: TradeRequestStatus): ITradeCaptureReportRequestAck {
    // send back an ack.
    return {
      TradeRequestID: tcr.TradeRequestID,
      TradeRequestType: tcr.TradeRequestType,
      TradeRequestStatus: status,
      TradeRequestResult: TradeRequestResult.Successful
    } as ITradeCaptureReportRequestAck
  }

  public static tradeCaptureReportRequest (requestId: string, tradeDate: Date): ITradeCaptureReportRequest {
    const d0 = tradeDate
    const d1 = new Date(tradeDate.getTime())
    d1.setDate(d1.getDate() + 1)
    return {
      TradeRequestID: 'all-trades',
      TradeRequestType: TradeRequestType.AllTrades,
      SubscriptionRequestType: SubscriptionRequestType.SnapshotAndUpdates,
      TrdCapDtGrp: [
        {
          TransactTime: d0
        },
        {
          TransactTime: d1
        }
      ]
    } as ITradeCaptureReportRequest
  }

  private static getRandomInt (min: number, max: number): number {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
  }

  public batchOfTradeCaptureReport (toMake?: number): ITradeCaptureReport[] {
    if (!toMake) {
      toMake = TradeFactory.getRandomInt(4, 8)
    }
    const arr: ITradeCaptureReport[] = []
    for (let i: number = 0; i < toMake; ++i) {
      const tc: ITradeCaptureReport = this.singleTradeCaptureReport()
      arr.push(tc)
    }
    return arr
  }

  public singleTradeCaptureReport (): ITradeCaptureReport {
    const tradeReportId = this.nextTradeId++
    const qty: number = TradeFactory.getRandomInt(100, 200)
    const price: number = Math.round(Math.random() * 100 * 100) / 100
    const instrument: number = TradeFactory.getRandomInt(0, this.securities.length - 1)
    const securities = this.securities
    const execId = this.nextExecId++
    return {
      TradeReportID: tradeReportId.toString(),
      TradeReportTransType: TradeReportTransType.New,
      TradeReportType: TradeReportType.Submit,
      TrdType: TrdType.RegularTrade,
      TransactTime: new Date(),
      ExecID: execId.toString(),
      PreviouslyReported: false,
      OrdStatus: OrdStatus.Filled,
      Instrument: {
        SecurityID: `${securities[instrument]}.INC`,
        Symbol: `${securities[instrument]}`
      },
      TradeDate: new Date(),
      LastQty: qty,
      LastPx: price

    } as ITradeCaptureReport
  }
}
