import { IStandardHeader } from './set/standard_header'
import { IMarginReqmtInqQualGrp } from './set/margin_reqmt_inq_qual_grp'
import { IParties } from './set/parties'
import { IInstrument } from './set/instrument'

/*
***************************************************************
* MarginRequirementInquiryAck can be found in Volume 5 of the *
*                                                             *
* specification                                               *
***************************************************************
*/
export interface IMarginRequirementInquiryAck {
  BatchID: string// 50000
  MDStatisticStatus: number// 2477
  EntitlementResult?: number// 1884
  TotNumReports?: number// 911
  SubscriptionRequestType?: string// 263
  ResponseTransportType?: number// 725
  ResponseDestination?: string// 726
  ClearingBusinessDate?: Date// 715
  SettlSessID?: string// 716
  SettlSessSubID?: string// 717
  UnderlyingSecondaryAssetClass?: number// 2081
  RelSymTransactTime?: Date// 1504
  UnderlyingProvisionText?: string// 42170
  EncodedUnderlyingProvisionTextLen?: string// 42171
  EncodedUnderlyingProvisionText?: Buffer// 42172
  StandardHeader?: IStandardHeader
  MarginReqmtInqQualGrp?: IMarginReqmtInqQualGrp[]
  Parties?: IParties[]
  Instrument?: IInstrument
}
