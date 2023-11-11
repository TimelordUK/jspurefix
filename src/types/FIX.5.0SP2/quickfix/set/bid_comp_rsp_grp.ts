import { IBidCompRspGrpNoBidComponents } from './bid_comp_rsp_grp_no_bid_components'

export interface IBidCompRspGrp {
  NoBidComponents?: IBidCompRspGrpNoBidComponents[]// [1] Commission.12, CommType.13 .. EncodedText.355
}
