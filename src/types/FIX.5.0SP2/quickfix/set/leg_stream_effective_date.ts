import { ILegStreamEffectiveDateBusinessCenterGrp } from './leg_stream_effective_date_business_center_grp'

export interface ILegStreamEffectiveDate {
  LegStreamEffectiveDateUnadjusted?: Date// [1] 40249 (LocalDate)
  LegStreamEffectiveDateBusinessDayConvention?: number// [2] 40250 (Int)
  LegStreamEffectiveDateBusinessCenterGrp?: ILegStreamEffectiveDateBusinessCenterGrp// [3] NoLegStreamEffectiveDateBusinessCenters.40942, LegStreamEffectiveDateBusinessCenter.40251
  LegStreamEffectiveDateRelativeTo?: number// [4] 40252 (Int)
  LegStreamEffectiveDateOffsetPeriod?: number// [5] 40253 (Int)
  LegStreamEffectiveDateOffsetUnit?: string// [6] 40254 (String)
  LegStreamEffectiveDateOffsetDayType?: number// [7] 40255 (Int)
  LegStreamEffectiveDateAdjusted?: Date// [8] 40256 (LocalDate)
}
