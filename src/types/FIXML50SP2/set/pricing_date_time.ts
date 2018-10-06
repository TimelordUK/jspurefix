import { IPricingDateBusinessCenterGrp } from './pricing_date_business_center_grp'

export interface IPricingDateTime {
  PricingDateUnadjusted?: Date// 41232
  PricingDateBusinessDayConvention?: number// 41233
  PricingDateAdjusted?: Date// 41234
  PricingTime?: string// 41235
  PricingTimeBusinessCenter?: string// 41236
  PricingDateBusinessCenterGrp?: IPricingDateBusinessCenterGrp[]
}
