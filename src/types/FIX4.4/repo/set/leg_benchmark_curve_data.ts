/*
***************************************************************
* The LegBenchmarkCurveData is used to convey the benchmark   *
* information used for pricing in a multi-legged Fixed Income *
* security.                                                   *
***************************************************************
*/
export interface ILegBenchmarkCurveData {
  LegBenchmarkCurveCurrency?: string// [1] 676 (String)
  LegBenchmarkCurveName?: string// [2] 677 (String)
  LegBenchmarkCurvePoint?: string// [3] 678 (String)
  LegBenchmarkPrice?: number// [4] 679 (Float)
  LegBenchmarkPriceType?: number// [5] 680 (Int)
}
