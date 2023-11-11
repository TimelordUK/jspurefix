import { IStandardHeader } from './set/standard_header'
import { IInstrmtStrkPxGrp } from './set/instrmt_strk_px_grp'

/*
***************************************************
* ListStrikePrice can be found in Volume 4 of the *
*                                                 *
* specification                                   *
***************************************************
*/
export interface IListStrikePrice {
  ListID: string// [2] 66 (String)
  TotNoStrikes: number// [2] 422 (Int)
  LastFragment?: boolean// [2] 893 (Boolean)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
  InstrmtStrkPxGrp?: IInstrmtStrkPxGrp[]// [2] PrevClsPx.140, ClOrdID.11 .. EncTxt.355
}
