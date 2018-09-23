import { IStandardHeader } from './set/standard_header'
import { IRFQReqGrp } from './set/rfq_req_grp'
import { IStandardTrailer } from './set/standard_trailer'

/*
*************************************************************
* In tradeable and restricted tradeable quoting markets    *
* Quote Requests are issued by counterparties interested in *
* ascertaining the market for an instrument.                *
*************************************************************
*/
export interface IRFQRequest {
  StandardHeader: IStandardHeader
  RFQReqID: string// 644
  RFQReqGrp: IRFQReqGrp[]
  SubscriptionRequestType?: string// 263
  StandardTrailer: IStandardTrailer
}
