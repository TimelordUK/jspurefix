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
  StandardHeader: IStandardHeader
  ListID: string// 66
  ListStatusType: number// 429
  NoRpts: number// 82
  ListOrderStatus: number// 431
  ContingencyType?: number// 1385
  ListRejectReason?: number// 1386
  RptSeq: number// 83
  ListStatusText?: string// 444
  EncodedListStatusTextLen?: number// 445
  EncodedListStatusText?: Buffer// 446
  TransactTime?: Date// 60
  TotNoOrders: number// 68
  LastFragment?: boolean// 893
  OrdListStatGrp: IOrdListStatGrp[]
  StandardTrailer: IStandardTrailer
}
