import { IStandardHeader } from './set/standard_header'
import { IMarginReqmtInqQualGrp } from './set/margin_reqmt_inq_qual_grp'
import { IParties } from './set/parties'
import { IInstrument } from './set/instrument'

/*
************************************************************
* MarginRequirementInquiry can be found in Volume 5 of the *
*                                                          *
* specification                                            *
************************************************************
*/
export interface IMarginRequirementInquiry {
  MarginReqmtInqID: string// 1635
  SubscriptionRequestType?: string// 263
  ResponseTransportType?: number// 725
  ResponseDestination?: string// 726
  ClearingBusinessDate?: Date// 715
  SettlSessID?: string// 716
  SettlSessSubID?: string// 717
  MarginClass?: string// 1639
  TransactTime?: Date// 60
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  StandardHeader?: IStandardHeader
  MarginReqmtInqQualGrp?: IMarginReqmtInqQualGrp[]
  Parties?: IParties[]
  Instrument?: IInstrument
}
