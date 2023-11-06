import { IStandardHeader } from './set/standard_header'
import { IRootParties } from './set/root_parties'
import { IListOrdGrp } from './set/list_ord_grp'

/*
************************************************
* NewOrderList can be found in Volume 4 of the *
*                                              *
* specification                                *
************************************************
*/
export interface INewOrderList {
  ListID: string// [2] 66 (String)
  BidID?: string// [2] 390 (String)
  ClientBidID?: string// [2] 391 (String)
  ProgRptReqs?: number// [2] 414 (Int)
  BidType: number// [2] 394 (Int)
  ProgPeriodInterval?: number// [2] 415 (Int)
  CancellationRights?: string// [2] 480 (String)
  MoneyLaunderingStatus?: string// [2] 481 (String)
  RegistID?: string// [2] 513 (String)
  ListExecInstType?: string// [2] 433 (String)
  ListExecInst?: string// [2] 69 (String)
  ContingencyType?: number// [2] 1385 (Int)
  EncodedListExecInstLen?: number// [2] 352 (Length)
  EncodedListExecInst?: Buffer// [2] 353 (RawData)
  AllowableOneSidednessPct?: number// [2] 765 (Float)
  AllowableOneSidednessValue?: number// [2] 766 (Float)
  AllowableOneSidednessCurr?: string// [2] 767 (String)
  ListManualOrderIndicator?: boolean// [2] 2401 (Boolean)
  TotNoOrders: number// [2] 68 (Int)
  LastFragment?: boolean// [2] 893 (Boolean)
  ThrottleInst?: number// [2] 1685 (Int)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
  RootParties?: IRootParties[]// [2] ID.1117, Src.1118 .. Qual.2388
  ListOrdGrp?: IListOrdGrp[]// [3] ClOrdID.11, ClOrdID2.526 .. ManOrdInd.1028
}
