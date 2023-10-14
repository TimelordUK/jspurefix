import { INestedParties4 } from './nested_parties_4'

export interface IFillsGrp {
  FillExecID?: string// [1] 1363 (String)
  FillPx?: number// [2] 1364 (Float)
  FillQty?: number// [3] 1365 (Float)
  NestedParties4?: INestedParties4[]// [4] Nested4PartyID.1415, Nested4PartyIDSource.1416 .. Nested4PartySubIDType.1411
  FillLiquidityInd?: number// [5] 1443 (Int)
}
