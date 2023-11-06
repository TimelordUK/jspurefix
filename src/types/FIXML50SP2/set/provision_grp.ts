import { IProvisionDateBusinessCenterGrp } from './provision_date_business_center_grp'
import { IProvisionCashSettlValueDates } from './provision_cash_settl_value_dates'
import { IProvisionOptionExerciseDates } from './provision_option_exercise_dates'
import { IProvisionOptionExpirationDate } from './provision_option_expiration_date'
import { IProvisionOptionRelevantUnderlyingDate } from './provision_option_relevant_underlying_date'
import { IProvisionCashSettlPaymentDates } from './provision_cash_settl_payment_dates'
import { IProvisionCashSettlQuoteSource } from './provision_cash_settl_quote_source'
import { IProvisionParties } from './provision_parties'

export interface IProvisionGrp {
  ProvisionType?: number// [1] 40091 (Int)
  ProvisionDateUnadjusted?: Date// [1] 40092 (LocalDate)
  ProvisionDateBusinessDayConvention?: number// [1] 40093 (Int)
  ProvisionDateAdjusted?: Date// [1] 40095 (LocalDate)
  ProvisionDateTenorPeriod?: number// [1] 40096 (Int)
  ProvisionDateTenorUnit?: string// [1] 40097 (String)
  ProvisionBreakFeeElection?: number// [1] 42707 (Int)
  ProvisionBreakFeeRate?: number// [1] 42708 (Float)
  ProvisionCalculationAgent?: number// [1] 40098 (Int)
  ProvisionOptionSinglePartyBuyerSide?: number// [1] 40099 (Int)
  ProvisionOptionSinglePartySellerSide?: number// [1] 40100 (Int)
  ExerciseStyle?: number// [1] 1194 (Int)
  ProvisionOptionExerciseMultipleNotional?: number// [1] 40102 (Float)
  ProvisionOptionExerciseMinimumNotional?: number// [1] 40103 (Float)
  ProvisionOptionExerciseMaximumNotional?: number// [1] 40104 (Float)
  ProvisionOptionMinimumNumber?: number// [1] 40105 (Int)
  ProvisionOptionMaximumNumber?: number// [1] 40106 (Int)
  ProvisionOptionExerciseConfirmation?: boolean// [1] 40107 (Boolean)
  ProvisionCashSettlMethod?: number// [1] 40108 (Int)
  ProvisionCashSettlCurrency?: string// [1] 40109 (String)
  ProvisionCashSettlCurrency2?: string// [1] 40110 (String)
  ProvisionCashSettlQuoteType?: number// [1] 40111 (Int)
  ProvisionText?: string// [1] 40113 (String)
  EncodedProvisionTextLen?: number// [1] 40986 (Length)
  EncodedProvisionText?: Buffer// [1] 40987 (RawData)
  ProvisionDateBusinessCenterGrp?: IProvisionDateBusinessCenterGrp[]// [1] Ctr.40094
  ProvisionCashSettlValueDates?: IProvisionCashSettlValueDates// [2] Tm.40114, TmBizCtr.40115 .. Dt.40122
  ProvisionOptionExerciseDates?: IProvisionOptionExerciseDates// [3] BizDayCnvtn.40123, ErlstOfstPeriod.40125 .. LtstTmBizCtr.40141
  ProvisionOptionExpirationDate?: IProvisionOptionExpirationDate// [4] DtUnadj.40145, BizDayCnvtn.40146 .. ExpTmBizCtr.40154
  ProvisionOptionRelevantUnderlyingDate?: IProvisionOptionRelevantUnderlyingDate// [5] DtUnadj.40155, BizDayCnvtn.40156 .. Dt.40162
  ProvisionCashSettlPaymentDates?: IProvisionCashSettlPaymentDates// [6] BizDayCnvtn.40163, Reltv.40165 .. DtLast.40170
  ProvisionCashSettlQuoteSource?: IProvisionCashSettlQuoteSource// [7] SettlQteSrc.40112, RefPg.41406
  ProvisionParties?: IProvisionParties[]// [8] ID.40175, Src.40176 .. Qual.2385
}
