import { ILegDividendPeriodGrp } from './leg_dividend_period_grp'
import { ILegDividendFXTriggerDate } from './leg_dividend_fx_trigger_date'
import { ILegDividendAccrualFloatingRate } from './leg_dividend_accrual_floating_rate'
import { ILegDividendAccrualPaymentDate } from './leg_dividend_accrual_payment_date'

export interface ILegDividendConditions {
  UnderlyingDividendReinvestmentIndicator?: string// 42826
  UnderlyingDividendEntitlementEvent?: number// 42827
  UnderlyingDividendAmountType?: number// 42828
  UnderlyingPaymentStreamUnderlierRefID?: string// 42962
  UnderlyingExtraordinaryDividendPartySide?: number// 42830
  UnderlyingExtraordinaryDividendAmountType?: number// 42831
  UnderlyingExtraordinaryDividendCurrency?: string// 42832
  UnderlyingExtraordinaryDividendDeterminationMethod?: string// 42833
  UnderlyingDividendAccrualFixedRate?: number// 42834
  UnderlyingDividendCompoundingMethod?: number// 42835
  UnderlyingDividendNumOfIndexUnits?: number// 42836
  UnderlyingDividendCashPercentage?: number// 42837
  UnderlyingDividendCashEquivalentPercentage?: number// 42838
  UnderlyingNonCashDividendTreatment?: number// 42839
  UnderlyingDividendComposition?: number// 42840
  UnderlyingSpecialDividendsIndicator?: string// 42841
  UnderlyingMaterialDividendsIndicator?: string// 42842
  UnderlyingOptionsExchangeDividendsIndicator?: string// 42843
  UnderlyingAdditionalDividendsIndicator?: string// 42844
  UnderlyingAllDividendsIndicator?: string// 42845
  LegDividendPeriodGrp?: ILegDividendPeriodGrp[]
  LegDividendFXTriggerDate?: ILegDividendFXTriggerDate
  LegDividendAccrualFloatingRate?: ILegDividendAccrualFloatingRate
  LegDividendAccrualPaymentDate?: ILegDividendAccrualPaymentDate
}
