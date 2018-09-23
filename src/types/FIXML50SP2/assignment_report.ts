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
  MDStatisticRptID: string// 2453
  MDStatisticReqID?: string// 2452
  TotNumAssignmentReports?: number// 832
  LastRptRequested?: string// 912
  LegAccount?: string// 2680
  AllocAccountType?: number// 798
  UnderlyingReturnRatePriceCurrency?: string// 43067
  ThresholdAmount?: string// 834
  ClearingSettlPrice?: number// 2528
  SettlPriceType?: number// 731
  UnderlyingSettlPrice?: number// 732
  PriorSettlPrice?: number// 734
  PositionContingentPrice?: number// 1595
  ExpireDate?: Date// 432
  LegInstrmtAssignmentMethod?: string// 2147
  UnderlyingProtectionTermEventUnit?: string// 42082
  OpenInterest?: number// 746
  ExerciseMethod?: string// 747
  SettlSessID?: string// 716
  SettlSessSubID?: string// 717
  ClearingBusinessDate: Date// 715
  UnderlyingProvisionText?: string// 42170
  EncodedUnderlyingProvisionTextLen?: string// 42171
  EncodedUnderlyingProvisionText?: Buffer// 42172
  StandardHeader?: IStandardHeader
  ApplicationSequenceControl?: IApplicationSequenceControl
  Parties?: IParties[]
  Instrument?: IInstrument
  InstrmtLegGrp?: IInstrmtLegGrp[]
  UndInstrmtGrp?: IUndInstrmtGrp[]
  PositionQty?: IPositionQty[]
  PositionAmountData?: IPositionAmountData[]
}
