import { IDlvyInstGrp } from './dlvy_inst_grp'

export interface ISettlInstructionsData {
  SettlDeliveryType?: number// [1] 172 (Int)
  StandInstDbType?: number// [2] 169 (Int)
  StandInstDbName?: string// [3] 170 (String)
  StandInstDbID?: string// [4] 171 (String)
  DlvyInstGrp?: IDlvyInstGrp// [5] NoDlvyInst.85, SettlInstSource.165 .. SettlPartySubIDType.786
}
