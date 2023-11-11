import { IUnderlyingCashSettlDealerGrp } from './underlying_cash_settl_dealer_grp'
import { IUnderlyingCashSettlDate } from './underlying_cash_settl_date'

export interface IUnderlyingCashSettlTermGrp {
  UnderlyingCashSettlCurrency?: string// [1] 42042 (String)
  UnderlyingCashSettlValuationFirstBusinessDayOffset?: number// [1] 42043 (Int)
  UnderlyingCashSettlValuationSubsequentBusinessDaysOffset?: number// [1] 42044 (Int)
  UnderlyingCashSettlNumOfValuationDates?: number// [1] 42045 (Int)
  UnderlyingCashSettlValuationTime?: string// [1] 42046 (String)
  UnderlyingCashSettlBusinessCenter?: string// [1] 42047 (String)
  UnderlyingCashSettlQuoteMethod?: number// [1] 42048 (Int)
  UnderlyingCashSettlQuoteAmount?: number// [1] 42049 (Float)
  UnderlyingCashSettlQuoteCurrency?: string// [1] 42050 (String)
  UnderlyingCashSettlMinimumQuoteAmount?: number// [1] 42051 (Float)
  UnderlyingCashSettlMinimumQuoteCurrency?: string// [1] 42052 (String)
  UnderlyingCashSettlPriceSource?: string// [1] 42797 (String)
  UnderlyingCashSettlPriceDefault?: number// [1] 42798 (Int)
  UnderlyingCashSettlBusinessDays?: number// [1] 42053 (Int)
  UnderlyingCashSettlAmount?: number// [1] 42054 (Float)
  UnderlyingCashSettlRecoveryFactor?: number// [1] 42055 (Float)
  UnderlyingCashSettlFixedTermIndicator?: boolean// [1] 42056 (Boolean)
  UnderlyingCashSettlAccruedInterestIndicator?: boolean// [1] 42057 (Boolean)
  UnderlyingCashSettlValuationMethod?: number// [1] 42058 (Int)
  UnderlyingCashSettlTermXID?: string// [1] 42059 (String)
  UnderlyingCashSettlDealerGrp?: IUnderlyingCashSettlDealerGrp[]// [1] Dlr.42040
  UnderlyingCashSettlDate?: IUnderlyingCashSettlDate// [2] DtUnadj.42790, BizDayCnvtn.42791 .. Dt.42796
}
