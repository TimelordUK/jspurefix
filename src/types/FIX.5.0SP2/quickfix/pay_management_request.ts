import { IStandardHeader } from './set/standard_header'
import { IInstrument } from './set/instrument'
import { IRelatedTradeGrp } from './set/related_trade_grp'
import { IParties } from './set/parties'
import { IPostTradePayment } from './set/post_trade_payment'
import { ISettlDetails } from './set/settl_details'
import { IStandardTrailer } from './set/standard_trailer'

export interface IPayManagementRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  PayRequestID: string// [2] 2812 (String)
  PayRequestTransType: number// [3] 2811 (Int)
  PayRequestRefID?: string// [4] 2810 (String)
  CancelText?: string// [5] 2807 (String)
  EncodedCancelTextLen?: number// [6] 2809 (Length)
  EncodedCancelText?: Buffer// [7] 2808 (RawData)
  ClearingBusinessDate?: Date// [8] 715 (LocalDate)
  TransactTime: Date// [9] 60 (UtcTimestamp)
  Text?: string// [10] 58 (String)
  EncodedTextLen?: number// [11] 354 (Length)
  EncodedText?: Buffer// [12] 355 (RawData)
  Instrument?: IInstrument// [13] Symbol.55, SymbolSfx.65 .. ExchangeLookAlike.2603
  RelatedTradeGrp?: IRelatedTradeGrp// [14] NoRelatedTrades.1855, RelatedTradeID.1856 .. RelatedTradeQuantity.1860
  Parties?: IParties// [15] NoPartyIDs.453, PartyID.448 .. PartySubIDType.803
  PostTradePayment?: IPostTradePayment// [16] PostTradePaymentType.2824, PostTradePaymentAmount.2817 .. PostTradePaymentStatus.2823
  SettlDetails?: ISettlDetails// [17] NoSettlDetails.1158, SettlObligSource.1164 .. SettlPartySubIDType.786
  StandardTrailer: IStandardTrailer// [18] SignatureLength.93, Signature.89, CheckSum.10
}
