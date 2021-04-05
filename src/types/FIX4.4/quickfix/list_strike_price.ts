import { IStandardHeader } from './set/standard_header'
import { IInstrmtStrkPxGrp } from './set/instrmt_strk_px_grp'
import { IUndInstrmtStrkPxGrp } from './set/und_instrmt_strk_px_grp'
import { IStandardTrailer } from './set/standard_trailer'

export interface IListStrikePrice {
  StandardHeader: IStandardHeader
  ListID: string// 66
  TotNoStrikes: number// 422
  LastFragment?: boolean// 893
  InstrmtStrkPxGrp?: IInstrmtStrkPxGrp
  UndInstrmtStrkPxGrp?: IUndInstrmtStrkPxGrp
  StandardTrailer: IStandardTrailer
}
