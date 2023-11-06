import { ILegCashSettlDealerGrp } from './leg_cash_settl_dealer_grp'
import { ILegCashSettlDate } from './leg_cash_settl_date'

export interface ILegCashSettlTermGrp {
  LegCashSettlCurrency?: string// [1] 41345 (String)
  LegCasSettlValuationFirstBusinessDayOffset?: number// [1] 41346 (Int)
  LegCashSettlValuationSubsequentBusinessDaysOffset?: number// [1] 41347 (Int)
  LegCashSettlNumOfValuationDates?: number// [1] 41348 (Int)
  LegCashSettlValuationTime?: string// [1] 41349 (String)
  LegCashSettlBusinessCenter?: string// [1] 41350 (String)
  LegCashSettlQuoteMethod?: number// [1] 41351 (Int)
  LegCashSettlQuoteAmount?: number// [1] 41352 (Float)
  LegCashSettlQuoteCurrency?: string// [1] 41353 (String)
  LegCashSettlMinimumQuoteAmount?: number// [1] 41354 (Float)
  LegCashSettlMinimumQuoteCurrency?: string// [1] 41355 (String)
  LegCashSettlPriceSource?: string// [1] 42308 (String)
  LegCashSettlPriceDefault?: number// [1] 42309 (Int)
  LegCashSettlBusinessDays?: number// [1] 41356 (Int)
  LegCashSettlAmount?: number// [1] 41357 (Float)
  LegCashSettlRecoveryFactor?: number// [1] 41358 (Float)
  LegCashSettlFixedTermIndicator?: boolean// [1] 41359 (Boolean)
  LegCashSettlAccruedInterestIndicator?: boolean// [1] 41360 (Boolean)
  LegCashSettlValuationMethod?: number// [1] 41361 (Int)
  LegCashSettlTermXID?: string// [1] 41362 (String)
  LegCashSettlDealerGrp?: ILegCashSettlDealerGrp[]// [1] Dlr.41343
  LegCashSettlDate?: ILegCashSettlDate// [2] DtUnadj.42299, BizDayCnvtn.42300 .. Dt.42305
}
