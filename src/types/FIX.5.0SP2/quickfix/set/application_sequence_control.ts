export interface IApplicationSequenceControl {
  ApplID?: string// [1] 1180 (String)
  ApplSeqNum?: number// [2] 1181 (Int)
  ApplLastSeqNum?: number// [3] 1350 (Int)
  ApplResendFlag?: boolean// [4] 1352 (Boolean)
}
