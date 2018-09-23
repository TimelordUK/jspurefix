import { INestedParties4 } from './nested_parties_4'

export interface IFillsGrp {
  FillExecID?: string// 1363
  FillPx?: number// 1364
  FillQty?: number// 1365
  TradeMatchID?: string// 1
  FillMatchSubID?: string// 2674
  OrderEventLiquidityIndicator?: number// 1801
  OrdType?: string// 40
  FillYield?: number// 1623
  NestedParties4?: INestedParties4[]
}
