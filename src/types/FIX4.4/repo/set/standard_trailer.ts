/*
************************************
* The standard FIX message trailer *
************************************
*/
export interface IStandardTrailer {
  SignatureLength?: number// [1] 93 (Int)
  Signature?: Buffer// [2] 89 (RawData)
  CheckSum: string// [3] 10 (String)
}
