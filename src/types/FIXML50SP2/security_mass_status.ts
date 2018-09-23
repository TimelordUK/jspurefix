import { IStandardHeader } from './set/standard_header'
import { IApplicationSequenceControl } from './set/application_sequence_control'
import { IInstrumentScope } from './set/instrument_scope'
import { ISecMassStatGrp } from './set/sec_mass_stat_grp'

/*
******************************************************
* SecurityMassStatus can be found in Volume 3 of the *
*                                                    *
* specification                                      *
******************************************************
*/
export interface ISecurityMassStatus {
  OrdStatusReqID?: string// 790
  SecurityListID?: string// 1465
  SideCollateralAmountMarketID?: string// 2692
  SideCollateralAmountMarketSegmentID?: string// 2693
  TradeDate?: Date// 75
  TradingSessionID?: string// 336
  TradingSessionSubID?: string// 625
  UnsolicitedIndicator?: string// 325
  MDSecurityTradingStatus?: number// 1682
  FastMarketIndicator?: string// 2447
  SecurityMassTradingEvent?: number// 1680
  MDHaltReason?: number// 1684
  MDBookType?: number// 1021
  MarketDepth?: number// 264
  RelSymTransactTime?: Date// 1504
  Adjustment?: number// 334
  StandardHeader?: IStandardHeader
  ApplicationSequenceControl?: IApplicationSequenceControl
  InstrumentScope?: IInstrumentScope
  SecMassStatGrp?: ISecMassStatGrp[]
}
