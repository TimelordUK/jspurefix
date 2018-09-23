import { ILegCashSettlDealerGrp } from './leg_cash_settl_dealer_grp'
import { ILegCashSettlDate } from './leg_cash_settl_date'

export interface ILegCashSettlTermGrp {
  UnderlyingReturnRatePriceCurrency?: string// 43067
  UnderlyingCashSettlValuationFirstBusinessDayOffset?: number// 42043
  UnderlyingCashSettlValuationSubsequentBusinessDaysOffset?: number// 42044
  UnderlyingCashSettlNumOfValuationDates?: number// 42045
  UnderlyingReturnRateValuationTime?: string// 43056
  UnderlyingProtectionTermEventBusinessCenter?: string// 42073
  UnderlyingReturnRateQuoteMethod?: number// 43044
  UnderlyingCashSettlQuoteAmount?: number// 42049
  UnderlyingReturnRateQuoteCurrency?: string// 43045
  UnderlyingCashSettlMinimumQuoteAmount?: number// 42051
  UnderlyingCashSettlMinimumQuoteCurrency?: string// 42052
  UnderlyingCashSettlPriceSource?: string// 42797
  UnderlyingCashSettlPriceDefault?: number// 42798
  UnderlyingPhysicalSettlBusinessDays?: number// 42062
  UnderlyingMakeWholeAmount?: number// 42889
  UnderlyingCashSettlRecoveryFactor?: string// 42055
  UnderlyingCashSettlFixedTermIndicator?: string// 42056
  UnderlyingCashSettlAccruedInterestIndicator?: string// 42057
  UnderlyingCashSettlValuationMethod?: number// 42058
  UnderlyingDividendPeriodXID?: string// 42881
  LegCashSettlDealerGrp?: ILegCashSettlDealerGrp[]
  LegCashSettlDate?: ILegCashSettlDate
}
