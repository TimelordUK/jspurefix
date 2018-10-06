/*
************************************
* The standard FIX message trailer *
************************************
*/
export interface IStandardTrailer {
  SignatureLength?: number// 93
  Signature?: Buffer// 89
  CheckSum: string// 10
}
