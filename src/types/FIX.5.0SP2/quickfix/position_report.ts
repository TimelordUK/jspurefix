import { IStandardHeader } from './set/standard_header'
import { IApplicationSequenceControl } from './set/application_sequence_control'
import { ITransactionAttributeGrp } from './set/transaction_attribute_grp'
import { ITrdRegTimestamps } from './set/trd_reg_timestamps'
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
import { IStandardTrailer } from './set/standard_trailer'

export interface IPositionReport {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  ApplicationSequenceControl?: IApplicationSequenceControl// [2] ApplID.1180, ApplSeqNum.1181 .. ApplResendFlag.1352
  PosMaintRptID: string// [3] 721 (String)
  PositionID?: string// [4] 2618 (String)
  PosReqID?: string// [5] 710 (String)
  PosReqType?: number// [6] 724 (Int)
  PosReportAction?: number// [7] 2364 (Int)
  MarginReqmtInqID?: string// [8] 1635 (String)
  SubscriptionRequestType?: string// [9] 263 (String)
  TotalNumPosReports?: number// [10] 727 (Int)
  TotNumReports?: number// [11] 911 (Int)
  LastRptRequested?: boolean// [12] 912 (Boolean)
  PosReqResult?: number// [13] 728 (Int)
  UnsolicitedIndicator?: boolean// [14] 325 (Boolean)
  RegulatoryReportType?: number// [15] 1934 (Int)
  RegulatoryReportTypeBusinessDate?: Date// [16] 2869 (LocalDate)
  TransactionAttributeGrp?: ITransactionAttributeGrp// [17] NoTransactionAttributes.2871, TransactionAttributeType.2872, TransactionAttributeValue.2873
  TrdRegTimestamps?: ITrdRegTimestamps// [18] NoTrdRegTimestamps.768, TrdRegTimestamp.769 .. NBBOSource.2834
  ClearingBusinessDate: Date// [19] 715 (LocalDate)
  PreviousClearingBusinessDate?: Date// [20] 2084 (LocalDate)
  ClearingPortfolioID?: string// [21] 2870 (String)
  SettlSessID?: string// [22] 716 (String)
  SettlSessSubID?: string// [23] 717 (String)
  PriceType?: number// [24] 423 (Int)
  SettlCurrency?: string// [25] 120 (String)
  SettlCurrencyCodeSource?: string// [26] 2899 (String)
  MessageEventSource?: string// [27] 1011 (String)
  ClearedIndicator?: number// [28] 1832 (Int)
  ContractRefPosType?: number// [29] 1833 (Int)
  PositionCapacity?: number// [30] 1834 (Int)
  TerminatedIndicator?: boolean// [31] 2101 (Boolean)
  TerminationDate?: Date// [32] 2878 (LocalDate)
  IntraFirmTradeIndicator?: boolean// [33] 2373 (Boolean)
  TradeContinuation?: number// [34] 1937 (Int)
  TradeContinuationText?: string// [35] 2374 (String)
  EncodedTradeContinuationTextLen?: number// [36] 2372 (Length)
  EncodedTradeContinuationText?: Buffer// [37] 2371 (RawData)
  TradeCollateralization?: number// [38] 1936 (Int)
  Parties?: IParties// [39] NoPartyIDs.453, PartyID.448 .. PartySubIDType.803
  Account?: string// [40] 1 (String)
  AcctIDSource?: number// [41] 660 (Int)
  AccountType?: number// [42] 581 (Int)
  TaxonomyType?: string// [43] 2375 (String)
  Instrument?: IInstrument// [44] Symbol.55, SymbolSfx.65 .. ExchangeLookAlike.2603
  FinancingDetails?: IFinancingDetails// [45] AgreementDesc.913, AgreementID.914 .. MarginRatio.898
  Currency?: string// [46] 15 (String)
  CurrencyCodeSource?: string// [47] 2897 (String)
  SettlDate?: Date// [48] 64 (LocalDate)
  SettlPrice?: number// [49] 730 (Float)
  SettlPriceFxRateCalc?: string// [50] 2366 (String)
  SettlForwardPoints?: number// [51] 2365 (Float)
  SettlPriceUnitOfMeasure?: string// [52] 1886 (String)
  SettlPriceUnitOfMeasureCurrency?: string// [53] 1887 (String)
  SettlPriceUnitOfMeasureCurrencyCodeSource?: string// [54] 2960 (String)
  SettlPriceType?: number// [55] 731 (Int)
  PriorSettlPrice?: number// [56] 734 (Float)
  PositionContingentPrice?: number// [57] 1595 (Float)
  DiscountFactor?: number// [58] 1592 (Float)
  ValuationDate?: Date// [59] 2085 (LocalDate)
  ValuationTime?: string// [60] 2086 (String)
  ValuationBusinessCenter?: string// [61] 2087 (String)
  MatchStatus?: string// [62] 573 (String)
  InstrmtLegGrp?: IInstrmtLegGrp// [63] NoLegs.555, LegSymbol.600 .. LegMarginRatio.2508
  RelatedInstrumentGrp?: IRelatedInstrumentGrp// [64] NoRelatedInstruments.1647, RelatedInstrumentType.1648 .. RelatedToDividendPeriodXIDRef.2417
  CollateralAmountGrp?: ICollateralAmountGrp// [65] NoCollateralAmounts.1703, CurrentCollateralAmount.1704 .. UnderlyingRefID.2841
  CollateralizationValueDate?: Date// [66] 2868 (LocalDate)
  PosUndInstrmtGrp?: IPosUndInstrmtGrp// [67] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingSettlementStatus.988
  TransactTime?: Date// [68] 60 (UtcTimestamp)
  PositionQty?: IPositionQty// [69] NoPositions.702, PosType.703 .. NestedPartySubIDType.805
  PositionAmountData?: IPositionAmountData// [70] NoPosAmt.753, PosAmtType.707 .. PosAmtPriceType.2877
  RegulatoryTradeIDGrp?: IRegulatoryTradeIDGrp// [71] NoRegulatoryTradeIDs.1907, RegulatoryTradeID.1903 .. RegulatoryTradeIDScope.2397
  PaymentGrp?: IPaymentGrp// [72] NoPayments.40212, PaymentType.40213 .. EncodedPaymentText.40985
  RegistStatus?: string// [73] 506 (String)
  DeliveryDate?: Date// [74] 743 (LocalDate)
  ModelType?: number// [75] 1434 (Int)
  PriceDelta?: number// [76] 811 (Float)
  RelatedTradeGrp?: IRelatedTradeGrp// [77] NoRelatedTrades.1855, RelatedTradeID.1856 .. RelatedTradeQuantity.1860
  Text?: string// [78] 58 (String)
  EncodedTextLen?: number// [79] 354 (Length)
  EncodedText?: Buffer// [80] 355 (RawData)
  StandardTrailer: IStandardTrailer// [81] SignatureLength.93, Signature.89, CheckSum.10
}
