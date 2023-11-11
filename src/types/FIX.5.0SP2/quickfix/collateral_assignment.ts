import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IExecCollGrp } from './set/exec_coll_grp'
import { ITrdCollGrp } from './set/trd_coll_grp'
import { IInstrument } from './set/instrument'
import { IFinancingDetails } from './set/financing_details'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { IUndInstrmtCollGrp } from './set/und_instrmt_coll_grp'
import { ITrdRegTimestamps } from './set/trd_reg_timestamps'
import { IMiscFeesGrp } from './set/misc_fees_grp'
import { ISpreadOrBenchmarkCurveData } from './set/spread_or_benchmark_curve_data'
import { IStipulations } from './set/stipulations'
import { ISettlInstructionsData } from './set/settl_instructions_data'
import { IStandardTrailer } from './set/standard_trailer'

export interface ICollateralAssignment {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  CollAsgnID: string// [2] 902 (String)
  CollReqID?: string// [3] 894 (String)
  CollAsgnReason: number// [4] 895 (Int)
  CollAsgnTransType: number// [5] 903 (Int)
  CollAsgnRefID?: string// [6] 907 (String)
  TransactTime: Date// [7] 60 (UtcTimestamp)
  ExpireTime?: Date// [8] 126 (UtcTimestamp)
  Parties?: IParties// [9] NoPartyIDs.453, PartyID.448 .. PartySubIDType.803
  Account?: string// [10] 1 (String)
  AccountType?: number// [11] 581 (Int)
  ClOrdID?: string// [12] 11 (String)
  OrderID?: string// [13] 37 (String)
  SecondaryOrderID?: string// [14] 198 (String)
  SecondaryClOrdID?: string// [15] 526 (String)
  ExecCollGrp?: IExecCollGrp// [16] NoExecs.124, ExecID.17
  TrdCollGrp?: ITrdCollGrp// [17] NoTrades.897, TradeReportID.571, SecondaryTradeReportID.818
  Instrument?: IInstrument// [18] Symbol.55, SymbolSfx.65 .. ExchangeLookAlike.2603
  FinancingDetails?: IFinancingDetails// [19] AgreementDesc.913, AgreementID.914 .. MarginRatio.898
  SettlDate?: Date// [20] 64 (LocalDate)
  Quantity?: number// [21] 53 (Float)
  QtyType?: number// [22] 854 (Int)
  Currency?: string// [23] 15 (String)
  CurrencyCodeSource?: string// [24] 2897 (String)
  InstrmtLegGrp?: IInstrmtLegGrp// [25] NoLegs.555, LegSymbol.600 .. LegMarginRatio.2508
  UndInstrmtCollGrp?: IUndInstrmtCollGrp// [26] NoUnderlyings.711, UnderlyingSymbol.311 .. CollAction.944
  MarginExcess?: number// [27] 899 (Float)
  TotalNetValue?: number// [28] 900 (Float)
  CashOutstanding?: number// [29] 901 (Float)
  TrdRegTimestamps?: ITrdRegTimestamps// [30] NoTrdRegTimestamps.768, TrdRegTimestamp.769 .. NBBOSource.2834
  Side?: string// [31] 54 (String)
  MiscFeesGrp?: IMiscFeesGrp// [32] NoMiscFees.136, MiscFeeAmt.137 .. MiscFeeDesc.2713
  Price?: number// [33] 44 (Float)
  PriceType?: number// [34] 423 (Int)
  AccruedInterestAmt?: number// [35] 159 (Float)
  EndAccruedInterestAmt?: number// [36] 920 (Float)
  StartCash?: number// [37] 921 (Float)
  EndCash?: number// [38] 922 (Float)
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData// [39] Spread.218, BenchmarkCurveCurrency.220 .. BenchmarkSecurityIDSource.761
  Stipulations?: IStipulations// [40] NoStipulations.232, StipulationType.233, StipulationValue.234
  SettlInstructionsData?: ISettlInstructionsData// [41] SettlDeliveryType.172, StandInstDbType.169 .. SettlPartySubIDType.786
  TradingSessionID?: string// [42] 336 (String)
  TradingSessionSubID?: string// [43] 625 (String)
  SettlSessID?: string// [44] 716 (String)
  SettlSessSubID?: string// [45] 717 (String)
  WireReference?: string// [46] 2486 (String)
  TradeDate?: Date// [47] 75 (LocalDate)
  TransactionID?: string// [48] 2485 (String)
  FirmTransactionID?: string// [49] 2484 (String)
  ClearingBusinessDate?: Date// [50] 715 (LocalDate)
  CollateralRequestLinkID?: string// [51] 2517 (String)
  TotNumCollateralRequests?: number// [52] 2519 (Int)
  CollateralRequestNumber?: number// [53] 2518 (Int)
  CollateralRequestInstruction?: string// [54] 2516 (String)
  Text?: string// [55] 58 (String)
  EncodedTextLen?: number// [56] 354 (Length)
  EncodedText?: Buffer// [57] 355 (RawData)
  StandardTrailer: IStandardTrailer// [58] SignatureLength.93, Signature.89, CheckSum.10
}
