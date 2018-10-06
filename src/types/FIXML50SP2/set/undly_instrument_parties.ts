import { IUndlyInstrumentPtysSubGrp } from './undly_instrument_ptys_sub_grp'

export interface IUndlyInstrumentParties {
  UnderlyingInstrumentPartyID?: string// 1059
  UnderlyingInstrumentPartyIDSource?: string// 1060
  UnderlyingInstrumentPartyRole?: number// 1061
  UnderlyingInstrumentPartyRoleQualifier?: number// 2391
  UndlyInstrumentPtysSubGrp?: IUndlyInstrumentPtysSubGrp[]
}
