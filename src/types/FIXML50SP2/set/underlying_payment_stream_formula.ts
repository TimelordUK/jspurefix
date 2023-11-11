import { IUnderlyingPaymentStreamFormulaMathGrp } from './underlying_payment_stream_formula_math_grp'
import { IUnderlyingPaymentStreamFormulaImage } from './underlying_payment_stream_formula_image'

export interface IUnderlyingPaymentStreamFormula {
  UnderlyingPaymentStreamFormulaCurrency?: string// [1] 42978 (String)
  UnderlyingPaymentStreamFormulaCurrencyDeterminationMethod?: string// [1] 42979 (String)
  UnderlyingPaymentStreamFormulaReferenceAmount?: number// [1] 42980 (Int)
  UnderlyingPaymentStreamFormulaMathGrp?: IUnderlyingPaymentStreamFormulaMathGrp// [1] Desc.42983
  UnderlyingPaymentStreamFormulaImage?: IUnderlyingPaymentStreamFormulaImage// [2] FrmlaImgLen.42947, FrmlaImg.42948
}
