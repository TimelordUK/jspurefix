export interface ILegOptionExerciseMakeWholeProvision {
  LegMakeWholeDate?: Date// [1] 42392 (LocalDate)
  LegMakeWholeAmount?: number// [1] 42393 (Float)
  LegMakeWholeBenchmarkCurveName?: string// [1] 42394 (String)
  LegMakeWholeBenchmarkCurvePoint?: string// [1] 42395 (String)
  LegMakeWholeRecallSpread?: number// [1] 42396 (Float)
  LegMakeWholeBenchmarkQuote?: number// [1] 42397 (Int)
  LegMakeWholeInterpolationMethod?: number// [1] 42398 (Int)
}
