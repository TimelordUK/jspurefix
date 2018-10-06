import { INestedParties4 } from './nested_parties_4'

export interface IFillsGrp {
  FillExecID?: string// 1363
  FillPx?: number// 1364
  FillQty?: number// 1365
  FillMatchID?: string// 2673
  FillMatchSubID?: string// 2674
  FillLiquidityInd?: number// 1443
  FillYieldType?: string// 1622
  FillYield?: number// 1623
  NestedParties4?: INestedParties4[]
}
