import { ILegPricingDateBusinessCenterGrp } from './leg_pricing_date_business_center_grp'

export interface ILegPricingDateTime {
  LegPricingDateUnadjusted?: Date// [1] 41609 (LocalDate)
  LegPricingDateBusinessDayConvention?: number// [1] 41610 (Int)
  LegPricingDateAdjusted?: Date// [1] 41611 (LocalDate)
  LegPricingTime?: string// [1] 41612 (String)
  LegPricingTimeBusinessCenter?: string// [1] 41613 (String)
  LegPricingDateBusinessCenterGrp?: ILegPricingDateBusinessCenterGrp[]// [1] Ctr.41608
}
