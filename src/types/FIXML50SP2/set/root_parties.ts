import { IRootSubParties } from './root_sub_parties'

export interface IRootParties {
  RootPartyID?: string// [1] 1117 (String)
  RootPartyIDSource?: string// [1] 1118 (String)
  RootPartyRole?: number// [1] 1119 (Int)
  RootPartyRoleQualifier?: number// [1] 2388 (Int)
  RootSubParties?: IRootSubParties[]// [1] ID.1121, Typ.1122
}
