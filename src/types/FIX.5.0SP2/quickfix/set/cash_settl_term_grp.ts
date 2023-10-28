import { ICashSettlTermGrpNoCashSettlTerms } from './cash_settl_term_grp_no_cash_settl_terms'

export interface ICashSettlTermGrp {
  NoCashSettlTerms?: ICashSettlTermGrpNoCashSettlTerms[]// [1] CashSettlCurrency.40023, CashSettlValuationFirstBusinessDayOffset.40024 .. CashSettlTermXID.40039
}
