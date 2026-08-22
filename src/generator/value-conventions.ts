import { SimpleFieldDefinition } from '../dictionary/definition'
import { TagType } from '../buffer/tag/tag-type'
import { MarketContext } from './market-context'

/**
 * How a tag gets a value that looks like the thing it names.
 *
 * Three layers, tried in order, and the ordering is the design:
 *
 *  1. a table of tags whose meaning the generator actually knows, read off the
 *     `MarketContext` so they agree with each other;
 *  2. conventions over the field *name* - anything ending `Px`, `Qty`, `Currency`,
 *     `Date` and so on - which is what lets an unfamiliar message type, or a broker
 *     dialect nobody here has seen, still come out readable;
 *  3. the type, as a last resort, but with ranges a trader would not blink at rather
 *     than a signed float with seven decimal places.
 *
 * Layer 2 is doing most of the work.  FIX field naming is remarkably disciplined -
 * `LegLastPx`, `UnderlyingSettlPrice`, `AllocSettlCurrency` - so a suffix is very nearly
 * a type declaration, and treating it as one covers thousands of fields for the cost of
 * a dozen rules.
 *
 * Which *instrument* a value is read from is not decided here.  The walker moves
 * `MarketContext.leg` and `.underlying` as it descends, so `LegPrice` inside the second
 * leg resolves against that leg without this layer knowing where it is.
 */

export interface IFieldContext {
  /** set names from the message down to the field, e.g. ['TrdCapRptSideGrp', 'Parties'] */
  readonly path: readonly string[]
  /** index within the nearest enclosing group instance, 0 when not in a group */
  readonly instance: number
}

const mics: readonly string[] = ['XLON', 'XNAS', 'XNYS', 'XETR', 'IFEU', 'XCME', 'XOFF']
const currencies: readonly string[] = ['USD', 'EUR', 'GBP', 'JPY', 'CHF']
const sessions: readonly string[] = ['DAY', 'REG', 'ELECTRONIC', 'AFTERHOURS']
const ratings: readonly string[] = ['AAA', 'AA+', 'A', 'BBB+', 'BB-']
const countries: readonly string[] = ['US', 'GB', 'DE', 'NL', 'JP']
/** a field named for a classification but with no enumeration behind it in this
 *  dictionary - still a small ordinal, not a five digit number */
const ordinalName = /(Type|Status|Reason|Indicator|Action|Capacity|Method|Mode|Level)$/

type Handler = (m: MarketContext, ctx: IFieldContext, sf: SimpleFieldDefinition) => any

/**
 * Tags the generator understands well enough to keep consistent with the rest of the
 * message.  Everything absent from here still gets a plausible value from the name
 * conventions below - it just is not tied to the trade.
 */
const byTag: Map<number, Handler> = new Map<number, Handler>([
  [1, m => m.account],
  [6, m => m.avgPx],
  [11, (m, ctx) => (ctx.instance > 0 ? `${m.clOrdId}-${ctx.instance}` : m.clOrdId)],
  [14, m => m.cumQty],
  [15, m => m.instrument.currency],
  [17, m => `${m.execId}-${m.nextSeq()}`],
  [22, m => m.current().securityIdSource],
  [30, m => m.instrument.securityExchange],
  [31, m => m.lastPx],
  [32, m => m.lastQty],
  [37, (m, ctx) => (ctx.instance > 0 ? `${m.orderId}-${ctx.instance}` : m.orderId)],
  [38, m => m.orderQty],
  [41, m => m.origClOrdId],
  [44, m => m.price],
  [48, m => m.current().securityId],
  [54, (m, ctx) => (ctx.instance % 2 === 0 ? m.side : (m.side === '1' ? '2' : '1'))],
  [55, m => m.current().symbol],
  [58, m => m.text()],
  [60, m => m.transactTime],
  [64, m => m.settlDate],
  [75, m => m.tradeDate],
  [76, m => m.firms[0].id],
  [100, m => m.instrument.securityExchange],
  [107, m => m.instrument.name],
  [110, m => m.instrument.lotSize],
  [151, m => m.leavesQty],
  [167, m => m.current().securityType],
  [200, m => m.current().maturityMonthYear ?? m.instrument.maturityMonthYear],
  [201, m => m.instrument.putOrCall],
  [202, m => m.instrument.strikePrice],
  [207, m => m.instrument.securityExchange],
  [231, m => m.instrument.contractMultiplier],
  [336, m => m.rng.pick(sessions)],
  [375, m => m.firms[2].id],
  [381, m => m.grossAmount()],
  [447, (m, ctx) => m.party(ctx.instance).idSource],
  [448, (m, ctx) => m.party(ctx.instance).id],
  [452, (m, ctx) => m.party(ctx.instance).role],
  [460, m => m.instrument.product],
  [461, m => m.instrument.cfiCode],
  [541, m => m.instrument.maturityDate],
  [571, m => m.tradeId],
  [255, m => m.rng.pick(ratings)],
  [470, m => m.rng.pick(countries)],
  [472, m => m.rng.pick(countries)],
  [65, () => undefined],
  [572, m => `${m.tradeId}-REF`],

  // legs - resolved through current(), which the walker has already pointed at the leg
  [600, m => m.current().symbol],
  [602, m => m.current().securityId],
  [603, m => m.current().securityIdSource],
  [609, m => m.current().securityType],
  [610, m => m.current().maturityMonthYear],
  [623, m => m.leg?.ratio ?? 1],
  [624, m => m.leg?.side ?? m.side],
  [566, m => m.priceNear()],
  [637, m => m.priceNear()],
  [687, m => m.lastQty * (m.leg?.ratio ?? 1)],

  // underlyings
  [311, m => m.underlying?.symbol ?? m.instrument.symbol],
  [309, m => m.underlying?.securityId ?? m.instrument.securityId],
  [305, m => m.underlying?.securityIdSource ?? m.instrument.securityIdSource],

  // allocation
  [79, m => m.account],
  [80, m => m.lastQty],

  // market data
  [270, m => m.priceNear()],
  [271, m => m.quantity()],
  [272, m => m.tradeDate],
  [273, m => m.transactTime],
  [346, m => m.rng.int(1, 25)]
])

interface INameRule {
  readonly test: RegExp
  readonly apply: Handler
}

/**
 * Suffix first, then a few prefixes.  Order matters - `PriceType` must not be caught by
 * the `Price` rule, so the more specific patterns are listed above the general ones.
 */
const nameRules: readonly INameRule[] = [
  { test: /(Type|Source|Status|Reason|Indicator|Capacity|Restrictions)$/, apply: () => undefined },

  { test: /(Px|Price)$/, apply: m => m.priceNear() },
  { test: /(Qty|Quantity|Shares|Size|Volume)$/, apply: m => m.quantity() },
  { test: /(Currency|Ccy)$/, apply: m => m.rng.pick(currencies) },
  { test: /Symbol$/, apply: m => m.current().symbol },
  { test: /(Exchange|Mkt|Market)$/, apply: m => m.rng.pick(mics) },
  { test: /SecurityID$/, apply: m => m.current().securityId },
  { test: /(MonthYear)$/, apply: m => m.current().maturityMonthYear ?? m.instrument.maturityMonthYear },
  { test: /(Amt|Amount|Notional|Consideration)$/, apply: m => m.grossAmount() },
  { test: /(Rate|Yield|Coupon)$/, apply: m => Number((m.rng.int(1, 800) / 10000).toFixed(5)) },
  { test: /(Percent|Pct|Ratio)$/, apply: m => Number((m.rng.int(0, 10000) / 100).toFixed(2)) },
  { test: /Account$/, apply: m => m.account },
  { test: /(Desk|Division)$/, apply: m => m.desk },
  { test: /(Text|Desc|Description|Comment|Instructions)$/, apply: m => m.text() },
  { test: /(Timestamp|Time)$/, apply: m => m.transactTime },
  { test: /Date$/, apply: m => m.tradeDate },
  { test: /(Broker|Firm)$/, apply: (m, ctx) => m.party(ctx.instance).id },
  { test: /(Trader|User|Operator)$/, apply: m => m.traders[0].id }
]

function initials (name: string): string {
  const caps = name.replace(/[^A-Z]/g, '')
  if (caps.length >= 2) return caps.substring(0, 4)
  return name.substring(0, 3).toUpperCase()
}

export class ValueConventions {
  constructor (public readonly market: MarketContext) {
  }

  /**
   * whether this tag is one the generator understands rather than merely guesses at.
   * The field walker reads it as a proxy for "would a real message of this type carry
   * this field", which is a crude signal but a better one than the tag number alone.
   */
  public static knows (tag: number): boolean {
    return byTag.has(tag)
  }

  /**
   * a value for this field, or undefined if the caller should leave the tag out
   */
  public value (sf: SimpleFieldDefinition, ctx: IFieldContext): any {
    const exact = byTag.get(sf.tag)
    if (exact) {
      const v = exact(this.market, ctx, sf)
      if (v != null) return this.conform(sf, v)
      // a handler declining - e.g. StrikePrice on a future - is a reason to omit, not
      // a reason to fall through and invent one
      return undefined
    }
    if (sf.isEnum()) {
      return this.enumValue(sf)
    }
    for (const rule of nameRules) {
      if (!rule.test.test(sf.name)) continue
      const v = rule.apply(this.market, ctx, sf)
      if (v == null) break
      return this.conform(sf, v)
    }
    return this.byType(sf, ctx)
  }

  /**
   * Dictionaries list enumerated values roughly in order of how ordinary they are, so a
   * front biased pick lands on Side 1 or 2 far more often than on the twenty exotics
   * below them.  Not true universally, but true often enough to be worth more than a
   * uniform draw, and it stays deterministic.
   */
  private enumValue (sf: SimpleFieldDefinition): any {
    const keys = Array.from(sf.enums.keys())
    if (keys.length === 0) return undefined
    const choice = keys[this.market.rng.frontBiased(keys.length)]
    switch (sf.tagType) {
      case TagType.Int: return parseInt(choice, 10)
      case TagType.Float: return parseFloat(choice)
      case TagType.Boolean: return choice === 'Y'
      default: return choice
    }
  }

  /**
   * a value supplied by tag or by name may not be of the type the dictionary declares -
   * `SecurityIDSource` is a String in one dictionary and an Int in another - so coerce
   * rather than emit something the encoder will mangle
   */
  private conform (sf: SimpleFieldDefinition, v: any): any {
    switch (sf.tagType) {
      case TagType.RawData: {
        // a name rule may well have produced a perfectly good string for EncodedText,
        // but the encoder writes the preceding Length only when handed a Buffer, and a
        // raw field arriving without its length is unparseable
        if (Buffer.isBuffer(v)) return v
        return Buffer.from(String(v))
      }
      case TagType.Int:
      case TagType.Length: {
        if (typeof v === 'number') return Math.round(v)
        const n = parseInt(String(v), 10)
        return isNaN(n) ? undefined : n
      }
      case TagType.Float: {
        if (typeof v === 'number') return v
        const f = parseFloat(String(v))
        return isNaN(f) ? undefined : f
      }
      case TagType.Boolean: {
        if (typeof v === 'boolean') return v
        return String(v) === 'Y' || String(v) === 'true'
      }
      case TagType.String: {
        if (v instanceof Date) return MarketContext.yyyymmdd(v)
        return String(v)
      }
      default:
        return v
    }
  }

  private byType (sf: SimpleFieldDefinition, ctx: IFieldContext): any {
    const m = this.market
    const rng = m.rng
    switch (sf.tagType) {
      case TagType.String:
        if (ordinalName.test(sf.name)) return String(rng.int(0, 4))
        // identifier shaped, and carrying the field it came from, so a message can be
        // read back to the dictionary by eye
        return `${initials(sf.name)}-${rng.int(1000, 99999)}`
      case TagType.Int:
        return ordinalName.test(sf.name) ? rng.int(0, 4) : rng.int(1, 500)
      case TagType.Float:
        return Number((rng.int(1, 100000) / 100).toFixed(2))
      case TagType.Length:
        // written by the encoder from the RawData it precedes
        return undefined
      case TagType.Boolean:
        return rng.bool(0.5)
      case TagType.UtcTimestamp:
        return m.transactTime
      case TagType.UtcTimeOnly: {
        const t = m.transactTime
        return new Date(Date.UTC(0, 0, 0, t.getUTCHours(), t.getUTCMinutes(), t.getUTCSeconds(), 0))
      }
      case TagType.UtcDateOnly:
        return m.tradeDate
      case TagType.LocalDate: {
        const d = m.tradeDate
        return new Date(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate(), 0, 0, 0, 0)
      }
      case TagType.RawData:
        return Buffer.from(`${initials(sf.name)}:${m.tradeId}:${ctx.instance}`)
      default:
        return undefined
    }
  }
}
