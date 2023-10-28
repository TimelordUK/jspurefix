export interface IOptionExerciseExpiration {
  OptionExerciseExpirationDateBusinessDayConvention?: number// [1] 41142 (Int)
  OptionExerciseExpirationDateRelativeTo?: number// [2] 41143 (Int)
  OptionExerciseExpirationDateOffsetPeriod?: number// [3] 41144 (Int)
  OptionExerciseExpirationDateOffsetUnit?: string// [4] 41145 (String)
  OptionExerciseExpirationFrequencyPeriod?: number// [5] 41146 (Int)
  OptionExerciseExpirationFrequencyUnit?: string// [6] 41147 (String)
  OptionExerciseExpirationRollConvention?: string// [7] 41148 (String)
  OptionExerciseExpirationDateOffsetDayType?: number// [8] 41149 (Int)
  OptionExerciseExpirationTime?: string// [9] 41150 (String)
  OptionExerciseExpirationTimeBusinessCenter?: string// [10] 41151 (String)
}
