import { ISettlParties } from './settl_parties'

export interface IDlvyInstGrpNoDlvyInst {
  SettlInstSource?: string// 165
  DlvyInstType?: string// 787
  SettlParties?: ISettlParties
}
