import { FixSession } from '../../../transport/fix-session'
import { MsgType } from '../../../types/enum/msg_type'
import { ITradeCaptureReport } from '../../../types/FIX4.4/repo/trade_capture_report'
import { ITradeCaptureReportRequest } from '../../../types/FIX4.4/repo/trade_capture_report_request'
import { ITradeCaptureReportRequestAck } from '../../../types/FIX4.4/repo/trade_capture_report_request_ack'
import { IJsFixLogger } from '../../../config/js-fix-logger'
import { Dictionary } from '../../../collections/dictionary'
import { TradeFactory } from './trade-factory'
import { IJsFixConfig } from '../../../config/js-fix-config'
import { MsgView } from '../../../buffer/msg-view'

export class TradeCaptureClient extends FixSession {
  private readonly logger: IJsFixLogger
  private readonly fixLog: IJsFixLogger
  private reports: Dictionary<ITradeCaptureReport>

  constructor (public readonly config: IJsFixConfig) {
    super(config)
    this.logReceivedMsgs = true
    this.reports = new Dictionary<ITradeCaptureReport>()
    this.fixLog = config.logFactory.plain(`jsfix.${config.description.application.name}.txt`)
    this.logger = config.logFactory.logger(`${this.me}:TradeCaptureClient`)
  }

  protected onApplicationMsg (msgType: string, view: MsgView): void {
    this.logger.info(`${view.toJson()}`)
    switch (msgType) {
      case MsgType.TradeCaptureReport: {
        // create an object and cast to the interface
        const tc: ITradeCaptureReport = view.toObject()
        this.reports.addUpdate(tc.TradeReportID, tc)
        this.logger.info(`[reports: ${this.reports.count()}] received tc ExecID = ${tc.ExecID} TradeReportID  = ${tc.TradeReportID} Symbol = ${tc.Instrument.Symbol} ${tc.LastQty} @ ${tc.LastPx}`)
        break
      }

      case MsgType.TradeCaptureReportRequestAck: {
        const tc: ITradeCaptureReportRequestAck = view.toObject()
        this.logger.info(`received tcr ack ${tc.TradeRequestID} ${tc.TradeRequestStatus}`)
        break
      }
    }
  }

  protected onStopped (): void {
    this.logger.info('stopped')
  }

  // use msgType for example to persist only trade capture messages to database
  protected onAsciiDecoded (msgType: string, txt: string): void {
    this.fixLog.info(txt)
  }

  // no delimiter substitution on transmit messages
  protected onAsciiEncoded (msgType: string, txt: string): void {
    this.fixLog.info(FixSession.asPiped(txt))
  }

  protected onReady (view: MsgView): void {
    this.logger.info('ready')
    const tcr: ITradeCaptureReportRequest = TradeFactory.tradeCaptureReportRequest('all-trades', new Date())
    // send request to server
    this.send(MsgType.TradeCaptureReportRequest, tcr)
    const logoutSeconds = 32
    this.logger.info(`will logout after ${logoutSeconds}`)
    setTimeout(() => {
      this.done()
    }, logoutSeconds * 1000)
  }

  protected onLogon (view: MsgView, user: string, password: string): boolean {
    return true
  }
}
