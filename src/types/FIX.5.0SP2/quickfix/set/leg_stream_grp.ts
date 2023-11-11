import { ILegStreamGrpNoLegStreams } from './leg_stream_grp_no_leg_streams'

export interface ILegStreamGrp {
  NoLegStreams?: ILegStreamGrpNoLegStreams[]// [1] LegStreamType.40242, LegStreamXID.41700 .. EncodedLegStreamText.40979
}
