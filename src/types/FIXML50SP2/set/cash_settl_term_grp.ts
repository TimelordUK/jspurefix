import { ICashSettlDealerGrp } from './cash_settl_dealer_grp'
import { ICashSettlDate } from './cash_settl_date'

export interface ICashSettlTermGrp {
  CashSettlCurrency?: string// [1] 40023 (String)
  CashSettlValuationFirstBusinessDayOffset?: number// [1] 40024 (Int)
  CashSettlValuationSubsequentBusinessDaysOffset?: number// [1] 40916 (Int)
  CashSettlNumOfValuationDates?: number// [1] 40917 (Int)
  CashSettlValuationTime?: string// [1] 40025 (String)
  CashSettlBusinessCenter?: string// [1] 40026 (String)
  CashSettlQuoteMethod?: number// [1] 40027 (Int)
  CashSettlQuoteAmount?: number// [1] 40028 (Float)
  CashSettlQuoteCurrency?: string// [1] 40029 (String)
  CashSettlMinimumQuoteAmount?: number// [1] 40030 (Float)
  CashSettlMinimumQuoteCurrency?: string// [1] 40031 (String)
  CashSettlPriceSource?: string// [1] 42216 (String)
  CashSettlPriceDefault?: number// [1] 42217 (Int)
  CashSettlBusinessDays?: number// [1] 40033 (Int)
  CashSettlAmount?: number// [1] 40034 (Float)
  CashSettlRecoveryFactor?: number// [1] 40035 (Float)
  CashSettlFixedTermIndicator?: boolean// [1] 40036 (Boolean)
  CashSettlAccruedInterestIndicator?: boolean// [1] 40037 (Boolean)
  CashSettlValuationMethod?: number// [1] 40038 (Int)
  CashSettlTermXID?: string// [1] 40039 (String)
  CashSettlDealerGrp?: ICashSettlDealerGrp[]// [1] Dlr.40032
  CashSettlDate?: ICashSettlDate// [2] DtUnadj.42207, BizDayCnvtn.42208 .. Dt.42213
}
