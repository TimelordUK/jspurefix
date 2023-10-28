export interface ILegOptionExerciseExpiration {
  LegOptionExerciseExpirationDateBusinessDayConvention?: number// [1] 41517 (Int)
  LegOptionExerciseExpirationDateRelativeTo?: number// [2] 41518 (Int)
  LegOptionExerciseExpirationDateOffsetPeriod?: number// [3] 41519 (Int)
  LegOptionExerciseExpirationDateOffsetUnit?: string// [4] 41520 (String)
  LegOptionExerciseExpirationFrequencyPeriod?: number// [5] 41521 (Int)
  LegOptionExerciseExpirationFrequencyUnit?: string// [6] 41522 (String)
  LegOptionExerciseExpirationRollConvention?: string// [7] 41523 (String)
  LegOptionExerciseExpirationDateOffsetDayType?: number// [8] 41524 (Int)
  LegOptionExerciseExpirationTime?: string// [9] 41525 (String)
  LegOptionExerciseExpirationTimeBusinessCenter?: string// [10] 41526 (String)
}
