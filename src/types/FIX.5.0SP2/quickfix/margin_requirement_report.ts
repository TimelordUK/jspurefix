import { IStandardHeader } from './set/standard_header'
import { IApplicationSequenceControl } from './set/application_sequence_control'
import { IParties } from './set/parties'
import { ITrdRegTimestamps } from './set/trd_reg_timestamps'
import { IInstrument } from './set/instrument'
import { IMarginAmount } from './set/margin_amount'
import { IStandardTrailer } from './set/standard_trailer'

export interface IMarginRequirementReport {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  ApplicationSequenceControl?: IApplicationSequenceControl// [2] ApplID.1180, ApplSeqNum.1181 .. ApplResendFlag.1352
  MarginReqmtRptID: string// [3] 1642 (String)
  MarginReqmtInqID?: string// [4] 1635 (String)
  MarginReqmtRptType: number// [5] 1638 (Int)
  TotNumReports?: number// [6] 911 (Int)
  LastRptRequested?: boolean// [7] 912 (Boolean)
  UnsolicitedIndicator?: boolean// [8] 325 (Boolean)
  Parties?: IParties// [9] NoPartyIDs.453, PartyID.448 .. PartySubIDType.803
  RegulatoryReportType?: number// [10] 1934 (Int)
  RegulatoryReportTypeBusinessDate?: Date// [11] 2869 (LocalDate)
  TrdRegTimestamps?: ITrdRegTimestamps// [12] NoTrdRegTimestamps.768, TrdRegTimestamp.769 .. NBBOSource.2834
  ClearingBusinessDate?: Date// [13] 715 (LocalDate)
  ClearingPortfolioID?: string// [14] 2870 (String)
  SettlSessID?: string// [15] 716 (String)
  SettlSessSubID?: string// [16] 717 (String)
  MarginClass?: string// [17] 1639 (String)
  Currency?: string// [18] 15 (String)
  CurrencyCodeSource?: string// [19] 2897 (String)
  Instrument?: IInstrument// [20] Symbol.55, SymbolSfx.65 .. ExchangeLookAlike.2603
  MarginAmount?: IMarginAmount// [21] NoMarginAmt.1643, MarginAmt.1645 .. MarginDirection.2851
  TransactTime?: Date// [22] 60 (UtcTimestamp)
  Text?: string// [23] 58 (String)
  EncodedTextLen?: number// [24] 354 (Length)
  EncodedText?: Buffer// [25] 355 (RawData)
  StandardTrailer: IStandardTrailer// [26] SignatureLength.93, Signature.89, CheckSum.10
}
