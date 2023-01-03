import { IJsFixLogger } from './js-fix-logger'
import { Logger } from 'winston'
const { createLogger, format, transports } = require('winston')
const { combine, timestamp, printf } = format

export class WinstonLogger {
  public static readonly appFormat = printf((info: any) => {
    return `${info.timestamp} [${info.type}] ${info.level}: ${info.message}`
  })

  public static readonly plainFormat = printf((info: any) => {
    return `${info.message}`
  })

  private readonly appLogger: Logger

  constructor (public readonly options: any = WinstonLogger.consoleOptions()) {
    this.appLogger = createLogger(options)
  }

  public static consoleOptions (level: string = 'debug'): any {
    return {
      format: combine(
        timestamp(),
        WinstonLogger.appFormat
      ),
      level,
      transports: [
        new transports.Console()
      ]
    }
  }

  public static fileOptions (fileName: string, level: string = 'debug', maxSize: number = 50 * 1024 * 1024, format: any = combine(
    timestamp(),
    WinstonLogger.appFormat
  )): any {
    return {
      format,
      level,
      transports: [
        new transports.File({
          filename: fileName,
          maxsize: maxSize
        })
      ]
    }
  }

  public plain (fileName: string, maxSize: number = 10 * 1024 * 1024): IJsFixLogger {
    const txtLogger: Logger = createLogger({
      format: WinstonLogger.plainFormat,
      level: 'info',
      transports: [
        new transports.File({
          filename: fileName,
          maxsize: maxSize
        })
      ]
    })

    return {
      log: function (txt: string) {
        txtLogger.info({
          type: 'info',
          message: txt
        })
      },

      info: function (msg: string): void {
        this.log(msg)
      },
      debug: function (msg: string): void {
        this.log(msg)
      },
      warning: function (msg: string): void {
        this.log(msg)
      },
      error: function (): void {
        // nothing
      }
    } as IJsFixLogger
  }

  public make (type: string): IJsFixLogger {
    const logger = this.appLogger
    return {
      info: function (msg: string): void {
        logger.info({
          type,
          message: msg
        })
      },
      debug: function (msg: string): void {
        logger.debug({
          type,
          message: msg
        })
      },
      warning: function (msg: string): void {
        logger.warn({
          type,
          message: msg
        })
      },
      error: function (e: Error): void {
        logger.error({
          type,
          message: `${e.message} : ${e.stack}`
        })
      }
    } as IJsFixLogger
  }
}
