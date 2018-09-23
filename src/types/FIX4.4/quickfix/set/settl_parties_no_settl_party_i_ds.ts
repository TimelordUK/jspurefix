import { ISettlPtysSubGrp } from './settl_ptys_sub_grp'

export interface ISettlPartiesNoSettlPartyIDs {
  SettlPartyID?: string// 782
  SettlPartyIDSource?: string// 783
  SettlPartyRole?: number// 784
  SettlPtysSubGrp?: ISettlPtysSubGrp
}
