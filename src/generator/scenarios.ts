import { IGeneratorOptions } from './realistic-generator'
import { AssetClass } from './instrument-universe'

/**
 * Named shapes of traffic, so that asking for something realistic does not mean
 * knowing which tags to force on.
 *
 * A scenario is only a bundle of generator options - it has no logic of its own, and
 * anything it does can be done on the command line instead.  Its value is that the
 * combination which produces a *convincing* message is not obvious: a multileg trade
 * capture needs legs, sides and parties present together, and a bond one needs the
 * fixed income half of `Instrument` that the applicability gate would otherwise
 * suppress.
 *
 * Fields are forced by **tag**, not by name, because the name is not portable.  The
 * repository rendering calls the leg group `TrdInstrmtLegGrp` and QuickFIX calls it
 * `NoLegs`; both agree it is 555.  A scenario therefore runs against any dictionary
 * that carries the message at all.
 */

export interface IScenario {
  readonly name: string
  readonly description: string
  /** as it appears on the wire in tag 35 */
  readonly msgType: string
  readonly options: IGeneratorOptions
}

const NoLegs = '555'
const NoSides = '552'
const NoPartyIDs = '453'
const NoUnderlyings = '711'
const NoMDEntries = '268'
const NoAllocs = '78'
const NoRelatedSym = '146'

const scenarios: readonly IScenario[] = [
  {
    name: 'spread-trade-capture',
    description: 'ICE Brent calendar spread, parent plus two legs, both sides with parties',
    msgType: 'AE',
    options: {
      instrument: 'BRN JAN26-FEB26',
      include: [NoLegs, NoSides, NoPartyIDs],
      density: 0.5,
      maxGroupInstances: 2
    }
  },
  {
    name: 'crack-spread-capture',
    description: 'ICE Brent/Gasoil crack spread trade capture with legs and underlyings',
    msgType: 'AE',
    options: {
      instrument: 'BRN-GAS CRACK',
      include: [NoLegs, NoSides, NoPartyIDs, NoUnderlyings],
      density: 0.5,
      maxGroupInstances: 2
    }
  },
  {
    name: 'equity-fill',
    description: 'partial fill on a listed equity order, with the executing parties',
    msgType: '8',
    options: {
      instrument: 'AAPL',
      assetClass: AssetClass.Equity,
      include: [NoPartyIDs],
      density: 0.5
    }
  },
  {
    name: 'equity-order',
    description: 'plain new order single into a lit venue',
    msgType: 'D',
    options: {
      instrument: 'VOD.L',
      assetClass: AssetClass.Equity,
      density: 0.4
    }
  },
  {
    name: 'future-order',
    description: 'new order single on a listed future, give-up parties attached',
    msgType: 'D',
    options: {
      instrument: 'BRN',
      assetClass: AssetClass.Future,
      include: [NoPartyIDs],
      density: 0.45
    }
  },
  {
    name: 'bond-trade-capture',
    description: 'treasury trade capture - the one case where the fixed income half of Instrument belongs',
    msgType: 'AE',
    options: {
      instrument: 'US91282CLW12',
      assetClass: AssetClass.Bond,
      include: [NoSides, NoPartyIDs],
      density: 0.6
    }
  },
  {
    name: 'option-order',
    description: 'listed option order carrying strike and expiry',
    msgType: 'D',
    options: {
      instrument: 'ESZ5 C6000',
      assetClass: AssetClass.Option,
      density: 0.45
    }
  },
  {
    name: 'md-incremental',
    description: 'incremental market data refresh, several entries against one book',
    msgType: 'X',
    options: {
      instrument: 'ESZ5',
      assetClass: AssetClass.Future,
      include: [NoMDEntries],
      density: 0.35,
      maxGroupInstances: 4
    }
  },
  {
    name: 'md-request',
    description: 'market data request over a small watch list',
    msgType: 'V',
    options: {
      assetClass: AssetClass.Equity,
      include: [NoRelatedSym],
      density: 0.6,
      maxGroupInstances: 3
    }
  },
  {
    name: 'block-allocation',
    description: 'allocation instruction breaking a block across accounts',
    msgType: 'J',
    options: {
      instrument: 'AAPL',
      assetClass: AssetClass.Equity,
      include: [NoAllocs, NoPartyIDs],
      density: 0.45,
      maxGroupInstances: 3
    }
  }
]

export const Scenarios = {
  all: scenarios,

  get (name: string): IScenario | undefined {
    return scenarios.find(s => s.name === name)
  },

  names (): string[] {
    return scenarios.map(s => s.name)
  },

  describe (): string {
    const width = Math.max(...scenarios.map(s => s.name.length))
    return scenarios
      .map(s => `  ${s.name.padEnd(width)}  ${s.msgType.padEnd(2)}  ${s.description}`)
      .join('\n')
  }
}
