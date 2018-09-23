import { IUnderlyingPaymentStreamFormulaMathGrp } from './underlying_payment_stream_formula_math_grp'
import { IUnderlyingPaymentStreamFormulaImage } from './underlying_payment_stream_formula_image'

export interface IUnderlyingPaymentStreamFormula {
  UnderlyingReturnRatePriceCurrency?: string// 43067
  UnderlyingPaymentStreamFormulaCurrencyDeterminationMethod?: string// 42979
  UnderlyingPaymentStreamFormulaReferenceAmount?: number// 42980
  UnderlyingPaymentStreamFormulaMathGrp?: IUnderlyingPaymentStreamFormulaMathGrp
  UnderlyingPaymentStreamFormulaImage?: IUnderlyingPaymentStreamFormulaImage
}
