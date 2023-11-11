import { ILegPricingDateBusinessCenterGrp } from './leg_pricing_date_business_center_grp'

export interface ILegPricingDateTime {
  LegPricingDateUnadjusted?: Date// [1] 41609 (LocalDate)
  LegPricingDateBusinessDayConvention?: number// [2] 41610 (Int)
  LegPricingDateBusinessCenterGrp?: ILegPricingDateBusinessCenterGrp// [3] NoLegPricingDateBusinessCenters.41607, LegPricingDateBusinessCenter.41608
  LegPricingDateAdjusted?: Date// [4] 41611 (LocalDate)
  LegPricingTime?: string// [5] 41612 (String)
  LegPricingTimeBusinessCenter?: string// [6] 41613 (String)
}
