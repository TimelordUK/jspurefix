export interface IStandardTrailer {
  SignatureLength?: number// [1] 93 (Length)
  Signature?: Buffer// [2] 89 (RawData)
  CheckSum: string// [3] 10 (String)
}
