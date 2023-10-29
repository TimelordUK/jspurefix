import { IUnderlyingPaymentStreamFormulaImage } from './underlying_payment_stream_formula_image'

export interface IUnderlyingPaymentStreamFormula {
  UnderlyingPaymentStreamFormulaCurrency?: string// [1] 42978 (String)
  UnderlyingPaymentStreamFormulaCurrencyDeterminationMethod?: string// [2] 42979 (String)
  UnderlyingPaymentStreamFormulaReferenceAmount?: number// [3] 42980 (Int)
  UnderlyingPaymentStreamFormulaImage?: IUnderlyingPaymentStreamFormulaImage// [4] UnderlyingPaymentStreamFormulaImageLength.42947, UnderlyingPaymentStreamFormulaImage.42948
}
