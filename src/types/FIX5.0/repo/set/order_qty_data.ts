/*
***************************************************************
* The OrderQtyData component block contains the fields        *
* commonly used for indicating the amount or quantity of an   *
* order. Note that when this component block is marked as     *
* "required" in a message either one of these three fields    *
* must be used to identify the amount: OrderQty, CashOrderQty *
* or OrderPercent (in the case of CIV).                       *
***************************************************************
*/
export interface IOrderQtyData {
  OrderQty?: number// 38
  CashOrderQty?: number// 152
  OrderPercent?: number// 516
  RoundingDirection?: string// 468
  RoundingModulus?: number// 469
}
