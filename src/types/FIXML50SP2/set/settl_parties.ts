import { ISettlPtysSubGrp } from './settl_ptys_sub_grp'

export interface ISettlParties {
  BatchID?: string// 50000
  LegContractualMatrixSource?: string// 42204
  UnderlyingProvisionPartyRole?: number// 42176
  UnderlyingProtectionTermEventQualifier?: string// 42086
  SettlPtysSubGrp?: ISettlPtysSubGrp[]
}
