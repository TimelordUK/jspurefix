import { IUnderlyingPricingDateBusinessCenterGrp } from './underlying_pricing_date_business_center_grp'

export interface IUnderlyingPricingDateTime {
  UnderlyingPricingDateUnadjusted?: Date// [1] 41949 (LocalDate)
  UnderlyingPricingDateBusinessDayConvention?: number// [1] 41950 (Int)
  UnderlyingPricingDateAdjusted?: Date// [1] 41951 (LocalDate)
  UnderlyingPricingTime?: string// [1] 41952 (String)
  UnderlyingPricingTimeBusinessCenter?: string// [1] 41953 (String)
  UnderlyingPricingDateBusinessCenterGrp?: IUnderlyingPricingDateBusinessCenterGrp[]// [1] Ctr.41948
}
