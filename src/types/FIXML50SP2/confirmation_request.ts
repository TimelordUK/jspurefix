import { IStandardHeader } from './set/standard_header'
import { IOrdAllocGrp } from './set/ord_alloc_grp'

/*
*******************************************************
* ConfirmationRequest can be found in Volume 5 of the *
*                                                     *
* specification                                       *
*******************************************************
*/
export interface IConfirmationRequest {
  ConfirmReqID: string// 859
  ConfirmType: number// 773
  AllocID?: string// 70
  SecondaryAllocID?: string// 793
  LegIndividualAllocID?: string// 672
  RelSymTransactTime: Date// 1504
  LegAccount?: string// 2680
  AllocAcctIDSource?: number// 661
  AllocAccountType?: number// 798
  UnderlyingProvisionText?: string// 42170
  EncodedUnderlyingProvisionTextLen?: string// 42171
  EncodedUnderlyingProvisionText?: Buffer// 42172
  StandardHeader?: IStandardHeader
  OrdAllocGrp?: IOrdAllocGrp[]
}
