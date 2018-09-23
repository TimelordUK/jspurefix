import { IRootSubParties } from './root_sub_parties'

export interface IRootParties {
  BatchID?: string// 50000
  LegContractualMatrixSource?: string// 42204
  UnderlyingProvisionPartyRole?: number// 42176
  UnderlyingProtectionTermEventQualifier?: string// 42086
  RootSubParties?: IRootSubParties[]
}
