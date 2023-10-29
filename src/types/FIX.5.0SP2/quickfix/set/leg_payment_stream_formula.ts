import { ILegPaymentStreamFormulaImage } from './leg_payment_stream_formula_image'

export interface ILegPaymentStreamFormula {
  LegPaymentStreamFormulaCurrency?: string// [1] 42482 (String)
  LegPaymentStreamFormulaCurrencyDeterminationMethod?: string// [2] 42483 (String)
  LegPaymentStreamFormulaReferenceAmount?: number// [3] 42484 (Int)
  LegPaymentStreamFormulaImage?: ILegPaymentStreamFormulaImage// [4] LegPaymentStreamFormulaImageLength.42451, LegPaymentStreamFormulaImage.42452
}
