import { IDlvyInstGrp } from './dlvy_inst_grp'

/*
***************************************************************
* The SettlInstructionsData component block is used to convey *
* key information regarding standing settlement and delivery  *
* instructions. It also provides a reference to standing      *
* settlement details regarding the source, delivery           *
* instructions, and settlement parties                        *
***************************************************************
*/
export interface ISettlInstructionsData {
  SettlDeliveryType?: number// 172
  StandInstDbType?: number// 169
  StandInstDbName?: string// 170
  StandInstDbID?: string// 171
  DlvyInstGrp?: IDlvyInstGrp[]
}
