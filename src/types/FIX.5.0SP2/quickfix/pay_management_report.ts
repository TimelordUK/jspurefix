import { IStandardHeader } from './set/standard_header'
import { IInstrument } from './set/instrument'
import { IRelatedTradeGrp } from './set/related_trade_grp'
import { IParties } from './set/parties'
import { IPostTradePayment } from './set/post_trade_payment'
import { ISettlDetails } from './set/settl_details'
import { IStandardTrailer } from './set/standard_trailer'

export interface IPayManagementReport {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  PayReportID: string// [2] 2799 (String)
  PayRequestID?: string// [3] 2812 (String)
  PayReportTransType: number// [4] 2804 (Int)
  PayReportRefID?: string// [5] 2803 (String)
  ReplaceText?: string// [6] 2805 (String)
  EncodedReplaceTextLen?: number// [7] 2802 (Length)
  EncodedReplaceText?: Buffer// [8] 2801 (RawData)
  PayRequestStatus?: number// [9] 2813 (Int)
  PayDisputeReason?: number// [10] 2800 (Int)
  RejectText?: string// [11] 1328 (String)
  EncodedRejectTextLen?: number// [12] 1664 (Length)
  EncodedRejectText?: Buffer// [13] 1665 (RawData)
  ClearingBusinessDate?: Date// [14] 715 (LocalDate)
  TransactTime: Date// [15] 60 (UtcTimestamp)
  Text?: string// [16] 58 (String)
  EncodedTextLen?: number// [17] 354 (Length)
  EncodedText?: Buffer// [18] 355 (RawData)
  Instrument?: IInstrument// [19] Symbol.55, SymbolSfx.65 .. ExchangeLookAlike.2603
  RelatedTradeGrp?: IRelatedTradeGrp// [20] NoRelatedTrades.1855, RelatedTradeID.1856 .. RelatedTradeQuantity.1860
  Parties?: IParties// [21] NoPartyIDs.453, PartyID.448 .. PartySubIDType.803
  PostTradePayment?: IPostTradePayment// [22] PostTradePaymentType.2824, PostTradePaymentAmount.2817 .. PostTradePaymentStatus.2823
  SettlDetails?: ISettlDetails// [23] NoSettlDetails.1158, SettlObligSource.1164 .. SettlPartySubIDType.786
  StandardTrailer: IStandardTrailer// [24] SignatureLength.93, Signature.89, CheckSum.10
}
