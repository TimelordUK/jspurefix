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
  ListID: string// 66
  BidID?: string// 390
  ClientBidID?: string// 391
  ProgRptReqs?: number// 414
  BidType: number// 394
  ProgPeriodInterval?: number// 415
  CancellationRights?: string// 480
  MoneyLaunderingStatus?: string// 481
  RegistID?: string// 513
  ListExecInstType?: string// 433
  ListExecInst?: string// 69
  ContingencyType?: number// 1385
  EncodedListExecInstLen?: number// 352
  EncodedListExecInst?: Buffer// 353
  AllowableOneSidednessPct?: number// 765
  AllowableOneSidednessValue?: number// 766
  AllowableOneSidednessCurr?: string// 767
  ListManualOrderIndicator?: boolean// 2401
  TotNoOrders: number// 68
  LastFragment?: boolean// 893
  ThrottleInst?: number// 1685
  StandardHeader?: IStandardHeader
  RootParties?: IRootParties[]
  ListOrdGrp?: IListOrdGrp[]
}
