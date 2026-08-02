import * as os from 'os'
import { GcProbe } from './gc-probe'
import { summarise } from './bench-stats'
import {
  IBenchCase,
  IBenchOptions,
  IBenchResult,
  IBenchSuiteResult,
  IEnvironment,
  IMemoryResult,
  IRoundResult
} from './bench-types'

const nanosPerSecond = 1e9
const operationsPerMillion = 1e6

export const defaultBenchOptions: IBenchOptions = {
  // v8 needs to see a function run a few thousand times before it stops
  // interpreting it, so an unwarmed first round measures the wrong code
  warmupOperations: 20000,
  rounds: 10,
  operationsPerRound: 20000,
  gcBetweenRounds: true
}

export function environment (): IEnvironment {
  const cpus = os.cpus()
  return {
    node: process.version,
    v8: process.versions.v8,
    platform: `${os.type()} ${os.release()}`,
    arch: process.arch,
    cpu: cpus.length > 0 ? cpus[0].model.trim() : 'unknown',
    cpuCount: cpus.length,
    forcedGcAvailable: GcProbe.forcedGcAvailable()
  }
}

/** hand the event loop one turn, so queued observer callbacks can run */
async function tick (): Promise<void> {
  await new Promise<void>(resolve => { setImmediate(resolve) })
}

/**
 * Yield until the probe stops seeing new entries. Node dispatches a gc entry on
 * the turn after the collection, and a burst takes several turns to come
 * through, so a single yield loses most of them. Bounded so a pathological case
 * cannot spin here.
 */
async function drain (probe: GcProbe, maxTurns: number = 50): Promise<void> {
  let quietTurns = 0
  for (let turn = 0; turn < maxTurns && quietTurns < 3; ++turn) {
    const before = probe.seen()
    await tick()
    quietTurns = probe.seen() === before ? quietTurns + 1 : 0
  }
}

/**
 * Drives a case through a warmup, a series of timed rounds and a separate
 * diagnostics pass.
 *
 * One round is one sample. A single long run cannot tell you whether a number
 * is repeatable, and a difference smaller than the spread between rounds is not
 * a difference at all.
 *
 * Timing and memory are deliberately not measured together. Isolating rounds
 * means forcing a collection between them, and a forced collection is itself a
 * gc event - counting those would report the harness rather than the work. So
 * the timed rounds collect between them and report no gc figures, and a final
 * pass runs uninterrupted with the probe attached and reports no timings.
 */
export class BenchRunner {
  constructor (private readonly options: IBenchOptions = defaultBenchOptions) {
  }

  public async run (benchCase: IBenchCase): Promise<IBenchResult> {
    const options = this.options
    benchCase.setup?.()
    try {
      this.warmup(benchCase)
      const rounds: IRoundResult[] = []
      for (let round = 0; round < options.rounds; ++round) {
        if (options.gcBetweenRounds) {
          // a collection provoked by the previous round must not be charged
          // to the next one
          GcProbe.forceGc()
        }
        rounds.push(this.measureRound(benchCase, round))
      }
      const timing = summarise(rounds.map(r => r.nanosPerOperation))
      return {
        name: benchCase.name,
        description: benchCase.description,
        options,
        rounds,
        timing,
        operationsPerSecond: timing.median === 0 ? 0 : nanosPerSecond / timing.median,
        memory: await this.measureMemory(benchCase)
      }
    } finally {
      benchCase.teardown?.()
    }
  }

  public async runAll (label: string, cases: IBenchCase[]): Promise<IBenchSuiteResult> {
    const results: IBenchResult[] = []
    for (const benchCase of cases) {
      results.push(await this.run(benchCase))
    }
    return {
      label,
      // stamped from the clock rather than passed in, a suite is a record of
      // when it was taken
      capturedAt: new Date().toISOString(),
      environment: environment(),
      results
    }
  }

  /**
   * One uninterrupted pass with the gc probe attached.
   *
   * Nothing is forced while it runs, so every collection counted is one the
   * work itself provoked. The heap readings either side are taken after a
   * forced collection, making them what the pass retained rather than what it
   * churned - churn is what the collection counts are for.
   */
  private async measureMemory (benchCase: IBenchCase): Promise<IMemoryResult> {
    // settle, then let any delivery from that settling drain before the probe
    // exists - entries are dispatched a turn late and would otherwise land in
    // the middle of the measured pass
    GcProbe.forceGc()
    await tick()

    const heapBefore = process.memoryUsage().heapUsed
    const probe = new GcProbe()
    probe.start()
    const operations = benchCase.run(this.options.operationsPerRound)
    const heapAtEndOfPassBytes = process.memoryUsage().heapUsed
    await drain(probe)
    const gc = probe.stop()

    GcProbe.forceGc()
    const heapAfter = process.memoryUsage().heapUsed

    const retainedHeapBytes = heapAfter - heapBefore
    const perMillion = operations === 0 ? 0 : operationsPerMillion / operations
    return {
      operations,
      retainedHeapBytes,
      retainedBytesPerOperation: operations === 0 ? 0 : retainedHeapBytes / operations,
      heapAtEndOfPassBytes,
      gc,
      minorGcPerMillionOperations: gc.minor * perMillion,
      majorGcPerMillionOperations: gc.major * perMillion,
      gcPauseMsPerMillionOperations: gc.totalPauseMs * perMillion,
      forcedGcAvailable: GcProbe.forcedGcAvailable()
    }
  }

  private warmup (benchCase: IBenchCase): void {
    const target = this.options.warmupOperations
    if (target <= 0) return
    let done = 0
    // in chunks the size of a real round, so warmup exercises the same shape of
    // work rather than one long unbroken call
    const chunk = Math.max(1, Math.min(target, this.options.operationsPerRound))
    while (done < target) {
      const requested = Math.min(chunk, target - done)
      const completed = benchCase.run(requested)
      // a case that reports less than it was asked for would never let this
      // loop reach its target, so refuse it here rather than spin
      if (completed !== requested) {
        throw new Error(`${benchCase.name}: asked for ${requested} operations during warmup but completed ${completed}`)
      }
      done += completed
    }
  }

  private measureRound (benchCase: IBenchCase, round: number): IRoundResult {
    const requested = this.options.operationsPerRound
    const startedAt = process.hrtime.bigint()
    const operations = benchCase.run(requested)
    const elapsedNanos = Number(process.hrtime.bigint() - startedAt)
    if (operations !== requested) {
      throw new Error(`${benchCase.name}: asked for ${requested} operations in round ${round} but completed ${operations}`)
    }
    return {
      round,
      operations,
      elapsedNanos,
      nanosPerOperation: operations === 0 ? 0 : elapsedNanos / operations
    }
  }
}
