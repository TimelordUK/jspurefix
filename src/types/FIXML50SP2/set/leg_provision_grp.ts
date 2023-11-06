import { ILegProvisionDateBusinessCenterGrp } from './leg_provision_date_business_center_grp'
import { ILegProvisionCashSettlValueDates } from './leg_provision_cash_settl_value_dates'
import { ILegProvisionOptionExerciseDates } from './leg_provision_option_exercise_dates'
import { ILegProvisionOptionExpirationDate } from './leg_provision_option_expiration_date'
import { ILegProvisionOptionRelevantUnderlyingDate } from './leg_provision_option_relevant_underlying_date'
import { ILegProvisionCashSettlPaymentDates } from './leg_provision_cash_settl_payment_dates'
import { ILegProvisionCashSettlQuoteSource } from './leg_provision_cash_settl_quote_source'
import { ILegProvisionParties } from './leg_provision_parties'

export interface ILegProvisionGrp {
  LegProvisionType?: number// [1] 40449 (Int)
  LegProvisionDateUnadjusted?: Date// [1] 40450 (LocalDate)
  LegProvisionDateBusinessDayConvention?: number// [1] 40451 (Int)
  LegProvisionDateAdjusted?: Date// [1] 40453 (LocalDate)
  LegProvisionDateTenorPeriod?: number// [1] 40454 (Int)
  LegProvisionDateTenorUnit?: string// [1] 40455 (String)
  LegProvisionBreakFeeElection?: number// [1] 42506 (Int)
  LegProvisionBreakFeeRate?: number// [1] 42507 (Float)
  LegProvisionCalculationAgent?: number// [1] 40456 (Int)
  LegProvisionOptionSinglePartyBuyerSide?: number// [1] 40457 (Int)
  LegProvisionOptionSinglePartySellerSide?: number// [1] 40458 (Int)
  ExerciseStyle?: number// [1] 1194 (Int)
  LegProvisionOptionExerciseMultipleNotional?: number// [1] 40460 (Float)
  LegProvisionOptionExerciseMinimumNotional?: number// [1] 40461 (Float)
  LegProvisionOptionExerciseMaximumNotional?: number// [1] 40462 (Float)
  LegProvisionOptionMinimumNumber?: number// [1] 40463 (Int)
  LegProvisionOptionMaximumNumber?: number// [1] 40464 (Int)
  LegProvisionOptionExerciseConfirmation?: boolean// [1] 40465 (Boolean)
  LegProvisionCashSettlMethod?: number// [1] 40466 (Int)
  LegProvisionCashSettlCurrency?: string// [1] 40467 (String)
  LegProvisionCashSettlCurrency2?: string// [1] 40468 (String)
  LegProvisionCashSettlQuoteType?: number// [1] 40469 (Int)
  LegProvisionText?: string// [1] 40472 (String)
  EncodedLegProvisionTextLen?: number// [1] 40980 (Length)
  EncodedLegProvisionText?: Buffer// [1] 40981 (RawData)
  LegProvisionDateBusinessCenterGrp?: ILegProvisionDateBusinessCenterGrp[]// [1] Ctr.40452
  LegProvisionCashSettlValueDates?: ILegProvisionCashSettlValueDates// [2] Tm.40524, TmBizCtr.40525 .. Dt.40532
  LegProvisionOptionExerciseDates?: ILegProvisionOptionExerciseDates// [3] BizDayCnvtn.40476, ErlstOfstPeriod.40478 .. LtstTmBizCtr.40494
  LegProvisionOptionExpirationDate?: ILegProvisionOptionExpirationDate// [4] DtUnadj.40498, BizDayCnvtn.40499 .. ExpTmBizCtr.40507
  LegProvisionOptionRelevantUnderlyingDate?: ILegProvisionOptionRelevantUnderlyingDate// [5] DtUnadj.40508, BizDayCnvtn.40509 .. Dt.40515
  LegProvisionCashSettlPaymentDates?: ILegProvisionCashSettlPaymentDates// [6] BizDayCnvtn.40516, Reltv.40518 .. DtLast.40523
  LegProvisionCashSettlQuoteSource?: ILegProvisionCashSettlQuoteSource// [7] SettlQteSrc.40470, RefPg.41407
  LegProvisionParties?: ILegProvisionParties[]// [8] ID.40534, Src.22 .. Qual.2380
}
