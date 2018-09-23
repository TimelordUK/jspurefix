import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IInstrument } from './set/instrument'
import { IInstrumentExtension } from './set/instrument_extension'
import { IFinancingDetails } from './set/financing_details'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { IRelatedInstrumentGrp } from './set/related_instrument_grp'
import { IMDStatisticReqGrp } from './set/md_statistic_req_grp'

/*
***************************************************************
* MarketDataStatisticsRequest can be found in Volume 3 of the *
*                                                             *
* specification                                               *
***************************************************************
*/
export interface IMarketDataStatisticsRequest {
  MDStatisticReqID: string// 2452
  SubscriptionRequestType: string// 263
  TradeDate?: Date// 75
  SideCollateralAmountMarketID?: string// 2692
  SideCollateralAmountMarketSegmentID?: string// 2693
  MarketSegmentDesc?: string// 1396
  EncodedMktSegmDescLen?: string// 1397
  EncodedMktSegmDesc?: Buffer// 1398
  SecurityListID?: string// 1465
  RelSymTransactTime?: Date// 1504
  UnderlyingProvisionText?: string// 42170
  EncodedUnderlyingProvisionTextLen?: string// 42171
  EncodedUnderlyingProvisionText?: Buffer// 42172
  StandardHeader?: IStandardHeader
  Parties?: IParties[]
  Instrument?: IInstrument
  InstrumentExtension?: IInstrumentExtension
  FinancingDetails?: IFinancingDetails
  UndInstrmtGrp?: IUndInstrmtGrp[]
  InstrmtLegGrp?: IInstrmtLegGrp[]
  RelatedInstrumentGrp?: IRelatedInstrumentGrp[]
  MDStatisticReqGrp?: IMDStatisticReqGrp[]
}
