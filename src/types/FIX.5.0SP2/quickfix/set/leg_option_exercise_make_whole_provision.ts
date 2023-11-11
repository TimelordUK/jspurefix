export interface ILegOptionExerciseMakeWholeProvision {
  LegMakeWholeDate?: Date// [1] 42392 (LocalDate)
  LegMakeWholeAmount?: number// [2] 42393 (Float)
  LegMakeWholeBenchmarkCurveName?: string// [3] 42394 (String)
  LegMakeWholeBenchmarkCurvePoint?: string// [4] 42395 (String)
  LegMakeWholeRecallSpread?: number// [5] 42396 (Float)
  LegMakeWholeBenchmarkQuote?: number// [6] 42397 (Int)
  LegMakeWholeInterpolationMethod?: number// [7] 42398 (Int)
}
