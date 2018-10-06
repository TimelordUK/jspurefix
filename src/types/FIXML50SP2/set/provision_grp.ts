import { IProvisionDateBusinessCenterGrp } from './provision_date_business_center_grp'
import { IProvisionCashSettlValueDates } from './provision_cash_settl_value_dates'
import { IProvisionOptionExerciseDates } from './provision_option_exercise_dates'
import { IProvisionOptionExpirationDate } from './provision_option_expiration_date'
import { IProvisionOptionRelevantUnderlyingDate } from './provision_option_relevant_underlying_date'
import { IProvisionCashSettlPaymentDates } from './provision_cash_settl_payment_dates'
import { IProvisionCashSettlQuoteSource } from './provision_cash_settl_quote_source'
import { IProvisionParties } from './provision_parties'

export interface IProvisionGrp {
  ProvisionType?: number// 40091
  ProvisionDateUnadjusted?: Date// 40092
  ProvisionDateBusinessDayConvention?: number// 40093
  ProvisionDateAdjusted?: Date// 40095
  ProvisionDateTenorPeriod?: number// 40096
  ProvisionDateTenorUnit?: string// 40097
  ProvisionBreakFeeElection?: number// 42707
  ProvisionBreakFeeRate?: number// 42708
  ProvisionCalculationAgent?: number// 40098
  ProvisionOptionSinglePartyBuyerSide?: number// 40099
  ProvisionOptionSinglePartySellerSide?: number// 40100
  UnderlyingProvisionOptionExerciseStyle?: number// 42159
  ProvisionOptionExerciseMultipleNotional?: number// 40102
  ProvisionOptionExerciseMinimumNotional?: number// 40103
  ProvisionOptionExerciseMaximumNotional?: number// 40104
  ProvisionOptionMinimumNumber?: number// 40105
  ProvisionOptionMaximumNumber?: number// 40106
  ProvisionOptionExerciseConfirmation?: boolean// 40107
  ProvisionCashSettlMethod?: number// 40108
  ProvisionCashSettlCurrency?: string// 40109
  ProvisionCashSettlCurrency2?: string// 40110
  ProvisionCashSettlQuoteType?: number// 40111
  ProvisionText?: string// 40113
  EncodedProvisionTextLen?: number// 40986
  EncodedProvisionText?: Buffer// 40987
  ProvisionDateBusinessCenterGrp?: IProvisionDateBusinessCenterGrp[]
  ProvisionCashSettlValueDates?: IProvisionCashSettlValueDates
  ProvisionOptionExerciseDates?: IProvisionOptionExerciseDates
  ProvisionOptionExpirationDate?: IProvisionOptionExpirationDate
  ProvisionOptionRelevantUnderlyingDate?: IProvisionOptionRelevantUnderlyingDate
  ProvisionCashSettlPaymentDates?: IProvisionCashSettlPaymentDates
  ProvisionCashSettlQuoteSource?: IProvisionCashSettlQuoteSource
  ProvisionParties?: IProvisionParties[]
}
