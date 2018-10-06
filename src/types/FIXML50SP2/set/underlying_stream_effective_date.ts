import { IUnderlyingStreamEffectiveDateBusinessCenterGrp } from './underlying_stream_effective_date_business_center_grp'

export interface IUnderlyingStreamEffectiveDate {
  UnderlyingStreamEffectiveDateUnadjusted?: Date// 40057
  UnderlyingStreamEffectiveDateBusinessDayConvention?: number// 40058
  UnderlyingStreamEffectiveDateRelativeTo?: number// 40060
  UnderlyingStreamEffectiveDateOffsetPeriod?: number// 40061
  UnderlyingStreamEffectiveDateOffsetUnit?: string// 40062
  UnderlyingStreamEffectiveDateOffsetDayType?: number// 40063
  UnderlyingStreamEffectiveDateAdjusted?: Date// 40064
  UnderlyingStreamEffectiveDateBusinessCenterGrp?: IUnderlyingStreamEffectiveDateBusinessCenterGrp[]
}
