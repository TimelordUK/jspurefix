import { PerformanceObserver, constants } from 'perf_hooks'
import { IGcTotals } from './bench-types'

interface IGcDetail {
  kind: number
  flags: number
}

/**
 * a gc performance entry. detail is not on the PerformanceEntry the node types
 * describe, it is only present on entries of this type
 */
interface IGcEntry {
  duration: number
  detail?: IGcDetail
}

const emptyTotals: IGcTotals = {
  minor: 0,
  major: 0,
  incremental: 0,
  weakCallback: 0,
  total: 0,
  totalPauseMs: 0,
  longestPauseMs: 0
}

/**
 * Counts collections and the pause they cost while a benchmark runs.
 *
 * Node does not expose how many bytes a stretch of code allocated, so the
 * number of scavenges is the practical stand in - the same work provoking
 * fewer minor collections is the same work producing less garbage, and that
 * is the number worth moving for a drop copy engine where the cost of
 * allocation is felt as pause rather than as throughput.
 */
export class GcProbe {
  private observer: PerformanceObserver | null = null
  private minor: number = 0
  private major: number = 0
  private incremental: number = 0
  private weakCallback: number = 0
  private totalPauseMs: number = 0
  private longestPauseMs: number = 0

  /** whether the process was started with --expose-gc */
  public static forcedGcAvailable (): boolean {
    return typeof global.gc === 'function'
  }

  /**
   * Collect until the heap settles, so a reading taken afterwards reflects what
   * is genuinely retained. Two passes because the first can promote survivors
   * into the old space that the second is then able to reclaim. A no-op without
   * --expose-gc, in which case retained figures are indicative only.
   */
  public static forceGc (): void {
    const gc = global.gc
    if (typeof gc !== 'function') return
    gc()
    gc()
  }

  /** entries recorded so far - lets a caller wait for delivery to go quiet */
  public seen (): number {
    return this.minor + this.major + this.incremental + this.weakCallback
  }

  public start (): void {
    this.reset()
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const gcEntry = entry as unknown as IGcEntry
        this.record(gcEntry.duration, gcEntry.detail?.kind ?? 0)
      }
    })
    // buffered so collections are not missed while the loop is busy - the
    // callback cannot run until the measured work yields
    observer.observe({ entryTypes: ['gc'], buffered: true })
    this.observer = observer
  }

  /**
   * Stop observing and return what was seen. Any entries still queued are
   * drained first - the observer callback is a macrotask and the benchmark
   * loop never yields, so without this every collection would be lost.
   */
  public stop (): IGcTotals {
    const observer = this.observer
    if (!observer) return emptyTotals
    for (const entry of observer.takeRecords()) {
      const gcEntry = entry as unknown as IGcEntry
      this.record(gcEntry.duration, gcEntry.detail?.kind ?? 0)
    }
    observer.disconnect()
    this.observer = null
    return this.totals()
  }

  private reset (): void {
    this.minor = 0
    this.major = 0
    this.incremental = 0
    this.weakCallback = 0
    this.totalPauseMs = 0
    this.longestPauseMs = 0
  }

  private record (durationMs: number, kind: number): void {
    this.totalPauseMs += durationMs
    this.longestPauseMs = Math.max(this.longestPauseMs, durationMs)
    switch (kind) {
      case constants.NODE_PERFORMANCE_GC_MINOR:
        ++this.minor
        break

      case constants.NODE_PERFORMANCE_GC_MAJOR:
        ++this.major
        break

      case constants.NODE_PERFORMANCE_GC_INCREMENTAL:
        ++this.incremental
        break

      case constants.NODE_PERFORMANCE_GC_WEAKCB:
        ++this.weakCallback
        break

      default:
        break
    }
  }

  private totals (): IGcTotals {
    return {
      minor: this.minor,
      major: this.major,
      incremental: this.incremental,
      weakCallback: this.weakCallback,
      total: this.minor + this.major + this.incremental + this.weakCallback,
      totalPauseMs: this.totalPauseMs,
      longestPauseMs: this.longestPauseMs
    }
  }
}
