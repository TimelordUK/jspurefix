import { INestedParties4 } from './nested_parties_4'

export interface IFillsGrp {
  FillExecID?: string// [1] 1363 (String)
  FillPx?: number// [1] 1364 (Float)
  FillQty?: number// [1] 1365 (Float)
  FillMatchID?: string// [1] 2673 (String)
  FillMatchSubID?: string// [1] 2674 (String)
  FillLiquidityInd?: number// [1] 1443 (Int)
  FillYieldType?: string// [1] 1622 (String)
  FillYield?: number// [1] 1623 (Float)
  NestedParties4?: INestedParties4[]// [1] ID.1415, Src.1416 .. Qual.2383
}
