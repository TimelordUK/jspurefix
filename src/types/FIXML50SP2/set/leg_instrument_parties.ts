import { ILegInstrumentPtysSubGrp } from './leg_instrument_ptys_sub_grp'

export interface ILegInstrumentParties {
  LegInstrumentPartyID?: string// [1] 2255 (String)
  LegInstrumentPartyIDSource?: string// [1] 2256 (String)
  LegInstrumentPartyRole?: number// [1] 2257 (Int)
  LegInstrumentPartyRoleQualifier?: number// [1] 2379 (Int)
  LegInstrumentPtysSubGrp?: ILegInstrumentPtysSubGrp[]// [1] ID.2259, Typ.2260
}
