import { IUnderlyingPaymentStreamFormulaMathGrp } from './underlying_payment_stream_formula_math_grp'
import { IUnderlyingPaymentStreamFormulaImage } from './underlying_payment_stream_formula_image'

export interface IUnderlyingPaymentStreamFormula {
  UnderlyingPaymentStreamFormulaCurrency?: string// [1] 42978 (String)
  UnderlyingPaymentStreamFormulaCurrencyDeterminationMethod?: string// [2] 42979 (String)
  UnderlyingPaymentStreamFormulaReferenceAmount?: number// [3] 42980 (Int)
  UnderlyingPaymentStreamFormulaMathGrp?: IUnderlyingPaymentStreamFormulaMathGrp// [4] NoUnderlyingPaymentStreamFormulas.42981, UnderlyingPaymentStreamFormulaLength.43111 .. UnderlyingPaymentStreamFormulaDesc.42983
  UnderlyingPaymentStreamFormulaImage?: IUnderlyingPaymentStreamFormulaImage// [5] UnderlyingPaymentStreamFormulaImageLength.42947, UnderlyingPaymentStreamFormulaImage.42948
}
