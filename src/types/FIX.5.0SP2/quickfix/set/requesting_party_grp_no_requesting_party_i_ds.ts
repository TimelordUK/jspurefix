import { IRequestingPartySubGrp } from './requesting_party_sub_grp'

export interface IRequestingPartyGrpNoRequestingPartyIDs {
  RequestingPartyID?: string// [1] 1658 (String)
  RequestingPartyIDSource?: string// [2] 1659 (String)
  RequestingPartyRole?: number// [3] 1660 (Int)
  RequestingPartyRoleQualifier?: number// [4] 2338 (Int)
  RequestingPartySubGrp?: IRequestingPartySubGrp// [5] NoRequestingPartySubIDs.1661, RequestingPartySubID.1662, RequestingPartySubIDType.1663
}
