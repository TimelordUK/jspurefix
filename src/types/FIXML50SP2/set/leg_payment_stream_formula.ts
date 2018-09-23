import { ILegPaymentStreamFormulaMathGrp } from './leg_payment_stream_formula_math_grp'
import { ILegPaymentStreamFormulaImage } from './leg_payment_stream_formula_image'

export interface ILegPaymentStreamFormula {
  UnderlyingReturnRatePriceCurrency?: string// 43067
  UnderlyingPaymentStreamFormulaCurrencyDeterminationMethod?: string// 42979
  UnderlyingPaymentStreamFormulaReferenceAmount?: number// 42980
  LegPaymentStreamFormulaMathGrp?: ILegPaymentStreamFormulaMathGrp
  LegPaymentStreamFormulaImage?: ILegPaymentStreamFormulaImage
}
