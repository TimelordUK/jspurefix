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
  PosMaintRptID: string// 721
  PosTransType: number// 709
  PositionID?: string// 2618
  PosReqID?: string// 710
  PosMaintAction: number// 712
  OrigPosReqRefID?: string// 713
  PosMaintStatus?: number// 722
  EntitlementResult?: number// 1884
  ClearingBusinessDate: Date// 715
  PreviousClearingBusinessDate?: Date// 2084
  ValuationDate?: Date// 2085
  ValuationTime?: string// 2086
  ValuationBusinessCenter?: string// 2087
  DiscountFactor?: number// 1592
  RejectText?: string// 1328
  EncodedRejectTextLen?: number// 1664
  EncodedRejectText?: Buffer// 1665
  SettlSessID?: string// 716
  SettlSessSubID?: string// 717
  ClearedIndicator?: number// 1832
  ContractRefPosType?: number// 1833
  PositionCapacity?: number// 1834
  TerminatedIndicator?: boolean// 2101
  InputSource?: string// 979
  Account?: string// 1
  AcctIDSource?: number// 660
  AccountType?: number// 581
  PosMaintRptRefID?: string// 714
  Currency?: string// 15
  SettlDate?: Date// 64
  SettlCurrency?: string// 120
  ContraryInstructionIndicator?: boolean// 719
  PriorSpreadIndicator?: boolean// 720
  TransactTime?: Date// 60
  AdjustmentType?: number// 718
  ThresholdAmount?: number// 834
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
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
