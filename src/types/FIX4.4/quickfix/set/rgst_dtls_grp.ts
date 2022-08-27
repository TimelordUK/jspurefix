import { IRgstDtlsGrpNoRegistDtls } from './rgst_dtls_grp_no_regist_dtls'

export interface IRgstDtlsGrp {
  NoRegistDtls?: IRgstDtlsGrpNoRegistDtls[]// [1] RegistDtls.509, RegistEmail.511 .. InvestorCountryOfResidence.475
}
