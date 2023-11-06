import { IStandardHeader } from './set/standard_header'

/*
*****************************************************
* ListStatusRequest can be found in Volume 4 of the *
*                                                   *
* specification                                     *
*****************************************************
*/
export interface IListStatusRequest {
  ListID: string// [2] 66 (String)
  Text?: string// [2] 58 (String)
  EncodedTextLen?: number// [2] 354 (Length)
  EncodedText?: Buffer// [2] 355 (RawData)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
}
