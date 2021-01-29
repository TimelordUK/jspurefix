import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IInstrument } from './set/instrument'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { ITrdgSesGrp } from './set/trdg_ses_grp'
import { IPositionQty } from './set/position_qty'
import { IPositionAmountData } from './set/position_amount_data'
import { IStandardTrailer } from './set/standard_trailer'

/*
*************************************************************
* The Position Maintenance Report message is sent by the    *
* holder of a positon in response to a Position Maintenance *
* Request and is used to confirm that a request has been    *
* successfully processed or rejected.                       *
*************************************************************
*/
export interface IPositionMaintenanceReport {
  StandardHeader: IStandardHeader
  PosMaintRptID: string// 721
  PosTransType: number// 709
  PosReqID?: string// 710
  PosMaintAction: number// 712
  OrigPosReqRefID?: string// 713
  PosMaintStatus: number// 722
  PosMaintResult?: number// 723
  ClearingBusinessDate: Date// 715
  SettlSessID?: string// 716
  SettlSessSubID?: string// 717
  Parties?: IParties[]
  Account?: string// 1
  AcctIDSource?: number// 660
  AccountType?: number// 581
  PosMaintRptRefID?: string// 714
  Instrument: IInstrument
  Currency?: string// 15
  SettlCurrency?: string// 120
  ContraryInstructionIndicator?: boolean// 719
  PriorSpreadIndicator?: boolean// 720
  InstrmtLegGrp?: IInstrmtLegGrp
  UndInstrmtGrp?: IUndInstrmtGrp
  TrdgSesGrp?: ITrdgSesGrp[]
  TransactTime?: Date// 60
  PositionQty: IPositionQty[]
  PositionAmountData?: IPositionAmountData[]
  AdjustmentType?: number// 718
  ThresholdAmount?: number// 834
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  StandardTrailer: IStandardTrailer
}
