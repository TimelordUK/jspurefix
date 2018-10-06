import { ISettlParties } from './settl_parties'

export interface IDlvyInstGrp {
  SettlInstSource?: string// 165
  DlvyInstType?: string// 787
  SettlParties?: ISettlParties[]
}
