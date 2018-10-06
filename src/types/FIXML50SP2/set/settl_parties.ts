import { ISettlPtysSubGrp } from './settl_ptys_sub_grp'

export interface ISettlParties {
  SettlPartyID?: string// 782
  SettlPartyIDSource?: string// 783
  SettlPartyRole?: number// 784
  SettlPartyRoleQualifier?: number// 2389
  SettlPtysSubGrp?: ISettlPtysSubGrp[]
}
