/*
*************************************************************
* The CommissionDate component block is used to carry       *
* commission information such as the type of commission and *
* the rate.                                                 *
*************************************************************
*/
export interface ICommissionData {
  Commission?: number// [1] 12 (Float)
  CommType?: string// [2] 13 (String)
  CommCurrency?: string// [3] 479 (String)
  FundRenewWaiv?: string// [4] 497 (String)
}
