import 'reflect-metadata'

import { BenchRunner, IBenchCase, IBenchOptions } from '../../benchmark'

const options: IBenchOptions = {
  warmupOperations: 20,
  rounds: 4,
  operationsPerRound: 10,
  gcBetweenRounds: false
}

/**
 * a case that does a token amount of real work, enough that the timer reads
 * something above zero without making the suite slow
 */
function countingCase (name: string = 'counting'): IBenchCase & { calls: number, operations: number, setups: number, teardowns: number } {
  const state = {
    name,
    calls: 0,
    operations: 0,
    setups: 0,
    teardowns: 0,
    setup: (): void => {
      ++state.setups
    },
    teardown: (): void => {
      ++state.teardowns
    },
    run: (operations: number): number => {
      ++state.calls
      state.operations += operations
      let sink = 0
      for (let i = 0; i < operations * 100; ++i) {
        sink += i
      }
      if (sink < 0) throw new Error('unreachable, keeps the loop alive')
      return operations
    }
  }
  return state
}

describe('BenchRunner', () => {
  test('one sample per round', async () => {
    const result = await new BenchRunner(options).run(countingCase())
    expect(result.rounds.length).toBe(options.rounds)
    expect(result.timing.samples).toBe(options.rounds)
    expect(result.rounds.map(r => r.round)).toEqual([0, 1, 2, 3])
  })

  test('every round runs the operations it was asked for', async () => {
    const result = await new BenchRunner(options).run(countingCase())
    for (const round of result.rounds) {
      expect(round.operations).toBe(options.operationsPerRound)
    }
  })

  test('warmup happens and is not reported', async () => {
    const benchCase = countingCase()
    const result = await new BenchRunner(options).run(benchCase)
    const measured = options.rounds * options.operationsPerRound
    const diagnostics = options.operationsPerRound
    expect(benchCase.operations).toBe(options.warmupOperations + measured + diagnostics)
    expect(result.rounds.reduce((a, r) => a + r.operations, 0)).toBe(measured)
  })

  test('setup and teardown run once each', async () => {
    const benchCase = countingCase()
    await new BenchRunner(options).run(benchCase)
    expect(benchCase.setups).toBe(1)
    expect(benchCase.teardowns).toBe(1)
  })

  test('teardown runs even when the case throws', async () => {
    const benchCase = countingCase()
    benchCase.run = (): number => {
      throw new Error('case exploded')
    }
    await expect(new BenchRunner(options).run(benchCase)).rejects.toThrow('case exploded')
    expect(benchCase.teardowns).toBe(1)
  })

  test('a case that shortchanges the runner is rejected, not reported as fast', async () => {
    const benchCase = countingCase()
    benchCase.run = (operations: number): number => operations - 1
    await expect(new BenchRunner(options).run(benchCase))
      .rejects.toThrow(/asked for 10 operations .* completed 9/)
  })

  test('timings are positive and consistent with the elapsed time', async () => {
    const result = await new BenchRunner(options).run(countingCase())
    for (const round of result.rounds) {
      expect(round.elapsedNanos).toBeGreaterThan(0)
      expect(round.nanosPerOperation).toBeCloseTo(round.elapsedNanos / round.operations, 6)
    }
    expect(result.operationsPerSecond).toBeGreaterThan(0)
    expect(result.timing.min).toBeLessThanOrEqual(result.timing.median)
    expect(result.timing.median).toBeLessThanOrEqual(result.timing.max)
  })

  test('the diagnostics pass reports the operations it covered', async () => {
    const result = await new BenchRunner(options).run(countingCase())
    expect(result.memory.operations).toBe(options.operationsPerRound)
    expect(result.memory.gc.total).toBeGreaterThanOrEqual(0)
    expect(result.memory.forcedGcAvailable).toBe(typeof global.gc === 'function')
  })

  test('runAll keeps every case and stamps the environment', async () => {
    const suite = await new BenchRunner(options).runAll('suite', [countingCase('a'), countingCase('b')])
    expect(suite.results.map(r => r.name)).toEqual(['a', 'b'])
    expect(suite.label).toBe('suite')
    expect(suite.environment.node).toBe(process.version)
    expect(Date.parse(suite.capturedAt)).not.toBeNaN()
  })
})
