import { ILegInstrumentPtysSubGrp } from './leg_instrument_ptys_sub_grp'

export interface ILegInstrumentParties {
  LegInstrumentPartyID?: string// 2255
  LegInstrumentPartyIDSource?: string// 2256
  LegInstrumentPartyRole?: number// 2257
  LegInstrumentPartyRoleQualifier?: number// 2379
  LegInstrumentPtysSubGrp?: ILegInstrumentPtysSubGrp[]
}
