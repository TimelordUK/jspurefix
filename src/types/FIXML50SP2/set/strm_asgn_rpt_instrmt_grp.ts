import { IInstrument } from './instrument'

export interface IStrmAsgnRptInstrmtGrp {
  InstrumentScopeSettlType?: string// 1557
  StreamAsgnType?: number// 1617
  MDStreamID?: string// 1500
  CollRptRejectReason?: number// 2487
  UnderlyingProvisionText?: string// 42170
  EncodedUnderlyingProvisionTextLen?: string// 42171
  EncodedUnderlyingProvisionText?: Buffer// 42172
  Instrument?: IInstrument
}
