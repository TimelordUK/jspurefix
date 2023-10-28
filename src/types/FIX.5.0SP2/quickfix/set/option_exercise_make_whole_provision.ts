export interface IOptionExerciseMakeWholeProvision {
  MakeWholeDate?: Date// [1] 42591 (LocalDate)
  MakeWholeAmount?: number// [2] 42592 (Float)
  MakeWholeBenchmarkCurveName?: string// [3] 42593 (String)
  MakeWholeBenchmarkCurvePoint?: string// [4] 42594 (String)
  MakeWholeRecallSpread?: number// [5] 42595 (Float)
  MakeWholeBenchmarkQuote?: number// [6] 42596 (Int)
  MakeWholeInterpolationMethod?: number// [7] 42597 (Int)
}
