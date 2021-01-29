/*
*************************************************************
* The CommissionDate component block is used to carry       *
* commission information such as the type of commission and *
* the rate.                                                 *
*************************************************************
*/
export interface ICommissionData {
  Commission?: number// 12
  CommType?: string// 13
  CommCurrency?: string// 479
  FundRenewWaiv?: string// 497
}
