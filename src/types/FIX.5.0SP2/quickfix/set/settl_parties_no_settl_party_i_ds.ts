import { ISettlPtysSubGrp } from './settl_ptys_sub_grp'

export interface ISettlPartiesNoSettlPartyIDs {
  SettlPartyID?: string// [1] 782 (String)
  SettlPartyIDSource?: string// [2] 783 (String)
  SettlPartyRole?: number// [3] 784 (Int)
  SettlPartyRoleQualifier?: number// [4] 2389 (Int)
  SettlPtysSubGrp?: ISettlPtysSubGrp// [5] NoSettlPartySubIDs.801, SettlPartySubID.785, SettlPartySubIDType.786
}
