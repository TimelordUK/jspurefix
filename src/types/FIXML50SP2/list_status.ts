import { IStandardHeader } from './set/standard_header'
import { IOrdListStatGrp } from './set/ord_list_stat_grp'

/*
**********************************************
* ListStatus can be found in Volume 4 of the *
*                                            *
* specification                              *
**********************************************
*/
export interface IListStatus {
  ListID: string// [2] 66 (String)
  ListStatusType: number// [2] 429 (Int)
  NoRpts: number// [2] 82 (Int)
  ListOrderStatus: number// [2] 431 (Int)
  ContingencyType?: number// [2] 1385 (Int)
  ListRejectReason?: number// [2] 1386 (Int)
  RptSeq: number// [2] 83 (Int)
  ListStatusText?: string// [2] 444 (String)
  EncodedListStatusTextLen?: number// [2] 445 (Length)
  EncodedListStatusText?: Buffer// [2] 446 (RawData)
  TransactTime?: Date// [2] 60 (UtcTimestamp)
  TotNoOrders: number// [2] 68 (Int)
  LastFragment?: boolean// [2] 893 (Boolean)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
  OrdListStatGrp?: IOrdListStatGrp[]// [2] ClOrdID.11, OrdID.37 .. EncTxt.355
}
