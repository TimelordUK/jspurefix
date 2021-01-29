import { IInstrument } from './instrument'
import { IUndInstrmtGrp } from './und_instrmt_grp'

export interface IInstrmtStrkPxGrp {
  Instrument: IInstrument
  UndInstrmtGrp?: IUndInstrmtGrp
  PrevClosePx?: number// 140
  ClOrdID?: string// 11
  SecondaryClOrdID?: string// 526
  Side?: string// 54
  Price?: number// 44
  Currency?: string// 15
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
}
