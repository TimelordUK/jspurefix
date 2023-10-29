import { IPaymentStreamFormulaImage } from './payment_stream_formula_image'

export interface IPaymentStreamFormula {
  PaymentStreamFormulaCurrency?: string// [1] 42686 (String)
  PaymentStreamFormulaCurrencyDeterminationMethod?: string// [2] 42687 (String)
  PaymentStreamFormulaReferenceAmount?: number// [3] 42688 (Int)
  PaymentStreamFormulaImage?: IPaymentStreamFormulaImage// [4] PaymentStreamFormulaImageLength.42652, PaymentStreamFormulaImage.42653
}
