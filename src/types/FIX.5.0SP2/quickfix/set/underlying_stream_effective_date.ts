import { IUnderlyingStreamEffectiveDateBusinessCenterGrp } from './underlying_stream_effective_date_business_center_grp'

export interface IUnderlyingStreamEffectiveDate {
  UnderlyingStreamEffectiveDateUnadjusted?: Date// [1] 40057 (LocalDate)
  UnderlyingStreamEffectiveDateBusinessDayConvention?: number// [2] 40058 (Int)
  UnderlyingStreamEffectiveDateBusinessCenterGrp?: IUnderlyingStreamEffectiveDateBusinessCenterGrp// [3] NoUnderlyingStreamEffectiveDateBusinessCenters.40975, UnderlyingStreamEffectiveDateBusinessCenter.40059
  UnderlyingStreamEffectiveDateRelativeTo?: number// [4] 40060 (Int)
  UnderlyingStreamEffectiveDateOffsetPeriod?: number// [5] 40061 (Int)
  UnderlyingStreamEffectiveDateOffsetUnit?: string// [6] 40062 (String)
  UnderlyingStreamEffectiveDateOffsetDayType?: number// [7] 40063 (Int)
  UnderlyingStreamEffectiveDateAdjusted?: Date// [8] 40064 (LocalDate)
}
