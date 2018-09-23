import { IStandardHeader } from './set/standard_header'
import { IInstrument } from './set/instrument'
import { IUnderlyingInstrument } from './set/underlying_instrument'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { IStandardTrailer } from './set/standard_trailer'

/*
***********************************************************
* This message is used for reporting updates to a Product *
* Security Masterfile. Updates could be the result of     *
* corporate actions or other business events. Updates may *
* include additions, modifications or deletions.          *
***********************************************************
*/
export interface ISecurityDefinitionUpdateReport {
  StandardHeader: IStandardHeader
  SecurityReportID?: number// 964
  SecurityReqID?: string// 320
  SecurityResponseID?: string// 322
  SecurityResponseType?: number// 323
  ClearingBusinessDate?: Date// 715
  SecurityUpdateAction?: string// 980
  CorporateAction?: string// 292
  Instrument?: IInstrument
  UnderlyingInstrument?: IUnderlyingInstrument
  Currency?: number// 15
  TradingSessionID?: string// 336
  TradingSessionSubID?: string// 625
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  InstrmtLegGrp?: IInstrmtLegGrp
  ExpirationCycle?: number// 827
  RoundLot?: number// 561
  MinTradeVol?: number// 562
  StandardTrailer: IStandardTrailer
}
