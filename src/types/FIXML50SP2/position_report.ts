import { IStandardHeader } from './set/standard_header'
import { IApplicationSequenceControl } from './set/application_sequence_control'
import { IParties } from './set/parties'
import { IInstrument } from './set/instrument'
import { IFinancingDetails } from './set/financing_details'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { IRelatedInstrumentGrp } from './set/related_instrument_grp'
import { ICollateralAmountGrp } from './set/collateral_amount_grp'
import { IPosUndInstrmtGrp } from './set/pos_und_instrmt_grp'
import { IPositionQty } from './set/position_qty'
import { IPositionAmountData } from './set/position_amount_data'
import { IRegulatoryTradeIDGrp } from './set/regulatory_trade_id_grp'
import { IPaymentGrp } from './set/payment_grp'
import { IRelatedTradeGrp } from './set/related_trade_grp'

/*
**************************************************
* PositionReport can be found in Volume 5 of the *
*                                                *
* specification                                  *
**************************************************
*/
export interface IPositionReport {
  PosMaintRptID: string// 721
  PositionID?: string// 2618
  PosReqID?: string// 710
  PosReqType?: number// 724
  PosReportAction?: number// 2364
  MarginReqmtInqID?: string// 1635
  SubscriptionRequestType?: string// 263
  TotalNumPosReports?: number// 727
  TotNumReports?: number// 911
  LastRptRequested?: boolean// 912
  PosMaintResult?: number// 723
  UnsolicitedIndicator?: boolean// 325
  ClearingBusinessDate: Date// 715
  PreviousClearingBusinessDate?: Date// 2084
  SettlSessID?: string// 716
  SettlSessSubID?: string// 717
  PriceType?: number// 423
  SettlCurrency?: string// 120
  MessageEventSource?: string// 1011
  ClearedIndicator?: number// 1832
  ContractRefPosType?: number// 1833
  PositionCapacity?: number// 1834
  TerminatedIndicator?: boolean// 2101
  IntraFirmTradeIndicator?: boolean// 2373
  TradeContinuation?: number// 1937
  TradeContinuationText?: string// 2374
  EncodedTradeContinuationTextLen?: number// 2372
  EncodedTradeContinuationText?: Buffer// 2371
  TradeCollateralization?: number// 1936
  Account?: string// 1
  AcctIDSource?: number// 660
  AccountType?: number// 581
  TaxonomyType?: string// 2375
  Currency?: string// 15
  SettlDate?: Date// 64
  SettlPrice?: number// 730
  SettlPriceFxRateCalc?: string// 2366
  SettlForwardPoints?: number// 2365
  SettlPriceUnitOfMeasure?: string// 1886
  SettlPriceUnitOfMeasureCurrency?: string// 1887
  SettlPriceType?: number// 731
  PriorSettlPrice?: number// 734
  PositionContingentPrice?: number// 1595
  DiscountFactor?: number// 1592
  ValuationDate?: Date// 2085
  ValuationTime?: string// 2086
  ValuationBusinessCenter?: string// 2087
  MatchStatus?: string// 573
  TransactTime?: Date// 60
  RegistStatus?: string// 506
  DeliveryDate?: Date// 743
  ModelType?: number// 1434
  PriceDelta?: number// 811
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  StandardHeader?: IStandardHeader
  ApplicationSequenceControl?: IApplicationSequenceControl
  Parties?: IParties[]
  Instrument?: IInstrument
  FinancingDetails?: IFinancingDetails
  InstrmtLegGrp?: IInstrmtLegGrp[]
  RelatedInstrumentGrp?: IRelatedInstrumentGrp[]
  CollateralAmountGrp?: ICollateralAmountGrp[]
  PosUndInstrmtGrp?: IPosUndInstrmtGrp[]
  PositionQty?: IPositionQty[]
  PositionAmountData?: IPositionAmountData[]
  RegulatoryTradeIDGrp?: IRegulatoryTradeIDGrp[]
  PaymentGrp?: IPaymentGrp[]
  RelatedTradeGrp?: IRelatedTradeGrp[]
}
