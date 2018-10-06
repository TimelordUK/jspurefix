import { ILegPaymentStreamFormulaMathGrp } from './leg_payment_stream_formula_math_grp'
import { ILegPaymentStreamFormulaImage } from './leg_payment_stream_formula_image'

export interface ILegPaymentStreamFormula {
  LegPaymentStreamFormulaCurrency?: string// 42482
  LegPaymentStreamFormulaCurrencyDeterminationMethod?: string// 42483
  LegPaymentStreamFormulaReferenceAmount?: number// 42484
  LegPaymentStreamFormulaMathGrp?: ILegPaymentStreamFormulaMathGrp
  LegPaymentStreamFormulaImage?: ILegPaymentStreamFormulaImage
}
