import { IUndlyInstrumentPtysSubGrp } from './undly_instrument_ptys_sub_grp'

export interface IUndlyInstrumentParties {
  UnderlyingInstrumentPartyID?: string// [1] 1059 (String)
  UnderlyingInstrumentPartyIDSource?: string// [1] 1060 (String)
  UnderlyingInstrumentPartyRole?: number// [1] 1061 (Int)
  UnderlyingInstrumentPartyRoleQualifier?: number// [1] 2391 (Int)
  UndlyInstrumentPtysSubGrp?: IUndlyInstrumentPtysSubGrp[]// [1] ID.1063, Typ.1064
}
