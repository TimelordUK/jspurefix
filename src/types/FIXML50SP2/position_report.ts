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
  MDStatisticRptID: string// 2453
  PositionID?: string// 2618
  MDStatisticReqID?: string// 2452
  RiskLimitRequestType?: number// 1760
  PosReportAction?: number// 2364
  BatchID?: string// 50000
  SubscriptionRequestType?: string// 263
  TotalNumPosReports?: number// 727
  TotNumReports?: number// 911
  LastRptRequested?: string// 912
  EntitlementResult?: number// 1884
  UnsolicitedIndicator?: string// 325
  ClearingBusinessDate: Date// 715
  PreviousClearingBusinessDate?: Date// 2084
  SettlSessID?: string// 716
  SettlSessSubID?: string// 717
  UnderlyingReturnRatePriceType?: number// 43068
  UnderlyingProvisionCashSettlCurrency?: string// 42167
  MessageEventSource?: string// 1011
  ClearedIndicator?: number// 1832
  ContractRefPosType?: number// 1833
  PositionCapacity?: number// 1834
  TerminatedIndicator?: string// 2101
  IntraFirmTradeIndicator?: string// 2373
  TradeContinuation?: number// 1937
  TradeContinuationText?: string// 2374
  EncodedTradeContinuationTextLen?: string// 2372
  EncodedTradeContinuationText?: Buffer// 2371
  TradeCollateralization?: number// 1936
  LegAccount?: string// 2680
  AcctIDSource?: number// 660
  AllocAccountType?: number// 798
  TaxonomyType?: string// 2375
  UnderlyingReturnRatePriceCurrency?: string// 43067
  LegSettlDate?: Date// 588
  ClearingSettlPrice?: number// 2528
  SettlPriceFxRateCalc?: string// 2366
  SettlForwardPoints?: string// 2365
  SettlPriceUnitOfMeasure?: string// 1886
  SettlPriceUnitOfMeasureCurrency?: string// 1887
  SettlPriceType?: number// 731
  PriorSettlPrice?: number// 734
  PositionContingentPrice?: number// 1595
  PaymentDiscountFactor?: string// 40224
  UnderlyingDividendPeriodValuationDateAdjusted?: Date// 42874
  UnderlyingReturnRateValuationTime?: string// 43056
  ValuationBusinessCenter?: string// 2087
  MatchStatus?: string// 573
  RelSymTransactTime?: Date// 1504
  RegistStatus?: string// 506
  DeliveryDate?: Date// 743
  ModelType?: number// 1434
  PriceDelta?: string// 811
  UnderlyingProvisionText?: string// 42170
  EncodedUnderlyingProvisionTextLen?: string// 42171
  EncodedUnderlyingProvisionText?: Buffer// 42172
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
