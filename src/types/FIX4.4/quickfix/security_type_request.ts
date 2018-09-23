export interface ISecurityTypeRequest {
  SecurityReqID: string// 320
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  TradingSessionID?: string// 336
  TradingSessionSubID?: string// 625
  Product?: number// 460
  SecurityType?: string// 167
  SecuritySubType?: string// 762
}
