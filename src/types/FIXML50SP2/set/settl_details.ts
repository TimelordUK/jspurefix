import { ISettlParties } from './settl_parties'

export interface ISettlDetails {
  SettlObligSource?: string// [1] 1164 (String)
  SettlParties?: ISettlParties[]// [1] ID.782, Src.783 .. Qual.2389
}
