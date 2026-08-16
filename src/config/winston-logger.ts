import { IJsFixLogger, JsFixLogFields } from './js-fix-logger'
import { Logger } from 'winston'
const { createLogger, format, transports } = require('winston')
const { combine, timestamp, printf } = format

export class WinstonLogger {
  /**
   * the format this engine has emitted since it shipped.  it names exactly four fields, so
   * the context and fields bags added later are invisible to it and the rendered line is
   * unchanged - which is the whole reason they travel as separate keys.  covered by a
   * golden output test; do not widen it.
   */
  public static readonly appFormat = printf((info: any) => {
    return `${info.timestamp} [${info.type}] ${info.level}: ${info.message}`
  })

  public static readonly plainFormat = printf((info: any) => {
    return `${info.message}`
  })

  /**
   * flattens the context and fields bags to ECS style names for Filebeat and friends.
   *
   * this MUST mutate info rather than return a fresh object - a new object loses
   * Symbol.for('level') and winston then discards the record with no output and no error.
   */
  public static readonly ecsFormat = format((info: any) => {
    const context = info.context ?? {}
    const fields = info.fields ?? {}
    const err = info.err
    delete info.context
    delete info.fields
    delete info.err
    // the legacy display name is redundant once component and app are real fields
    delete info.type
    info['@timestamp'] = info.timestamp
    info['log.level'] = info.level
    info['service.name'] = 'jspurefix'
    delete info.timestamp
    // winston sets its own level, and emitting it beside the ECS name puts the same
    // value on every line twice.  the transport filters on Symbol.for('level'), not
    // this property, so dropping it changes nothing about what gets logged
    delete info.level
    if (err) {
      info['error.message'] = err.message
      info['error.stack_trace'] = err.stack
      // the record composed for the console carries the stack inside the message,
      // because that is what has always been rendered there.  here the stack has a
      // field of its own, so repeating it in the message only doubles the line
      info.message = err.message
    }
    for (const key of Object.keys(context)) {
      info[`fix.${key}`] = context[key]
    }
    for (const key of Object.keys(fields)) {
      info[`fix.${key}`] = fields[key]
    }
    return info
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

  /**
   * one JSON object per line, ECS style names, ready to be harvested.  opt in - the
   * console default is deliberately left alone so an upgrade does not move anyone's logs.
   */
  public static ecsOptions (level: string = 'debug'): any {
    return {
      format: combine(
        timestamp(),
        WinstonLogger.ecsFormat(),
        format.json()
      ),
      level,
      transports: [
        new transports.Console()
      ]
    }
  }

  public static ecsFileOptions (fileName: string, level: string = 'debug', maxSize: number = 50 * 1024 * 1024): any {
    return WinstonLogger.fileOptions(fileName, level, maxSize, combine(
      timestamp(),
      WinstonLogger.ecsFormat(),
      format.json()
    ))
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
        (this as any).log(msg)
      },
      debug: function (msg: string): void {
        (this as any).log(msg)
      },
      warning: function (msg: string): void {
        (this as any).log(msg)
      },
      error: function (): void {
        // nothing
      }
    } as IJsFixLogger
  }

  public make (type: string, context?: JsFixLogFields): IJsFixLogger {
    const logger = this.appLogger
    return {
      info: function (msg: string, fields?: JsFixLogFields): void {
        logger.info({
          type,
          message: msg,
          context,
          fields
        })
      },
      debug: function (msg: string, fields?: JsFixLogFields): void {
        logger.debug({
          type,
          message: msg,
          context,
          fields
        })
      },
      warning: function (msg: string, fields?: JsFixLogFields): void {
        logger.warn({
          type,
          message: msg,
          context,
          fields
        })
      },
      error: function (e: Error, fields?: JsFixLogFields): void {
        logger.error({
          type,
          // composed exactly as it always has been, so the console line does not move.
          // the ecs format lifts error.message and error.stack_trace off err instead
          message: `${e.message} : ${e.stack}`,
          err: e,
          context,
          fields
        })
      }
    }
  }
}
