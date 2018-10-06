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
  SettlPartyID?: string// 782
  SettlPartyIDSource?: string// 783
  SettlPartyRole?: number// 784
  SettlPtysSubGrp?: ISettlPtysSubGrp[]
}
