import { compare } from './bench-stats'
import { IBenchResult, IBenchSuiteResult } from './bench-types'

const bytesPerKb = 1024
const bytesPerMb = bytesPerKb * 1024
const nanosPerMicro = 1e3

function micros (nanos: number): string {
  return (nanos / nanosPerMicro).toFixed(3)
}

function mb (bytes: number): string {
  return (bytes / bytesPerMb).toFixed(2)
}

function thousands (n: number): string {
  return Math.round(n).toLocaleString('en-US')
}

function signed (n: number, digits: number = 2): string {
  return `${n >= 0 ? '+' : ''}${n.toFixed(digits)}`
}

export function formatEnvironment (suite: IBenchSuiteResult): string {
  const env = suite.environment
  const lines = [
    `${suite.label}  ${suite.capturedAt}`,
    `node ${env.node}  v8 ${env.v8}  ${env.platform} ${env.arch}`,
    `${env.cpu} x${env.cpuCount}`
  ]
  if (!env.forcedGcAvailable) {
    lines.push('WARNING: no --expose-gc, rounds are not isolated and retained heap is indicative only')
  }
  return lines.join('\n')
}

export function formatResult (result: IBenchResult): string {
  const t = result.timing
  const m = result.memory
  const noise = t.coefficientOfVariation * 100
  const lines = [
    `${result.name}`,
    result.description ? `  ${result.description}` : '',
    `  rounds        ${t.samples} x ${result.options.operationsPerRound} msgs` +
      ` (warmup ${result.options.warmupOperations})`,
    `  per msg       median ${micros(t.median)}us   min ${micros(t.min)}us` +
      `   p95 ${micros(t.p95)}us   max ${micros(t.max)}us`,
    `  throughput    ${thousands(result.operationsPerSecond)} msg/sec`,
    `  noise         ${noise.toFixed(2)}% of median (a change smaller than this means nothing)`,
    `  gc pass       ${m.operations} msgs uninterrupted: ${m.gc.minor} minor  ${m.gc.major} major  ` +
      `${m.gc.totalPauseMs.toFixed(1)}ms paused  longest ${m.gc.longestPauseMs.toFixed(2)}ms`,
    `  gc rate       ${m.minorGcPerMillionOperations.toFixed(1)} minor/M msgs   ` +
      `${m.majorGcPerMillionOperations.toFixed(1)} major/M msgs   ` +
      `${m.gcPauseMsPerMillionOperations.toFixed(0)}ms paused/M msgs`,
    `  retained      ${mb(m.retainedHeapBytes)}MB   ` +
      `${m.retainedBytesPerOperation.toFixed(1)} bytes/msg   heap at end of pass ${mb(m.heapAtEndOfPassBytes)}MB`
  ]
  return lines.filter(l => l.length > 0).join('\n')
}

export function formatSuite (suite: IBenchSuiteResult): string {
  const blocks = suite.results.map(formatResult)
  return [formatEnvironment(suite), '', ...blocks].join('\n\n')
}

/**
 * Compare a suite against a stored baseline, matching results by name.
 *
 * A difference is only called out as real when it exceeds the run to run
 * spread both suites displayed. Everything else is reported as noise, because
 * that is what it is.
 */
export function formatComparison (baseline: IBenchSuiteResult, candidate: IBenchSuiteResult): string {
  const lines: string[] = [`baseline ${baseline.label} (${baseline.capturedAt})`, '']
  if (baseline.environment.cpu !== candidate.environment.cpu ||
      baseline.environment.node !== candidate.environment.node) {
    lines.push('WARNING: baseline was taken on a different machine or node build, timings are not comparable')
    lines.push('')
  }
  for (const result of candidate.results) {
    const before = baseline.results.find(r => r.name === result.name)
    if (!before) {
      lines.push(`${result.name}  no baseline`)
      continue
    }
    const timing = compare(before.timing, result.timing)
    const verdict = timing.significant
      ? (timing.deltaPercent < 0 ? 'FASTER' : 'SLOWER')
      : 'noise'
    lines.push(`${result.name}`)
    lines.push(`  per msg   ${micros(before.timing.median)}us -> ${micros(result.timing.median)}us` +
      `   ${signed(timing.deltaPercent)}%   ${verdict}` +
      `   (noise floor +/-${timing.noiseThresholdPercent.toFixed(2)}%)`)
    const gcBefore = before.memory.minorGcPerMillionOperations
    const gcAfter = result.memory.minorGcPerMillionOperations
    const gcDelta = gcBefore === 0 ? 0 : ((gcAfter - gcBefore) / gcBefore) * 100
    lines.push(`  minor gc  ${gcBefore.toFixed(1)} -> ${gcAfter.toFixed(1)} per M msgs   ${signed(gcDelta)}%`)
    lines.push('')
  }
  return lines.join('\n')
}
