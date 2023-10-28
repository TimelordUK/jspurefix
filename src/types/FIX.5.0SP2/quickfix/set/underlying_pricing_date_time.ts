import { IUnderlyingPricingDateBusinessCenterGrp } from './underlying_pricing_date_business_center_grp'

export interface IUnderlyingPricingDateTime {
  UnderlyingPricingDateUnadjusted?: Date// [1] 41949 (LocalDate)
  UnderlyingPricingDateBusinessDayConvention?: number// [2] 41950 (Int)
  UnderlyingPricingDateBusinessCenterGrp?: IUnderlyingPricingDateBusinessCenterGrp// [3] NoUnderlyingPricingDateBusinessCenters.41947, UnderlyingPricingDateBusinessCenter.41948
  UnderlyingPricingDateAdjusted?: Date// [4] 41951 (LocalDate)
  UnderlyingPricingTime?: string// [5] 41952 (String)
  UnderlyingPricingTimeBusinessCenter?: string// [6] 41953 (String)
}
