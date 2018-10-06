import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IRFQReqGrp } from './set/rfq_req_grp'
import { IStandardTrailer } from './set/standard_trailer'

/*
****************************************************************
* In tradeable and restricted tradeable quoting markets       *
* Quote Requests are issued by counterparties interested in    *
* ascertaining the market for an instrument. Quote Requests    *
* are then distributed by the market to liquidity providers    *
* who make markets in the instrument. The RFQ Request is used  *
* by liquidity providers to indicate to the market for which   *
* instruments they are interested in receiving Quote Requests. *
* It can be used to register interest in receiving quote       *
* requests for a single instrument or for multiple instruments *
****************************************************************
*/
export interface IRFQRequest {
  StandardHeader: IStandardHeader
  RFQReqID: string// 644
  Parties?: IParties[]
  RFQReqGrp: IRFQReqGrp[]
  SubscriptionRequestType?: string// 263
  PrivateQuote?: boolean// 1171
  StandardTrailer: IStandardTrailer
}
