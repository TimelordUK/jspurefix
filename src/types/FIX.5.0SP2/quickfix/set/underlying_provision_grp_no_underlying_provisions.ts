import { IUnderlyingProvisionDateBusinessCenterGrp } from './underlying_provision_date_business_center_grp'
import { IUnderlyingProvisionCashSettlValueDates } from './underlying_provision_cash_settl_value_dates'
import { IUnderlyingProvisionOptionExerciseDates } from './underlying_provision_option_exercise_dates'
import { IUnderlyingProvisionOptionExpirationDate } from './underlying_provision_option_expiration_date'
import { IUnderlyingProvisionOptionRelevantUnderlyingDate } from './underlying_provision_option_relevant_underlying_date'
import { IUnderlyingProvisionCashSettlPaymentDates } from './underlying_provision_cash_settl_payment_dates'
import { IUnderlyingProvisionCashSettlQuoteSource } from './underlying_provision_cash_settl_quote_source'
import { IUnderlyingProvisionParties } from './underlying_provision_parties'

export interface IUnderlyingProvisionGrpNoUnderlyingProvisions {
  UnderlyingProvisionType?: number// [1] 42150 (Int)
  UnderlyingProvisionDateUnadjusted?: Date// [2] 42151 (LocalDate)
  UnderlyingProvisionDateBusinessDayConvention?: number// [3] 42152 (Int)
  UnderlyingProvisionDateBusinessCenterGrp?: IUnderlyingProvisionDateBusinessCenterGrp// [4] NoUnderlyingProvisionDateBusinessCenters.42190, UnderlyingProvisionDateBusinessCenter.42191
  UnderlyingProvisionDateAdjusted?: Date// [5] 42153 (LocalDate)
  UnderlyingProvisionDateTenorPeriod?: number// [6] 42154 (Int)
  UnderlyingProvisionDateTenorUnit?: string// [7] 42155 (String)
  UnderlyingProvisionBreakFeeElection?: number// [8] 43002 (Int)
  UnderlyingProvisionBreakFeeRate?: number// [9] 43003 (Float)
  UnderlyingProvisionCalculationAgent?: number// [10] 42156 (Int)
  UnderlyingProvisionOptionSinglePartyBuyerSide?: number// [11] 42157 (Int)
  UnderlyingProvisionOptionSinglePartySellerSide?: number// [12] 42158 (Int)
  UnderlyingProvisionCashSettlValueDates?: IUnderlyingProvisionCashSettlValueDates// [13] UnderlyingProvisionCashSettlValueTime.42104, UnderlyingProvisionCashSettlValueTimeBusinessCenter.42105 .. UnderlyingProvisionCashSettlValueDateAdjusted.42111
  UnderlyingProvisionOptionExerciseDates?: IUnderlyingProvisionOptionExerciseDates// [14] UnderlyingProvisionOptionExerciseBusinessDayConvention.42115, UnderlyingProvisionOptionExerciseBusinessCenterGrp.42184 .. UnderlyingProvisionOptionExerciseLatestTimeBusinessCenter.42132
  UnderlyingProvisionOptionExpirationDate?: IUnderlyingProvisionOptionExpirationDate// [15] UnderlyingProvisionOptionExpirationDateUnadjusted.42133, UnderlyingProvisionOptionExpirationDateBusinessDayConvention.42134 .. UnderlyingProvisionOptionExpirationTimeBusinessCenter.42141
  UnderlyingProvisionOptionRelevantUnderlyingDate?: IUnderlyingProvisionOptionRelevantUnderlyingDate// [16] UnderlyingProvisionOptionRelevantUnderlyingDateUnadjusted.42142, UnderlyingProvisionOptionRelevantUnderlyingDateBizDayConvention.42143 .. UnderlyingProvisionOptionRelevantUnderlyingDateAdjusted.42148
  UnderlyingProvisionOptionExerciseStyle?: number// [17] 42159 (Int)
  UnderlyingProvisionOptionExerciseMultipleNotional?: number// [18] 42160 (Float)
  UnderlyingProvisionOptionExerciseMinimumNotional?: number// [19] 42161 (Float)
  UnderlyingProvisionOptionExerciseMaximumNotional?: number// [20] 42162 (Float)
  UnderlyingProvisionOptionMinimumNumber?: number// [21] 42163 (Int)
  UnderlyingProvisionOptionMaximumNumber?: number// [22] 42164 (Int)
  UnderlyingProvisionOptionExerciseConfirmation?: boolean// [23] 42165 (Boolean)
  UnderlyingProvisionCashSettlPaymentDates?: IUnderlyingProvisionCashSettlPaymentDates// [24] UnderlyingProvisionCashSettlPaymentDateBusinessDayConvention.42092, UnderlyingProvisionCashSettlPaymentDateBusinessCenterGrp.42180 .. UnderlyingProvisionCashSettlPaymentDateType.42101
  UnderlyingProvisionCashSettlMethod?: number// [25] 42166 (Int)
  UnderlyingProvisionCashSettlCurrency?: string// [26] 42167 (String)
  UnderlyingProvisionCashSettlCurrency2?: string// [27] 42168 (String)
  UnderlyingProvisionCashSettlQuoteType?: number// [28] 42169 (Int)
  UnderlyingProvisionCashSettlQuoteSource?: IUnderlyingProvisionCashSettlQuoteSource// [29] UnderlyingProvisionCashSettlQuoteSource.42102, UnderlyingProvisionCashSettlQuoteReferencePage.42103
  UnderlyingProvisionText?: string// [30] 42170 (String)
  EncodedUnderlyingProvisionTextLen?: number// [31] 42171 (Length)
  EncodedUnderlyingProvisionText?: Buffer// [32] 42172 (RawData)
  UnderlyingProvisionParties?: IUnderlyingProvisionParties// [33] NoUnderlyingProvisionPartyIDs.42173, UnderlyingProvisionPartyID.42174 .. UnderlyingProvisionPartySubIDType.42179
}
