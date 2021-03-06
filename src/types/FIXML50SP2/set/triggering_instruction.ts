export interface ITriggeringInstruction {
  TriggerType?: string// 1100
  TriggerAction?: string// 1101
  TriggerScope?: number// 1628
  TriggerPrice?: number// 1102
  TriggerSymbol?: string// 1103
  TriggerSecurityID?: string// 1104
  TriggerSecurityIDSource?: string// 1105
  TriggerSecurityDesc?: string// 1106
  TriggerPriceType?: string// 1107
  TriggerPriceTypeScope?: string// 1108
  TriggerPriceDirection?: string// 1109
  TriggerNewPrice?: number// 1110
  TriggerOrderType?: string// 1111
  TriggerNewQty?: number// 1112
  TriggerTradingSessionID?: string// 1113
  TriggerTradingSessionSubID?: string// 1114
}
