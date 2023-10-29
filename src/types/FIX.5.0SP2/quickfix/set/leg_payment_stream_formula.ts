import { ILegPaymentStreamFormulaMathGrp } from './leg_payment_stream_formula_math_grp'
import { ILegPaymentStreamFormulaImage } from './leg_payment_stream_formula_image'

export interface ILegPaymentStreamFormula {
  LegPaymentStreamFormulaCurrency?: string// [1] 42482 (String)
  LegPaymentStreamFormulaCurrencyDeterminationMethod?: string// [2] 42483 (String)
  LegPaymentStreamFormulaReferenceAmount?: number// [3] 42484 (Int)
  LegPaymentStreamFormulaMathGrp?: ILegPaymentStreamFormulaMathGrp// [4] NoLegPaymentStreamFormulas.42485, LegPaymentStreamFormulaLength.43110 .. LegPaymentStreamFormulaDesc.42487
  LegPaymentStreamFormulaImage?: ILegPaymentStreamFormulaImage// [5] LegPaymentStreamFormulaImageLength.42451, LegPaymentStreamFormulaImage.42452
}
