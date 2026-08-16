import 'reflect-metadata'

import { EmptyLogFactory, IJsFixLogger, JsFixLogFields, JsFixLoggerFactory, WinstonLogger } from '../../config'

/**
 * The engine has been live for years and people have grep and scrapers built on the
 * console format.  Structured logging is additive: context and per-call fields travel as
 * separate keys on the log record, and the shipped format names only four of them, so the
 * rendered line does not move.
 *
 * These tests exist so that anyone later widening WinstonLogger.appFormat fails here
 * rather than in a customer's log pipeline.  See docs/instrumentation.md.
 */

/**
 * captures what a winston transport would write, by rendering through the same format
 * pipeline the shipped options build
 */
function render (options: any, emit: (logger: IJsFixLogger) => void, type: string, context?: JsFixLogFields): string[] {
  const lines: string[] = []
  const captured = {
    ...options,
    transports: [
      new (require('winston-transport'))({
        log (info: any, next: () => void) {
          lines.push(info[Symbol.for('message')])
          next()
        }
      })
    ]
  }
  emit(new WinstonLogger(captured).make(type, context))
  return lines
}

const TYPE = 'skeleton_server:skeleton-client:FixSession'
const MESSAGE = 'peer sent ResetSeqNumFlag=Y with seqNum=1, weAlsoReset=true'
const CONTEXT: JsFixLogFields = { component: 'FixSession', app: 'skeleton_server', peer: 'skeleton-client' }
const FIELDS: JsFixLogFields = { reset_seq_num_flag: true, seq_num: 1, we_also_reset: true }

/**
 * the timestamp is the only thing that legitimately differs between two runs
 */
function withoutTimestamp (line: string): string {
  return line.replace(/^\S+ /, '')
}

describe('console format is unmoved by structured logging', () => {
  test('a line with context and fields renders identically to one without', () => {
    const bare = render(WinstonLogger.consoleOptions(), l => { l.info(MESSAGE) }, TYPE)
    const rich = render(WinstonLogger.consoleOptions(), l => { l.info(MESSAGE, FIELDS) }, TYPE, CONTEXT)
    expect(rich.length).toEqual(1)
    expect(withoutTimestamp(rich[0])).toEqual(withoutTimestamp(bare[0]))
  })

  test('the rendered shape is the one shipped since the engine went live', () => {
    const lines = render(WinstonLogger.consoleOptions(), l => { l.info(MESSAGE, FIELDS) }, TYPE, CONTEXT)
    expect(withoutTimestamp(lines[0])).toEqual(`[${TYPE}] info: ${MESSAGE}`)
  })

  test.each([
    ['warning', (l: IJsFixLogger) => { l.warning(MESSAGE, FIELDS) }, 'warn'],
    ['debug', (l: IJsFixLogger) => { l.debug(MESSAGE, FIELDS) }, 'debug']
  ])('%s keeps its level and layout', (_name, emit, level) => {
    const lines = render(WinstonLogger.consoleOptions(), emit, TYPE, CONTEXT)
    expect(withoutTimestamp(lines[0])).toEqual(`[${TYPE}] ${level}: ${MESSAGE}`)
  })

  /**
   * error composes message from the Error exactly as it always has - the ecs format lifts
   * error.message and error.stack_trace off a separate key instead
   */
  test('error still renders message and stack into the one line', () => {
    const e = new Error('boom')
    const lines = render(WinstonLogger.consoleOptions(), l => { l.error(e, FIELDS) }, TYPE, CONTEXT)
    expect(withoutTimestamp(lines[0])).toEqual(`[${TYPE}] error: ${e.message} : ${e.stack ?? ''}`)
  })
})

describe('ecs format carries the structure', () => {
  function parse (line: string): any {
    return JSON.parse(line)
  }

  test('context and fields are flattened under the fix namespace', () => {
    const lines = render(WinstonLogger.ecsOptions(), l => { l.info(MESSAGE, FIELDS) }, TYPE, CONTEXT)
    const o = parse(lines[0])
    expect(o['fix.component']).toEqual('FixSession')
    expect(o['fix.app']).toEqual('skeleton_server')
    expect(o['fix.peer']).toEqual('skeleton-client')
    expect(o['fix.seq_num']).toEqual(1)
    expect(o['fix.we_also_reset']).toEqual(true)
    expect(o.message).toEqual(MESSAGE)
    expect(o['log.level']).toEqual('info')
    expect(o['service.name']).toEqual('jspurefix')
    expect(o['@timestamp']).toBeTruthy()
  })

  /**
   * the legacy display name is redundant once component and app are real fields, and a
   * JSON consumer is by definition new, so nothing is broken by dropping it here
   */
  test('the legacy type is not emitted', () => {
    const lines = render(WinstonLogger.ecsOptions(), l => { l.info(MESSAGE) }, TYPE, CONTEXT)
    expect(parse(lines[0]).type).toBeUndefined()
  })

  test('an error carries stack trace as its own field', () => {
    const e = new Error('boom')
    const lines = render(WinstonLogger.ecsOptions(), l => { l.error(e) }, TYPE, CONTEXT)
    const o = parse(lines[0])
    expect(o['error.message']).toEqual('boom')
    expect(o['error.stack_trace']).toContain('boom')
  })

  /**
   * the console record composes the stack into the message because that is what has
   * always been rendered there.  here it has a field of its own, so repeating it would
   * only double the line - errors are the largest thing a log pipeline carries
   */
  test('an error message does not repeat the stack it already has a field for', () => {
    const e = new Error('boom')
    const lines = render(WinstonLogger.ecsOptions(), l => { l.error(e) }, TYPE, CONTEXT)
    const o = parse(lines[0])
    expect(o.message).toEqual('boom')
    expect(o.message).not.toContain('at ')
  })

  /**
   * winston keeps its own level property, and emitting it beside the ECS name puts the
   * same value on every line twice.  the transport filters on Symbol.for('level'), so
   * dropping it does not affect what gets logged - covered by the level test below
   */
  test('the winston level is not emitted beside log.level', () => {
    const lines = render(WinstonLogger.ecsOptions(), l => { l.info(MESSAGE) }, TYPE, CONTEXT)
    const o = parse(lines[0])
    expect(o['log.level']).toEqual('info')
    expect(o.level).toBeUndefined()
  })

  test('level filtering still applies once level has been dropped', () => {
    const lines = render(WinstonLogger.ecsOptions('warn'), l => {
      l.info('below the threshold')
      l.warning('at the threshold')
    }, TYPE, CONTEXT)
    expect(lines.length).toEqual(1)
    expect(parse(lines[0]).message).toEqual('at the threshold')
  })

  /**
   * a caller cannot clobber the record by naming a reserved key, because the bags are
   * nested rather than spread
   */
  test('a field named message does not displace the real message', () => {
    const lines = render(WinstonLogger.ecsOptions(), l => { l.info(MESSAGE, { message: 'hijacked' }) }, TYPE, CONTEXT)
    const o = parse(lines[0])
    expect(o.message).toEqual(MESSAGE)
    expect(o['fix.message']).toEqual('hijacked')
  })
})

describe('the widened interface stays compatible', () => {
  /**
   * a factory written before context existed declares one parameter.  TypeScript allows an
   * implementation to take fewer arguments than its interface, so this still satisfies
   * JsFixLoggerFactory and simply ignores what it does not know about
   */
  test('a one argument logger factory still satisfies the abstract class', () => {
    class LegacyFactory extends EmptyLogFactory {
      public override logger (type: string): IJsFixLogger {
        return super.logger(type)
      }
    }
    // the engine only ever holds the abstract type, and that is where the widened call
    // has to typecheck
    const f: JsFixLoggerFactory = new LegacyFactory()
    const logger = f.logger('anything', { component: 'ignored' })
    expect(logger).toBeTruthy()
    expect(() => { logger.info('still works', { seq_num: 1 }) }).not.toThrow()
  })
})
