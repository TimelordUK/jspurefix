/*
***************************************************************
* The UnderlyingAmount component block is used to supply the  *
* underlying amounts, dates, settlement status and method for *
* derivative positions.                                       *
***************************************************************
*/
export interface IUnderlyingAmount {
  UnderlyingPayAmount?: number// 985
  UnderlyingCollectAmount?: number// 986
  UnderlyingSettlementDate?: Date// 987
  UnderlyingSettlementStatus?: string// 988
}
