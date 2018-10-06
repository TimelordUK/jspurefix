import { IStandardHeader } from './set/standard_header'
import { IInstrmtStrkPxGrp } from './set/instrmt_strk_px_grp'
import { IStandardTrailer } from './set/standard_trailer'

/*
*************************************************************
* The strike price message is used to exchange strike price *
* information for principal trades. It can also be used to  *
* exchange reference prices for agency trades.              *
*************************************************************
*/
export interface IListStrikePrice {
  StandardHeader: IStandardHeader
  ListID: string// 66
  TotNoStrikes: number// 422
  LastFragment?: boolean// 893
  InstrmtStrkPxGrp: IInstrmtStrkPxGrp[]
  StandardTrailer: IStandardTrailer
}
