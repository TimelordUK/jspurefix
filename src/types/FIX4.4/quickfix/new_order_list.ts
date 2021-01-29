import { IListOrdGrp } from './set/list_ord_grp'

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
  EncodedListExecInstLen?: number// 352
  EncodedListExecInst?: Buffer// 353
  AllowableOneSidednessPct?: number// 765
  AllowableOneSidednessValue?: number// 766
  AllowableOneSidednessCurr?: string// 767
  TotNoOrders: number// 68
  LastFragment?: boolean// 893
  ListOrdGrp?: IListOrdGrp
}
