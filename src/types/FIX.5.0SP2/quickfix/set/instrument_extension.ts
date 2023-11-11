import { IAttrbGrp } from './attrb_grp'
import { IIndexRollMonthGrp } from './index_roll_month_grp'
import { IFloatingRateIndex } from './floating_rate_index'
import { IReferenceDataDateGrp } from './reference_data_date_grp'

export interface IInstrumentExtension {
  DeliveryForm?: number// [1] 668 (Int)
  PctAtRisk?: number// [2] 869 (Float)
  AttrbGrp?: IAttrbGrp// [3] NoInstrAttrib.870, InstrAttribType.871, InstrAttribValue.872
  CommodityFinalPriceType?: number// [4] 2736 (Int)
  IndexRollMonthGrp?: IIndexRollMonthGrp// [5] NoIndexRollMonths.2734, IndexRollMonth.2733
  NextIndexRollDate?: Date// [6] 2738 (LocalDate)
  FloatingRateIndex?: IFloatingRateIndex// [7] FloatingRateIndexID.2731, FloatingRateIndexIDSource.2732 .. FloatingRateIndexCurveSpread.2729
  ReferenceDataDateGrp?: IReferenceDataDateGrp// [8] NoReferenceDataDates.2746, ReferenceDataDate.2747, ReferenceDataDateType.2748
}
