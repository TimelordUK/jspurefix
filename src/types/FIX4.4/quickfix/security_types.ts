import { Iheader } from './set/header'
import { ISecTypesGrp } from './set/sec_types_grp'
import { Itrailer } from './set/trailer'

export interface ISecurityTypes {
  header: Iheader
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
  trailer: Itrailer
}
