import { IInstrument } from './instrument'
import { IUndInstrmtGrp } from './und_instrmt_grp'

export interface IInstrmtStrkPxGrp {
  PrevClosePx?: number// 140
  ClOrdID?: string// 11
  SecondaryClOrdID?: string// 526
  RelativeValueSide?: number// 2532
  UnderlyingReturnRatePrice?: number// 43066
  UnderlyingReturnRatePriceCurrency?: string// 43067
  UnderlyingProvisionText?: string// 42170
  EncodedUnderlyingProvisionTextLen?: string// 42171
  EncodedUnderlyingProvisionText?: Buffer// 42172
  Instrument: IInstrument
  UndInstrmtGrp?: IUndInstrmtGrp[]
}
