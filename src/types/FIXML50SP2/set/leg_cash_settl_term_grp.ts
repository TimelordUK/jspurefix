import { ILegCashSettlDealerGrp } from './leg_cash_settl_dealer_grp'
import { ILegCashSettlDate } from './leg_cash_settl_date'

export interface ILegCashSettlTermGrp {
  LegCashSettlCurrency?: string// 41345
  LegCasSettlValuationFirstBusinessDayOffset?: number// 41346
  LegCashSettlValuationSubsequentBusinessDaysOffset?: number// 41347
  LegCashSettlNumOfValuationDates?: number// 41348
  LegCashSettlValuationTime?: string// 41349
  LegCashSettlBusinessCenter?: string// 41350
  LegCashSettlQuoteMethod?: number// 41351
  LegCashSettlQuoteAmount?: number// 41352
  LegCashSettlQuoteCurrency?: string// 41353
  LegCashSettlMinimumQuoteAmount?: number// 41354
  LegCashSettlMinimumQuoteCurrency?: string// 41355
  LegCashSettlPriceSource?: string// 42308
  LegCashSettlPriceDefault?: number// 42309
  LegCashSettlBusinessDays?: number// 41356
  LegCashSettlAmount?: number// 41357
  LegCashSettlRecoveryFactor?: number// 41358
  LegCashSettlFixedTermIndicator?: boolean// 41359
  LegCashSettlAccruedInterestIndicator?: boolean// 41360
  LegCashSettlValuationMethod?: number// 41361
  LegCashSettlTermXID?: string// 41362
  LegCashSettlDealerGrp?: ILegCashSettlDealerGrp[]
  LegCashSettlDate?: ILegCashSettlDate
}
