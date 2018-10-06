import { IPaymentStreamFormulaMathGrp } from './payment_stream_formula_math_grp'
import { IPaymentStreamFormulaImage } from './payment_stream_formula_image'

export interface IPaymentStreamFormula {
  PaymentStreamFormulaCurrency?: string// 42686
  PaymentStreamFormulaCurrencyDeterminationMethod?: string// 42687
  PaymentStreamFormulaReferenceAmount?: number// 42688
  PaymentStreamFormulaMathGrp?: IPaymentStreamFormulaMathGrp
  PaymentStreamFormulaImage?: IPaymentStreamFormulaImage
}
