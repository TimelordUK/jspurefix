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
  ListID: string// 66
  TotNoStrikes: number// 422
  LastFragment?: string// 893
  StandardHeader?: IStandardHeader
  InstrmtStrkPxGrp?: IInstrmtStrkPxGrp[]
}
