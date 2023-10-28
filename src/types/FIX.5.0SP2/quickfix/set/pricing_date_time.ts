import { IPricingDateBusinessCenterGrp } from './pricing_date_business_center_grp'

export interface IPricingDateTime {
  PricingDateUnadjusted?: Date// [1] 41232 (LocalDate)
  PricingDateBusinessDayConvention?: number// [2] 41233 (Int)
  PricingDateBusinessCenterGrp?: IPricingDateBusinessCenterGrp// [3] NoPricingDateBusinessCenters.41230, PricingDateBusinessCenter.41231
  PricingDateAdjusted?: Date// [4] 41234 (LocalDate)
  PricingTime?: string// [5] 41235 (String)
  PricingTimeBusinessCenter?: string// [6] 41236 (String)
}
