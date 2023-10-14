/*
*************************************************************
* The DisplayInstruction component block is used to convey  *
* instructions on how a reserved order is to be handled in  *
* terms of when and how much of the order quantity is to be *
* displayed to the market.                                  *
*************************************************************
*/
export interface IDisplayInstruction {
  DisplayQty?: number// [1] 1138 (Float)
  SecondaryDisplayQty?: number// [2] 1082 (Float)
  DisplayWhen?: string// [3] 1083 (String)
  DisplayMethod?: string// [4] 1084 (String)
  DisplayLowQty?: number// [5] 1085 (Float)
  DisplayHighQty?: number// [6] 1086 (Float)
  DisplayMinIncr?: number// [7] 1087 (Float)
  RefreshQty?: number// [8] 1088 (Float)
}
