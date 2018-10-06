import { ILegPricingDateBusinessCenterGrp } from './leg_pricing_date_business_center_grp'

export interface ILegPricingDateTime {
  LegPricingDateUnadjusted?: Date// 41609
  LegPricingDateBusinessDayConvention?: number// 41610
  LegPricingDateAdjusted?: Date// 41611
  LegPricingTime?: string// 41612
  LegPricingTimeBusinessCenter?: string// 41613
  LegPricingDateBusinessCenterGrp?: ILegPricingDateBusinessCenterGrp[]
}
