import { AssetClass } from './instrument-universe'

/**
 * Which optional fields belong on which kind of instrument.
 *
 * FIX puts every asset class through one `Instrument` component, so the dictionary is
 * perfectly happy for a Brent future to carry a repurchase rate, a credit rating and a
 * coupon payment date.  Nothing rejects it and nothing in the engine cares - but it is
 * the single loudest tell that a message was generated rather than captured, and it
 * makes a fixture harder to read than a dense one, because the eye keeps stopping on
 * fields that should not be there.
 *
 * The gate is written over field *names* rather than tags, and that is the whole trick.
 * FIX mirrors the instrument block for legs and underlyings by prefixing it -
 * `CouponRate`, `LegCouponRate`, `UnderlyingCouponRate` - so one pattern covers all
 * three, and covers the same field in a dictionary that renumbered it.  A tag list would
 * have to be recited three times and would still miss whatever the next version adds.
 *
 * The gate is advisory.  A field the dictionary marks required is emitted whatever this
 * says, and so is anything the caller has explicitly asked for - a house dialect is
 * entitled to put a coupon on a future, and refusing to generate that would be worse
 * than generating it by accident.
 */

const bond = [AssetClass.Bond]
const option = [AssetClass.Option]
const listed = [AssetClass.Future, AssetClass.Option, AssetClass.Spread]
const multileg = [AssetClass.Spread]

interface IRestriction {
  readonly test: RegExp
  readonly classes: readonly AssetClass[]
}

const fieldRestrictions: readonly IRestriction[] = [
  {
    // coupon, issuance, redemption, rating and registry - the fixed income half of the
    // instrument block, plus its repo and financing neighbours
    test: /Coupon|Repurchase|RepoCollateral|Redemption|CreditRating|Issuer|IssueDate|DatedDate|InterestAccrual|AccruedInterest|NumDaysInterest|Factor$|Pool$|InstrRegistry|CountryOfIssue|StateOrProvinceOfIssue|LocaleOfIssue|CPProgram|CPRegType|MarginRatio|TerminationType|DeliveryForm|(Start|End)Cash$/,
    classes: bond
  },
  {
    // yield, benchmark spread, stipulations and the new issue economics
    test: /Yield|BenchmarkCurve|BenchmarkPrice|BenchmarkSecurity|Stipulation|Concession|TotalTakedown/,
    classes: bond
  },
  {
    test: /StrikePrice$|StrikeCurrency$|StrikeMultiplier$|StrikeValue$|PutOrCall$|OptAttribute$|ExerciseStyle$/,
    classes: option
  },
  {
    // a listed contract has an expiry and a multiplier; cash equity and spot FX do not
    test: /MaturityMonthYear$|MaturityDate$|MaturityDay$|ContractMultiplier$|ContractSettlMonth$/,
    classes: listed
  }
]

const setRestrictions: readonly IRestriction[] = [
  { test: /^(YieldData|SpreadOrBenchmarkCurveData|FinancingDetails)$/, classes: bond },
  { test: /Stipulations|Stips/, classes: bond },
  // legs describe a strategy, so they belong to an instrument that has one
  { test: /Leg(s|Grp|$|[A-Z])|InstrmtLeg/, classes: multileg },
  { test: /Und(erlying|Instrmt)/, classes: [AssetClass.Spread, AssetClass.Option] }
]

function applies (restrictions: readonly IRestriction[], name: string, assetClass: AssetClass): boolean {
  for (const r of restrictions) {
    if (r.test.test(name)) {
      return r.classes.includes(assetClass)
    }
  }
  return true
}

/**
 * whether an optional field of this name is plausible on this kind of instrument
 */
export function fieldApplies (name: string, assetClass: AssetClass): boolean {
  return applies(fieldRestrictions, name, assetClass)
}

/**
 * whether an optional component or group of this name is plausible here
 */
export function setApplies (name: string, assetClass: AssetClass): boolean {
  return applies(setRestrictions, name, assetClass)
}
