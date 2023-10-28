import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IExecCollGrp } from './set/exec_coll_grp'
import { ITrdCollGrp } from './set/trd_coll_grp'
import { IInstrument } from './set/instrument'
import { IFinancingDetails } from './set/financing_details'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { ICollateralAmountGrp } from './set/collateral_amount_grp'
import { IRegulatoryTradeIDGrp } from './set/regulatory_trade_id_grp'
import { ITrdRegTimestamps } from './set/trd_reg_timestamps'
import { IMiscFeesGrp } from './set/misc_fees_grp'
import { ISpreadOrBenchmarkCurveData } from './set/spread_or_benchmark_curve_data'
import { IStipulations } from './set/stipulations'
import { ISettlInstructionsData } from './set/settl_instructions_data'
import { IFundingSourceGrp } from './set/funding_source_grp'
import { ITransactionAttributeGrp } from './set/transaction_attribute_grp'
import { IStandardTrailer } from './set/standard_trailer'

export interface ICollateralReport {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  CollRptID: string// [2] 908 (String)
  CollInquiryID?: string// [3] 909 (String)
  TransactTime?: Date// [4] 60 (UtcTimestamp)
  CollApplType?: number// [5] 1043 (Int)
  FinancialStatus?: string// [6] 291 (String)
  CollStatus: number// [7] 910 (Int)
  TotNumReports?: number// [8] 911 (Int)
  LastRptRequested?: boolean// [9] 912 (Boolean)
  Parties?: IParties// [10] NoPartyIDs.453, PartyID.448 .. PartySubIDType.803
  Account?: string// [11] 1 (String)
  AccountType?: number// [12] 581 (Int)
  ClOrdID?: string// [13] 11 (String)
  OrderID?: string// [14] 37 (String)
  SecondaryOrderID?: string// [15] 198 (String)
  SecondaryClOrdID?: string// [16] 526 (String)
  ExecCollGrp?: IExecCollGrp// [17] NoExecs.124, ExecID.17
  TrdCollGrp?: ITrdCollGrp// [18] NoTrades.897, TradeReportID.571, SecondaryTradeReportID.818
  Instrument?: IInstrument// [19] Symbol.55, SymbolSfx.65 .. ExchangeLookAlike.2603
  FinancingDetails?: IFinancingDetails// [20] AgreementDesc.913, AgreementID.914 .. MarginRatio.898
  SettlDate?: Date// [21] 64 (LocalDate)
  Quantity?: number// [22] 53 (Float)
  QtyType?: number// [23] 854 (Int)
  Currency?: string// [24] 15 (String)
  CurrencyCodeSource?: string// [25] 2897 (String)
  InstrmtLegGrp?: IInstrmtLegGrp// [26] NoLegs.555, LegSymbol.600 .. LegMarginRatio.2508
  UndInstrmtGrp?: IUndInstrmtGrp// [27] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingInstrumentXID.2631
  MarginExcess?: number// [28] 899 (Float)
  TotalNetValue?: number// [29] 900 (Float)
  CashOutstanding?: number// [30] 901 (Float)
  CollateralAmountGrp?: ICollateralAmountGrp// [31] NoCollateralAmounts.1703, CurrentCollateralAmount.1704 .. UnderlyingRefID.2841
  CollateralizationValueDate?: Date// [32] 2868 (LocalDate)
  TradeCollateralization?: number// [33] 1936 (Int)
  RegulatoryTradeIDGrp?: IRegulatoryTradeIDGrp// [34] NoRegulatoryTradeIDs.1907, RegulatoryTradeID.1903 .. RegulatoryTradeIDScope.2397
  TrdRegTimestamps?: ITrdRegTimestamps// [35] NoTrdRegTimestamps.768, TrdRegTimestamp.769 .. NBBOSource.2834
  Side?: string// [36] 54 (String)
  MiscFeesGrp?: IMiscFeesGrp// [37] NoMiscFees.136, MiscFeeAmt.137 .. MiscFeeDesc.2713
  Price?: number// [38] 44 (Float)
  PriceType?: number// [39] 423 (Int)
  AccruedInterestAmt?: number// [40] 159 (Float)
  EndAccruedInterestAmt?: number// [41] 920 (Float)
  StartCash?: number// [42] 921 (Float)
  EndCash?: number// [43] 922 (Float)
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData// [44] Spread.218, BenchmarkCurveCurrency.220 .. BenchmarkSecurityIDSource.761
  Stipulations?: IStipulations// [45] NoStipulations.232, StipulationType.233, StipulationValue.234
  SettlInstructionsData?: ISettlInstructionsData// [46] SettlDeliveryType.172, StandInstDbType.169 .. SettlPartySubIDType.786
  TradingSessionID?: string// [47] 336 (String)
  TradingSessionSubID?: string// [48] 625 (String)
  SettlSessID?: string// [49] 716 (String)
  SettlSessSubID?: string// [50] 717 (String)
  RegulatoryReportType?: number// [51] 1934 (Int)
  RegulatoryReportTypeBusinessDate?: Date// [52] 2869 (LocalDate)
  ClearingBusinessDate?: Date// [53] 715 (LocalDate)
  WireReference?: string// [54] 2486 (String)
  TradeDate?: Date// [55] 75 (LocalDate)
  TransactionID?: string// [56] 2485 (String)
  FirmTransactionID?: string// [57] 2484 (String)
  FundingSourceGrp?: IFundingSourceGrp// [58] NoFundingSources.2849, FundingSource.2846 .. FundingSourceCurrencyCodeSource.2954
  TransactionAttributeGrp?: ITransactionAttributeGrp// [59] NoTransactionAttributes.2871, TransactionAttributeType.2872, TransactionAttributeValue.2873
  Text?: string// [60] 58 (String)
  EncodedTextLen?: number// [61] 354 (Length)
  EncodedText?: Buffer// [62] 355 (RawData)
  StandardTrailer: IStandardTrailer// [63] SignatureLength.93, Signature.89, CheckSum.10
}
