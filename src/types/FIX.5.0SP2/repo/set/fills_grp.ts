import { INestedParties4 } from './nested_parties_4'

export interface IFillsGrp {
  FillExecID?: string// 1363
  FillPx?: number// 1364
  FillQty?: number// 1365
  NestedParties4?: INestedParties4[]
  FillLiquidityInd?: number// 1443
}
