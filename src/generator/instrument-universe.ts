import { Rng } from './rng'

/**
 * A small book of instruments that read like instruments.
 *
 * The point is not coverage - it is that a generated message can be scanned by eye and
 * recognised.  `55=BRN` with `541=20251231` and `44=71.35` is a Brent future at a
 * plausible price; `55=Lorem` with `44=-4534.7` is noise that happens to encode.
 *
 * Prices carry a tick and a lot size so quantities and prices agree with the contract
 * they claim to be, and a spread carries its legs so a multileg message can be built
 * with parent and legs that actually correspond.
 */

export enum AssetClass {
  Equity = 'equity',
  Future = 'future',
  Option = 'option',
  Spread = 'spread',
  Fx = 'fx',
  Bond = 'bond'
}

export interface ILegSpec {
  readonly symbol: string
  readonly securityId: string
  readonly securityIdSource: string
  readonly securityType: string
  readonly maturityMonthYear?: string
  readonly side: string
  readonly ratio: number
  readonly refPx: number
}

export interface IInstrumentSpec {
  readonly name: string
  readonly assetClass: AssetClass
  readonly symbol: string
  readonly securityId: string
  /** 1 CUSIP, 2 SEDOL, 4 ISIN, 8 exchange symbol, 9 CTA */
  readonly securityIdSource: string
  readonly securityExchange: string
  readonly securityType: string
  readonly cfiCode: string
  readonly currency: string
  readonly refPx: number
  readonly tick: number
  readonly lotSize: number
  readonly contractMultiplier?: number
  readonly maturityMonthYear?: string
  readonly maturityDate?: string
  readonly strikePrice?: number
  readonly putOrCall?: number
  readonly product?: number
  readonly legs?: readonly ILegSpec[]
}

const equities: readonly IInstrumentSpec[] = [
  {
    name: 'Apple Inc',
    assetClass: AssetClass.Equity,
    symbol: 'AAPL',
    securityId: 'US0378331005',
    securityIdSource: '4',
    securityExchange: 'XNAS',
    securityType: 'CS',
    cfiCode: 'ESVUFR',
    currency: 'USD',
    refPx: 214.5,
    tick: 0.01,
    lotSize: 100,
    product: 5
  },
  {
    name: 'Vodafone Group',
    assetClass: AssetClass.Equity,
    symbol: 'VOD.L',
    securityId: 'GB00BH4HKS39',
    securityIdSource: '4',
    securityExchange: 'XLON',
    securityType: 'CS',
    cfiCode: 'ESVUFR',
    currency: 'GBP',
    refPx: 0.762,
    tick: 0.0001,
    lotSize: 1000,
    product: 5
  },
  {
    name: 'SAP SE',
    assetClass: AssetClass.Equity,
    symbol: 'SAP',
    securityId: 'DE0007164600',
    securityIdSource: '4',
    securityExchange: 'XETR',
    securityType: 'CS',
    cfiCode: 'ESVUFR',
    currency: 'EUR',
    refPx: 196.3,
    tick: 0.01,
    lotSize: 100,
    product: 5
  }
]

const futures: readonly IInstrumentSpec[] = [
  {
    name: 'ICE Brent Crude Jan26',
    assetClass: AssetClass.Future,
    symbol: 'BRN',
    securityId: 'BRN FMF0026!',
    securityIdSource: '8',
    securityExchange: 'IFEU',
    securityType: 'FUT',
    cfiCode: 'FCEPSX',
    currency: 'USD',
    refPx: 71.35,
    tick: 0.01,
    lotSize: 1,
    contractMultiplier: 1000,
    maturityMonthYear: '202601',
    maturityDate: '20251130',
    product: 2
  },
  {
    name: 'ICE Low Sulphur Gasoil Feb26',
    assetClass: AssetClass.Future,
    symbol: 'GAS',
    securityId: 'GAS FMG0026!',
    securityIdSource: '8',
    securityExchange: 'IFEU',
    securityType: 'FUT',
    cfiCode: 'FCEPSX',
    currency: 'USD',
    refPx: 668.25,
    tick: 0.25,
    lotSize: 1,
    contractMultiplier: 100,
    maturityMonthYear: '202602',
    maturityDate: '20260112',
    product: 2
  },
  {
    name: 'CME E-mini S and P 500 Dec25',
    assetClass: AssetClass.Future,
    symbol: 'ES',
    securityId: 'ESZ5',
    securityIdSource: '8',
    securityExchange: 'XCME',
    securityType: 'FUT',
    cfiCode: 'FFICSX',
    currency: 'USD',
    refPx: 6042.25,
    tick: 0.25,
    lotSize: 1,
    contractMultiplier: 50,
    maturityMonthYear: '202512',
    maturityDate: '20251219',
    product: 5
  }
]

const options: readonly IInstrumentSpec[] = [
  {
    name: 'CME E-mini Dec25 6000 Call',
    assetClass: AssetClass.Option,
    symbol: 'ES',
    securityId: 'ESZ5 C6000',
    securityIdSource: '8',
    securityExchange: 'XCME',
    securityType: 'OPT',
    cfiCode: 'OCEFCS',
    currency: 'USD',
    refPx: 118.75,
    tick: 0.25,
    lotSize: 1,
    contractMultiplier: 50,
    maturityMonthYear: '202512',
    maturityDate: '20251219',
    strikePrice: 6000,
    putOrCall: 1,
    product: 5
  }
]

const fx: readonly IInstrumentSpec[] = [
  {
    name: 'EUR/USD spot',
    assetClass: AssetClass.Fx,
    symbol: 'EUR/USD',
    securityId: 'EURUSD',
    securityIdSource: '8',
    securityExchange: 'XOFF',
    securityType: 'FXSPOT',
    cfiCode: 'MRCXXX',
    currency: 'EUR',
    refPx: 1.0842,
    tick: 0.00005,
    lotSize: 1000000,
    product: 4
  }
]

const bonds: readonly IInstrumentSpec[] = [
  {
    name: 'US Treasury 4.25 Nov 2034',
    assetClass: AssetClass.Bond,
    symbol: 'T 4.25 11/34',
    securityId: 'US91282CLW12',
    securityIdSource: '4',
    securityExchange: 'XOFF',
    securityType: 'TBOND',
    cfiCode: 'DBFUFR',
    currency: 'USD',
    refPx: 99.421875,
    tick: 0.015625,
    lotSize: 1000,
    maturityDate: '20341115',
    product: 6
  }
]

/**
 * The shape the whole scattered component exercise is really about.  ICE publishes
 * calendar and crack spreads as single tradeable instruments whose fills report a parent
 * and one leg per contract, and a trade capture for one of these is where deep nesting
 * shows up in real life.
 */
const spreads: readonly IInstrumentSpec[] = [
  {
    name: 'ICE Brent Jan26/Feb26 calendar spread',
    assetClass: AssetClass.Spread,
    symbol: 'BRN',
    securityId: 'BRN JAN26-FEB26',
    securityIdSource: '8',
    securityExchange: 'IFEU',
    securityType: 'MLEG',
    cfiCode: 'FMEPSX',
    currency: 'USD',
    refPx: 0.34,
    tick: 0.01,
    lotSize: 1,
    contractMultiplier: 1000,
    maturityMonthYear: '202601',
    product: 2,
    legs: [
      {
        symbol: 'BRN',
        securityId: 'BRN FMF0026!',
        securityIdSource: '8',
        securityType: 'FUT',
        maturityMonthYear: '202601',
        side: '1',
        ratio: 1,
        refPx: 71.35
      },
      {
        symbol: 'BRN',
        securityId: 'BRN FMG0026!',
        securityIdSource: '8',
        securityType: 'FUT',
        maturityMonthYear: '202602',
        side: '2',
        ratio: 1,
        refPx: 71.01
      }
    ]
  },
  {
    name: 'ICE Brent/Gasoil crack spread',
    assetClass: AssetClass.Spread,
    symbol: 'BRNGAS',
    securityId: 'BRN-GAS CRACK',
    securityIdSource: '8',
    securityExchange: 'IFEU',
    securityType: 'MLEG',
    cfiCode: 'FMEPSX',
    currency: 'USD',
    refPx: 12.68,
    tick: 0.01,
    lotSize: 1,
    contractMultiplier: 1000,
    maturityMonthYear: '202602',
    product: 2,
    legs: [
      {
        symbol: 'GAS',
        securityId: 'GAS FMG0026!',
        securityIdSource: '8',
        securityType: 'FUT',
        maturityMonthYear: '202602',
        side: '1',
        ratio: 1,
        refPx: 668.25
      },
      {
        symbol: 'BRN',
        securityId: 'BRN FMG0026!',
        securityIdSource: '8',
        securityType: 'FUT',
        maturityMonthYear: '202602',
        side: '2',
        ratio: 1,
        refPx: 71.2
      }
    ]
  }
]

function byClass (assetClass: AssetClass): readonly IInstrumentSpec[] {
  switch (assetClass) {
    case AssetClass.Equity: return equities
    case AssetClass.Future: return futures
    case AssetClass.Option: return options
    case AssetClass.Fx: return fx
    case AssetClass.Bond: return bonds
    case AssetClass.Spread: return spreads
    default: return equities
  }
}

const all: readonly IInstrumentSpec[] = [
  ...equities, ...futures, ...options, ...fx, ...bonds, ...spreads
]

export const InstrumentUniverse = {
  equities,
  futures,
  options,
  fx,
  bonds,
  spreads,
  all,
  byClass,

  byName (name: string): IInstrumentSpec | undefined {
    const lower = name.toLowerCase()
    return all.find(i =>
      i.symbol.toLowerCase() === lower ||
      i.securityId.toLowerCase() === lower ||
      i.name.toLowerCase() === lower)
  },

  choose (rng: Rng, assetClass?: AssetClass): IInstrumentSpec {
    return rng.pick(assetClass ? byClass(assetClass) : all)
  }
}
