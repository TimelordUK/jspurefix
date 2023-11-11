import { IPricingDateBusinessCenterGrp } from './pricing_date_business_center_grp'

export interface IPricingDateTime {
  PricingDateUnadjusted?: Date// [1] 41232 (LocalDate)
  PricingDateBusinessDayConvention?: number// [1] 41233 (Int)
  PricingDateAdjusted?: Date// [1] 41234 (LocalDate)
  PricingTime?: string// [1] 41235 (String)
  PricingTimeBusinessCenter?: string// [1] 41236 (String)
  PricingDateBusinessCenterGrp?: IPricingDateBusinessCenterGrp[]// [1] Ctr.41231
}
