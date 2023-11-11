import { ICashSettlDealerGrp } from './cash_settl_dealer_grp'
import { ICashSettlDate } from './cash_settl_date'

export interface ICashSettlTermGrpNoCashSettlTerms {
  CashSettlCurrency?: string// [1] 40023 (String)
  CashSettlValuationFirstBusinessDayOffset?: number// [2] 40024 (Int)
  CashSettlValuationSubsequentBusinessDaysOffset?: number// [3] 40916 (Int)
  CashSettlNumOfValuationDates?: number// [4] 40917 (Int)
  CashSettlValuationTime?: string// [5] 40025 (String)
  CashSettlBusinessCenter?: string// [6] 40026 (String)
  CashSettlQuoteMethod?: number// [7] 40027 (Int)
  CashSettlQuoteAmount?: number// [8] 40028 (Float)
  CashSettlQuoteCurrency?: string// [9] 40029 (String)
  CashSettlMinimumQuoteAmount?: number// [10] 40030 (Float)
  CashSettlMinimumQuoteCurrency?: string// [11] 40031 (String)
  CashSettlDealerGrp?: ICashSettlDealerGrp// [12] NoCashSettlDealers.40277, CashSettlDealer.40032
  CashSettlPriceSource?: string// [13] 42216 (String)
  CashSettlPriceDefault?: number// [14] 42217 (Int)
  CashSettlBusinessDays?: number// [15] 40033 (Int)
  CashSettlAmount?: number// [16] 40034 (Float)
  CashSettlDate?: ICashSettlDate// [17] CashSettlDateUnadjusted.42207, CashSettlDateBusinessDayConvention.42208 .. CashSettlDateAdjusted.42213
  CashSettlRecoveryFactor?: number// [18] 40035 (Float)
  CashSettlFixedTermIndicator?: boolean// [19] 40036 (Boolean)
  CashSettlAccruedInterestIndicator?: boolean// [20] 40037 (Boolean)
  CashSettlValuationMethod?: number// [21] 40038 (Int)
  CashSettlTermXID?: string// [22] 40039 (String)
}
