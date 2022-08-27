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
  RptSeq: number// [6] 83 (Int)
  ListStatusText?: string// [7] 444 (String)
  EncodedListStatusTextLen?: number// [8] 445 (Int)
  EncodedListStatusText?: Buffer// [9] 446 (RawData)
  TransactTime?: Date// [10] 60 (UtcTimestamp)
  TotNoOrders: number// [11] 68 (Int)
  LastFragment?: boolean// [12] 893 (Boolean)
  OrdListStatGrp: IOrdListStatGrp[]// [13] ClOrdID.11, SecondaryClOrdID.526 .. EncodedText.355
  StandardTrailer: IStandardTrailer// [14] SignatureLength.93, Signature.89, CheckSum.10
}
