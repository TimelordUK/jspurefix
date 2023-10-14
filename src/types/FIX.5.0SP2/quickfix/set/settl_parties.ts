import { ISettlPtysSubGrp } from './settl_ptys_sub_grp'

/*
****************************************************************
* The SettlParties component block is used in a similar manner *
* as Parties Block within the context of settlement            *
* instruction messages to distinguish between parties involved *
* in the settlement and parties who are expected to execute    *
* the settlement process.                                      *
****************************************************************
*/
export interface ISettlParties {
  SettlPartyID?: string// [1] 782 (String)
  SettlPartyIDSource?: string// [2] 783 (String)
  SettlPartyRole?: number// [3] 784 (Int)
  SettlPtysSubGrp?: ISettlPtysSubGrp[]// [4] SettlPartySubID.785, SettlPartySubIDType.786
}
