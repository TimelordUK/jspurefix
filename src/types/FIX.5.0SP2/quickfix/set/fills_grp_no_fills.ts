import { INestedParties4 } from './nested_parties_4'

export interface IFillsGrpNoFills {
  FillExecID?: string// [1] 1363 (String)
  FillPx?: number// [2] 1364 (Float)
  FillQty?: number// [3] 1365 (Float)
  FillMatchID?: string// [4] 2673 (String)
  FillMatchSubID?: string// [5] 2674 (String)
  FillLiquidityInd?: number// [6] 1443 (Int)
  FillYieldType?: string// [7] 1622 (String)
  FillYield?: number// [8] 1623 (Float)
  NestedParties4?: INestedParties4// [9] NoNested4PartyIDs.1414, Nested4PartyID.1415 .. Nested4PartySubIDType.1411
}
