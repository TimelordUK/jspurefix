import { ILegProvisionDateBusinessCenterGrp } from './leg_provision_date_business_center_grp'
import { ILegProvisionCashSettlValueDates } from './leg_provision_cash_settl_value_dates'
import { ILegProvisionOptionExerciseDates } from './leg_provision_option_exercise_dates'
import { ILegProvisionOptionExpirationDate } from './leg_provision_option_expiration_date'
import { ILegProvisionOptionRelevantUnderlyingDate } from './leg_provision_option_relevant_underlying_date'
import { ILegProvisionCashSettlPaymentDates } from './leg_provision_cash_settl_payment_dates'
import { ILegProvisionCashSettlQuoteSource } from './leg_provision_cash_settl_quote_source'
import { ILegProvisionParties } from './leg_provision_parties'

export interface ILegProvisionGrp {
  UnderlyingReturnRateValuationDateType?: number// 43073
  UnderlyingSettlMethodElectionDateUnadjusted?: Date// 43076
  UnderlyingSettlMethodElectionDateBusinessDayConvention?: number// 43077
  UnderlyingSettlMethodElectionDateAdjusted?: Date// 43082
  UnderlyingProvisionDateTenorPeriod?: number// 42154
  UnderlyingProvisionDateTenorUnit?: string// 42155
  UnderlyingProvisionBreakFeeElection?: number// 43002
  UnderlyingProvisionBreakFeeRate?: number// 43003
  UnderlyingProvisionCalculationAgent?: number// 42156
  UnderlyingProvisionOptionSinglePartyBuyerSide?: number// 42157
  UnderlyingProvisionOptionSinglePartySellerSide?: number// 42158
  UnderlyingProvisionOptionExerciseStyle?: number// 42159
  UnderlyingProvisionOptionExerciseMultipleNotional?: number// 42160
  UnderlyingProvisionOptionExerciseMinimumNotional?: number// 42161
  UnderlyingProvisionOptionExerciseMaximumNotional?: number// 42162
  UnderlyingProvisionOptionMinimumNumber?: number// 42163
  UnderlyingProvisionOptionMaximumNumber?: number// 42164
  UnderlyingProvisionOptionExerciseConfirmation?: string// 42165
  UnderlyingProvisionCashSettlMethod?: number// 42166
  UnderlyingProvisionCashSettlCurrency?: string// 42167
  UnderlyingProvisionCashSettlCurrency2?: string// 42168
  UnderlyingProvisionCashSettlQuoteType?: number// 42169
  UnderlyingProvisionText?: string// 42170
  EncodedUnderlyingProvisionTextLen?: string// 42171
  EncodedUnderlyingProvisionText?: Buffer// 42172
  LegProvisionDateBusinessCenterGrp?: ILegProvisionDateBusinessCenterGrp[]
  LegProvisionCashSettlValueDates?: ILegProvisionCashSettlValueDates
  LegProvisionOptionExerciseDates?: ILegProvisionOptionExerciseDates
  LegProvisionOptionExpirationDate?: ILegProvisionOptionExpirationDate
  LegProvisionOptionRelevantUnderlyingDate?: ILegProvisionOptionRelevantUnderlyingDate
  LegProvisionCashSettlPaymentDates?: ILegProvisionCashSettlPaymentDates
  LegProvisionCashSettlQuoteSource?: ILegProvisionCashSettlQuoteSource
  LegProvisionParties?: ILegProvisionParties[]
}
