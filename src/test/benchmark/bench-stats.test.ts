import 'reflect-metadata'

import { compare, median, percentile, summarise } from '../../benchmark'

describe('median', () => {
  test('middle value of an odd sample', () => {
    expect(median([1, 2, 3, 4, 5])).toBe(3)
  })

  test('mean of the middle pair of an even sample', () => {
    expect(median([1, 2, 3, 4])).toBe(2.5)
  })

  test('an empty sample has no middle', () => {
    expect(median([])).toBe(0)
  })
})

describe('percentile', () => {
  const sorted = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  test('nearest rank always returns a value that occurred', () => {
    expect(sorted).toContain(percentile(sorted, 95))
  })

  test('p50 is the fifth of ten', () => {
    expect(percentile(sorted, 50)).toBe(5)
  })

  test('p100 is the largest', () => {
    expect(percentile(sorted, 100)).toBe(10)
  })

  test('p0 does not fall off the front', () => {
    expect(percentile(sorted, 0)).toBe(1)
  })

  test('an empty sample has no percentile', () => {
    expect(percentile([], 95)).toBe(0)
  })
})

describe('summarise', () => {
  test('describes a spread', () => {
    const stats = summarise([10, 12, 14, 16, 18])
    expect(stats.samples).toBe(5)
    expect(stats.min).toBe(10)
    expect(stats.max).toBe(18)
    expect(stats.mean).toBe(14)
    expect(stats.median).toBe(14)
    expect(stats.stdDev).toBeCloseTo(2.828, 3)
    expect(stats.coefficientOfVariation).toBeCloseTo(0.202, 3)
  })

  test('an identical sample has no noise', () => {
    const stats = summarise([7, 7, 7, 7])
    expect(stats.stdDev).toBe(0)
    expect(stats.coefficientOfVariation).toBe(0)
  })

  test('does not depend on the order it is given', () => {
    expect(summarise([5, 1, 4, 2, 3])).toEqual(summarise([1, 2, 3, 4, 5]))
  })

  test('refuses an empty sample rather than inventing one', () => {
    expect(() => summarise([])).toThrow(/empty sample/)
  })
})

describe('compare', () => {
  // two runs that were each perfectly repeatable, so any difference is real
  const quiet = (values: number[]): ReturnType<typeof summarise> => summarise(values)

  test('a large drop against no noise is a real improvement', () => {
    const result = compare(quiet([100, 100, 100]), quiet([80, 80, 80]))
    expect(result.deltaPercent).toBeCloseTo(-20, 6)
    expect(result.significant).toBe(true)
  })

  test('a large rise against no noise is a real regression', () => {
    const result = compare(quiet([100, 100, 100]), quiet([130, 130, 130]))
    expect(result.deltaPercent).toBeCloseTo(30, 6)
    expect(result.significant).toBe(true)
  })

  test('a change smaller than the noise both runs showed is not called real', () => {
    // each run varies by roughly 20%, so a 2% difference between them is nothing
    const before = quiet([80, 100, 120])
    const after = quiet([82, 102, 122])
    const result = compare(before, after)
    expect(Math.abs(result.deltaPercent)).toBeLessThan(result.noiseThresholdPercent)
    expect(result.significant).toBe(false)
  })

  test('identical runs show no change', () => {
    const result = compare(quiet([50, 50]), quiet([50, 50]))
    expect(result.deltaPercent).toBe(0)
    expect(result.significant).toBe(false)
  })
})
