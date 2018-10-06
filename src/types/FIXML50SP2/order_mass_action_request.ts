import { IStandardHeader } from './set/standard_header'
import { ITargetMarketSegmentGrp } from './set/target_market_segment_grp'
import { IParties } from './set/parties'
import { ITargetParties } from './set/target_parties'
import { IInstrument } from './set/instrument'
import { IUnderlyingInstrument } from './set/underlying_instrument'

/*
**********************************************************
* OrderMassActionRequest can be found in Volume 4 of the *
*                                                        *
* specification                                          *
**********************************************************
*/
export interface IOrderMassActionRequest {
  ClOrdID: string// 11
  SecondaryClOrdID?: string// 526
  MassActionType: number// 1373
  MassActionScope: number// 1374
  MassActionReason?: number// 2675
  MarketID?: string// 1301
  MarketSegmentID?: string// 1300
  TradingSessionID?: string// 336
  TradingSessionSubID?: string// 625
  Side?: string// 54
  Price?: number// 44
  TransactTime: Date// 60
  ComplianceID?: string// 376
  ComplianceText?: string// 2404
  EncodedComplianceTextLen?: number// 2351
  EncodedComplianceText?: Buffer// 2352
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  StandardHeader?: IStandardHeader
  TargetMarketSegmentGrp?: ITargetMarketSegmentGrp[]
  Parties?: IParties[]
  TargetParties?: ITargetParties[]
  Instrument?: IInstrument
  UnderlyingInstrument?: IUnderlyingInstrument
}
