import { IDlvyInstGrp } from './dlvy_inst_grp'

export interface ISettlInstructionsData {
  SettlDeliveryType?: number// 172
  StandInstDbType?: number// 169
  StandInstDbName?: string// 170
  StandInstDbID?: string// 171
  DlvyInstGrp?: IDlvyInstGrp
}
