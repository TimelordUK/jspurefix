import { IPaymentBusinessCenterGrp } from './payment_business_center_grp'
import { IPaymentSettlGrp } from './payment_settl_grp'

export interface IPaymentGrp {
  MiscFeeType?: string// [1] 139 (String)
  PaymentSubType?: number// [1] 40993 (Int)
  PaymentPaySide?: number// [1] 40214 (Int)
  PaymentReceiveSide?: number// [1] 40215 (Int)
  PaymentDesc?: string// [1] 43087 (String)
  PaymentCurrency?: string// [1] 40216 (String)
  PaymentAmount?: number// [1] 40217 (Float)
  PaymentAmountRelativeTo?: number// [1] 42598 (Int)
  PaymentAmountDeterminationMethod?: string// [1] 42599 (String)
  PaymentPrice?: number// [1] 40218 (Float)
  PaymentPriceType?: number// [1] 40919 (Int)
  PaymentUnitOfMeasure?: string// [1] 41155 (String)
  PaymentDateUnadjusted?: Date// [1] 40219 (LocalDate)
  PaymentBusinessDayConvention?: number// [1] 40220 (Int)
  PaymentDateRelativeTo?: number// [1] 41156 (Int)
  PaymentDateOffsetPeriod?: number// [1] 41157 (Int)
  PaymentDateOffsetUnit?: string// [1] 41158 (String)
  PaymentDateOffsetDayType?: number// [1] 41159 (Int)
  PaymentDateAdjusted?: Date// [1] 40222 (LocalDate)
  PaymentForwardStartType?: number// [1] 41160 (Int)
  PaymentDiscountFactor?: number// [1] 40224 (Float)
  PaymentPresentValueAmount?: number// [1] 40225 (Float)
  PaymentPresentValueCurrency?: string// [1] 40226 (String)
  PaymentSettlStyle?: number// [1] 40227 (Int)
  PaymentMethod?: number// [1] 492 (Int)
  PaymentLegRefID?: string// [1] 41304 (String)
  PaymentText?: string// [1] 40229 (String)
  EncodedPaymentTextLen?: number// [1] 40984 (Length)
  EncodedPaymentText?: Buffer// [1] 40985 (RawData)
  PaymentBusinessCenterGrp?: IPaymentBusinessCenterGrp[]// [1] Ctr.40221
  PaymentSettlGrp?: IPaymentSettlGrp[]// [2] Amt.40231, Ccy.40232
}
