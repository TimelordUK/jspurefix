export interface IUnderlyingOptionExerciseMakeWholeProvision {
  UnderlyingMakeWholeDate?: Date// [1] 42888 (LocalDate)
  UnderlyingMakeWholeAmount?: number// [2] 42889 (Float)
  UnderlyingMakeWholeBenchmarkCurveName?: string// [3] 42890 (String)
  UnderlyingMakeWholeBenchmarkCurvePoint?: string// [4] 42891 (String)
  UnderlyingMakeWholeRecallSpread?: number// [5] 42892 (Float)
  UnderlyingMakeWholeBenchmarkQuote?: number// [6] 42893 (Int)
  UnderlyingMakeWholeInterpolationMethod?: number// [7] 42894 (Int)
}
