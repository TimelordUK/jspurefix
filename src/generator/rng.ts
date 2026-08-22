/**
 * A small deterministic generator, so a corpus written today reproduces byte for byte
 * tomorrow.  `Math.random` is fine for a benchmark that only wants volume; it is no use
 * at all for a fixture someone has to debug, where "run it again and get the same
 * message" is the whole point.
 *
 * mulberry32 - 32 bits of state, uniform enough for choosing fields and prices, and
 * short enough to port to cspurefix unchanged.
 */
export class Rng {
  private state: number

  constructor (seed: number = 0x5eed) {
    // 0 is a fixed point of the mixer, so fold it away rather than silently degenerate
    this.state = (seed >>> 0) || 0x9e3779b9
  }

  /**
   * uniform in [0, 1)
   */
  public next (): number {
    this.state = (this.state + 0x6d2b79f5) >>> 0
    let t = this.state
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }

  /**
   * uniform integer in [min, max] inclusive
   */
  public int (min: number, max: number): number {
    if (max < min) return min
    return min + Math.floor(this.next() * (max - min + 1))
  }

  public bool (probability: number = 0.5): boolean {
    return this.next() < probability
  }

  public pick<T> (from: readonly T[]): T {
    return from[this.int(0, from.length - 1)]
  }

  /**
   * an index into `count` items, biased toward the front.  `bias` of 1 is uniform;
   * higher values pull harder toward 0.
   *
   * used for enumerated fields, where the dictionary lists values roughly in order of
   * how ordinary they are - Side 1 and 2 before the twenty exotic ones - so a uniform
   * pick produces a message no counterparty would ever send.
   */
  public frontBiased (count: number, bias: number = 3): number {
    if (count <= 1) return 0
    return Math.min(count - 1, Math.floor(Math.pow(this.next(), bias) * count))
  }

  /**
   * a value near `centre`, within +/- `spreadPct`, snapped to `tick`
   */
  public around (centre: number, spreadPct: number, tick: number): number {
    const move = centre * spreadPct * (this.next() * 2 - 1)
    const raw = centre + move
    const snapped = Math.round(raw / tick) * tick
    // ticks are decimal fractions, so re-round to kill the binary residue
    const dp = Rng.decimals(tick)
    return Number(snapped.toFixed(dp))
  }

  private static decimals (tick: number): number {
    const s = tick.toString()
    const dot = s.indexOf('.')
    if (dot < 0) return 0
    const exp = s.indexOf('e')
    if (exp > 0) return Math.min(10, parseInt(s.substring(exp + 2), 10))
    return Math.min(10, s.length - dot - 1)
  }

  /**
   * shuffle a copy, Fisher-Yates from the seeded stream
   */
  public shuffled<T> (from: readonly T[]): T[] {
    const a = from.slice()
    for (let i = a.length - 1; i > 0; --i) {
      const j = this.int(0, i)
      const t = a[i]
      a[i] = a[j]
      a[j] = t
    }
    return a
  }
}
