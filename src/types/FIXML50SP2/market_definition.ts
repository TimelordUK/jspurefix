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

/*
****************************************************
* MarketDefinition can be found in Volume 3 of the *
*                                                  *
* specification                                    *
****************************************************
*/
export interface IMarketDefinition {
  MarketReportID: string// [2] 1394 (String)
  MarketReqID?: string// [2] 1393 (String)
  MarketID: string// [2] 1301 (String)
  MarketSegmentID?: string// [2] 1300 (String)
  MarketSegmentDesc?: string// [2] 1396 (String)
  EncodedMktSegmDescLen?: number// [2] 1397 (Length)
  EncodedMktSegmDesc?: Buffer// [2] 1398 (RawData)
  ParentMktSegmID?: string// [2] 1325 (String)
  MarketSegmentStatus?: number// [2] 2542 (Int)
  MarketSegmentType?: number// [2] 2543 (Int)
  MarketSegmentSubType?: number// [2] 2544 (Int)
  Currency?: string// [2] 15 (String)
  EffectiveBusinessDate?: Date// [2] 2400 (LocalDate)
  TransactTime?: Date// [2] 60 (UtcTimestamp)
  Text?: string// [2] 58 (String)
  EncodedTextLen?: number// [2] 354 (Length)
  EncodedText?: Buffer// [2] 355 (RawData)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
  ApplicationSequenceControl?: IApplicationSequenceControl// [2] ApplID.1180, ApplSeqNum.1181 .. ApplResendFlag.1352
  InstrumentScopeGrp?: IInstrumentScopeGrp[]// [3] Oper.1535, Sym.1536 .. SettlTyp.63
  RelatedMarketSegmentGrp?: IRelatedMarketSegmentGrp[]// [4] ReltdMktSegID.2546, MktSegRltnshp.2547
  BaseTradingRules?: IBaseTradingRules// [5] ExpirationCycle.827, TrdVolTyp.1786 .. QuotSideInd.2559
  OrdTypeRules?: IOrdTypeRules[]// [6] OrdTyp.40
  TimeInForceRules?: ITimeInForceRules[]// [7] TmInForce.59
  ExecInstRules?: IExecInstRules[]// [8] ExecInstValu.1308
  AuctionTypeRuleGrp?: IAuctionTypeRuleGrp[]// [9] AuctTyp.1803, AuctTypProdCmplx.2549
  MarketDataFeedTypes?: IMarketDataFeedTypes[]// [10] MDFeedTyp.1022, MDSubFeedTyp.1683 .. SvcLctnID2.2568
  MatchRules?: IMatchRules[]// [11] MtchAlgo.1142, MtchTyp.574 .. CustPri.2570
  FlexProductEligibilityGrp?: IFlexProductEligibilityGrp[]// [12] FlexProdElig.1242, FlexProdEligCmplx.2561
  Parties?: IParties[]// [13] ID.448, Src.447 .. Qual.2376
}
