import { IPaymentStreamFormulaMathGrp } from './payment_stream_formula_math_grp'
import { IPaymentStreamFormulaImage } from './payment_stream_formula_image'

export interface IPaymentStreamFormula {
  PaymentStreamFormulaCurrency?: string// [1] 42686 (String)
  PaymentStreamFormulaCurrencyDeterminationMethod?: string// [2] 42687 (String)
  PaymentStreamFormulaReferenceAmount?: number// [3] 42688 (Int)
  PaymentStreamFormulaMathGrp?: IPaymentStreamFormulaMathGrp// [4] NoPaymentStreamFormulas.42683, PaymentStreamFormulaLength.43109 .. PaymentStreamFormulaDesc.42685
  PaymentStreamFormulaImage?: IPaymentStreamFormulaImage// [5] PaymentStreamFormulaImageLength.42652, PaymentStreamFormulaImage.42653
}
