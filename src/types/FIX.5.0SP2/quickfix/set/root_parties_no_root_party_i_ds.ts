import { IRootSubParties } from './root_sub_parties'

export interface IRootPartiesNoRootPartyIDs {
  RootPartyID?: string// [1] 1117 (String)
  RootPartyIDSource?: string// [2] 1118 (String)
  RootPartyRole?: number// [3] 1119 (Int)
  RootPartyRoleQualifier?: number// [4] 2388 (Int)
  RootSubParties?: IRootSubParties// [5] NoRootPartySubIDs.1120, RootPartySubID.1121, RootPartySubIDType.1122
}
