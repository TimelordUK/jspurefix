import { ISettlParties } from './settl_parties'

export interface IDlvyInstGrp {
  SettlInstSource?: string// [1] 165 (String)
  DlvyInstType?: string// [1] 787 (String)
  SettlParties?: ISettlParties[]// [1] ID.782, Src.783 .. Qual.2389
}
