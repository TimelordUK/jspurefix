import { IStandardHeader } from './set/standard_header'
import { IApplicationSequenceControl } from './set/application_sequence_control'
import { IInstrumentScopeGrp } from './set/instrument_scope_grp'
import { IRelatedMarketSegmentGrp } from './set/related_market_segment_grp'
import { IBaseTradingRules } from './set/base_trading_rules'
import { IOrdTypeRules } from './set/ord_type_rules'
import { ITimeInForceRules } from './set/time_in_force_rules'
import { IExecInstRules } from './set/exec_inst_rules'
import { IAuctionTypeRuleGrp } from './set/auction_type_rule_grp'
import { IMarketDataFeedTypes } from './set/market_data_feed_types'
import { IMatchRules } from './set/match_rules'
import { IFlexProductEligibilityGrp } from './set/flex_product_eligibility_grp'
import { IParties } from './set/parties'
import { IStandardTrailer } from './set/standard_trailer'

export interface IMarketDefinitionUpdateReport {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  ApplicationSequenceControl?: IApplicationSequenceControl// [2] ApplID.1180, ApplSeqNum.1181 .. ApplResendFlag.1352
  MarketReportID: string// [3] 1394 (String)
  MarketReqID?: string// [4] 1393 (String)
  MarketUpdateAction?: string// [5] 1395 (String)
  MarketID: string// [6] 1301 (String)
  MarketSegmentID?: string// [7] 1300 (String)
  MarketSegmentDesc?: string// [8] 1396 (String)
  EncodedMktSegmDescLen?: number// [9] 1397 (Length)
  EncodedMktSegmDesc?: Buffer// [10] 1398 (RawData)
  ParentMktSegmID?: string// [11] 1325 (String)
  MarketSegmentStatus?: number// [12] 2542 (Int)
  MarketSegmentType?: number// [13] 2543 (Int)
  MarketSegmentSubType?: number// [14] 2544 (Int)
  InstrumentScopeGrp?: IInstrumentScopeGrp// [15] NoInstrumentScopes.1656, InstrumentScopeOperator.1535 .. InstrumentScopeSettlType.1557
  RelatedMarketSegmentGrp?: IRelatedMarketSegmentGrp// [16] NoRelatedMarketSegments.2545, RelatedMarketSegmentID.2546, MarketSegmentRelationship.2547
  Currency?: string// [17] 15 (String)
  CurrencyCodeSource?: string// [18] 2897 (String)
  BaseTradingRules?: IBaseTradingRules// [19] TickRules.1205, StartTickPriceRange.1206 .. QuoteSideIndicator.2559
  OrdTypeRules?: IOrdTypeRules// [20] NoOrdTypeRules.1237, OrdType.40
  TimeInForceRules?: ITimeInForceRules// [21] NoTimeInForceRules.1239, TimeInForce.59
  ExecInstRules?: IExecInstRules// [22] NoExecInstRules.1232, ExecInstValue.1308
  AuctionTypeRuleGrp?: IAuctionTypeRuleGrp// [23] NoAuctionTypeRules.2548, AuctionType.1803, AuctionTypeProductComplex.2549
  MarketDataFeedTypes?: IMarketDataFeedTypes// [24] NoMDFeedTypes.1141, MDFeedType.1022 .. SecondaryServiceLocationID.2568
  MatchRules?: IMatchRules// [25] NoMatchRules.1235, MatchAlgorithm.1142 .. CustomerPriority.2570
  FlexProductEligibilityGrp?: IFlexProductEligibilityGrp// [26] NoFlexProductEligibilities.2560, FlexProductEligibilityIndicator.1242, FlexProductEligibilityComplex.2561
  Parties?: IParties// [27] NoPartyIDs.453, PartyID.448 .. PartySubIDType.803
  EffectiveBusinessDate?: Date// [28] 2400 (LocalDate)
  TransactTime?: Date// [29] 60 (UtcTimestamp)
  Text?: string// [30] 58 (String)
  EncodedTextLen?: number// [31] 354 (Length)
  EncodedText?: Buffer// [32] 355 (RawData)
  StandardTrailer: IStandardTrailer// [33] SignatureLength.93, Signature.89, CheckSum.10
}
