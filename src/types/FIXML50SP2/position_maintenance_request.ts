import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IInstrument } from './set/instrument'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { IRelatedInstrumentGrp } from './set/related_instrument_grp'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { ITrdgSesGrp } from './set/trdg_ses_grp'
import { IPositionQty } from './set/position_qty'
import { IPositionAmountData } from './set/position_amount_data'

/*
**************************************************************
* PositionMaintenanceRequest can be found in Volume 5 of the *
*                                                            *
* specification                                              *
**************************************************************
*/
export interface IPositionMaintenanceRequest {
  PosReqID?: string// 710
  PosTransType: number// 709
  PosMaintAction: number// 712
  OrigPosReqRefID?: string// 713
  PosMaintRptRefID?: string// 714
  ClearingBusinessDate: Date// 715
  SettlDate?: Date// 64
  SettlSessID?: string// 716
  SettlSessSubID?: string// 717
  Account?: string// 1
  AcctIDSource?: number// 660
  AccountType?: number// 581
  Currency?: string// 15
  TransactTime?: Date// 60
  AdjustmentType?: number// 718
  ContraryInstructionIndicator?: boolean// 719
  PriorSpreadIndicator?: boolean// 720
  ThresholdAmount?: number// 834
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  SettlCurrency?: string// 120
  StandardHeader?: IStandardHeader
  Parties?: IParties[]
  Instrument?: IInstrument
  InstrmtLegGrp?: IInstrmtLegGrp[]
  RelatedInstrumentGrp?: IRelatedInstrumentGrp[]
  UndInstrmtGrp?: IUndInstrmtGrp[]
  TrdgSesGrp?: ITrdgSesGrp[]
  PositionQty?: IPositionQty[]
  PositionAmountData?: IPositionAmountData[]
}
