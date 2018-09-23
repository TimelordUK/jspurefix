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
  MDStatisticReqID?: string// 2452
  PosTransType: number// 709
  PosReportAction: number// 2364
  OrigPosReqRefID?: string// 713
  AllocReportRefID?: string// 795
  ClearingBusinessDate: Date// 715
  LegSettlDate?: Date// 588
  SettlSessID?: string// 716
  SettlSessSubID?: string// 717
  LegAccount?: string// 2680
  AcctIDSource?: number// 660
  AllocAccountType?: number// 798
  UnderlyingReturnRatePriceCurrency?: string// 43067
  RelSymTransactTime?: Date// 1504
  AdjustmentType?: number// 718
  ContraryInstructionIndicator?: string// 719
  PriorSpreadIndicator?: string// 720
  ThresholdAmount?: string// 834
  UnderlyingProvisionText?: string// 42170
  EncodedUnderlyingProvisionTextLen?: string// 42171
  EncodedUnderlyingProvisionText?: Buffer// 42172
  UnderlyingProvisionCashSettlCurrency?: string// 42167
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
