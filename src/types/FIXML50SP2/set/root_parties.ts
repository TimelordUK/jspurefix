import { IRootSubParties } from './root_sub_parties'

export interface IRootParties {
  RootPartyID?: string// 1117
  RootPartyIDSource?: string// 1118
  RootPartyRole?: number// 1119
  RootPartyRoleQualifier?: number// 2388
  RootSubParties?: IRootSubParties[]
}
