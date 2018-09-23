/*
***************************************************************
* The YieldData component block conveys yield information for *
* a given Fixed Income security.                              *
***************************************************************
*/
export interface IYieldData {
  YieldType?: string// 235
  Yield?: number// 236
  YieldCalcDate?: Date// 701
  YieldRedemptionDate?: Date// 696
  YieldRedemptionPrice?: number// 697
  YieldRedemptionPriceType?: number// 698
}
