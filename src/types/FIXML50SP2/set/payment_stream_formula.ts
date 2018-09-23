import { IPaymentStreamFormulaMathGrp } from './payment_stream_formula_math_grp'
import { IPaymentStreamFormulaImage } from './payment_stream_formula_image'

export interface IPaymentStreamFormula {
  UnderlyingReturnRatePriceCurrency?: string// 43067
  UnderlyingPaymentStreamFormulaCurrencyDeterminationMethod?: string// 42979
  UnderlyingPaymentStreamFormulaReferenceAmount?: number// 42980
  PaymentStreamFormulaMathGrp?: IPaymentStreamFormulaMathGrp
  PaymentStreamFormulaImage?: IPaymentStreamFormulaImage
}
