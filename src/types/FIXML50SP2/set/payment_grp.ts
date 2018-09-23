import { IPaymentBusinessCenterGrp } from './payment_business_center_grp'
import { IPaymentSettlGrp } from './payment_settl_grp'

export interface IPaymentGrp {
  UnderlyingReturnRateValuationDateType?: number// 43073
  PaymentSubType?: number// 40993
  PaymentSchedulePaySide?: number// 40833
  PaymentScheduleReceiveSide?: number// 40834
  PaymentDesc?: string// 43087
  UnderlyingReturnRatePriceCurrency?: string// 43067
  UnderlyingMakeWholeAmount?: number// 42889
  UnderlyingReturnRateAmountRelativeTo?: number// 43041
  PaymentAmountDeterminationMethod?: string// 42599
  UnderlyingReturnRatePrice?: number// 43066
  UnderlyingReturnRatePriceType?: number// 43068
  UnderlyingStreamCommodityUnitOfMeasure?: string// 41971
  UnderlyingSettlMethodElectionDateUnadjusted?: Date// 43076
  UnderlyingSettlMethodElectionDateBusinessDayConvention?: number// 43077
  UnderlyingSettlMethodElectionDateRelativeTo?: number// 43078
  UnderlyingSettlMethodElectionDateOffsetPeriod?: number// 43079
  UnderlyingSettlMethodElectionDateOffsetUnit?: string// 43080
  UnderlyingSettlMethodElectionDateOffsetDayType?: number// 43081
  UnderlyingSettlMethodElectionDateAdjusted?: Date// 43082
  PaymentForwardStartType?: number// 41160
  PaymentDiscountFactor?: string// 40224
  PaymentPresentValueAmount?: number// 40225
  PaymentPresentValueCurrency?: string// 40226
  PaymentSettlStyle?: number// 40227
  PaymentMethod?: number// 492
  PaymentLegRefID?: string// 41304
  UnderlyingProvisionText?: string// 42170
  EncodedUnderlyingProvisionTextLen?: string// 42171
  EncodedUnderlyingProvisionText?: Buffer// 42172
  PaymentBusinessCenterGrp?: IPaymentBusinessCenterGrp[]
  PaymentSettlGrp?: IPaymentSettlGrp[]
}
