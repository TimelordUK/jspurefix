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
  AgreementDesc?: string// 913
  AgreementID?: string// 914
  AgreementDate?: Date// 915
  AgreementCurrency?: string// 918
  TerminationType?: number// 788
  StartDate?: Date// 916
  EndDate?: Date// 917
  DeliveryType?: number// 919
  MarginRatio?: number// 898
}
