import { IStandardHeader } from './set/standard_header'
import { IInstrument } from './set/instrument'
import { IInstrumentExtension } from './set/instrument_extension'
import { IFinancingDetails } from './set/financing_details'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { IRelatedInstrumentGrp } from './set/related_instrument_grp'

/*
*******************************************************
* SecurityListRequest can be found in Volume 3 of the *
*                                                     *
* specification                                       *
*******************************************************
*/
export interface ISecurityListRequest {
  MDStatisticReqID: string// 2452
  SecurityListRequestType: number// 559
  SecurityListID?: string// 1465
  SecurityListType?: number// 1470
  SecurityListTypeSource?: number// 1471
  SideCollateralAmountMarketID?: string// 2692
  SideCollateralAmountMarketSegmentID?: string// 2693
  UnderlyingReturnRatePriceCurrency?: string// 43067
  UnderlyingProvisionText?: string// 42170
  EncodedUnderlyingProvisionTextLen?: string// 42171
  EncodedUnderlyingProvisionText?: Buffer// 42172
  TradingSessionID?: string// 336
  TradingSessionSubID?: string// 625
  SubscriptionRequestType?: string// 263
  StandardHeader?: IStandardHeader
  Instrument?: IInstrument
  InstrumentExtension?: IInstrumentExtension
  FinancingDetails?: IFinancingDetails
  UndInstrmtGrp?: IUndInstrmtGrp[]
  InstrmtLegGrp?: IInstrmtLegGrp[]
  RelatedInstrumentGrp?: IRelatedInstrumentGrp[]
}
