import { ISettlParties } from './settl_parties'

export interface ISettlDetails {
  SettlObligSource?: string// [1] 1164 (String)
  SettlParties?: ISettlParties[]// [2] SettlPartyID.782, SettlPartyIDSource.783 .. SettlPartySubIDType.786
}
