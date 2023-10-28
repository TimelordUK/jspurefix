import { IStandardHeader } from './set/standard_header'
import { IRootParties } from './set/root_parties'
import { IListOrdGrp } from './set/list_ord_grp'
import { IStandardTrailer } from './set/standard_trailer'

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
  EncodedListExecInstLen?: number// [14] 352 (Length)
  EncodedListExecInst?: Buffer// [15] 353 (RawData)
  AllowableOneSidednessPct?: number// [16] 765 (Float)
  AllowableOneSidednessValue?: number// [17] 766 (Float)
  AllowableOneSidednessCurr?: string// [18] 767 (String)
  ListManualOrderIndicator?: boolean// [19] 2401 (Boolean)
  TotNoOrders: number// [20] 68 (Int)
  LastFragment?: boolean// [21] 893 (Boolean)
  RootParties?: IRootParties// [22] NoRootPartyIDs.1116, RootPartyID.1117 .. RootPartySubIDType.1122
  ListOrdGrp?: IListOrdGrp// [23] NoOrders.73, ClOrdID.11 .. ManualOrderIndicator.1028
  ThrottleInst?: number// [24] 1685 (Int)
  StandardTrailer: IStandardTrailer// [25] SignatureLength.93, Signature.89, CheckSum.10
}
