import { ISettlParties } from './settl_parties'

export interface IDlvyInstGrp {
  SettlInstSource?: string// [1] 165 (String)
  DlvyInstType?: string// [2] 787 (String)
  SettlParties?: ISettlParties[]// [3] SettlPartyID.782, SettlPartyIDSource.783 .. SettlPartySubIDType.786
}
