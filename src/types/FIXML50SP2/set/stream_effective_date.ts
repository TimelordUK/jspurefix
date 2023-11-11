import { IStreamEffectiveBusinessCenterGrp } from './stream_effective_business_center_grp'

export interface IStreamEffectiveDate {
  StreamEffectiveDateUnadjusted?: Date// [1] 40907 (LocalDate)
  StreamEffectiveDateBusinessDayConvention?: number// [1] 40908 (Int)
  StreamEffectiveDateRelativeTo?: number// [1] 40910 (Int)
  StreamEffectiveDateOffsetPeriod?: number// [1] 40911 (Int)
  StreamEffectiveDateOffsetUnit?: string// [1] 40912 (String)
  StreamEffectiveDateOffsetDayType?: number// [1] 40913 (Int)
  StreamEffectiveDateAdjusted?: Date// [1] 40914 (LocalDate)
  StreamEffectiveBusinessCenterGrp?: IStreamEffectiveBusinessCenterGrp[]// [1] Ctr.40909
}
