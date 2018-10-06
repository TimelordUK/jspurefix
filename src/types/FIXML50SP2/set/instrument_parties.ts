import { IInstrumentPtysSubGrp } from './instrument_ptys_sub_grp'

export interface IInstrumentParties {
  InstrumentPartyID?: string// 1019
  InstrumentPartyIDSource?: string// 1050
  InstrumentPartyRole?: number// 1051
  InstrumentPartyRoleQualifier?: number// 2378
  InstrumentPtysSubGrp?: IInstrumentPtysSubGrp[]
}
