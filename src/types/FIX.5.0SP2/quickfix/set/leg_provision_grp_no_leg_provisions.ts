import { ILegProvisionDateBusinessCenterGrp } from './leg_provision_date_business_center_grp'
import { ILegProvisionCashSettlValueDates } from './leg_provision_cash_settl_value_dates'
import { ILegProvisionOptionExerciseDates } from './leg_provision_option_exercise_dates'
import { ILegProvisionOptionExpirationDate } from './leg_provision_option_expiration_date'
import { ILegProvisionOptionRelevantUnderlyingDate } from './leg_provision_option_relevant_underlying_date'
import { ILegProvisionCashSettlPaymentDates } from './leg_provision_cash_settl_payment_dates'
import { ILegProvisionCashSettlQuoteSource } from './leg_provision_cash_settl_quote_source'
import { ILegProvisionParties } from './leg_provision_parties'

export interface ILegProvisionGrpNoLegProvisions {
  LegProvisionType?: number// [1] 40449 (Int)
  LegProvisionDateUnadjusted?: Date// [2] 40450 (LocalDate)
  LegProvisionDateBusinessDayConvention?: number// [3] 40451 (Int)
  LegProvisionDateBusinessCenterGrp?: ILegProvisionDateBusinessCenterGrp// [4] NoLegProvisionDateBusinessCenters.40939, LegProvisionDateBusinessCenter.40452
  LegProvisionDateAdjusted?: Date// [5] 40453 (LocalDate)
  LegProvisionDateTenorPeriod?: number// [6] 40454 (Int)
  LegProvisionDateTenorUnit?: string// [7] 40455 (String)
  LegProvisionBreakFeeElection?: number// [8] 42506 (Int)
  LegProvisionBreakFeeRate?: number// [9] 42507 (Float)
  LegProvisionCalculationAgent?: number// [10] 40456 (Int)
  LegProvisionOptionSinglePartyBuyerSide?: number// [11] 40457 (Int)
  LegProvisionOptionSinglePartySellerSide?: number// [12] 40458 (Int)
  LegProvisionCashSettlValueDates?: ILegProvisionCashSettlValueDates// [13] LegProvisionCashSettlValueTime.40524, LegProvisionCashSettlValueTimeBusinessCenter.40525 .. LegProvisionCashSettlValueDateAdjusted.40532
  LegProvisionOptionExerciseDates?: ILegProvisionOptionExerciseDates// [14] LegProvisionOptionExerciseBusinessDayConvention.40476, LegProvisionOptionExerciseBusinessCenterGrp.40936 .. LegProvisionOptionExerciseLatestTimeBusinessCenter.40494
  LegProvisionOptionExpirationDate?: ILegProvisionOptionExpirationDate// [15] LegProvisionOptionExpirationDateUnadjusted.40498, LegProvisionOptionExpirationDateBusinessDayConvention.40499 .. LegProvisionOptionExpirationTimeBusinessCenter.40507
  LegProvisionOptionRelevantUnderlyingDate?: ILegProvisionOptionRelevantUnderlyingDate// [16] LegProvisionOptionRelevantUnderlyingDateUnadjusted.40508, LegProvisionOptionRelevantUnderlyingDateBusinessDayConvention.40509 .. LegProvisionOptionRelevantUnderlyingDateAdjusted.40515
  LegProvisionOptionExerciseStyle?: number// [17] 40459 (Int)
  LegProvisionOptionExerciseMultipleNotional?: number// [18] 40460 (Float)
  LegProvisionOptionExerciseMinimumNotional?: number// [19] 40461 (Float)
  LegProvisionOptionExerciseMaximumNotional?: number// [20] 40462 (Float)
  LegProvisionOptionMinimumNumber?: number// [21] 40463 (Int)
  LegProvisionOptionMaximumNumber?: number// [22] 40464 (Int)
  LegProvisionOptionExerciseConfirmation?: boolean// [23] 40465 (Boolean)
  LegProvisionCashSettlPaymentDates?: ILegProvisionCashSettlPaymentDates// [24] LegProvisionCashSettlPaymentDateBusinessDayConvention.40516, LegProvisionCashSettlPaymentDateBusinessCenterGrp.40934 .. LegProvisionCashSettlPaymentDateType.40475
  LegProvisionCashSettlMethod?: number// [25] 40466 (Int)
  LegProvisionCashSettlCurrency?: string// [26] 40467 (String)
  LegProvisionCashSettlCurrency2?: string// [27] 40468 (String)
  LegProvisionCashSettlQuoteType?: number// [28] 40469 (Int)
  LegProvisionCashSettlQuoteSource?: ILegProvisionCashSettlQuoteSource// [29] LegProvisionCashSettlQuoteSource.40470, LegProvisionCashSettlQuoteReferencePage.41407
  LegProvisionText?: string// [30] 40472 (String)
  EncodedLegProvisionTextLen?: number// [31] 40980 (Length)
  EncodedLegProvisionText?: Buffer// [32] 40981 (RawData)
  LegProvisionParties?: ILegProvisionParties// [33] NoLegProvisionPartyIDs.40533, LegProvisionPartyID.40534 .. LegProvisionPartySubIDType.40539
}
