import { IStandardHeader } from './set/standard_header'
import { IBidResponseNoBidComponents } from './set/bid_response_no_bid_components'
import { IStandardTrailer } from './set/standard_trailer'

export interface IBidResponse {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. OnBehalfOfSendingTime.370
  BidID?: string// [2] 390 (String)
  ClientBidID?: string// [3] 391 (String)
  NoBidComponents: IBidResponseNoBidComponents[]// [4] Commission.12, CommType.13 .. EncodedText.355
  StandardTrailer: IStandardTrailer// [5] SignatureLength.93, Signature.89, CheckSum.10
}
