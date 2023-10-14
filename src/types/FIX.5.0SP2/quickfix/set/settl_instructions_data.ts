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
  SettlDeliveryType?: number// [1] 172 (Int)
  StandInstDbType?: number// [2] 169 (Int)
  StandInstDbName?: string// [3] 170 (String)
  StandInstDbID?: string// [4] 171 (String)
  DlvyInstGrp?: IDlvyInstGrp[]// [5] SettlInstSource.165, DlvyInstType.787 .. SettlPartySubIDType.786
}
