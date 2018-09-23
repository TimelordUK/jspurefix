import { ILegPricingDateBusinessCenterGrp } from './leg_pricing_date_business_center_grp'

export interface ILegPricingDateTime {
  UnderlyingSettlMethodElectionDateUnadjusted?: Date// 43076
  UnderlyingSettlMethodElectionDateBusinessDayConvention?: number// 43077
  UnderlyingSettlMethodElectionDateAdjusted?: Date// 43082
  UnderlyingProvisionCashSettlValueTime?: string// 42104
  UnderlyingProvisionCashSettlValueTimeBusinessCenter?: string// 42105
  LegPricingDateBusinessCenterGrp?: ILegPricingDateBusinessCenterGrp[]
}
