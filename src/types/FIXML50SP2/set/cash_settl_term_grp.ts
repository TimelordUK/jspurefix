import { ICashSettlDealerGrp } from './cash_settl_dealer_grp'
import { ICashSettlDate } from './cash_settl_date'

export interface ICashSettlTermGrp {
  CashSettlCurrency?: string// 40023
  CashSettlValuationFirstBusinessDayOffset?: number// 40024
  CashSettlValuationSubsequentBusinessDaysOffset?: number// 40916
  CashSettlNumOfValuationDates?: number// 40917
  CashSettlValuationTime?: string// 40025
  CashSettlBusinessCenter?: string// 40026
  CashSettlQuoteMethod?: number// 40027
  CashSettlQuoteAmount?: number// 40028
  CashSettlQuoteCurrency?: string// 40029
  CashSettlMinimumQuoteAmount?: number// 40030
  CashSettlMinimumQuoteCurrency?: string// 40031
  CashSettlPriceSource?: string// 42216
  CashSettlPriceDefault?: number// 42217
  CashSettlBusinessDays?: number// 40033
  CashSettlAmount?: number// 40034
  CashSettlRecoveryFactor?: number// 40035
  CashSettlFixedTermIndicator?: boolean// 40036
  CashSettlAccruedInterestIndicator?: boolean// 40037
  CashSettlValuationMethod?: number// 40038
  CashSettlTermXID?: string// 40039
  CashSettlDealerGrp?: ICashSettlDealerGrp[]
  CashSettlDate?: ICashSettlDate
}
