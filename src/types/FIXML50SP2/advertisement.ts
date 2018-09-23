import { IStandardHeader } from './set/standard_header'
import { IInstrument } from './set/instrument'
import { IInstrumentExtension } from './set/instrument_extension'
import { IFinancingDetails } from './set/financing_details'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IRelatedInstrumentGrp } from './set/related_instrument_grp'

/*
*************************************************
* Advertisement can be found in Volume 3 of the *
*                                               *
* specification                                 *
*************************************************
*/
export interface IAdvertisement {
  AdvId: string// 2
  AdvTransType: string// 5
  AdvRefID?: string// 3
  AdvSide: string// 4
  RelatedTradeQuantity: number// 1860
  LegQtyType?: number// 1591
  UnderlyingReturnRatePrice?: number// 43066
  UnderlyingReturnRatePriceCurrency?: string// 43067
  TradeDate?: Date// 75
  RelSymTransactTime?: Date// 1504
  UnderlyingProvisionText?: string// 42170
  EncodedUnderlyingProvisionTextLen?: string// 42171
  EncodedUnderlyingProvisionText?: Buffer// 42172
  AttachmentExternalURL?: string// 2108
  LastMkt?: string// 30
  TradingSessionID?: string// 336
  TradingSessionSubID?: string// 625
  StandardHeader?: IStandardHeader
  Instrument?: IInstrument
  InstrumentExtension?: IInstrumentExtension
  FinancingDetails?: IFinancingDetails
  InstrmtLegGrp?: IInstrmtLegGrp[]
  UndInstrmtGrp?: IUndInstrmtGrp[]
  RelatedInstrumentGrp?: IRelatedInstrumentGrp[]
}
