import { ILegCashSettlDealerGrp } from './leg_cash_settl_dealer_grp'
import { ILegCashSettlDate } from './leg_cash_settl_date'

export interface ILegCashSettlTermGrpNoLegCashSettlTerms {
  LegCashSettlCurrency?: string// [1] 41345 (String)
  LegCasSettlValuationFirstBusinessDayOffset?: number// [2] 41346 (Int)
  LegCashSettlValuationSubsequentBusinessDaysOffset?: number// [3] 41347 (Int)
  LegCashSettlNumOfValuationDates?: number// [4] 41348 (Int)
  LegCashSettlValuationTime?: string// [5] 41349 (String)
  LegCashSettlBusinessCenter?: string// [6] 41350 (String)
  LegCashSettlQuoteMethod?: number// [7] 41351 (Int)
  LegCashSettlQuoteAmount?: number// [8] 41352 (Float)
  LegCashSettlQuoteCurrency?: string// [9] 41353 (String)
  LegCashSettlMinimumQuoteAmount?: number// [10] 41354 (Float)
  LegCashSettlMinimumQuoteCurrency?: string// [11] 41355 (String)
  LegCashSettlDealerGrp?: ILegCashSettlDealerGrp// [12] NoLegCashSettlDealers.41342, LegCashSettlDealer.41343
  LegCashSettlPriceSource?: string// [13] 42308 (String)
  LegCashSettlPriceDefault?: number// [14] 42309 (Int)
  LegCashSettlBusinessDays?: number// [15] 41356 (Int)
  LegCashSettlAmount?: number// [16] 41357 (Float)
  LegCashSettlDate?: ILegCashSettlDate// [17] LegCashSettlDateUnadjusted.42299, LegCashSettlDateBusinessDayConvention.42300 .. LegCashSettlDateAdjusted.42305
  LegCashSettlRecoveryFactor?: number// [18] 41358 (Float)
  LegCashSettlFixedTermIndicator?: boolean// [19] 41359 (Boolean)
  LegCashSettlAccruedInterestIndicator?: boolean// [20] 41360 (Boolean)
  LegCashSettlValuationMethod?: number// [21] 41361 (Int)
  LegCashSettlTermXID?: string// [22] 41362 (String)
}
