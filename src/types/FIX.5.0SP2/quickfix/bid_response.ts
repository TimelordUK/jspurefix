import { IStandardHeader } from './set/standard_header'
import { IBidCompRspGrp } from './set/bid_comp_rsp_grp'
import { IStandardTrailer } from './set/standard_trailer'

export interface IBidResponse {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  BidID?: string// [2] 390 (String)
  ClientBidID?: string// [3] 391 (String)
  BidCompRspGrp?: IBidCompRspGrp// [4] NoBidComponents.420, Commission.12 .. EncodedText.355
  StandardTrailer: IStandardTrailer// [5] SignatureLength.93, Signature.89, CheckSum.10
}
