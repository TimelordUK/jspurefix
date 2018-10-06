import { IStandardHeader } from './set/standard_header'
import { IRequestingPartyGrp } from './set/requesting_party_grp'
import { IParties } from './set/parties'
import { IRelatedPartyDetailGrp } from './set/related_party_detail_grp'
import { IInstrument } from './set/instrument'
import { ILegOrdGrp } from './set/leg_ord_grp'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'

/*
*************************************************************
* PartyRiskLimitCheckRequestAck can be found in Volume 3 of *
* the                                                       *
*                                                           *
* specification                                             *
*************************************************************
*/
export interface IPartyRiskLimitCheckRequestAck {
  RiskLimitCheckRequestID?: string// 2318
  RiskLimitCheckID?: string// 2319
  RiskLimitCheckRequestStatus: number// 2325
  RiskLimitCheckRequestResult?: number// 2326
  RiskLimitCheckTransType: number// 2320
  RiskLimitCheckType: number// 2321
  RiskLimitCheckRequestRefID?: number// 2322
  RejectText?: string// 1328
  EncodedRejectTextLen?: number// 1664
  EncodedRejectText?: Buffer// 1665
  RefOrderID?: string// 1080
  RefOrderIDSource?: string// 1081
  Side?: string// 54
  RiskLimitApprovedAmount?: number// 2327
  RiskLimitCheckAmount?: number// 2324
  RiskLimitID?: string// 1670
  Currency?: string// 15
  ExpireTime?: Date// 126
  TransactTime?: Date// 60
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  StandardHeader?: IStandardHeader
  RequestingPartyGrp?: IRequestingPartyGrp[]
  Parties?: IParties[]
  RelatedPartyDetailGrp?: IRelatedPartyDetailGrp[]
  Instrument?: IInstrument
  LegOrdGrp?: ILegOrdGrp[]
  UndInstrmtGrp?: IUndInstrmtGrp[]
}
