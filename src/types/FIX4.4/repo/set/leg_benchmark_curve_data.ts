/*
***************************************************************
* The LegBenchmarkCurveData is used to convey the benchmark   *
* information used for pricing in a multi-legged Fixed Income *
* security.                                                   *
***************************************************************
*/
export interface ILegBenchmarkCurveData {
  LegBenchmarkCurveCurrency?: string// 676
  LegBenchmarkCurveName?: string// 677
  LegBenchmarkCurvePoint?: string// 678
  LegBenchmarkPrice?: number// 679
  LegBenchmarkPriceType?: number// 680
}
