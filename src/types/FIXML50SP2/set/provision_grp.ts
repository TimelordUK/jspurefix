import { IProvisionDateBusinessCenterGrp } from './provision_date_business_center_grp'
import { IProvisionCashSettlValueDates } from './provision_cash_settl_value_dates'
import { IProvisionOptionExerciseDates } from './provision_option_exercise_dates'
import { IProvisionOptionExpirationDate } from './provision_option_expiration_date'
import { IProvisionOptionRelevantUnderlyingDate } from './provision_option_relevant_underlying_date'
import { IProvisionCashSettlPaymentDates } from './provision_cash_settl_payment_dates'
import { IProvisionCashSettlQuoteSource } from './provision_cash_settl_quote_source'
import { IProvisionParties } from './provision_parties'

export interface IProvisionGrp {
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
  ProvisionDateBusinessCenterGrp?: IProvisionDateBusinessCenterGrp[]
  ProvisionCashSettlValueDates?: IProvisionCashSettlValueDates
  ProvisionOptionExerciseDates?: IProvisionOptionExerciseDates
  ProvisionOptionExpirationDate?: IProvisionOptionExpirationDate
  ProvisionOptionRelevantUnderlyingDate?: IProvisionOptionRelevantUnderlyingDate
  ProvisionCashSettlPaymentDates?: IProvisionCashSettlPaymentDates
  ProvisionCashSettlQuoteSource?: IProvisionCashSettlQuoteSource
  ProvisionParties?: IProvisionParties[]
}
