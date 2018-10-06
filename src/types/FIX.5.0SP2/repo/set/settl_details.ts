import { ISettlParties } from './settl_parties'

export interface ISettlDetails {
  SettlObligSource?: string// 1164
  SettlParties?: ISettlParties[]
}
