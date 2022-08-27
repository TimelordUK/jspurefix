import { IBidDescReqGrpNoBidDescriptors } from './bid_desc_req_grp_no_bid_descriptors'

export interface IBidDescReqGrp {
  NoBidDescriptors?: IBidDescReqGrpNoBidDescriptors[]// [1] BidDescriptorType.399, BidDescriptor.400 .. ValueOfFutures.408
}
