/*
*************************************************************
* The DisplayInstruction component block is used to convey  *
* instructions on how a reserved order is to be handled in  *
* terms of when and how much of the order quantity is to be *
* displayed to the market.                                  *
*************************************************************
*/
export interface IDisplayInstruction {
  DisplayQty?: number// 1138
  SecondaryDisplayQty?: number// 1082
  DisplayWhen?: string// 1083
  DisplayMethod?: string// 1084
  DisplayLowQty?: number// 1085
  DisplayHighQty?: number// 1086
  DisplayMinIncr?: number// 1087
  RefreshQty?: number// 1088
}
