import { ILegInstrumentPtysSubGrp } from './leg_instrument_ptys_sub_grp'

export interface ILegInstrumentPartiesNoLegInstrumentParties {
  LegInstrumentPartyID?: string// [1] 2255 (String)
  LegInstrumentPartyIDSource?: string// [2] 2256 (String)
  LegInstrumentPartyRole?: number// [3] 2257 (Int)
  LegInstrumentPartyRoleQualifier?: number// [4] 2379 (Int)
  LegInstrumentPtysSubGrp?: ILegInstrumentPtysSubGrp// [5] NoLegInstrumentPartySubIDs.2258, LegInstrumentPartySubID.2259, LegInstrumentPartySubIDType.2260
}
