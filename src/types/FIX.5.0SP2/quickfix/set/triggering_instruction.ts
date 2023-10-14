/*
****************************************************************
* The TriggeringInstruction component block specifies the      *
* conditions under which an order will be triggered by related *
* market events as well as the behavior of the order in the    *
* market once it is triggered.                                 *
****************************************************************
*/
export interface ITriggeringInstruction {
  TriggerType?: string// [1] 1100 (String)
  TriggerAction?: string// [2] 1101 (String)
  TriggerPrice?: number// [3] 1102 (Float)
  TriggerSymbol?: string// [4] 1103 (String)
  TriggerSecurityID?: string// [5] 1104 (String)
  TriggerSecurityIDSource?: string// [6] 1105 (String)
  TriggerSecurityDesc?: string// [7] 1106 (String)
  TriggerPriceType?: string// [8] 1107 (String)
  TriggerPriceTypeScope?: string// [9] 1108 (String)
  TriggerPriceDirection?: string// [10] 1109 (String)
  TriggerNewPrice?: number// [11] 1110 (Float)
  TriggerOrderType?: string// [12] 1111 (String)
  TriggerNewQty?: number// [13] 1112 (Float)
  TriggerTradingSessionID?: string// [14] 1113 (String)
  TriggerTradingSessionSubID?: string// [15] 1114 (String)
}
