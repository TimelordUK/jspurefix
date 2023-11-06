import { IRequestingPartySubGrp } from './requesting_party_sub_grp'

export interface IRequestingPartyGrp {
  RequestingPartyID?: string// [1] 1658 (String)
  RequestingPartyIDSource?: string// [1] 1659 (String)
  RequestingPartyRole?: number// [1] 1660 (Int)
  RequestingPartyRoleQualifier?: number// [1] 2338 (Int)
  RequestingPartySubGrp?: IRequestingPartySubGrp[]// [1] ID.1662, Typ.1663
}
