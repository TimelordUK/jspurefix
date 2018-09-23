import { IStandardHeader } from './set/standard_header'

/*
***************************************************
* ConfirmationAck can be found in Volume 5 of the *
*                                                 *
* specification                                   *
***************************************************
*/
export interface IConfirmationAck {
  ConfirmID: string// 664
  TradeDate: Date// 75
  RelSymTransactTime: Date// 1504
  AffirmStatus: number// 940
  TradeConfirmationReferenceID?: string// 2390
  ConfirmRejReason?: number// 774
  MatchStatus?: string// 573
  UnderlyingProvisionText?: string// 42170
  EncodedUnderlyingProvisionTextLen?: string// 42171
  EncodedUnderlyingProvisionText?: Buffer// 42172
  StandardHeader?: IStandardHeader
}
