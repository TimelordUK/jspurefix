import { ILegProvisionDateBusinessCenterGrp } from './leg_provision_date_business_center_grp'
import { ILegProvisionCashSettlValueDates } from './leg_provision_cash_settl_value_dates'
import { ILegProvisionOptionExerciseDates } from './leg_provision_option_exercise_dates'
import { ILegProvisionOptionExpirationDate } from './leg_provision_option_expiration_date'
import { ILegProvisionOptionRelevantUnderlyingDate } from './leg_provision_option_relevant_underlying_date'
import { ILegProvisionCashSettlPaymentDates } from './leg_provision_cash_settl_payment_dates'
import { ILegProvisionCashSettlQuoteSource } from './leg_provision_cash_settl_quote_source'
import { ILegProvisionParties } from './leg_provision_parties'

export interface ILegProvisionGrp {
  LegProvisionType?: number// 40449
  LegProvisionDateUnadjusted?: Date// 40450
  LegProvisionDateBusinessDayConvention?: number// 40451
  LegProvisionDateAdjusted?: Date// 40453
  LegProvisionDateTenorPeriod?: number// 40454
  LegProvisionDateTenorUnit?: string// 40455
  LegProvisionBreakFeeElection?: number// 42506
  LegProvisionBreakFeeRate?: number// 42507
  LegProvisionCalculationAgent?: number// 40456
  LegProvisionOptionSinglePartyBuyerSide?: number// 40457
  LegProvisionOptionSinglePartySellerSide?: number// 40458
  UnderlyingProvisionOptionExerciseStyle?: number// 42159
  LegProvisionOptionExerciseMultipleNotional?: number// 40460
  LegProvisionOptionExerciseMinimumNotional?: number// 40461
  LegProvisionOptionExerciseMaximumNotional?: number// 40462
  LegProvisionOptionMinimumNumber?: number// 40463
  LegProvisionOptionMaximumNumber?: number// 40464
  LegProvisionOptionExerciseConfirmation?: boolean// 40465
  LegProvisionCashSettlMethod?: number// 40466
  LegProvisionCashSettlCurrency?: string// 40467
  LegProvisionCashSettlCurrency2?: string// 40468
  LegProvisionCashSettlQuoteType?: number// 40469
  LegProvisionText?: string// 40472
  EncodedLegProvisionTextLen?: number// 40980
  EncodedLegProvisionText?: Buffer// 40981
  LegProvisionDateBusinessCenterGrp?: ILegProvisionDateBusinessCenterGrp[]
  LegProvisionCashSettlValueDates?: ILegProvisionCashSettlValueDates
  LegProvisionOptionExerciseDates?: ILegProvisionOptionExerciseDates
  LegProvisionOptionExpirationDate?: ILegProvisionOptionExpirationDate
  LegProvisionOptionRelevantUnderlyingDate?: ILegProvisionOptionRelevantUnderlyingDate
  LegProvisionCashSettlPaymentDates?: ILegProvisionCashSettlPaymentDates
  LegProvisionCashSettlQuoteSource?: ILegProvisionCashSettlQuoteSource
  LegProvisionParties?: ILegProvisionParties[]
}
