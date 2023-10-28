export interface IDisplayInstruction {
  DisplayQty?: number// [1] 1138 (Float)
  SecondaryDisplayQty?: number// [2] 1082 (Float)
  InitialDisplayQty?: number// [3] 1608 (Float)
  CurrentDisplayPrice?: number// [4] 2828 (Float)
  DisplayWhen?: string// [5] 1083 (String)
  DisplayMethod?: string// [6] 1084 (String)
  DisplayLowQty?: number// [7] 1085 (Float)
  DisplayHighQty?: number// [8] 1086 (Float)
  DisplayMinIncr?: number// [9] 1087 (Float)
  RefreshQty?: number// [10] 1088 (Float)
}
