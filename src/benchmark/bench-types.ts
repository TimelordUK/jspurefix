/**
 * A unit of work the runner can drive. run is handed the number of operations
 * to perform and returns how many it actually completed, which the runner
 * checks - a case that silently does less work than asked would otherwise look
 * like a large improvement.
 */
export interface IBenchCase {
  readonly name: string
  readonly description?: string
  /** called once before warmup, outside all timing */
  setup?: () => void
  run: (operations: number) => number
  teardown?: () => void
}

export interface IBenchOptions {
  /** operations run and discarded before measuring, to let v8 tier the code up */
  readonly warmupOperations: number
  /** measured rounds - each contributes one sample */
  readonly rounds: number
  readonly operationsPerRound: number
  /** collect between rounds so one round's garbage is not charged to the next */
  readonly gcBetweenRounds: boolean
}

export interface ISampleStats {
  readonly samples: number
  readonly min: number
  readonly max: number
  readonly mean: number
  readonly median: number
  readonly p95: number
  readonly p99: number
  readonly stdDev: number
  /** stdDev as a fraction of the mean - the run to run noise floor */
  readonly coefficientOfVariation: number
}

export interface IGcTotals {
  readonly minor: number
  readonly major: number
  readonly incremental: number
  readonly weakCallback: number
  readonly total: number
  readonly totalPauseMs: number
  readonly longestPauseMs: number
}

export interface IMemoryResult {
  /** operations in the diagnostics pass these figures were taken over */
  readonly operations: number
  /**
   * heapUsed after a forced collection, less the same reading taken before the
   * measured rounds - what the work left behind rather than what it churned
   */
  readonly retainedHeapBytes: number
  readonly retainedBytesPerOperation: number
  /**
   * heapUsed sampled the instant the pass finished. Not a high water mark -
   * it is wherever the sawtooth happened to be - so read it as a rough sense of
   * the working set, not as a peak.
   */
  readonly heapAtEndOfPassBytes: number
  readonly gc: IGcTotals
  /**
   * collections per million operations. allocation volume is not directly
   * observable from node, so this is the comparable proxy for it - the same
   * work triggering fewer scavenges is the same work allocating less.
   */
  readonly minorGcPerMillionOperations: number
  readonly majorGcPerMillionOperations: number
  readonly gcPauseMsPerMillionOperations: number
  /** false when the process was started without --expose-gc */
  readonly forcedGcAvailable: boolean
}

export interface IRoundResult {
  readonly round: number
  readonly operations: number
  readonly elapsedNanos: number
  readonly nanosPerOperation: number
}

export interface IEnvironment {
  readonly node: string
  readonly v8: string
  readonly platform: string
  readonly arch: string
  readonly cpu: string
  readonly cpuCount: number
  readonly forcedGcAvailable: boolean
}

export interface IBenchResult {
  readonly name: string
  readonly description?: string
  readonly options: IBenchOptions
  readonly rounds: IRoundResult[]
  /** statistics over the per round nanosPerOperation samples */
  readonly timing: ISampleStats
  readonly operationsPerSecond: number
  readonly memory: IMemoryResult
}

export interface IBenchSuiteResult {
  readonly label: string
  readonly capturedAt: string
  readonly environment: IEnvironment
  readonly results: IBenchResult[]
}
