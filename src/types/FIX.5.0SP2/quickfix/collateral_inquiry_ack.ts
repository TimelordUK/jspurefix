import { IStandardHeader } from './set/standard_header'
import { ICollInqQualGrp } from './set/coll_inq_qual_grp'
import { IParties } from './set/parties'
import { IExecCollGrp } from './set/exec_coll_grp'
import { ITrdCollGrp } from './set/trd_coll_grp'
import { IInstrument } from './set/instrument'
import { IFinancingDetails } from './set/financing_details'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IStandardTrailer } from './set/standard_trailer'

export interface ICollateralInquiryAck {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  CollInquiryID: string// [2] 909 (String)
  CollInquiryStatus: number// [3] 945 (Int)
  CollInquiryResult?: number// [4] 946 (Int)
  CollInqQualGrp?: ICollInqQualGrp// [5] NoCollInquiryQualifier.938, CollInquiryQualifier.896
  TotNumReports?: number// [6] 911 (Int)
  Parties?: IParties// [7] NoPartyIDs.453, PartyID.448 .. PartySubIDType.803
  Account?: string// [8] 1 (String)
  AccountType?: number// [9] 581 (Int)
  ClOrdID?: string// [10] 11 (String)
  OrderID?: string// [11] 37 (String)
  SecondaryOrderID?: string// [12] 198 (String)
  SecondaryClOrdID?: string// [13] 526 (String)
  ExecCollGrp?: IExecCollGrp// [14] NoExecs.124, ExecID.17
  TrdCollGrp?: ITrdCollGrp// [15] NoTrades.897, TradeReportID.571, SecondaryTradeReportID.818
  Instrument?: IInstrument// [16] Symbol.55, SymbolSfx.65 .. ExchangeLookAlike.2603
  FinancingDetails?: IFinancingDetails// [17] AgreementDesc.913, AgreementID.914 .. MarginRatio.898
  SettlDate?: Date// [18] 64 (LocalDate)
  Quantity?: number// [19] 53 (Float)
  QtyType?: number// [20] 854 (Int)
  Currency?: string// [21] 15 (String)
  CurrencyCodeSource?: string// [22] 2897 (String)
  InstrmtLegGrp?: IInstrmtLegGrp// [23] NoLegs.555, LegSymbol.600 .. LegMarginRatio.2508
  UndInstrmtGrp?: IUndInstrmtGrp// [24] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingInstrumentXID.2631
  TradingSessionID?: string// [25] 336 (String)
  TradingSessionSubID?: string// [26] 625 (String)
  SettlSessID?: string// [27] 716 (String)
  SettlSessSubID?: string// [28] 717 (String)
  ClearingBusinessDate?: Date// [29] 715 (LocalDate)
  ResponseTransportType?: number// [30] 725 (Int)
  ResponseDestination?: string// [31] 726 (String)
  Text?: string// [32] 58 (String)
  EncodedTextLen?: number// [33] 354 (Length)
  EncodedText?: Buffer// [34] 355 (RawData)
  StandardTrailer: IStandardTrailer// [35] SignatureLength.93, Signature.89, CheckSum.10
}
