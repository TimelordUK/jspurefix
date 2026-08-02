import { AsciiParser } from '../buffer/ascii/ascii-parser'
import { ElasticBuffer } from '../buffer/elastic-buffer'
import { MsgView } from '../buffer/msg-view'
import { IJsFixConfig } from '../config/js-fix-config'
import { DITokens } from '../runtime/di-tokens'
import { makeSessionScope } from '../runtime/session-scope'
import { IBenchCase } from './bench-types'

/**
 * what a decoded message is taken through once the parser has produced a view
 */
export enum ParseDepth {
  /** stop at the MsgView - tokenise, discover the structure, build the view */
  View = 'view',
  /** materialise the whole object graph, which is what most consumers do */
  Object = 'object'
}

export interface IParseCaseOptions {
  readonly config: IJsFixConfig
  /** the raw text of a fix log, one or more complete messages */
  readonly contents: string
  readonly depth: ParseDepth
}

/**
 * Drives fix bytes through the real parser and counts messages out of it.
 *
 * The bytes are fed as one buffer per invocation, the same way a socket read
 * reaches parse, rather than by concatenating the file thousands of times into
 * one enormous string. That concatenation is itself a large allocation, and
 * doing it before the timer starts leaves a heap that no memory reading taken
 * afterwards can be trusted through.
 */
export class ParseCase implements IBenchCase {
  public readonly name: string
  public readonly description: string
  /** messages produced by one pass over the input */
  public readonly operationsPerInvocation: number

  private readonly source: Buffer
  private readonly depth: ParseDepth
  private readonly options: IParseCaseOptions
  private parser: AsciiParser | null = null
  private decoded: number = 0

  constructor (name: string, options: IParseCaseOptions) {
    this.name = name
    this.options = options
    this.depth = options.depth
    this.source = Buffer.from(options.contents)
    this.description = options.depth === ParseDepth.Object
      ? 'tokenise, discover structure, build view, materialise object'
      : 'tokenise, discover structure, build view'
    this.operationsPerInvocation = this.countMessages()
    if (this.operationsPerInvocation === 0) {
      throw new Error(`${name}: input yielded no messages, check the dictionary and the delimiter`)
    }
  }

  /**
   * Round a requested round size up to a whole number of passes over the input.
   * A pass cannot be stopped part way, so asking for a count that is not a
   * multiple of it would silently measure more work than it reported.
   */
  public alignOperations (requested: number): number {
    const per = this.operationsPerInvocation
    return Math.max(per, Math.ceil(requested / per) * per)
  }

  public setup (): void {
    this.parser = this.makeParser(true)
  }

  public teardown (): void {
    this.parser?.removeAllListeners()
    this.parser = null
  }

  public run (operations: number): number {
    const parser = this.parser
    if (!parser) {
      throw new Error(`${this.name}: run called before setup`)
    }
    const source = this.source
    const passes = operations / this.operationsPerInvocation
    if (!Number.isInteger(passes)) {
      throw new Error(`${this.name}: ${operations} operations is not a whole number of passes over the input`)
    }
    this.decoded = 0
    for (let i = 0; i < passes; ++i) {
      parser.parseBuffer(source)
    }
    return this.decoded
  }

  /**
   * A parser on a session scope of its own.
   *
   * It has to be a scope rather than a hand built AsciiParser: AsciiParserState
   * takes the ParseBuffer from the container, so a parser handed some other
   * buffer writes bytes the state never reads and the parse walks off into
   * nonsense. The scope re-registers the buffer and hands the same instance to
   * both, which is the same thing an accepted connection gets.
   */
  private makeParser (subscribe: boolean): AsciiParser {
    const scoped = makeSessionScope(this.options.config)
    const container = scoped.sessionContainer
    // constructed rather than resolved: DITokens.readStream has no registration
    // outside a live transport, and there is no stream here - the harness hands
    // the parser its bytes. Everything else comes from the scope, so the buffer
    // below is the same instance AsciiParserState will be injected with.
    const buffer = container.resolve<ElasticBuffer>(DITokens.ParseBuffer)
    const maxMessageLen = container.resolve<number>(DITokens.maxMessageLen)
    const parser = new AsciiParser(scoped, null, buffer, maxMessageLen)
    const object = subscribe && this.depth === ParseDepth.Object
    parser.on('msg', (_: string, view: MsgView) => {
      ++this.decoded
      if (object) {
        // read the result back so the materialisation cannot be treated as
        // dead and folded away
        const materialised = view.toObject()
        if (materialised === null) {
          throw new Error('view produced no object')
        }
      }
    })
    return parser
  }

  /**
   * How many messages one pass over the input yields. Counted on a throwaway
   * parser during construction so the measured run never has to ask.
   */
  private countMessages (): number {
    const parser = this.makeParser(false)
    this.decoded = 0
    parser.parseBuffer(this.source)
    parser.removeAllListeners()
    const count = this.decoded
    this.decoded = 0
    return count
  }
}
