import { MsgView } from '../../../buffer'
import { AsciiSession } from '../../../transport'
import { MsgType } from '../../../types'
import {
  ITradeCaptureReport, ITradeCaptureReportRequest,
  ITradeCaptureReportRequestAck
} from '../../../types/FIX4.4/repo'
import { IJsFixLogger, IJsFixConfig } from '../../../config'
import { TradeFactory } from './trade-factory'

export class TradeCaptureClient extends AsciiSession {
  private readonly logger: IJsFixLogger
  private readonly fixLog: IJsFixLogger
  private readonly reports: Map<string, ITradeCaptureReport>

  constructor (public readonly config: IJsFixConfig) {
    super(config)
    this.logReceivedMsgs = true
    this.reports = new Map<string, ITradeCaptureReport>()
    this.fixLog = config.logFactory.plain(`jsfix.${config?.description?.application?.name}.txt`)
    this.logger = config.logFactory.logger(`${this.me}:TradeCaptureClient`)
  }

  protected onApplicationMsg (msgType: string, view: MsgView): void {
    this.logger.info(`${view.toJson()}`)
    switch (msgType) {
      case MsgType.TradeCaptureReport: {
        // create an object and cast to the interface
        const tc: ITradeCaptureReport = view.toObject() as ITradeCaptureReport
        this.reports.set(tc.TradeReportID, tc)
        this.logger.info(`[reports: ${this.reports.size}] received tc ExecID = ${tc.ExecID} TradeReportID  = ${tc.TradeReportID} Symbol = ${tc.Instrument.Symbol} ${tc.LastQty} @ ${tc.LastPx}`)
        break
      }

      case MsgType.TradeCaptureReportRequestAck: {
        const tc: ITradeCaptureReportRequestAck = view.toObject() as ITradeCaptureReportRequestAck
        this.logger.info(`received tcr ack ${tc.TradeRequestID} ${tc.TradeRequestStatus}`)
        break
      }
    }
  }

  protected onStopped (): void {
    this.logger.info('stopped')
  }

  protected onDecoded (_: string, txt: string): void {
    this.fixLog.info(txt)
  }

  protected onEncoded (_: string, txt: string): void {
    this.fixLog.info(txt)
  }

  private logoutTimer (logoutSeconds: number = 32): void {
    setTimeout(() => {
      this.done()
    }, logoutSeconds * 1000)
  }

  protected onReady (view: MsgView): void {
    this.logger.info('ready')
    const tcr: ITradeCaptureReportRequest = TradeFactory.tradeCaptureReportRequest('all-trades', new Date())
    // send request to server
    this.send(MsgType.TradeCaptureReportRequest, tcr)
    const logoutSeconds = 32
    this.logger.info(`will logout after ${logoutSeconds}`)
    this.logoutTimer()
  }

  protected onLogon (view: MsgView, user: string, password: string): boolean {
    this.logger.info(`onLogon user ${user} ${password?.length}`)
    return true
  }
}
