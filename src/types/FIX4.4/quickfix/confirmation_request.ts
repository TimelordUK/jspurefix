import { IOrdAllocGrp } from './set/ord_alloc_grp'

export interface IConfirmationRequest {
  ConfirmReqID: string// 859
  ConfirmType: number// 773
  OrdAllocGrp?: IOrdAllocGrp
  AllocID?: string// 70
  SecondaryAllocID?: string// 793
  IndividualAllocID?: string// 467
  TransactTime: Date// 60
  AllocAccount?: string// 79
  AllocAcctIDSource?: number// 661
  AllocAccountType?: number// 798
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
}
