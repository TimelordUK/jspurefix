import { ILegStreamEffectiveDateBusinessCenterGrp } from './leg_stream_effective_date_business_center_grp'

export interface ILegStreamEffectiveDate {
  LegStreamEffectiveDateUnadjusted?: Date// [1] 40249 (LocalDate)
  LegStreamEffectiveDateBusinessDayConvention?: number// [1] 40250 (Int)
  LegStreamEffectiveDateRelativeTo?: number// [1] 40252 (Int)
  LegStreamEffectiveDateOffsetPeriod?: number// [1] 40253 (Int)
  LegStreamEffectiveDateOffsetUnit?: string// [1] 40254 (String)
  LegStreamEffectiveDateOffsetDayType?: number// [1] 40255 (Int)
  LegStreamEffectiveDateAdjusted?: Date// [1] 40256 (LocalDate)
  LegStreamEffectiveDateBusinessCenterGrp?: ILegStreamEffectiveDateBusinessCenterGrp[]// [1] BizCtr.40251
}
