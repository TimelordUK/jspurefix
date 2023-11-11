import { ILegEvntGrpNoLegEvents } from './leg_evnt_grp_no_leg_events'

export interface ILegEvntGrp {
  NoLegEvents?: ILegEvntGrpNoLegEvents[]// [1] LegEventType.2060, LegEventDate.2061 .. EncodedLegEventText.2075
}
