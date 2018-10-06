import { IRequestingPartySubGrp } from './requesting_party_sub_grp'

export interface IRequestingPartyGrp {
  RequestingPartyID?: string// 1658
  RequestingPartyIDSource?: string// 1659
  RequestingPartyRole?: number// 1660
  RequestingPartyRoleQualifier?: number// 2338
  RequestingPartySubGrp?: IRequestingPartySubGrp[]
}
