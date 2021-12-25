import 'reflect-metadata'

import { ElasticBuffer, MsgView, MsgParser } from './buffer'
import { AsciiParser, AsciiView, AsciiChars } from './buffer/ascii'
import { ILooseObject } from './collections/collection'
import { SimpleFieldDefinition, FixDefinitions } from './dictionary/definition'
import { MessageGenerator, JsonHelper, getWords, DefinitionFactory } from './util'
import { ISessionDescription, FileDuplex, StringDuplex } from './transport'

import { MsgTag } from './types'
import { JsFixConfig } from './config'

import * as util from 'util'
const fs = require('node-fs-extra')
import * as minimist from 'minimist'
import * as path from 'path'
import { SessionMsgFactory } from './transport/ascii'
import { MsgTransport } from './transport/factory'
import { EnumCompiler, ICompilerSettings, MsgCompiler } from './dictionary/compiler'
import { AsciiMsgTransmitter } from './transport/ascii/ascii-msg-transmitter'

const argv: any = minimist(process.argv.slice(2))

enum PrintMode {
  Structure = 1,
  Object = 2,
  Verbose = 3,
  Stats = 4,
  Token = 5,
  Encoded = 6
}

enum Command {
  Generate = 1,
  Replay = 2,
  Lookup = 3,
  Encode = 4,
  Benchmark = 5,
  Compile = 6,
  Unknown = 7
}

export class JsfixCmd {
  private readonly root: string = path.join(__dirname, '../')
  private definitions: FixDefinitions
  private jsonHelper: JsonHelper
  private session: AsciiMsgTransmitter
  private sessionDescription: ISessionDescription
  private delimiter: number = AsciiChars.Soh
  private stats: ILooseObject = {}
  private filter: string = null
  private messages: number = 0
  private print: boolean = true

  private static getCommand (): Command {
    let command: Command = Command.Unknown
    if (argv.compile) {
      command = Command.Compile
    } else if (argv.generate) {
      command = Command.Generate
    } else if (argv.fix) {
      command = argv.benchmark ? Command.Benchmark : Command.Replay
    } else if (argv.field) {
      command = Command.Lookup
    } else if (argv.json) {
      command = Command.Encode
    } else if (argv.msg) {
      command = Command.Lookup
    }
    return command
  }

  private static getPrintMode (): PrintMode {
    let mode: PrintMode = PrintMode.Stats
    if (argv.tokens) {
      mode = PrintMode.Token
    } else if (argv.stats) {
      mode = PrintMode.Stats
    } else if (argv.objects) {
      mode = PrintMode.Object
    } else if (argv.verbose) {
      mode = PrintMode.Verbose
    } else if (argv.structures) {
      mode = PrintMode.Structure
    } else if (argv.encoded) {
      mode = PrintMode.Encoded
    }
    return mode
  }

  private static async writeFile (name: string, api: string) {
    const writer = util.promisify(fs.writeFile)
    await writer(name, api, {
      encoding: 'utf8'}
    ).catch((e: Error) => {
      throw e
    })
  }

  public exec (): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.init().then(async () => {
        let actioned: boolean = true
        let command = JsfixCmd.getCommand()

        switch (command) {
          case Command.Generate: {
            // produce a test message or a valid fix log of n messages
            await this.generate()
            break
          }

          case Command.Encode: {
            // encode a json message back to fix
            this.encode()
            break
          }

          case Command.Replay: {
            // parse a file into either objects, tokens, structures or stats
            const repeats: number = !isNaN(argv.repeats) ? argv.repeats : 1
            try {
              for (let i: number = 0; i < repeats; ++i) {
                await this.replay()
              }
            } catch (e) {
              reject(e)
            }
            break
          }

          case Command.Benchmark: {
            // time how long to parse 10000 repeats of contents of file
            const repeats: number = !isNaN(argv.repeats) ? argv.repeats : 10000
            try {
              await this.benchmark(repeats)
            } catch (e) {
              reject(e)
            }
            break
          }

          case Command.Lookup: {
            // lookup a field
            if (argv.field) {
              this.field()
            } else {
              this.msg()
            }
            break
          }

          case Command.Compile: {
            await this.compile()
            break
          }

          case Command.Unknown:
          default: {
            actioned = false
          }
        }
        resolve(actioned)
      }).catch((e) => {
        reject(e)
      })
    })
  }

  private firstMessage (t: MsgTransport): Promise<MsgView> {
    return new Promise<MsgView>((resolve, reject) => {
      t.receiver.on('msg', (msgType: string, msgView: MsgView) => {
        resolve(msgView.clone())
      })
      t.receiver.on('error', (e) => {
        reject(e)
      })
    })
  }

  private async generate () {
    const lipPath: string = path.join(this.root, 'data/examples/lipsum.txt')
    const words: string[] = await getWords(lipPath)
    const generator = new MessageGenerator(words, this.definitions)
    let density = 1
    if (argv.density) {
      density = parseFloat(argv.density)
    }
    if (isNaN(density)) {
      console.log('density must be numeric in range > 0 density <= 1.0')
      return
    }

    if (argv.script) {
      await this.script(generator, density)
    } else {
      await this.single(generator, density)
    }
  }

  private async single (generator: MessageGenerator, density: number) {
    if (!argv.type) {
      console.log('specify type to generate e.g. --type = AE')
      return
    }
    const msgType: string = `${argv.type}`
    let makeGroups: boolean = true
    if (argv.groups) {
      makeGroups = argv.groups === 'true'
    }
    const obj: ILooseObject = generator.generate(msgType, density, makeGroups)
    console.log(JSON.stringify(obj, null, 4))
    const fix: string = this.encodeObject(msgType, obj)
    const ft: MsgTransport = new MsgTransport(1, this.session.config, new StringDuplex(fix))
    if (argv.unit) {
      await this.unitTest(fix, obj, ft)
    } else {
      this.subscribe(ft)
    }
  }

  private async script (generator: MessageGenerator, density: number) {
    let buffer: ElasticBuffer = new ElasticBuffer()
    const repeats: number = argv.repeats || 50
    const key: string = MsgTag.MsgType.toString()
    const sf = this.definitions.simple.get(key)
    const session: AsciiMsgTransmitter = this.session
    for (let i = 0; i < repeats; ++i) {
      const msgType: string = MessageGenerator.getRandomEnum(sf).toString()
      console.log(`i = ${i} ${msgType}`)
      const obj: ILooseObject = generator.generate(msgType, density)
      session.encodeMessage(msgType, obj)
      buffer.writeBuffer(session.buffer.slice())
      buffer.writeString(require('os').EOL)
    }
    await JsfixCmd.writeFile('./fix.txt', buffer.slice().toString('utf8'))
  }

  private async unitTest (fix: string, obj: ILooseObject, ft: MsgTransport) {
    const view: MsgView = await this.firstMessage(ft)
    const summary = view.structure.summary()

    await JsfixCmd.writeFile('./fix.txt', fix)
    await JsfixCmd.writeFile('./object.json', JSON.stringify(obj, null, 4))
    await JsfixCmd.writeFile('./token.txt', view.toString())
    await JsfixCmd.writeFile('./structure.json', JSON.stringify(summary, null, 4))
  }

  private encodeObject (msgType: string, object: ILooseObject): string {
    const session: AsciiMsgTransmitter = this.session
    session.encodeMessage(msgType, object)
    return session.buffer.toString()
  }

  private msg (): void {
    const definitions = this.definitions
    const m = definitions.message.get(argv.msg)
    if (m) {
      console.log(m.toString())
    }
  }

  private field (): void {
    let sf: SimpleFieldDefinition
    const tag: number = parseInt(argv.field, 10)
    const definitions = this.definitions
    if (!isNaN(tag)) {
      sf = definitions.tagToSimple[tag]
    } else {
      sf = definitions.simple.get(argv.field)
    }
    if (sf) {
      console.log(sf.toString())
    }
  }

  ensureExists (path: string): Promise<any> {
    return new Promise<any>((accept, reject) => {
      fs.mkdirp(path, (err: Error) => {
        if (err) {
          reject(err)
        } else {
          accept(true)
        }
      })
    })
  }

  private async compileDefinitions (outputPath: string) {
    await this.ensureExists(path.join(outputPath, 'set'))
    await this.ensureExists(path.join(outputPath, 'enum'))
    const definitions = this.definitions
    const compilerSettings: ICompilerSettings = require('../data/compiler.json')
    compilerSettings.output = outputPath
    const msgCompiler: MsgCompiler = new MsgCompiler(definitions, compilerSettings)
    await msgCompiler.generate()
    const enumCompiler: EnumCompiler = new EnumCompiler(definitions, compilerSettings)
    const writeFile = path.join(compilerSettings.output, './enum/all-enum.ts')
    await enumCompiler.generate(writeFile)
  }

  private async compile () {
    let output = argv.output
    const dp = new DefinitionFactory().getDictPath(argv.dict)
    if (dp) {
      output = dp.output
    }
    output = path.join(this.root, output)
    await this.compileDefinitions(output)
  }

  private async init (): Promise<any> {
    let session: string = argv.session || 'data/session/test-initiator.json'
    session = this.norm(session)
    this.sessionDescription = require(session)
    let dict: string
    if (argv.dict) {
      dict = argv.dict
    } else {
      dict = this.sessionDescription.application.dictionary
    }
    this.definitions = await new DefinitionFactory().getDefinitions(dict)
    const definitions = this.definitions
    if (argv.delimiter) {
      this.delimiter = AsciiChars.firstChar(argv.delimiter)
    }
    this.jsonHelper = new JsonHelper(definitions)
    if (argv.session) {
      const description = this.sessionDescription
      const config = new JsFixConfig(new SessionMsgFactory(description), definitions, description, this.delimiter)
      this.session = new AsciiMsgTransmitter(config)
    }
  }

  private async dispatch (ft: MsgTransport): Promise<any> {
    if (argv.type != null) {
      this.filter = argv.type.toString()
    }
    let time: boolean = false
    if (argv.time || argv.stats) {
      this.print = false
      time = true
    }
    this.subscribe(ft)
    const startsAt: Date = new Date()
    await ft.wait()
    const elapsed: number = new Date().getTime() - startsAt.getTime()
    if (time) {
      console.log(`messages ${this.messages} elapsed ms ${elapsed}`)
    }
    if (argv.stats) {
      console.log(JSON.stringify(this.stats, null, 4))
    }
  }

  private subscribe (ft: MsgTransport) {
    this.messages = 0
    this.stats = {}
    const filter = this.filter
    // the receiver is message parser which is piped from an input stream - file, socket
    ft.receiver.on('msg', (msgType: string, m: AsciiView) => {

      if (filter) {
        if (msgType !== filter) {
          return
        }
      }
      ++this.messages
      this.onMsg(msgType, m)
    })
  }

  private onMsg (msgType: string, m: MsgView) {
    const mode: PrintMode = JsfixCmd.getPrintMode()
    const print = this.print
    const stats = this.stats
    switch (mode) {
      case PrintMode.Stats: {
        if (!stats[msgType]) {
          stats[msgType] = 1
        } else {
          stats[msgType] = stats[msgType] + 1
        }
        break
      }

      case PrintMode.Verbose: {
        const verbose = m.toVerbose()
        if (verbose) {
          console.log(verbose)
        }
        break
      }

      case PrintMode.Object: {
        const asObject: ILooseObject = m.toObject()
        if (print) {
          const def = this.definitions.message.get(msgType)
          console.log(`${msgType} [${def.name}] = ${JSON.stringify(asObject, null, 4)}`)
          console.log()
        }
        break
      }

      case PrintMode.Structure: {
        const summary = m.structure.summary()
        if (print) {
          console.log(JSON.stringify(summary, null, 4))
        }
        break
      }

      case PrintMode.Token: {
        const tokens = m.toString()
        if (print) {
          console.log(tokens)
        }
        break
      }

      case PrintMode.Encoded: {
        const fix: string = this.encodeObject(msgType, m.toObject())
        console.log(fix)
        break
      }

      default:
        throw new Error(`unknown mode ${mode}`)
    }
  }

  private async replay (): Promise<any> {
    if (!argv.fix) {
      console.log('provide a path to fix file i.e. --fix=data/examples/execution-report/fix.txt')
      return
    }
    const fix: string = this.norm(argv.fix)
    const config = new JsFixConfig(null, this.definitions, this.sessionDescription, this.delimiter)
    const ft: MsgTransport = new MsgTransport(1, config, new FileDuplex(fix))
    await this.dispatch(ft)
  }

  private async benchmark (repeats: number): Promise<any> {
    if (!argv.fix) {
      console.log('provide a path to fix file i.e. --fix=data/examples/execution-report/fix.txt')
      return
    }
    return new Promise<any>((accept, reject) => {
      const fix: string = this.norm(argv.fix)
      const fs = require('fs')
      const definitions = this.definitions
      const delimiter = this.delimiter
      fs.readFile(fix, 'utf8', async (err: Error, contents: string) => {
        if (err) {
          reject(err)
        }
        const toParse = new StringDuplex(contents.repeat(repeats), false)
        const startsAt: Date = new Date()
        let i = 0
        const config = new JsFixConfig(null, definitions, this.sessionDescription, delimiter)
        const asciiParser: MsgParser = new AsciiParser(config, toParse.readable, 160 * 1024)
        asciiParser.on('msg', (msgType: string, v: MsgView) => {
          ++i
          if (i === repeats) {
            const elapsed: number = new Date().getTime() - startsAt.getTime()
            console.log(contents)
            console.log(v.toString())
            console.log(`[${msgType}]: repeats = ${repeats}, fields = ${v.structure.tags.nextTagPos}, length = ${contents.length} chars, elapsed ms ${elapsed}, ${(elapsed / repeats) * 1000} micros per msg`)
            accept(true)
          }
        })
      })
    })
  }

  private encode (): void {
    const session: AsciiMsgTransmitter = this.session
    if (!session) {
      console.log('provide a session json file e.g. --session=data/session/test-initiator.json')
      return
    }
    if (!argv.type) {
      console.log('provide a message type e.g. --type=8')
      return
    }
    if (!argv.json) {
      console.log('provide a json representation e.g. data/examples/execution-report/object.json')
      return
    }
    const ts: string = argv.type.toString()
    const msg: ILooseObject = this.jsonHelper.fromJson(path.join(this.root, argv.json), ts)
    session.encodeMessage(ts, msg)
    const fix: string = session.buffer.toString()
    console.log(fix)
  }

  private norm (p: string): string {
    let f: string = p
    if (!path.isAbsolute(p)) {
      f = path.join(this.root, f)
    }
    return f
  }
}

function showHelp (): void {
  console.log('this help page')
  console.log('npm run cmd')
  console.log('npm run cmd -- --help')
  console.log()

  console.log('token format i.e. [602] 687 (LegQty) = 33589')
  console.log('jsfix-cmd --dict=data/FIX44.xml --fix=data/examples/quickfix/FIX.4.4/execution-report/fix.txt --delimiter="|" --tokens')
  console.log()

  console.log('token format use fix repo dictionary')
  console.log('jsfix-cmd --dict=data/fix_repo/FIX.4.4/Base --fix=data/examples/quickfix/FIX.4.4/execution-report/fix.txt'
        + ' --delimiter="|" --tokens')
  console.log()

  console.log('structure format i.e. show locations of components etc.')
  console.log('jsfix-cmd --dict=data/FIX44.xml --fix=data/examples/FIX.4.4/quickfix/execution-report/fix.txt' +
        ' --delimiter="|" --tokens --structures')
  console.log()

  console.log('full JS object in JSON format.')
  console.log('jsfix-cmd --dict=data/FIX44.xml --fix=data/examples/FIX.4.4/quickfix/execution-report/fix.txt' +
        ' --delimiter="|" --tokens --objects')
  console.log()

  console.log('full JS object in JSON format - filter only type messages.')
  console.log('jsfix-cmd --dict=data/FIX44.xml --fix=data/examples/FIX.4.4/quickfix/execution-report/fix.txt' +
        ' --delimiter="|" --tokens --type=8 --objects')
  console.log()

  console.log('timing stats and message counts. Structured parsing of all messages.')
  console.log('jsfix-cmd --dict=data/FIX44.xml --fix=data/examples/FIX.4.4/quickfix/execution-report/fix.txt --stats')
  console.log()

  console.log('encode a json object to fix format')
  console.log('jsfix-cmd --json=data/examples/FIX.4.4/quickfix/execution-report/object.json' +
        ' --session=data/session.json --type=8 --delimiter="|"')
  console.log()

  console.log('display field definition')
  console.log('jsfix-cmd --dict=data/FIX44.xml --field=MsgType|35')
  console.log()

  console.log('display field use fix repo dictionary e.g. 271 MDEntrySize QTY Quantity or volume represented by the Market Data Entry.')
  console.log('jsfix-cmd --dict=data/fix_repo/FIX.4.4/Base --field=MsgType')
  console.log('jsfix-cmd --dict=data/fix_repo/FIX.4.4/Base --field=35')
  console.log()

  console.log('script to describe field in repository version 4.4')
  console.log('npm run repo44 -- --field=8')
  console.log()

  console.log('script to describe field in fixml')
  console.log('npm run fixml -- --field=50')
  console.log()

  console.log('generate unit test set of files - i.e. randomly generate an object, encode to fix. density 1 is all fields')
  console.log('jsfix-cmd --generate --type=AE --density=0.8 --unit --delimiter="|" --session=data/session/test-initiator.json')
  console.log('npm run repo44-unit -- --type=AE')
  console.log('test script with no repeat groups')
  console.log('npm run repo44-unit -- --type=AE --groups=false')
  console.log()

  console.log('generate a fix log of randomly generated but syntactically correct messages')
  console.log('jsfix-cmd --generate --density=0.8 --repeats=50 --script --delimiter="|" --session=data/session/test-initiator.json')
  console.log('npm run repo44-script')
  console.log('parse above generated script')
  console.log('npm run repo44-repscr')
  console.log()

  console.log('replay example repo fix file of 50 messages.')
  console.log('jsfix-cmd --session=data/session/test-initiator.json --fix=data/examples/FIX.4.4/fix.txt --delimiter="|" --stats')
  console.log('npm run repo44-replay -- --stats')
  console.log('npm run repo44-replay -- --objects')
  console.log('npm run repo44-replay -- --tokens')
  console.log('npm run repo44-replay -- --structures')
  console.log()

  console.log('benchmark parse a message')
  console.log('jsfix-cmd --delimiter="|" --session=data/session/test-initiator.json --fix=data/examples/FIX.4.4/repo/trade-capture-no-groups/fix.txt --benchmark')
  console.log('npm run repo44-bench -- --fix=data/examples/FIX.4.4/repo/trade-capture-no-groups/fix.txt')
  console.log()

  console.log('compile typescript interfaces - i.e. outputs to src/types/FIX4.4 - requires set and enum sub folders')
  console.log('npm run cmd -- --dict=repo40 --compile')
  console.log('npm run cmd -- --dict=repo41 --compile')
  console.log('npm run cmd -- --dict=repo42 --compile')
  console.log('npm run cmd -- --dict=repo43 --compile')
  console.log('npm run cmd -- --dict=repo44 --compile')
  console.log('npm run cmd -- --dict=repo50 --compile')
  console.log('npm run cmd -- --dict=repo50sp1 --compile')
  console.log('npm run cmd -- --dict=repo50sp2 --compile')
  console.log('npm run cmd -- --dict=repofixml --compile')
  console.log('npm run cmd -- --dict=qf44 --compile')
  console.log('npm run cmd -- --dict=data/handmade.xml --compile --output=src/types/handmade')

  console.log()
}

const help: boolean = argv.h || argv.help
if (help) {
  showHelp()
} else {
  const cmd: JsfixCmd = new JsfixCmd()
  cmd.exec().then((res: boolean) => {
    if (!res) {
      showHelp()
    }
  }).catch((e: Error) => {
    console.log(`error ${e.message}`)
  })
}
