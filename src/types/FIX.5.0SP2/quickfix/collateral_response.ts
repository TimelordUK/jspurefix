import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IExecCollGrp } from './set/exec_coll_grp'
import { ITrdCollGrp } from './set/trd_coll_grp'
import { IInstrument } from './set/instrument'
import { IFinancingDetails } from './set/financing_details'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { IUndInstrmtCollGrp } from './set/und_instrmt_coll_grp'
import { ICollateralAmountGrp } from './set/collateral_amount_grp'
import { ITrdRegTimestamps } from './set/trd_reg_timestamps'
import { IMiscFeesGrp } from './set/misc_fees_grp'
import { ISpreadOrBenchmarkCurveData } from './set/spread_or_benchmark_curve_data'
import { IStipulations } from './set/stipulations'
import { IStandardTrailer } from './set/standard_trailer'

export interface ICollateralResponse {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  CollRespID: string// [2] 904 (String)
  CollAsgnID?: string// [3] 902 (String)
  CollReqID?: string// [4] 894 (String)
  CollAsgnReason?: number// [5] 895 (Int)
  CollAsgnTransType?: number// [6] 903 (Int)
  CollAsgnRespType: number// [7] 905 (Int)
  CollAsgnRejectReason?: number// [8] 906 (Int)
  TransactTime: Date// [9] 60 (UtcTimestamp)
  CollApplType?: number// [10] 1043 (Int)
  FinancialStatus?: string// [11] 291 (String)
  ClearingBusinessDate?: Date// [12] 715 (LocalDate)
  Parties?: IParties// [13] NoPartyIDs.453, PartyID.448 .. PartySubIDType.803
  Account?: string// [14] 1 (String)
  AccountType?: number// [15] 581 (Int)
  ClOrdID?: string// [16] 11 (String)
  OrderID?: string// [17] 37 (String)
  SecondaryOrderID?: string// [18] 198 (String)
  SecondaryClOrdID?: string// [19] 526 (String)
  ExecCollGrp?: IExecCollGrp// [20] NoExecs.124, ExecID.17
  TrdCollGrp?: ITrdCollGrp// [21] NoTrades.897, TradeReportID.571, SecondaryTradeReportID.818
  Instrument?: IInstrument// [22] Symbol.55, SymbolSfx.65 .. ExchangeLookAlike.2603
  FinancingDetails?: IFinancingDetails// [23] AgreementDesc.913, AgreementID.914 .. MarginRatio.898
  SettlDate?: Date// [24] 64 (LocalDate)
  Quantity?: number// [25] 53 (Float)
  QtyType?: number// [26] 854 (Int)
  Currency?: string// [27] 15 (String)
  CurrencyCodeSource?: string// [28] 2897 (String)
  InstrmtLegGrp?: IInstrmtLegGrp// [29] NoLegs.555, LegSymbol.600 .. LegMarginRatio.2508
  UndInstrmtCollGrp?: IUndInstrmtCollGrp// [30] NoUnderlyings.711, UnderlyingSymbol.311 .. CollAction.944
  MarginExcess?: number// [31] 899 (Float)
  TotalNetValue?: number// [32] 900 (Float)
  CashOutstanding?: number// [33] 901 (Float)
  CollateralAmountGrp?: ICollateralAmountGrp// [34] NoCollateralAmounts.1703, CurrentCollateralAmount.1704 .. UnderlyingRefID.2841
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
  WireReference?: string// [46] 2486 (String)
  TradeDate?: Date// [47] 75 (LocalDate)
  TransactionID?: string// [48] 2485 (String)
  FirmTransactionID?: string// [49] 2484 (String)
  CollateralRequestLinkID?: string// [50] 2517 (String)
  TotNumCollateralRequests?: number// [51] 2519 (Int)
  CollateralRequestNumber?: number// [52] 2518 (Int)
  CollateralRequestInstruction?: string// [53] 2516 (String)
  Text?: string// [54] 58 (String)
  EncodedTextLen?: number// [55] 354 (Length)
  EncodedText?: Buffer// [56] 355 (RawData)
  WarningText?: string// [57] 2520 (String)
  EncodedWarningTextLen?: number// [58] 2522 (Length)
  EncodedWarningText?: Buffer// [59] 2521 (RawData)
  RejectText?: string// [60] 1328 (String)
  EncodedRejectTextLen?: number// [61] 1664 (Length)
  EncodedRejectText?: Buffer// [62] 1665 (RawData)
  StandardTrailer: IStandardTrailer// [63] SignatureLength.93, Signature.89, CheckSum.10
}
