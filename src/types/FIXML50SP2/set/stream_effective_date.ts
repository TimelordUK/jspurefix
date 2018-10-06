import { IStreamEffectiveBusinessCenterGrp } from './stream_effective_business_center_grp'

export interface IStreamEffectiveDate {
  StreamEffectiveDateUnadjusted?: Date// 40907
  StreamEffectiveDateBusinessDayConvention?: number// 40908
  StreamEffectiveDateRelativeTo?: number// 40910
  StreamEffectiveDateOffsetPeriod?: number// 40911
  StreamEffectiveDateOffsetUnit?: string// 40912
  StreamEffectiveDateOffsetDayType?: number// 40913
  StreamEffectiveDateAdjusted?: Date// 40914
  StreamEffectiveBusinessCenterGrp?: IStreamEffectiveBusinessCenterGrp[]
}
