import { Iheader } from './set/header'
import { IInstrmtStrkPxGrp } from './set/instrmt_strk_px_grp'
import { IUndInstrmtStrkPxGrp } from './set/und_instrmt_strk_px_grp'
import { Itrailer } from './set/trailer'

export interface IListStrikePrice {
  header: Iheader
  ListID: string// 66
  TotNoStrikes: number// 422
  LastFragment?: boolean// 893
  InstrmtStrkPxGrp?: IInstrmtStrkPxGrp
  UndInstrmtStrkPxGrp?: IUndInstrmtStrkPxGrp
  trailer: Itrailer
}
