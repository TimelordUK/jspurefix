import { IDlvyInstGrp } from './dlvy_inst_grp'

export interface ISettlInstructionsData {
  LegDeliveryType?: number// 2504
  StandInstDbType?: number// 169
  StandInstDbName?: string// 170
  StandInstDbID?: string// 171
  DlvyInstGrp?: IDlvyInstGrp[]
}
