import { IQuotReqLegsGrpNoLegs } from './quot_req_legs_grp_no_legs'

export interface IQuotReqLegsGrp {
  NoLegs?: IQuotReqLegsGrpNoLegs[]// [1] LegSymbol.600, LegSymbolSfx.601 .. LegBenchmarkPriceType.680
}
