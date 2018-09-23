import { IStandardHeader } from './set/standard_header'
import { IRequestingPartyGrp } from './set/requesting_party_grp'
import { IPartyDetailsUpdateGrp } from './set/party_details_update_grp'

/*
*************************************************************
* PartyDetailsDefinitionRequest can be found in Volume 3 of *
* the                                                       *
*                                                           *
* specification                                             *
*************************************************************
*/
export interface IPartyDetailsDefinitionRequest {
  MDStatisticReqID: string// 2452
  UnderlyingProvisionText?: string// 42170
  EncodedUnderlyingProvisionTextLen?: string// 42171
  EncodedUnderlyingProvisionText?: Buffer// 42172
  StandardHeader?: IStandardHeader
  RequestingPartyGrp?: IRequestingPartyGrp[]
  PartyDetailsUpdateGrp?: IPartyDetailsUpdateGrp[]
}
