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
  Instrument?: IInstrument// [16] Symbol.55, SymbolSfx.65 .. InterestAccrualDate.874
  FinancingDetails?: IFinancingDetails// [17] AgreementDesc.913, AgreementID.914 .. MarginRatio.898
  SettlDate?: Date// [18] 64 (LocalDate)
  Quantity?: number// [19] 53 (Float)
  QtyType?: number// [20] 854 (Int)
  Currency?: string// [21] 15 (String)
  InstrmtLegGrp?: IInstrmtLegGrp// [22] NoLegs.555, LegSymbol.600 .. LegInterestAccrualDate.956
  UndInstrmtGrp?: IUndInstrmtGrp// [23] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingStipValue.889
  TradingSessionID?: string// [24] 336 (String)
  TradingSessionSubID?: string// [25] 625 (String)
  SettlSessID?: string// [26] 716 (String)
  SettlSessSubID?: string// [27] 717 (String)
  ClearingBusinessDate?: Date// [28] 715 (LocalDate)
  ResponseTransportType?: number// [29] 725 (Int)
  ResponseDestination?: string// [30] 726 (String)
  Text?: string// [31] 58 (String)
  EncodedTextLen?: number// [32] 354 (Length)
  EncodedText?: Buffer// [33] 355 (RawData)
  StandardTrailer: IStandardTrailer// [34] SignatureLength.93, Signature.89, CheckSum.10
}
