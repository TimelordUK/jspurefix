import { IUnderlyingProvisionDateBusinessCenterGrp } from './underlying_provision_date_business_center_grp'
import { IUnderlyingProvisionCashSettlValueDates } from './underlying_provision_cash_settl_value_dates'
import { IUnderlyingProvisionOptionExerciseDates } from './underlying_provision_option_exercise_dates'
import { IUnderlyingProvisionOptionExpirationDate } from './underlying_provision_option_expiration_date'
import { IUnderlyingProvisionOptionRelevantUnderlyingDate } from './underlying_provision_option_relevant_underlying_date'
import { IUnderlyingProvisionCashSettlPaymentDates } from './underlying_provision_cash_settl_payment_dates'
import { IUnderlyingProvisionCashSettlQuoteSource } from './underlying_provision_cash_settl_quote_source'
import { IUnderlyingProvisionParties } from './underlying_provision_parties'

export interface IUnderlyingProvisionGrp {
  UnderlyingProvisionType?: number// [1] 42150 (Int)
  UnderlyingProvisionDateUnadjusted?: Date// [1] 42151 (LocalDate)
  UnderlyingProvisionDateBusinessDayConvention?: number// [1] 42152 (Int)
  UnderlyingProvisionDateAdjusted?: Date// [1] 42153 (LocalDate)
  UnderlyingProvisionDateTenorPeriod?: number// [1] 42154 (Int)
  UnderlyingProvisionDateTenorUnit?: string// [1] 42155 (String)
  UnderlyingProvisionBreakFeeElection?: number// [1] 43002 (Int)
  UnderlyingProvisionBreakFeeRate?: number// [1] 43003 (Float)
  UnderlyingProvisionCalculationAgent?: number// [1] 42156 (Int)
  UnderlyingProvisionOptionSinglePartyBuyerSide?: number// [1] 42157 (Int)
  UnderlyingProvisionOptionSinglePartySellerSide?: number// [1] 42158 (Int)
  ExerciseStyle?: number// [1] 1194 (Int)
  UnderlyingProvisionOptionExerciseMultipleNotional?: number// [1] 42160 (Float)
  UnderlyingProvisionOptionExerciseMinimumNotional?: number// [1] 42161 (Float)
  UnderlyingProvisionOptionExerciseMaximumNotional?: number// [1] 42162 (Float)
  UnderlyingProvisionOptionMinimumNumber?: number// [1] 42163 (Int)
  UnderlyingProvisionOptionMaximumNumber?: number// [1] 42164 (Int)
  UnderlyingProvisionOptionExerciseConfirmation?: boolean// [1] 42165 (Boolean)
  UnderlyingProvisionCashSettlMethod?: number// [1] 42166 (Int)
  UnderlyingProvisionCashSettlCurrency?: string// [1] 42167 (String)
  UnderlyingProvisionCashSettlCurrency2?: string// [1] 42168 (String)
  UnderlyingProvisionCashSettlQuoteType?: number// [1] 42169 (Int)
  UnderlyingProvisionText?: string// [1] 42170 (String)
  EncodedUnderlyingProvisionTextLen?: number// [1] 42171 (Length)
  EncodedUnderlyingProvisionText?: Buffer// [1] 42172 (RawData)
  UnderlyingProvisionDateBusinessCenterGrp?: IUnderlyingProvisionDateBusinessCenterGrp[]// [1] Ctr.42191
  UnderlyingProvisionCashSettlValueDates?: IUnderlyingProvisionCashSettlValueDates// [2] Tm.42104, TmBizCtr.42105 .. Dt.42111
  UnderlyingProvisionOptionExerciseDates?: IUnderlyingProvisionOptionExerciseDates// [3] BizDayCnvtn.42115, ErlstOfstPeriod.42116 .. LtstTmBizCtr.42132
  UnderlyingProvisionOptionExpirationDate?: IUnderlyingProvisionOptionExpirationDate// [4] DtUnadj.42133, BizDayCnvtn.42134 .. ExpTmBizCtr.42141
  UnderlyingProvisionOptionRelevantUnderlyingDate?: IUnderlyingProvisionOptionRelevantUnderlyingDate// [5] DtUnadj.42142, BizDayCnvtn.42143 .. Dt.42148
  UnderlyingProvisionCashSettlPaymentDates?: IUnderlyingProvisionCashSettlPaymentDates// [6] BizDayCnvtn.42092, Reltv.42093 .. DtLast.42098
  UnderlyingProvisionCashSettlQuoteSource?: IUnderlyingProvisionCashSettlQuoteSource// [7] SettlQteSrc.42102, RefPg.42103
  UnderlyingProvisionParties?: IUnderlyingProvisionParties[]// [8] ID.42174, Src.42175 .. Qual.40918
}
