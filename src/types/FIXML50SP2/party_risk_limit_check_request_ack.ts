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
  MassOrderRequestStatus: number// 2425
  MDStatisticRequestResult?: number// 2473
  TransferTransType: number// 2439
  RiskLimitCheckType: number// 2321
  RiskLimitCheckRequestRefID?: number// 2322
  RejectText?: string// 1328
  EncodedRejectTextLen?: string// 1664
  EncodedRejectText?: Buffer// 1665
  RefOrderID?: string// 1080
  RefOrderIDSource?: string// 1081
  RelativeValueSide?: number// 2532
  RiskLimitApprovedAmount?: number// 2327
  RiskLimitCheckAmount?: number// 2324
  RiskLimitID?: string// 1670
  UnderlyingReturnRatePriceCurrency?: string// 43067
  ExpireTime?: Date// 126
  RelSymTransactTime?: Date// 1504
  UnderlyingProvisionText?: string// 42170
  EncodedUnderlyingProvisionTextLen?: string// 42171
  EncodedUnderlyingProvisionText?: Buffer// 42172
  StandardHeader?: IStandardHeader
  RequestingPartyGrp?: IRequestingPartyGrp[]
  Parties?: IParties[]
  RelatedPartyDetailGrp?: IRelatedPartyDetailGrp[]
  Instrument?: IInstrument
  LegOrdGrp?: ILegOrdGrp[]
  UndInstrmtGrp?: IUndInstrmtGrp[]
}
