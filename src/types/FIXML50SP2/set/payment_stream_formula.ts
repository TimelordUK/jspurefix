import { IPaymentStreamFormulaMathGrp } from './payment_stream_formula_math_grp'
import { IPaymentStreamFormulaImage } from './payment_stream_formula_image'

export interface IPaymentStreamFormula {
  PaymentStreamFormulaCurrency?: string// [1] 42686 (String)
  PaymentStreamFormulaCurrencyDeterminationMethod?: string// [1] 42687 (String)
  PaymentStreamFormulaReferenceAmount?: number// [1] 42688 (Int)
  PaymentStreamFormulaMathGrp?: IPaymentStreamFormulaMathGrp// [1] Desc.42685
  PaymentStreamFormulaImage?: IPaymentStreamFormulaImage// [2] FrmlaImgLen.42652, FrmlaImg.42653
}
