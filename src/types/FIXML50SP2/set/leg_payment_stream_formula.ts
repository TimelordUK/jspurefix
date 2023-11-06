import { ILegPaymentStreamFormulaMathGrp } from './leg_payment_stream_formula_math_grp'
import { ILegPaymentStreamFormulaImage } from './leg_payment_stream_formula_image'

export interface ILegPaymentStreamFormula {
  LegPaymentStreamFormulaCurrency?: string// [1] 42482 (String)
  LegPaymentStreamFormulaCurrencyDeterminationMethod?: string// [1] 42483 (String)
  LegPaymentStreamFormulaReferenceAmount?: number// [1] 42484 (Int)
  LegPaymentStreamFormulaMathGrp?: ILegPaymentStreamFormulaMathGrp// [1] Desc.42487
  LegPaymentStreamFormulaImage?: ILegPaymentStreamFormulaImage// [2] FrmlaImgLen.42451, FrmlaImg.42452
}
