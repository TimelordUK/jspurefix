import { IDlvyInstGrp } from './dlvy_inst_grp'

export interface ISettlInstructionsData {
  SettlDeliveryType?: number// [1] 172 (Int)
  StandInstDbType?: number// [1] 169 (Int)
  StandInstDbName?: string// [1] 170 (String)
  StandInstDbID?: string// [1] 171 (String)
  DlvyInstGrp?: IDlvyInstGrp[]// [1] InstSrc.165, InstTyp.787
}
