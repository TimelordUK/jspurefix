export interface IMiscFeesSubGrp {
  MiscFeeSubType?: string// [1] 2634 (String)
  MiscFeeSubTypeAmt?: number// [1] 2635 (Float)
  MiscFeeSubTypeDesc?: string// [1] 2636 (String)
  EncodedMiscFeeSubTypeDescLen?: number// [1] 2637 (Length)
  EncodedMiscFeeSubTypeDesc?: Buffer// [1] 2638 (RawData)
}
