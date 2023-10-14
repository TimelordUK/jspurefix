import { IStandardHeader } from './set/standard_header'
import { IOrdListStatGrp } from './set/ord_list_stat_grp'
import { IStandardTrailer } from './set/standard_trailer'

/*
****************************************************************
* The list status message is issued as the response to a List  *
* Status Request message sent in an unsolicited fashion by the *
* sell-side. It indicates the current state of the orders      *
* within the list as they exist at the broker's site. This     *
* message may also be used to respond to the List Cancel       *
* Request.                                                     *
****************************************************************
*/
export interface IListStatus {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  ListID: string// [2] 66 (String)
  ListStatusType: number// [3] 429 (Int)
  NoRpts: number// [4] 82 (Int)
  ListOrderStatus: number// [5] 431 (Int)
  ContingencyType?: number// [6] 1385 (Int)
  ListRejectReason?: number// [7] 1386 (Int)
  RptSeq: number// [8] 83 (Int)
  ListStatusText?: string// [9] 444 (String)
  EncodedListStatusTextLen?: number// [10] 445 (Int)
  EncodedListStatusText?: Buffer// [11] 446 (RawData)
  TransactTime?: Date// [12] 60 (UtcTimestamp)
  TotNoOrders: number// [13] 68 (Int)
  LastFragment?: boolean// [14] 893 (Boolean)
  OrdListStatGrp: IOrdListStatGrp[]// [15] ClOrdID.11, OrderID.37 .. EncodedText.355
  StandardTrailer: IStandardTrailer// [16] SignatureLength.93, Signature.89, CheckSum.10
}
