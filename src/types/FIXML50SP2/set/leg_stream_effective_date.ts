import { ILegStreamEffectiveDateBusinessCenterGrp } from './leg_stream_effective_date_business_center_grp'

export interface ILegStreamEffectiveDate {
  LegStreamEffectiveDateUnadjusted?: Date// 40249
  LegStreamEffectiveDateBusinessDayConvention?: number// 40250
  LegStreamEffectiveDateRelativeTo?: number// 40252
  LegStreamEffectiveDateOffsetPeriod?: number// 40253
  LegStreamEffectiveDateOffsetUnit?: string// 40254
  LegStreamEffectiveDateOffsetDayType?: number// 40255
  LegStreamEffectiveDateAdjusted?: Date// 40256
  LegStreamEffectiveDateBusinessCenterGrp?: ILegStreamEffectiveDateBusinessCenterGrp[]
}
