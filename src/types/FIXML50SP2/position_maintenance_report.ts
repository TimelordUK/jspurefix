import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IInstrument } from './set/instrument'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { IRelatedInstrumentGrp } from './set/related_instrument_grp'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { ITrdgSesGrp } from './set/trdg_ses_grp'
import { IPositionQty } from './set/position_qty'
import { IPositionAmountData } from './set/position_amount_data'
import { IRegulatoryTradeIDGrp } from './set/regulatory_trade_id_grp'
import { IPaymentGrp } from './set/payment_grp'
import { IRelatedTradeGrp } from './set/related_trade_grp'

/*
*************************************************************
* PositionMaintenanceReport can be found in Volume 5 of the *
*                                                           *
* specification                                             *
*************************************************************
*/
export interface IPositionMaintenanceReport {
  MDStatisticRptID: string// 2453
  PosTransType: number// 709
  PositionID?: string// 2618
  MDStatisticReqID?: string// 2452
  PosReportAction: number// 2364
  OrigPosReqRefID?: string// 713
  MDStatisticStatus?: number// 2477
  EntitlementResult?: number// 1884
  ClearingBusinessDate: Date// 715
  PreviousClearingBusinessDate?: Date// 2084
  UnderlyingDividendPeriodValuationDateAdjusted?: Date// 42874
  UnderlyingReturnRateValuationTime?: string// 43056
  ValuationBusinessCenter?: string// 2087
  PaymentDiscountFactor?: string// 40224
  RejectText?: string// 1328
  EncodedRejectTextLen?: string// 1664
  EncodedRejectText?: Buffer// 1665
  SettlSessID?: string// 716
  SettlSessSubID?: string// 717
  ClearedIndicator?: number// 1832
  ContractRefPosType?: number// 1833
  PositionCapacity?: number// 1834
  TerminatedIndicator?: string// 2101
  InputSource?: string// 979
  LegAccount?: string// 2680
  AcctIDSource?: number// 660
  AllocAccountType?: number// 798
  AllocReportRefID?: string// 795
  UnderlyingReturnRatePriceCurrency?: string// 43067
  LegSettlDate?: Date// 588
  UnderlyingProvisionCashSettlCurrency?: string// 42167
  ContraryInstructionIndicator?: string// 719
  PriorSpreadIndicator?: string// 720
  RelSymTransactTime?: Date// 1504
  AdjustmentType?: number// 718
  ThresholdAmount?: string// 834
  UnderlyingProvisionText?: string// 42170
  EncodedUnderlyingProvisionTextLen?: string// 42171
  EncodedUnderlyingProvisionText?: Buffer// 42172
  StandardHeader?: IStandardHeader
  Parties?: IParties[]
  Instrument?: IInstrument
  InstrmtLegGrp?: IInstrmtLegGrp[]
  RelatedInstrumentGrp?: IRelatedInstrumentGrp[]
  UndInstrmtGrp?: IUndInstrmtGrp[]
  TrdgSesGrp?: ITrdgSesGrp[]
  PositionQty?: IPositionQty[]
  PositionAmountData?: IPositionAmountData[]
  RegulatoryTradeIDGrp?: IRegulatoryTradeIDGrp[]
  PaymentGrp?: IPaymentGrp[]
  RelatedTradeGrp?: IRelatedTradeGrp[]
}
