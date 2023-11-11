import { IInstrumentPtysSubGrp } from './instrument_ptys_sub_grp'

export interface IInstrumentParties {
  InstrumentPartyID?: string// [1] 1019 (String)
  InstrumentPartyIDSource?: string// [1] 1050 (String)
  InstrumentPartyRole?: number// [1] 1051 (Int)
  InstrumentPartyRoleQualifier?: number// [1] 2378 (Int)
  InstrumentPtysSubGrp?: IInstrumentPtysSubGrp[]// [1] ID.1053, Typ.1054
}
