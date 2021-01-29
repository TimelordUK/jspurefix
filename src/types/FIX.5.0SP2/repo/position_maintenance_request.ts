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
****************************************************************
* The Position Maintenance Request message allows the position *
* owner to submit requests to the holder of a position which   *
* will result in a specific action being taken which will      *
* affect the position. Generally, the holder of the position   *
* is a central counter party or clearing organization but can  *
* also be a party providing investment services.               *
****************************************************************
*/
export interface IPositionMaintenanceRequest {
  StandardHeader: IStandardHeader
  PosReqID?: string// 710
  PosTransType: number// 709
  PosMaintAction: number// 712
  OrigPosReqRefID?: string// 713
  PosMaintRptRefID?: string// 714
  ClearingBusinessDate: Date// 715
  SettlSessID?: string// 716
  SettlSessSubID?: string// 717
  Parties: IParties[]
  Account?: string// 1
  AcctIDSource?: number// 660
  AccountType?: number// 581
  Instrument: IInstrument
  Currency?: string// 15
  InstrmtLegGrp?: IInstrmtLegGrp
  UndInstrmtGrp?: IUndInstrmtGrp
  TrdgSesGrp?: ITrdgSesGrp[]
  TransactTime?: Date// 60
  PositionQty: IPositionQty[]
  PositionAmountData?: IPositionAmountData[]
  AdjustmentType?: number// 718
  ContraryInstructionIndicator?: boolean// 719
  PriorSpreadIndicator?: boolean// 720
  ThresholdAmount?: number// 834
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  SettlCurrency?: string// 120
  StandardTrailer: IStandardTrailer
}
