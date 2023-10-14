import { IRootSubParties } from './root_sub_parties'

/*
***************************************************************
* The RootParties component block is a version of the Parties *
* component block used to provide root information regarding  *
* the owning and entering parties of a transaction.           *
***************************************************************
*/
export interface IRootParties {
  RootPartyID?: string// [1] 1117 (String)
  RootPartyIDSource?: string// [2] 1118 (String)
  RootPartyRole?: number// [3] 1119 (Int)
  RootSubParties?: IRootSubParties[]// [4] RootPartySubID.1121, RootPartySubIDType.1122
}
