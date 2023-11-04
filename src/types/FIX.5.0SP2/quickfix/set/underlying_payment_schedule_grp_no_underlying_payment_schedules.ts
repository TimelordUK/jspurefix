import { IUnderlyingPaymentScheduleRateSourceGrp } from './underlying_payment_schedule_rate_source_grp'
import { IUnderlyingPaymentScheduleFixingDateBusinessCenterGrp } from './underlying_payment_schedule_fixing_date_business_center_grp'
import { IUnderlyingPaymentScheduleFixingDayGrp } from './underlying_payment_schedule_fixing_day_grp'
import { IUnderlyingPaymentScheduleInterimExchangeDateBusinessCenterGrp } from './underlying_payment_schedule_interim_exchange_date_business_center_grp'

export interface IUnderlyingPaymentScheduleGrpNoUnderlyingPaymentSchedules {
  UnderlyingPaymentScheduleType?: number// [1] 40665 (Int)
  UnderlyingPaymentScheduleXID?: string// [2] 41881 (String)
  UnderlyingPaymentScheduleXIDRef?: string// [3] 41882 (String)
  UnderlyingPaymentScheduleStubType?: number// [4] 40666 (Int)
  UnderlyingPaymentScheduleStartDateUnadjusted?: Date// [5] 40667 (LocalDate)
  UnderlyingPaymentScheduleEndDateUnadjusted?: Date// [6] 40668 (LocalDate)
  UnderlyingPaymentSchedulePaySide?: number// [7] 40669 (Int)
  UnderlyingPaymentScheduleReceiveSide?: number// [8] 40670 (Int)
  UnderlyingPaymentScheduleNotional?: number// [9] 40671 (Float)
  UnderlyingPaymentScheduleCurrency?: string// [10] 40672 (String)
  UnderlyingPaymentScheduleRate?: number// [11] 40673 (Float)
  UnderlyingPaymentScheduleRateMultiplier?: number// [12] 40674 (Float)
  UnderlyingPaymentScheduleRateSpread?: number// [13] 40675 (Float)
  UnderlyingPaymentScheduleRateCurrency?: string// [14] 41883 (String)
  UnderlyingPaymentScheduleRateUnitOfMeasure?: string// [15] 41884 (String)
  UnderlyingPaymentScheduleRateConversionFactor?: number// [16] 41885 (Float)
  UnderlyingPaymentScheduleRateSpreadType?: number// [17] 41886 (Int)
  UnderlyingPaymentScheduleRateSpreadPositionType?: number// [18] 40676 (Int)
  UnderlyingPaymentScheduleRateTreatment?: number// [19] 40677 (Int)
  UnderlyingPaymentScheduleFixedAmount?: number// [20] 40678 (Float)
  UnderlyingPaymentScheduleFixedCurrency?: string// [21] 40679 (String)
  UnderlyingPaymentScheduleSettlPeriodPrice?: number// [22] 41887 (Float)
  UnderlyingPaymentScheduleSettlPeriodPriceCurrency?: string// [23] 41888 (String)
  UnderlyingPaymentScheduleSettlPeriodPriceUnitOfMeasure?: string// [24] 41889 (String)
  UnderlyingPaymentScheduleStepUnitOfMeasure?: string// [25] 41890 (String)
  UnderlyingPaymentScheduleStepFrequencyPeriod?: number// [26] 40680 (Int)
  UnderlyingPaymentScheduleStepFrequencyUnit?: string// [27] 40681 (String)
  UnderlyingPaymentScheduleStepOffsetValue?: number// [28] 40682 (Float)
  UnderlyingPaymentScheduleStepRate?: number// [29] 40683 (Float)
  UnderlyingPaymentScheduleStepOffsetRate?: number// [30] 40684 (Float)
  UnderlyingPaymentScheduleStepRelativeTo?: number// [31] 40685 (Int)
  UnderlyingPaymentScheduleRateSourceGrp?: IUnderlyingPaymentScheduleRateSourceGrp// [32] NoUnderlyingPaymentScheduleRateSources.40704, UnderlyingPaymentScheduleRateSource.40705 .. UnderlyingPaymentScheduleReferencePage.40707
  UnderlyingPaymentScheduleFixingDateUnadjusted?: Date// [33] 40686 (LocalDate)
  UnderlyingPaymentScheduleWeight?: number// [34] 40687 (Float)
  UnderlyingPaymentScheduleFixingDateRelativeTo?: number// [35] 40688 (Int)
  UnderlyingPaymentScheduleFixingDateBusinessDayCnvtn?: number// [36] 40689 (Int)
  UnderlyingPaymentScheduleFixingDateBusinessCenterGrp?: IUnderlyingPaymentScheduleFixingDateBusinessCenterGrp// [37] NoUnderlyingPaymentScheduleFixingDateBusinessCenters.40966, UnderlyingPaymentScheduleFixingDateBusinessCenter.40690
  UnderlyingPaymentScheduleFixingDateOffsetPeriod?: number// [38] 40691 (Int)
  UnderlyingPaymentScheduleFixingDateOffsetUnit?: string// [39] 40692 (String)
  UnderlyingPaymentScheduleFixingDateOffsetDayType?: number// [40] 40693 (Int)
  UnderlyingPaymentScheduleFixingDayDistribution?: number// [41] 41891 (Int)
  UnderlyingPaymentScheduleFixingDayCount?: number// [42] 41892 (Int)
  UnderlyingPaymentScheduleFixingDateAdjusted?: Date// [43] 40694 (LocalDate)
  UnderlyingPaymentScheduleFixingDayGrp?: IUnderlyingPaymentScheduleFixingDayGrp// [44] NoUnderlyingPaymentScheduleFixingDays.41878, UnderlyingPaymentScheduleFixingDayOfWeek.41879, UnderlyingPaymentScheduleFixingDayNumber.41880
  UnderlyingPaymentScheduleFixingLagPeriod?: number// [45] 41893 (Int)
  UnderlyingPaymentScheduleFixingLagUnit?: string// [46] 41894 (String)
  UnderlyingPaymentScheduleFixingFirstObservationDateOffsetPeriod?: number// [47] 41895 (Int)
  UnderlyingPaymentScheduleFixingFirstObservationDateOffsetUnit?: string// [48] 41896 (String)
  UnderlyingPaymentScheduleFixingTime?: string// [49] 40695 (String)
  UnderlyingPaymentScheduleFixingTimeBusinessCenter?: string// [50] 40696 (String)
  UnderlyingPaymentScheduleInterimExchangePaymentDateRelativeTo?: number// [51] 40697 (Int)
  UnderlyingPaymentScheduleInterimExchangeDatesBizDayConvention?: number// [52] 40698 (Int)
  UnderlyingPaymentScheduleInterimExchangeDateBusinessCenterGrp?: IUnderlyingPaymentScheduleInterimExchangeDateBusinessCenterGrp// [53] NoUnderlyingPaymentScheduleInterimExchangeDateBusinessCenters.40967, UnderlyingPaymentScheduleInterimExchangeDatesBusinessCenter.40699
  UnderlyingPaymentScheduleInterimExchangeDatesOffsetPeriod?: number// [54] 40700 (Int)
  UnderlyingPaymentScheduleInterimExchangeDatesOffsetUnit?: string// [55] 40701 (String)
  UnderlyingPaymentScheduleInterimExchangeDatesOffsetDayType?: number// [56] 40702 (Int)
  UnderlyingPaymentScheduleInterimExchangeDateAdjusted?: Date// [57] 40703 (LocalDate)
}