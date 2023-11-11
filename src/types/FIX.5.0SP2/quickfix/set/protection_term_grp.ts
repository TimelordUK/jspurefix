import { IProtectionTermGrpNoProtectionTerms } from './protection_term_grp_no_protection_terms'

export interface IProtectionTermGrp {
  NoProtectionTerms?: IProtectionTermGrpNoProtectionTerms[]// [1] ProtectionTermNotional.40182, ProtectionTermCurrency.40183 .. ProtectionTermXID.40190
}
