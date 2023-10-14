/*
***************************************************************
* Component block is optionally used only for financing deals *
* to identify the legal agreement under which the deal was    *
* made and other unique characteristics of the transaction.   *
* The AgreementDesc field refers to base standard documents   *
* such as MRA 1996 Repurchase Agreement, GMRA 2000 Bills      *
* Transaction (U.K.), MSLA 1993 Securities Loan  Amended     *
* 1998, for example.                                          *
***************************************************************
*/
export interface IFinancingDetails {
  AgreementDesc?: string// [1] 913 (String)
  AgreementID?: string// [2] 914 (String)
  AgreementDate?: Date// [3] 915 (LocalDate)
  AgreementCurrency?: string// [4] 918 (String)
  TerminationType?: number// [5] 788 (Int)
  StartDate?: Date// [6] 916 (LocalDate)
  EndDate?: Date// [7] 917 (LocalDate)
  DeliveryType?: number// [8] 919 (Int)
  MarginRatio?: number// [9] 898 (Float)
}
