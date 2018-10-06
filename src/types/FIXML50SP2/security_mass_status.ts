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
  SecurityStatusReqID?: string// 324
  SecurityListID?: string// 1465
  MarketID?: string// 1301
  MarketSegmentID?: string// 1300
  TradeDate?: Date// 75
  TradingSessionID?: string// 336
  TradingSessionSubID?: string// 625
  UnsolicitedIndicator?: boolean// 325
  SecurityMassTradingStatus?: number// 1679
  FastMarketIndicator?: boolean// 2447
  SecurityMassTradingEvent?: number// 1680
  MassHaltReason?: number// 1681
  MDBookType?: number// 1021
  MarketDepth?: number// 264
  TransactTime?: Date// 60
  Adjustment?: number// 334
  StandardHeader?: IStandardHeader
  ApplicationSequenceControl?: IApplicationSequenceControl
  InstrumentScope?: IInstrumentScope
  SecMassStatGrp?: ISecMassStatGrp[]
}
