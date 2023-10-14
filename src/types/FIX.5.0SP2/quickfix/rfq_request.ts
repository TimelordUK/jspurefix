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
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  RFQReqID: string// [2] 644 (String)
  Parties?: IParties[]// [3] PartyID.448, PartyIDSource.447 .. PartySubIDType.803
  RFQReqGrp: IRFQReqGrp[]// [4] Symbol.55, SymbolSfx.65 .. TradingSessionSubID.625
  SubscriptionRequestType?: string// [5] 263 (String)
  PrivateQuote?: boolean// [6] 1171 (Boolean)
  StandardTrailer: IStandardTrailer// [7] SignatureLength.93, Signature.89, CheckSum.10
}
