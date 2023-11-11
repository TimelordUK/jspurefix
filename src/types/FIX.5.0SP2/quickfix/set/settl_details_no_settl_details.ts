import { ISettlParties } from './settl_parties'

export interface ISettlDetailsNoSettlDetails {
  SettlObligSource?: string// [1] 1164 (String)
  StandInstDbType?: number// [2] 169 (Int)
  StandInstDbName?: string// [3] 170 (String)
  StandInstDbID?: string// [4] 171 (String)
  SettlParties?: ISettlParties// [5] NoSettlPartyIDs.781, SettlPartyID.782 .. SettlPartySubIDType.786
}
