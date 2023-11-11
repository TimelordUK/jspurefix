import { IStandardHeader } from './set/standard_header'
import { IMarginReqmtInqQualGrp } from './set/margin_reqmt_inq_qual_grp'
import { IParties } from './set/parties'
import { IInstrument } from './set/instrument'
import { IStandardTrailer } from './set/standard_trailer'

export interface IMarginRequirementInquiry {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  MarginReqmtInqID: string// [2] 1635 (String)
  MarginReqmtInqQualGrp?: IMarginReqmtInqQualGrp// [3] NoMarginReqmtInqQualifier.1636, MarginReqmtInqQualifier.1637
  SubscriptionRequestType?: string// [4] 263 (String)
  ResponseTransportType?: number// [5] 725 (Int)
  ResponseDestination?: string// [6] 726 (String)
  Parties?: IParties// [7] NoPartyIDs.453, PartyID.448 .. PartySubIDType.803
  ClearingBusinessDate?: Date// [8] 715 (LocalDate)
  SettlSessID?: string// [9] 716 (String)
  SettlSessSubID?: string// [10] 717 (String)
  MarginClass?: string// [11] 1639 (String)
  Instrument?: IInstrument// [12] Symbol.55, SymbolSfx.65 .. ExchangeLookAlike.2603
  TransactTime?: Date// [13] 60 (UtcTimestamp)
  Text?: string// [14] 58 (String)
  EncodedTextLen?: number// [15] 354 (Length)
  EncodedText?: Buffer// [16] 355 (RawData)
  StandardTrailer: IStandardTrailer// [17] SignatureLength.93, Signature.89, CheckSum.10
}
