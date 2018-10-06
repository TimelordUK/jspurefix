import { IStandardHeader } from './set/standard_header'
import { IAffectedOrdGrp } from './set/affected_ord_grp'
import { INotAffectedOrdGrp } from './set/not_affected_ord_grp'
import { IAffectedMarketSegmentGrp } from './set/affected_market_segment_grp'
import { INotAffectedMarketSegmentGrp } from './set/not_affected_market_segment_grp'
import { ITargetMarketSegmentGrp } from './set/target_market_segment_grp'
import { IParties } from './set/parties'
import { ITargetParties } from './set/target_parties'
import { IInstrument } from './set/instrument'
import { IUnderlyingInstrument } from './set/underlying_instrument'

/*
*********************************************************
* OrderMassActionReport can be found in Volume 4 of the *
*                                                       *
* specification                                         *
*********************************************************
*/
export interface IOrderMassActionReport {
  ClOrdID?: string// 11
  SecondaryClOrdID?: string// 526
  MassActionReportID: string// 1369
  MassActionType: number// 1373
  MassActionScope: number// 1374
  MassActionReason?: number// 2675
  MassActionResponse: number// 1375
  MassActionRejectReason?: number// 1376
  TotalAffectedOrders?: number// 533
  TotalNotAffectedOrders?: number// 2678
  LastFragment?: boolean// 893
  MarketID?: string// 1301
  MarketSegmentID?: string// 1300
  TradingSessionID?: string// 336
  TradingSessionSubID?: string// 625
  RelativeValueSide?: number// 2532
  Price?: number// 44
  TransactTime?: Date// 60
  ComplianceID?: string// 376
  ComplianceText?: string// 2404
  EncodedComplianceTextLen?: number// 2351
  EncodedComplianceText?: Buffer// 2352
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  StandardHeader?: IStandardHeader
  AffectedOrdGrp?: IAffectedOrdGrp[]
  NotAffectedOrdGrp?: INotAffectedOrdGrp[]
  AffectedMarketSegmentGrp?: IAffectedMarketSegmentGrp[]
  NotAffectedMarketSegmentGrp?: INotAffectedMarketSegmentGrp[]
  TargetMarketSegmentGrp?: ITargetMarketSegmentGrp[]
  Parties?: IParties[]
  TargetParties?: ITargetParties[]
  Instrument?: IInstrument
  UnderlyingInstrument?: IUnderlyingInstrument
}
