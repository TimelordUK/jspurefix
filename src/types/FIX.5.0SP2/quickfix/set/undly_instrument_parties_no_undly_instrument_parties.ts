import { IUndlyInstrumentPtysSubGrp } from './undly_instrument_ptys_sub_grp'

export interface IUndlyInstrumentPartiesNoUndlyInstrumentParties {
  UnderlyingInstrumentPartyID?: string// [1] 1059 (String)
  UnderlyingInstrumentPartyIDSource?: string// [2] 1060 (String)
  UnderlyingInstrumentPartyRole?: number// [3] 1061 (Int)
  UnderlyingInstrumentPartyRoleQualifier?: number// [4] 2391 (Int)
  UndlyInstrumentPtysSubGrp?: IUndlyInstrumentPtysSubGrp// [5] NoUndlyInstrumentPartySubIDs.1062, UnderlyingInstrumentPartySubID.1063, UnderlyingInstrumentPartySubIDType.1064
}
