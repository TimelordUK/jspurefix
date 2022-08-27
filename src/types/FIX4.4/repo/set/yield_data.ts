/*
***************************************************************
* The YieldData component block conveys yield information for *
* a given Fixed Income security.                              *
***************************************************************
*/
export interface IYieldData {
  YieldType?: string// [1] 235 (String)
  Yield?: number// [2] 236 (Float)
  YieldCalcDate?: Date// [3] 701 (LocalDate)
  YieldRedemptionDate?: Date// [4] 696 (LocalDate)
  YieldRedemptionPrice?: number// [5] 697 (Float)
  YieldRedemptionPriceType?: number// [6] 698 (Int)
}
