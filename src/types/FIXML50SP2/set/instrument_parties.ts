import { IInstrumentPtysSubGrp } from './instrument_ptys_sub_grp'

export interface IInstrumentParties {
  BatchID?: string// 50000
  LegContractualMatrixSource?: string// 42204
  UnderlyingProvisionPartyRole?: number// 42176
  UnderlyingProtectionTermEventQualifier?: string// 42086
  InstrumentPtysSubGrp?: IInstrumentPtysSubGrp[]
}
