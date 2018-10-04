import { FixmlSession } from '../../../transport/fixml/fixml-session'
import { MsgView } from '../../../buffer/msg-view'
import { IJsFixLogger } from '../../../config/js-fix-logger'
import { IJsFixConfig } from '../../../config/js-fix-config'
import {ITradeCaptureReportRequest} from '../../../types/FIXML50SP2/trade_capture_report_request'

export class HttpServer extends FixmlSession {
  private readonly logger: IJsFixLogger
  private readonly fixLog: IJsFixLogger
  constructor (public readonly config: IJsFixConfig) {
    super(config)
    this.logReceivedMsgs = true
    this.fixLog = config.logFactory.plain(`jsfix.${config.description.application.name}.txt`)
    this.logger = config.logFactory.logger(`${this.me}`)
  }

  protected onApplicationMsg (msgType: string, view: MsgView): void {
    // dispatch messages
    switch (msgType) {
      case 'TrdCaptRptReq': {
        const req: ITradeCaptureReportRequest = view.toObject()
        this.logger.info(`received request ${req.MDStatisticReqID}`)
      }
    }
  }

  // use msgType for example to persist only trade capture messages to database
  protected onDecoded (msgType: string, txt: string): void {
    this.fixLog.info(txt)
  }

  // no delimiter substitution on transmit messages
  protected onEncoded (msgType: string, txt: string): void {
    this.fixLog.info(txt)
  }

  protected onLogon (view: MsgView, user: string, password: string): boolean {
    return true
  }

  protected onReady (view: MsgView): void {
    this.logger.info('onReady')
  }

  protected onStopped (): void {
    this.logger.info('stopped')
  }
}
