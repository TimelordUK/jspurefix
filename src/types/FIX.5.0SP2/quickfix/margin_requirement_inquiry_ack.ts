import { IStandardHeader } from './set/standard_header'
import { IMarginReqmtInqQualGrp } from './set/margin_reqmt_inq_qual_grp'
import { IParties } from './set/parties'
import { IInstrument } from './set/instrument'
import { IStandardTrailer } from './set/standard_trailer'

export interface IMarginRequirementInquiryAck {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  MarginReqmtInqID: string// [2] 1635 (String)
  MarginReqmtInqQualGrp?: IMarginReqmtInqQualGrp// [3] NoMarginReqmtInqQualifier.1636, MarginReqmtInqQualifier.1637
  MarginReqmtInqStatus: number// [4] 1640 (Int)
  MarginReqmtInqResult?: number// [5] 1641 (Int)
  TotNumReports?: number// [6] 911 (Int)
  SubscriptionRequestType?: string// [7] 263 (String)
  ResponseTransportType?: number// [8] 725 (Int)
  ResponseDestination?: string// [9] 726 (String)
  Parties?: IParties// [10] NoPartyIDs.453, PartyID.448 .. PartySubIDType.803
  ClearingBusinessDate?: Date// [11] 715 (LocalDate)
  SettlSessID?: string// [12] 716 (String)
  SettlSessSubID?: string// [13] 717 (String)
  MarginClass?: string// [14] 1639 (String)
  Instrument?: IInstrument// [15] Symbol.55, SymbolSfx.65 .. ExchangeLookAlike.2603
  TransactTime?: Date// [16] 60 (UtcTimestamp)
  Text?: string// [17] 58 (String)
  EncodedTextLen?: number// [18] 354 (Length)
  EncodedText?: Buffer// [19] 355 (RawData)
  StandardTrailer: IStandardTrailer// [20] SignatureLength.93, Signature.89, CheckSum.10
}
