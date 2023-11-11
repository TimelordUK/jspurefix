import { ITrdRegPublicationGrp } from './trd_reg_publication_grp'
import { ITradePriceConditionGrp } from './trade_price_condition_grp'

export interface IExecAllocGrpNoExecs {
  LastQty?: number// [1] 32 (Float)
  ExecID?: string// [2] 17 (String)
  SecondaryExecID?: string// [3] 527 (String)
  LastPx?: number// [4] 31 (Float)
  LastParPx?: number// [5] 669 (Float)
  LastCapacity?: string// [6] 29 (String)
  TradeID?: string// [7] 1003 (String)
  FirmTradeID?: string// [8] 1041 (String)
  TrdMatchID?: string// [9] 880 (String)
  ExecutionTimestamp?: Date// [10] 2749 (UtcTimestamp)
  TradeReportingIndicator?: number// [11] 2524 (Int)
  TrdRegPublicationGrp?: ITrdRegPublicationGrp// [12] NoTrdRegPublications.2668, TrdRegPublicationType.2669, TrdRegPublicationReason.2670
  TradePriceConditionGrp?: ITradePriceConditionGrp// [13] NoTradePriceConditions.1838, TradePriceCondition.1839
}
