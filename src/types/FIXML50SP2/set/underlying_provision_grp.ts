import { IUnderlyingProvisionDateBusinessCenterGrp } from './underlying_provision_date_business_center_grp'
import { IUnderlyingProvisionCashSettlValueDates } from './underlying_provision_cash_settl_value_dates'
import { IUnderlyingProvisionOptionExerciseDates } from './underlying_provision_option_exercise_dates'
import { IUnderlyingProvisionOptionExpirationDate } from './underlying_provision_option_expiration_date'
import { IUnderlyingProvisionOptionRelevantUnderlyingDate } from './underlying_provision_option_relevant_underlying_date'
import { IUnderlyingProvisionCashSettlPaymentDates } from './underlying_provision_cash_settl_payment_dates'
import { IUnderlyingProvisionCashSettlQuoteSource } from './underlying_provision_cash_settl_quote_source'
import { IUnderlyingProvisionParties } from './underlying_provision_parties'

export interface IUnderlyingProvisionGrp {
  UnderlyingProvisionType?: number// 42150
  UnderlyingProvisionDateUnadjusted?: Date// 42151
  UnderlyingProvisionDateBusinessDayConvention?: number// 42152
  UnderlyingProvisionDateAdjusted?: Date// 42153
  UnderlyingProvisionDateTenorPeriod?: number// 42154
  UnderlyingProvisionDateTenorUnit?: string// 42155
  UnderlyingProvisionBreakFeeElection?: number// 43002
  UnderlyingProvisionBreakFeeRate?: number// 43003
  UnderlyingProvisionCalculationAgent?: number// 42156
  UnderlyingProvisionOptionSinglePartyBuyerSide?: number// 42157
  UnderlyingProvisionOptionSinglePartySellerSide?: number// 42158
  ExerciseStyle?: number// 1194
  UnderlyingProvisionOptionExerciseMultipleNotional?: number// 42160
  UnderlyingProvisionOptionExerciseMinimumNotional?: number// 42161
  UnderlyingProvisionOptionExerciseMaximumNotional?: number// 42162
  UnderlyingProvisionOptionMinimumNumber?: number// 42163
  UnderlyingProvisionOptionMaximumNumber?: number// 42164
  UnderlyingProvisionOptionExerciseConfirmation?: boolean// 42165
  UnderlyingProvisionCashSettlMethod?: number// 42166
  UnderlyingProvisionCashSettlCurrency?: string// 42167
  UnderlyingProvisionCashSettlCurrency2?: string// 42168
  UnderlyingProvisionCashSettlQuoteType?: number// 42169
  UnderlyingProvisionText?: string// 42170
  EncodedUnderlyingProvisionTextLen?: number// 42171
  EncodedUnderlyingProvisionText?: Buffer// 42172
  UnderlyingProvisionDateBusinessCenterGrp?: IUnderlyingProvisionDateBusinessCenterGrp[]
  UnderlyingProvisionCashSettlValueDates?: IUnderlyingProvisionCashSettlValueDates
  UnderlyingProvisionOptionExerciseDates?: IUnderlyingProvisionOptionExerciseDates
  UnderlyingProvisionOptionExpirationDate?: IUnderlyingProvisionOptionExpirationDate
  UnderlyingProvisionOptionRelevantUnderlyingDate?: IUnderlyingProvisionOptionRelevantUnderlyingDate
  UnderlyingProvisionCashSettlPaymentDates?: IUnderlyingProvisionCashSettlPaymentDates
  UnderlyingProvisionCashSettlQuoteSource?: IUnderlyingProvisionCashSettlQuoteSource
  UnderlyingProvisionParties?: IUnderlyingProvisionParties[]
}
