import { IUnderlyingCashSettlDealerGrp } from './underlying_cash_settl_dealer_grp'
import { IUnderlyingCashSettlDate } from './underlying_cash_settl_date'

export interface IUnderlyingCashSettlTermGrp {
  UnderlyingCashSettlCurrency?: string// 42042
  UnderlyingCashSettlValuationFirstBusinessDayOffset?: number// 42043
  UnderlyingCashSettlValuationSubsequentBusinessDaysOffset?: number// 42044
  UnderlyingCashSettlNumOfValuationDates?: number// 42045
  UnderlyingCashSettlValuationTime?: string// 42046
  UnderlyingCashSettlBusinessCenter?: string// 42047
  UnderlyingCashSettlQuoteMethod?: number// 42048
  UnderlyingCashSettlQuoteAmount?: number// 42049
  UnderlyingCashSettlQuoteCurrency?: string// 42050
  UnderlyingCashSettlMinimumQuoteAmount?: number// 42051
  UnderlyingCashSettlMinimumQuoteCurrency?: string// 42052
  UnderlyingCashSettlPriceSource?: string// 42797
  UnderlyingCashSettlPriceDefault?: number// 42798
  UnderlyingCashSettlBusinessDays?: number// 42053
  UnderlyingCashSettlAmount?: number// 42054
  UnderlyingCashSettlRecoveryFactor?: number// 42055
  UnderlyingCashSettlFixedTermIndicator?: boolean// 42056
  UnderlyingCashSettlAccruedInterestIndicator?: boolean// 42057
  UnderlyingCashSettlValuationMethod?: number// 42058
  UnderlyingCashSettlTermXID?: string// 42059
  UnderlyingCashSettlDealerGrp?: IUnderlyingCashSettlDealerGrp[]
  UnderlyingCashSettlDate?: IUnderlyingCashSettlDate
}
