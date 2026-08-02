import { ISampleStats } from './bench-types'

/**
 * Descriptive statistics over a set of measured rounds.
 *
 * min matters as much as median here. A round can only ever be made slower by
 * interference - a collection landing mid round, the scheduler taking the core
 * away - so the fastest round is the closest reading to the true cost of the
 * work, while the median tells you what to expect in practice.
 */
export function summarise (values: number[]): ISampleStats {
  if (values.length === 0) {
    throw new Error('cannot summarise an empty sample set')
  }
  const sorted = [...values].sort((a, b) => a - b)
  const n = sorted.length
  const mean = sorted.reduce((a, v) => a + v, 0) / n
  const variance = sorted.reduce((a, v) => a + (v - mean) * (v - mean), 0) / n
  const stdDev = Math.sqrt(variance)
  return {
    samples: n,
    min: sorted[0],
    max: sorted[n - 1],
    mean,
    median: median(sorted),
    p95: percentile(sorted, 95),
    p99: percentile(sorted, 99),
    stdDev,
    coefficientOfVariation: mean === 0 ? 0 : stdDev / mean
  }
}

/**
 * @param sorted values in ascending order
 */
export function median (sorted: number[]): number {
  const n = sorted.length
  if (n === 0) return 0
  const mid = n >> 1
  return n % 2 === 1
    ? sorted[mid]
    : (sorted[mid - 1] + sorted[mid]) / 2
}

/**
 * Nearest rank percentile - no interpolation, so every value reported is a
 * reading that actually occurred.
 *
 * @param sorted values in ascending order
 * @param p percentile in the range 0 to 100
 */
export function percentile (sorted: number[], p: number): number {
  const n = sorted.length
  if (n === 0) return 0
  const rank = Math.ceil((p / 100) * n)
  const index = Math.min(Math.max(rank - 1, 0), n - 1)
  return sorted[index]
}

export interface IComparison {
  /** positive means the candidate took longer than the baseline */
  readonly deltaPercent: number
  /**
   * true when the change is larger than the noise both runs displayed. Below
   * this threshold a difference is not evidence of anything.
   */
  readonly significant: boolean
  readonly noiseThresholdPercent: number
}

/**
 * Compare a candidate timing against a baseline, using the run to run spread
 * each of them showed to decide whether the difference is real.
 */
export function compare (baseline: ISampleStats, candidate: ISampleStats): IComparison {
  const deltaPercent = baseline.median === 0
    ? 0
    : ((candidate.median - baseline.median) / baseline.median) * 100
  // both runs contribute their own noise to any difference between them
  const noiseThresholdPercent = (baseline.coefficientOfVariation + candidate.coefficientOfVariation) * 100
  return {
    deltaPercent,
    significant: Math.abs(deltaPercent) > noiseThresholdPercent,
    noiseThresholdPercent
  }
}
