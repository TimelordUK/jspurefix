import { IUnderlyingCashSettlDealerGrp } from './underlying_cash_settl_dealer_grp'
import { IUnderlyingCashSettlDate } from './underlying_cash_settl_date'

export interface IUnderlyingCashSettlTermGrpNoUnderlyingCashSettlTerms {
  UnderlyingCashSettlCurrency?: string// [1] 42042 (String)
  UnderlyingCashSettlValuationFirstBusinessDayOffset?: number// [2] 42043 (Int)
  UnderlyingCashSettlValuationSubsequentBusinessDaysOffset?: number// [3] 42044 (Int)
  UnderlyingCashSettlNumOfValuationDates?: number// [4] 42045 (Int)
  UnderlyingCashSettlValuationTime?: string// [5] 42046 (String)
  UnderlyingCashSettlBusinessCenter?: string// [6] 42047 (String)
  UnderlyingCashSettlQuoteMethod?: number// [7] 42048 (Int)
  UnderlyingCashSettlQuoteAmount?: number// [8] 42049 (Float)
  UnderlyingCashSettlQuoteCurrency?: string// [9] 42050 (String)
  UnderlyingCashSettlMinimumQuoteAmount?: number// [10] 42051 (Float)
  UnderlyingCashSettlMinimumQuoteCurrency?: string// [11] 42052 (String)
  UnderlyingCashSettlDealerGrp?: IUnderlyingCashSettlDealerGrp// [12] NoUnderlyingCashSettlDealers.42039, UnderlyingCashSettlDealer.42040
  UnderlyingCashSettlPriceSource?: string// [13] 42797 (String)
  UnderlyingCashSettlPriceDefault?: number// [14] 42798 (Int)
  UnderlyingCashSettlBusinessDays?: number// [15] 42053 (Int)
  UnderlyingCashSettlAmount?: number// [16] 42054 (Float)
  UnderlyingCashSettlDate?: IUnderlyingCashSettlDate// [17] UnderlyingCashSettlDateUnadjusted.42790, UnderlyingCashSettlDateBusinessDayConvention.42791 .. UnderlyingCashSettlDateAdjusted.42796
  UnderlyingCashSettlRecoveryFactor?: number// [18] 42055 (Float)
  UnderlyingCashSettlFixedTermIndicator?: boolean// [19] 42056 (Boolean)
  UnderlyingCashSettlAccruedInterestIndicator?: boolean// [20] 42057 (Boolean)
  UnderlyingCashSettlValuationMethod?: number// [21] 42058 (Int)
  UnderlyingCashSettlTermXID?: string// [22] 42059 (String)
}
