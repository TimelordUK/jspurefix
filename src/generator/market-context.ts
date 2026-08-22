import { Rng } from './rng'
import { AssetClass, IInstrumentSpec, ILegSpec, InstrumentUniverse } from './instrument-universe'

/**
 * Everything one generated message agrees about.
 *
 * The old generator drew each field independently, which is why its output never added
 * up - an OrderQty of -483.04 filled at a price of 97319 on a security called `Nunc`.
 * A message is a statement about a single trade, so the trade is decided once, up front,
 * and every field is then read off it.
 *
 * The walker moves this context as it descends: entering a leg group instance sets
 * `leg`, so `LegPrice` is drawn from that leg rather than from the parent.
 */

export interface IParty {
  readonly id: string
  readonly idSource: string
  readonly role: number
  readonly desc: string
}

export interface IMarketContextOptions {
  readonly rng: Rng
  readonly instrument?: IInstrumentSpec
  readonly assetClass?: AssetClass
  /** anchor for every date in the message; defaults to today */
  readonly asOf?: Date
  readonly senderCompId?: string
  readonly targetCompId?: string
}

const firms: readonly IParty[] = [
  { id: 'MGSTGB2L', idSource: 'C', role: 1, desc: 'executing firm' },
  { id: 'CHASGB2L', idSource: 'C', role: 4, desc: 'clearing firm' },
  { id: 'BARCGB22', idSource: 'C', role: 17, desc: 'contra firm' },
  { id: 'ABNANL2A', idSource: 'C', role: 13, desc: 'order origination firm' }
]

const traders: readonly IParty[] = [
  { id: 'jhalliday', idSource: 'D', role: 12, desc: 'executing trader' },
  { id: 'rmcdowall', idSource: 'D', role: 11, desc: 'order origination trader' },
  { id: 'kbannerjee', idSource: 'D', role: 12, desc: 'executing trader' }
]

const accounts: readonly string[] = [
  'ACCT-00417', 'ACCT-01925', 'OMNI-4471', 'SEGR-2210'
]

const desks: readonly string[] = ['ENERGY', 'MACRO', 'CASH-EQ', 'FICC']

const freeText: readonly string[] = [
  'give up to clearer',
  'client instruction on file',
  'worked over the close',
  'cross with house book',
  'blocked - settle T+2'
]

export class MarketContext {
  public readonly rng: Rng
  public readonly instrument: IInstrumentSpec
  public readonly asOf: Date

  /** the trade this message describes */
  public readonly side: string
  public readonly orderQty: number
  public readonly price: number
  public readonly lastPx: number
  public readonly lastQty: number
  public readonly cumQty: number
  public readonly leavesQty: number
  public readonly avgPx: number

  public readonly tradeDate: Date
  public readonly transactTime: Date
  public readonly settlDate: Date

  public readonly clOrdId: string
  public readonly origClOrdId: string
  public readonly orderId: string
  public readonly execId: string
  public readonly tradeId: string
  public readonly account: string
  public readonly desk: string
  public readonly senderCompId: string
  public readonly targetCompId: string

  public readonly firms: readonly IParty[]
  public readonly traders: readonly IParty[]

  /** set while the walker is inside a leg, cleared on the way out */
  public leg: ILegSpec | null = null
  /** set while the walker is inside an underlying */
  public underlying: IInstrumentSpec | null = null

  private sequence: number = 0

  constructor (options: IMarketContextOptions) {
    const rng = this.rng = options.rng
    this.instrument = options.instrument ?? InstrumentUniverse.choose(rng, options.assetClass)
    const inst = this.instrument
    this.asOf = options.asOf ?? new Date()

    this.side = rng.bool(0.5) ? '1' : '2'
    const lots = rng.int(1, 40)
    this.orderQty = lots * inst.lotSize
    this.price = rng.around(inst.refPx, 0.004, inst.tick)
    this.lastPx = rng.around(this.price, 0.002, inst.tick)
    // a partial fill more often than not, which is what a real execution stream looks like
    const filledLots = rng.bool(0.35) ? lots : rng.int(1, Math.max(1, lots - 1))
    this.cumQty = filledLots * inst.lotSize
    this.leavesQty = this.orderQty - this.cumQty
    this.lastQty = this.cumQty
    this.avgPx = this.lastPx

    this.tradeDate = MarketContext.midnightUtc(this.asOf)
    this.transactTime = new Date(this.asOf.getTime() - rng.int(0, 90) * 1000)
    this.settlDate = MarketContext.addBusinessDays(this.tradeDate, inst.assetClass === AssetClass.Fx ? 2 : 2)

    const stamp = MarketContext.yyyymmdd(this.tradeDate)
    this.clOrdId = `CLORD-${stamp}-${rng.int(10000, 99999)}`
    this.origClOrdId = `CLORD-${stamp}-${rng.int(10000, 99999)}`
    this.orderId = `ORD-${rng.int(1000000, 9999999)}`
    this.execId = `EXE-${rng.int(1000000, 9999999)}`
    this.tradeId = `TRD-${stamp}-${rng.int(1000, 9999)}`
    this.account = rng.pick(accounts)
    this.desk = rng.pick(desks)
    this.senderCompId = options.senderCompId ?? 'init-comp'
    this.targetCompId = options.targetCompId ?? 'accept-comp'

    this.firms = rng.shuffled(firms)
    this.traders = rng.shuffled(traders)
  }

  /**
   * the instrument whose fields should be read right now - a leg is described by its own
   * contract, an underlying by the underlying, and anything else by the parent
   */
  public current (): { symbol: string, securityId: string, securityIdSource: string, securityType: string, refPx: number, maturityMonthYear?: string } {
    const leg = this.leg
    if (leg) return leg
    const under = this.underlying
    if (under) return under
    return this.instrument
  }

  public nextSeq (): number {
    return ++this.sequence
  }

  public text (): string {
    return this.rng.pick(freeText)
  }

  public party (index: number): IParty {
    const all = [...this.firms, ...this.traders]
    return all[index % all.length]
  }

  /**
   * a quantity that fits the contract - always a whole number of lots, so a message
   * never claims a fraction of a future
   */
  public quantity (max?: number): number {
    const lot = this.instrument.lotSize
    const cap = max != null ? Math.max(1, Math.floor(max / lot)) : 40
    return this.rng.int(1, cap) * lot
  }

  /**
   * what the trade is worth - quantity by price, and by the contract multiplier where
   * there is one, so a Brent fill does not report a notional of six dollars
   */
  public grossAmount (): number {
    const multiplier = this.instrument.contractMultiplier ?? 1
    return Number((this.lastQty * this.lastPx * multiplier).toFixed(2))
  }

  public priceNear (centre?: number): number {
    const inst = this.instrument
    const leg = this.leg
    const base = centre ?? (leg ? leg.refPx : inst.refPx)
    return this.rng.around(base, 0.006, leg ? 0.01 : inst.tick)
  }

  public static midnightUtc (d: Date): Date {
    return new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate(), 0, 0, 0, 0))
  }

  public static addBusinessDays (from: Date, days: number): Date {
    const d = new Date(from.getTime())
    let left = days
    while (left > 0) {
      d.setUTCDate(d.getUTCDate() + 1)
      const day = d.getUTCDay()
      if (day !== 0 && day !== 6) left--
    }
    return d
  }

  public static yyyymmdd (d: Date): string {
    const m = d.getUTCMonth() + 1
    const day = d.getUTCDate()
    return `${d.getUTCFullYear()}${m < 10 ? '0' : ''}${m}${day < 10 ? '0' : ''}${day}`
  }
}
