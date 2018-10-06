import { IUnderlyingOptionExerciseExpirationDateBusinessCenterGrp } from './underlying_option_exercise_expiration_date_business_center_grp'
import { IUnderlyingOptionExerciseExpirationDateGrp } from './underlying_option_exercise_expiration_date_grp'

export interface IUnderlyingOptionExerciseExpiration {
  UnderlyingOptionExerciseExpirationDateBusinessDayConvention?: number// 41846
  UnderlyingOptionExerciseExpirationDateRelativeTo?: number// 41847
  UnderlyingOptionExerciseExpirationDateOffsetPeriod?: number// 41848
  UnderlyingOptionExerciseExpirationDateOffsetUnit?: string// 41849
  UnderlyingOptionExerciseExpirationFrequencyPeriod?: number// 41850
  UnderlyingOptionExerciseExpirationFrequencyUnit?: string// 41851
  UnderlyingOptionExerciseExpirationRollConvention?: string// 41852
  UnderlyingOptionExerciseExpirationDateOffsetDayType?: number// 41853
  UnderlyingOptionExerciseExpirationTime?: string// 41854
  UnderlyingOptionExerciseExpirationTimeBusinessCenter?: string// 41855
  UnderlyingOptionExerciseExpirationDateBusinessCenterGrp?: IUnderlyingOptionExerciseExpirationDateBusinessCenterGrp[]
  UnderlyingOptionExerciseExpirationDateGrp?: IUnderlyingOptionExerciseExpirationDateGrp[]
}
