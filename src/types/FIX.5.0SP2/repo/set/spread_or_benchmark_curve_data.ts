/*
***************************************************************
* The SpreadOrBenchmarkCurveData component block is primarily *
* used for Fixed Income to convey spread to a benchmark       *
* security or curve.                                          *
***************************************************************
*/
export interface ISpreadOrBenchmarkCurveData {
  Spread?: number// 218
  BenchmarkCurveCurrency?: string// 220
  BenchmarkCurveName?: string// 221
  BenchmarkCurvePoint?: string// 222
  BenchmarkPrice?: number// 662
  BenchmarkPriceType?: number// 663
  BenchmarkSecurityID?: string// 699
  BenchmarkSecurityIDSource?: string// 761
}
