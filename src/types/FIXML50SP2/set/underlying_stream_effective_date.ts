import { IUnderlyingStreamEffectiveDateBusinessCenterGrp } from './underlying_stream_effective_date_business_center_grp'

export interface IUnderlyingStreamEffectiveDate {
  UnderlyingStreamEffectiveDateUnadjusted?: Date// [1] 40057 (LocalDate)
  UnderlyingStreamEffectiveDateBusinessDayConvention?: number// [1] 40058 (Int)
  UnderlyingStreamEffectiveDateRelativeTo?: number// [1] 40060 (Int)
  UnderlyingStreamEffectiveDateOffsetPeriod?: number// [1] 40061 (Int)
  UnderlyingStreamEffectiveDateOffsetUnit?: string// [1] 40062 (String)
  UnderlyingStreamEffectiveDateOffsetDayType?: number// [1] 40063 (Int)
  UnderlyingStreamEffectiveDateAdjusted?: Date// [1] 40064 (LocalDate)
  UnderlyingStreamEffectiveDateBusinessCenterGrp?: IUnderlyingStreamEffectiveDateBusinessCenterGrp[]// [1] Ctr.40059
}
