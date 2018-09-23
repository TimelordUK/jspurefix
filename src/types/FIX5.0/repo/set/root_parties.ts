import { IRootSubParties } from './root_sub_parties'

/*
***************************************************************
* The RootParties component block is a version of the Parties *
* component block used to provide root information regarding  *
* the owning and entering parties of a transaction.           *
***************************************************************
*/
export interface IRootParties {
  RootPartyID?: string// 1117
  RootPartyIDSource?: string// 1118
  RootPartyRole?: number// 1119
  RootSubParties?: IRootSubParties[]
}
