import { IInstrmtStrkPxGrp } from './set/instrmt_strk_px_grp'
import { IUndInstrmtStrkPxGrp } from './set/und_instrmt_strk_px_grp'

export interface IListStrikePrice {
  ListID: string// 66
  TotNoStrikes: number// 422
  LastFragment?: boolean// 893
  InstrmtStrkPxGrp?: IInstrmtStrkPxGrp
  UndInstrmtStrkPxGrp?: IUndInstrmtStrkPxGrp
}
