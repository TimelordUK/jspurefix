import { IStreamEffectiveDateBusinessCenterGrp } from './stream_effective_date_business_center_grp'

export interface IStreamEffectiveDate {
  StreamEffectiveDateUnadjusted?: Date// [1] 40907 (LocalDate)
  StreamEffectiveDateBusinessDayConvention?: number// [2] 40908 (Int)
  StreamEffectiveDateBusinessCenterGrp?: IStreamEffectiveDateBusinessCenterGrp// [3] NoStreamEffectiveDateBusinessCenters.40960, StreamEffectiveDateBusinessCenter.40909
  StreamEffectiveDateRelativeTo?: number// [4] 40910 (Int)
  StreamEffectiveDateOffsetPeriod?: number// [5] 40911 (Int)
  StreamEffectiveDateOffsetUnit?: string// [6] 40912 (String)
  StreamEffectiveDateOffsetDayType?: number// [7] 40913 (Int)
  StreamEffectiveDateAdjusted?: Date// [8] 40914 (LocalDate)
}
