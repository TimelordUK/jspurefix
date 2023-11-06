import { ISettlPtysSubGrp } from './settl_ptys_sub_grp'

export interface ISettlParties {
  SettlPartyID?: string// [1] 782 (String)
  SettlPartyIDSource?: string// [1] 783 (String)
  SettlPartyRole?: number// [1] 784 (Int)
  SettlPartyRoleQualifier?: number// [1] 2389 (Int)
  SettlPtysSubGrp?: ISettlPtysSubGrp[]// [1] ID.785, Typ.786
}
