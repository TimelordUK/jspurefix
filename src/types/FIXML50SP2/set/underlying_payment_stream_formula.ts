import { IUnderlyingPaymentStreamFormulaMathGrp } from './underlying_payment_stream_formula_math_grp'
import { IUnderlyingPaymentStreamFormulaImage } from './underlying_payment_stream_formula_image'

export interface IUnderlyingPaymentStreamFormula {
  UnderlyingPaymentStreamFormulaCurrency?: string// 42978
  UnderlyingPaymentStreamFormulaCurrencyDeterminationMethod?: string// 42979
  UnderlyingPaymentStreamFormulaReferenceAmount?: number// 42980
  UnderlyingPaymentStreamFormulaMathGrp?: IUnderlyingPaymentStreamFormulaMathGrp
  UnderlyingPaymentStreamFormulaImage?: IUnderlyingPaymentStreamFormulaImage
}
