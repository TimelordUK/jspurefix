import { IStandardHeader } from './set/standard_header'
import { IRootParties } from './set/root_parties'
import { IListOrdGrp } from './set/list_ord_grp'
import { IStandardTrailer } from './set/standard_trailer'

/*
*************************************************************
* The NewOrderList Message can be used in one of two ways   *
* depending on which market conventions are being followed. *
*************************************************************
*/
export interface INewOrderList {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  ListID: string// [2] 66 (String)
  BidID?: string// [3] 390 (String)
  ClientBidID?: string// [4] 391 (String)
  ProgRptReqs?: number// [5] 414 (Int)
  BidType: number// [6] 394 (Int)
  ProgPeriodInterval?: number// [7] 415 (Int)
  CancellationRights?: string// [8] 480 (String)
  MoneyLaunderingStatus?: string// [9] 481 (String)
  RegistID?: string// [10] 513 (String)
  ListExecInstType?: string// [11] 433 (String)
  ListExecInst?: string// [12] 69 (String)
  ContingencyType?: number// [13] 1385 (Int)
  EncodedListExecInstLen?: number// [14] 352 (Int)
  EncodedListExecInst?: Buffer// [15] 353 (RawData)
  AllowableOneSidednessPct?: number// [16] 765 (Float)
  AllowableOneSidednessValue?: number// [17] 766 (Float)
  AllowableOneSidednessCurr?: string// [18] 767 (String)
  TotNoOrders: number// [19] 68 (Int)
  LastFragment?: boolean// [20] 893 (Boolean)
  RootParties?: IRootParties[]// [21] RootPartyID.1117, RootPartyIDSource.1118 .. RootPartySubIDType.1122
  ListOrdGrp: IListOrdGrp[]// [22] ClOrdID.11, SecondaryClOrdID.526 .. Designation.494
  StandardTrailer: IStandardTrailer// [23] SignatureLength.93, Signature.89, CheckSum.10
}
