import { IStandardHeader } from './set/standard_header'
import { IRequestingPartyGrp } from './set/requesting_party_grp'
import { IParties } from './set/parties'
import { IRelatedPartyDetailGrp } from './set/related_party_detail_grp'
import { IInstrument } from './set/instrument'
import { ILegOrdGrp } from './set/leg_ord_grp'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'

/*
**************************************************************
* PartyRiskLimitCheckRequest can be found in Volume 3 of the *
*                                                            *
* specification                                              *
**************************************************************
*/
export interface IPartyRiskLimitCheckRequest {
  RiskLimitCheckRequestID?: string// 2318
  RiskLimitCheckID?: string// 2319
  TransferTransType: number// 2439
  RiskLimitCheckType: number// 2321
  RiskLimitCheckRequestRefID?: number// 2322
  RefOrderID?: string// 1080
  RefOrderIDSource?: string// 1081
  RiskLimitCheckRequestType?: number// 2323
  RiskLimitCheckAmount?: number// 2324
  UnderlyingReturnRatePriceCurrency?: string// 43067
  RiskLimitID?: string// 1670
  RelativeValueSide?: number// 2532
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
