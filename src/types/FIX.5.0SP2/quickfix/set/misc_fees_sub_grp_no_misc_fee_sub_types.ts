export interface IMiscFeesSubGrpNoMiscFeeSubTypes {
  MiscFeeSubType?: string// [1] 2634 (String)
  MiscFeeSubTypeAmt?: number// [2] 2635 (Float)
  MiscFeeSubTypeDesc?: string// [3] 2636 (String)
  EncodedMiscFeeSubTypeDescLen?: number// [4] 2637 (Length)
  EncodedMiscFeeSubTypeDesc?: Buffer// [5] 2638 (RawData)
}
