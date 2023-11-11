export interface IDisplayInstruction {
  DisplayQty?: number// [1] 1138 (Float)
  SecondaryDisplayQty?: number// [1] 1082 (Float)
  InitialDisplayQty?: number// [1] 1608 (Float)
  DisplayWhen?: string// [1] 1083 (String)
  DisplayMethod?: string// [1] 1084 (String)
  DisplayLowQty?: number// [1] 1085 (Float)
  DisplayHighQty?: number// [1] 1086 (Float)
  DisplayMinIncr?: number// [1] 1087 (Float)
  RefreshQty?: number// [1] 1088 (Float)
}
