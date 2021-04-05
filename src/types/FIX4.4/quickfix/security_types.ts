import { IStandardHeader } from './set/standard_header'
import { ISecTypesGrp } from './set/sec_types_grp'
import { IStandardTrailer } from './set/standard_trailer'

export interface ISecurityTypes {
  StandardHeader: IStandardHeader
  SecurityReqID: string// 320
  SecurityResponseID: string// 322
  SecurityResponseType: number// 323
  TotNoSecurityTypes?: number// 557
  LastFragment?: boolean// 893
  SecTypesGrp?: ISecTypesGrp
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  TradingSessionID?: string// 336
  TradingSessionSubID?: string// 625
  SubscriptionRequestType?: string// 263
  StandardTrailer: IStandardTrailer
}
