import { IStandardHeader } from './set/standard_header'
import { IApplicationSequenceControl } from './set/application_sequence_control'
import { IParties } from './set/parties'
import { IInstrument } from './set/instrument'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IPositionQty } from './set/position_qty'
import { IPositionAmountData } from './set/position_amount_data'

/*
****************************************************
* AssignmentReport can be found in Volume 5 of the *
*                                                  *
* specification                                    *
****************************************************
*/
export interface IAssignmentReport {
  AsgnRptID: string// 833
  PosReqID?: string// 710
  TotNumAssignmentReports?: number// 832
  LastRptRequested?: boolean// 912
  Account?: string// 1
  AccountType?: number// 581
  Currency?: string// 15
  ThresholdAmount?: number// 834
  SettlPrice?: number// 730
  SettlPriceType?: number// 731
  UnderlyingSettlPrice?: number// 732
  PriorSettlPrice?: number// 734
  PositionContingentPrice?: number// 1595
  ExpireDate?: Date// 432
  AssignmentMethod?: string// 744
  AssignmentUnit?: number// 745
  OpenInterest?: number// 746
  ExerciseMethod?: string// 747
  SettlSessID?: string// 716
  SettlSessSubID?: string// 717
  ClearingBusinessDate: Date// 715
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  StandardHeader?: IStandardHeader
  ApplicationSequenceControl?: IApplicationSequenceControl
  Parties?: IParties[]
  Instrument?: IInstrument
  InstrmtLegGrp?: IInstrmtLegGrp[]
  UndInstrmtGrp?: IUndInstrmtGrp[]
  PositionQty?: IPositionQty[]
  PositionAmountData?: IPositionAmountData[]
}
