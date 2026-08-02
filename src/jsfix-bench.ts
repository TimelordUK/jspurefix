import 'reflect-metadata'

import * as path from 'path'
import * as fs from 'fs'
import minimist = require('minimist')
import buildOptions from 'minimist-options'

import { AsciiChars } from './buffer/ascii'
import { IJsFixConfig } from './config'
import { DefinitionFactory } from './util'
import { SessionContainer } from './runtime'
import { DITokens } from './runtime/di-tokens'
import {
  BenchRunner,
  IBenchCase,
  IBenchOptions,
  IBenchSuiteResult,
  ParseCase,
  ParseDepth,
  defaultBenchOptions,
  formatComparison,
  formatSuite
} from './benchmark'

const options = buildOptions({
  dict: {
    type: 'string',
    alias: 'd',
    default: 'qf44'
  },

  fix: {
    type: 'string',
    alias: 'f',
    default: 'data/examples/FIX.4.4/quickfix/execution-report/fix.txt'
  },

  session: {
    type: 'string',
    alias: 's',
    default: 'data/session/test-initiator.json'
  },

  delimiter: {
    type: 'string',
    alias: 'l',
    default: '|'
  },

  depth: {
    type: 'string',
    default: 'view,object'
  },

  rounds: {
    type: 'number',
    default: defaultBenchOptions.rounds
  },

  msgs: {
    type: 'number',
    default: defaultBenchOptions.operationsPerRound
  },

  warmup: {
    type: 'number',
    default: defaultBenchOptions.warmupOperations
  },

  label: {
    type: 'string',
    default: 'jspurefix'
  },

  save: {
    type: 'string'
  },

  baseline: {
    type: 'string'
  },

  json: {
    type: 'boolean',
    default: false
  },

  help: {
    type: 'boolean',
    alias: 'h',
    default: false
  }
})

const argv: any = minimist(process.argv.slice(2), options)

const root: string = path.join(__dirname, '../')

function norm (p: string): string {
  return path.isAbsolute(p) ? p : path.join(root, p)
}

function usage (): void {
  console.log('measure the parse path and what it costs in time and in garbage')
  console.log()
  console.log('  --fix=<path>        fix log to parse, defaults to a 4.4 execution report')
  console.log('  --dict=<name>       dictionary, e.g. qf44, repo44, qf50sp2')
  console.log('  --delimiter=<char>  field delimiter in the log, defaults to |')
  console.log('  --depth=view,object which stages to measure, comma separated')
  console.log('  --rounds=<n>        measured rounds, one sample each')
  console.log('  --msgs=<n>          messages per round')
  console.log('  --warmup=<n>        messages discarded before measuring')
  console.log('  --save=<path>       write the suite to json')
  console.log('  --baseline=<path>   compare against a previously saved suite')
  console.log('  --json              print the suite as json instead of a report')
  console.log()
  console.log('run under --expose-gc so rounds can be isolated and heap read cleanly:')
  console.log('  node --expose-gc dist/jsfix-bench --fix=data/examples/FIX.4.4/quickfix/execution-report/fix.txt')
  console.log('  npm run bench')
}

async function makeConfig (): Promise<IJsFixConfig> {
  const sys = new SessionContainer()
  sys.registerGlobal('error')
  const sessionDescription = require(norm(argv.session))
  const container = await sys.makeSystem(sessionDescription)
  const config = container.resolve<IJsFixConfig>(DITokens.IJsFixConfig)
  config.definitions = await new DefinitionFactory().getDefinitions(argv.dict)
  // the parser reads the delimiter when it is constructed, so this has to be
  // settled before any case is built
  config.delimiter = AsciiChars.firstChar(argv.delimiter)
  return config
}

function requestedDepths (): ParseDepth[] {
  const known = new Map<string, ParseDepth>([
    ['view', ParseDepth.View],
    ['object', ParseDepth.Object]
  ])
  const asked = String(argv.depth).split(',').map(d => d.trim().toLowerCase()).filter(d => d.length > 0)
  return asked.map(d => {
    const depth = known.get(d)
    if (!depth) {
      throw new Error(`unknown depth ${d}, expected view or object`)
    }
    return depth
  })
}

function readSuite (p: string): IBenchSuiteResult {
  return JSON.parse(fs.readFileSync(norm(p), 'utf8'))
}

async function main (): Promise<void> {
  if (argv.help) {
    usage()
    return
  }
  const fixPath = norm(argv.fix)
  if (!fs.existsSync(fixPath)) {
    throw new Error(`no such fix log ${fixPath}`)
  }
  const contents = fs.readFileSync(fixPath, 'utf8')
  const config = await makeConfig()

  const cases: ParseCase[] = requestedDepths().map(depth =>
    new ParseCase(`parse:${depth}`, { config, contents, depth }))

  // every case walks the same input, so one alignment covers the suite and all
  // of them stay directly comparable
  const perInvocation = cases[0].operationsPerInvocation
  const operationsPerRound = cases[0].alignOperations(argv.msgs)
  const benchOptions: IBenchOptions = {
    warmupOperations: cases[0].alignOperations(argv.warmup),
    rounds: argv.rounds,
    operationsPerRound,
    gcBetweenRounds: true
  }

  console.log(`${path.relative(root, fixPath)}  ${perInvocation} msg/pass  dict ${argv.dict}`)
  const suite = await new BenchRunner(benchOptions).runAll(argv.label, cases as IBenchCase[])

  if (argv.json) {
    console.log(JSON.stringify(suite, null, 2))
  } else {
    console.log()
    console.log(formatSuite(suite))
  }
  if (argv.baseline) {
    console.log()
    console.log(formatComparison(readSuite(argv.baseline), suite))
  }
  if (argv.save) {
    const target = norm(argv.save)
    fs.mkdirSync(path.dirname(target), { recursive: true })
    fs.writeFileSync(target, JSON.stringify(suite, null, 2), 'utf8')
    console.log(`saved ${path.relative(root, target)}`)
  }
}

main().catch(e => {
  console.error(e instanceof Error ? e.message : e)
  process.exit(1)
})
