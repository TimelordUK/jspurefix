import { IInstrument } from './instrument'

export interface IStrmAsgnRptInstrmtGrp {
  InstrumentScopeSettlType?: string// 1557
  StreamAsgnType?: number// 1617
  MDStreamID?: string// 1500
  CollRptRejectReason?: number// 2487
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  Instrument?: IInstrument
}
