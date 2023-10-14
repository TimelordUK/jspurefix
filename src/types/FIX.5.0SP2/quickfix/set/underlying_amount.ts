/*
***************************************************************
* The UnderlyingAmount component block is used to supply the  *
* underlying amounts, dates, settlement status and method for *
* derivative positions.                                       *
***************************************************************
*/
export interface IUnderlyingAmount {
  UnderlyingPayAmount?: number// [1] 985 (Float)
  UnderlyingCollectAmount?: number// [2] 986 (Float)
  UnderlyingSettlementDate?: Date// [3] 987 (LocalDate)
  UnderlyingSettlementStatus?: string// [4] 988 (String)
}
