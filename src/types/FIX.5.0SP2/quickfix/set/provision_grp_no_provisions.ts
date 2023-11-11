import { IProvisionDateBusinessCenterGrp } from './provision_date_business_center_grp'
import { IProvisionCashSettlValueDates } from './provision_cash_settl_value_dates'
import { IProvisionOptionExerciseDates } from './provision_option_exercise_dates'
import { IProvisionOptionExpirationDate } from './provision_option_expiration_date'
import { IProvisionOptionRelevantUnderlyingDate } from './provision_option_relevant_underlying_date'
import { IProvisionCashSettlPaymentDates } from './provision_cash_settl_payment_dates'
import { IProvisionCashSettlQuoteSource } from './provision_cash_settl_quote_source'
import { IProvisionParties } from './provision_parties'

export interface IProvisionGrpNoProvisions {
  ProvisionType?: number// [1] 40091 (Int)
  ProvisionDateUnadjusted?: Date// [2] 40092 (LocalDate)
  ProvisionDateBusinessDayConvention?: number// [3] 40093 (Int)
  ProvisionDateBusinessCenterGrp?: IProvisionDateBusinessCenterGrp// [4] NoProvisionDateBusinessCenters.40957, ProvisionDateBusinessCenter.40094
  ProvisionDateAdjusted?: Date// [5] 40095 (LocalDate)
  ProvisionDateTenorPeriod?: number// [6] 40096 (Int)
  ProvisionDateTenorUnit?: string// [7] 40097 (String)
  ProvisionBreakFeeElection?: number// [8] 42707 (Int)
  ProvisionBreakFeeRate?: number// [9] 42708 (Float)
  ProvisionCalculationAgent?: number// [10] 40098 (Int)
  ProvisionOptionSinglePartyBuyerSide?: number// [11] 40099 (Int)
  ProvisionOptionSinglePartySellerSide?: number// [12] 40100 (Int)
  ProvisionCashSettlValueDates?: IProvisionCashSettlValueDates// [13] ProvisionCashSettlValueTime.40114, ProvisionCashSettlValueTimeBusinessCenter.40115 .. ProvisionCashSettlValueDateAdjusted.40122
  ProvisionOptionExerciseDates?: IProvisionOptionExerciseDates// [14] ProvisionOptionExerciseBusinessDayConvention.40123, ProvisionOptionExerciseBusinessCenterGrp.40954 .. ProvisionOptionExerciseLatestTimeBusinessCenter.40141
  ProvisionOptionExpirationDate?: IProvisionOptionExpirationDate// [15] ProvisionOptionExpirationDateUnadjusted.40145, ProvisionOptionExpirationDateBusinessDayConvention.40146 .. ProvisionOptionExpirationTimeBusinessCenter.40154
  ProvisionOptionRelevantUnderlyingDate?: IProvisionOptionRelevantUnderlyingDate// [16] ProvisionOptionRelevantUnderlyingDateUnadjusted.40155, ProvisionOptionRelevantUnderlyingDateBusinessDayConvention.40156 .. ProvisionOptionRelevantUnderlyingDateAdjusted.40162
  ProvisionOptionExerciseStyle?: number// [17] 40101 (Int)
  ProvisionOptionExerciseMultipleNotional?: number// [18] 40102 (Float)
  ProvisionOptionExerciseMinimumNotional?: number// [19] 40103 (Float)
  ProvisionOptionExerciseMaximumNotional?: number// [20] 40104 (Float)
  ProvisionOptionMinimumNumber?: number// [21] 40105 (Int)
  ProvisionOptionMaximumNumber?: number// [22] 40106 (Int)
  ProvisionOptionExerciseConfirmation?: boolean// [23] 40107 (Boolean)
  ProvisionCashSettlPaymentDates?: IProvisionCashSettlPaymentDates// [24] ProvisionCashSettlPaymentDateBusinessDayConvention.40163, ProvisionCashSettlPaymentDateBusinessCenterGrp.40952 .. ProvisionCashSettlPaymentDateType.40173
  ProvisionCashSettlMethod?: number// [25] 40108 (Int)
  ProvisionCashSettlCurrency?: string// [26] 40109 (String)
  ProvisionCashSettlCurrency2?: string// [27] 40110 (String)
  ProvisionCashSettlQuoteType?: number// [28] 40111 (Int)
  ProvisionCashSettlQuoteSource?: IProvisionCashSettlQuoteSource// [29] ProvisionCashSettlQuoteSource.40112, ProvisionCashSettlQuoteReferencePage.41406
  ProvisionText?: string// [30] 40113 (String)
  EncodedProvisionTextLen?: number// [31] 40986 (Length)
  EncodedProvisionText?: Buffer// [32] 40987 (RawData)
  ProvisionParties?: IProvisionParties// [33] NoProvisionPartyIDs.40174, ProvisionPartyID.40175 .. ProvisionPartySubIDType.40180
}
