import { IStandardHeader } from './set/standard_header'
import { ICompIDReqGrp } from './set/comp_id_req_grp'
import { IStandardTrailer } from './set/standard_trailer'

/*
****************************************************************
* This message is send either immediately after logging on to  *
* inform a network (counterparty system) of the type of        *
* updates required or to at any other time in the FIX          *
* conversation to change the nature of the types of status     *
* updates required. It can also be used with a                 *
* NetworkRequestType of Snapshot to request a one-off report   *
* of the status of a network (or counterparty) system. Finally *
* this message can also be used to cancel a request to receive *
* updates into the status of the counterparties on a network   *
* by sending a NetworkRequestStatusMessage with a              *
* NetworkRequestType of StopSubscribing.                       *
****************************************************************
*/
export interface INetworkCounterpartySystemStatusRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  NetworkRequestType: number// [2] 935 (Int)
  NetworkRequestID: string// [3] 933 (String)
  CompIDReqGrp?: ICompIDReqGrp[]// [4] RefCompID.930, RefSubID.931 .. DeskID.284
  StandardTrailer: IStandardTrailer// [5] SignatureLength.93, Signature.89, CheckSum.10
}
