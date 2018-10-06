import { IUnderlyingPricingDateBusinessCenterGrp } from './underlying_pricing_date_business_center_grp'

export interface IUnderlyingPricingDateTime {
  UnderlyingPricingDateUnadjusted?: Date// 41949
  UnderlyingPricingDateBusinessDayConvention?: number// 41950
  UnderlyingPricingDateAdjusted?: Date// 41951
  UnderlyingPricingTime?: string// 41952
  UnderlyingPricingTimeBusinessCenter?: string// 41953
  UnderlyingPricingDateBusinessCenterGrp?: IUnderlyingPricingDateBusinessCenterGrp[]
}
