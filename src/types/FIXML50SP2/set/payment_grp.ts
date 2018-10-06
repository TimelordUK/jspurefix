import { IPaymentBusinessCenterGrp } from './payment_business_center_grp'
import { IPaymentSettlGrp } from './payment_settl_grp'

export interface IPaymentGrp {
  UnderlyingReturnRateValuationDateType?: number// 43073
  PaymentSubType?: number// 40993
  PaymentPaySide?: number// 40214
  PaymentReceiveSide?: number// 40215
  PaymentDesc?: string// 43087
  PaymentCurrency?: string// 40216
  PaymentAmount?: number// 40217
  PaymentAmountRelativeTo?: number// 42598
  PaymentAmountDeterminationMethod?: string// 42599
  PaymentPrice?: number// 40218
  PaymentPriceType?: number// 40919
  PaymentUnitOfMeasure?: string// 41155
  PaymentDateUnadjusted?: Date// 40219
  PaymentBusinessDayConvention?: number// 40220
  PaymentDateRelativeTo?: number// 41156
  PaymentDateOffsetPeriod?: number// 41157
  PaymentDateOffsetUnit?: string// 41158
  PaymentDateOffsetDayType?: number// 41159
  PaymentDateAdjusted?: Date// 40222
  PaymentForwardStartType?: number// 41160
  PaymentDiscountFactor?: number// 40224
  PaymentPresentValueAmount?: number// 40225
  PaymentPresentValueCurrency?: string// 40226
  PaymentSettlStyle?: number// 40227
  PaymentMethod?: number// 492
  PaymentLegRefID?: string// 41304
  PaymentText?: string// 40229
  EncodedPaymentTextLen?: number// 40984
  EncodedPaymentText?: Buffer// 40985
  PaymentBusinessCenterGrp?: IPaymentBusinessCenterGrp[]
  PaymentSettlGrp?: IPaymentSettlGrp[]
}
