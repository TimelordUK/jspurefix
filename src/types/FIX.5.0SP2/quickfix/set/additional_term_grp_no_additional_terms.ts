import { IAdditionalTermBondRefGrp } from './additional_term_bond_ref_grp'

export interface IAdditionalTermGrpNoAdditionalTerms {
  AdditionalTermConditionPrecedentBondIndicator?: boolean// [1] 40020 (Boolean)
  AdditionalTermDiscrepancyClauseIndicator?: boolean// [2] 40021 (Boolean)
  AdditionalTermBondRefGrp?: IAdditionalTermBondRefGrp// [3] NoAdditionalTermBondRefs.40000, AdditionalTermBondSecurityID.40001 .. AdditionalTermBondDayCount.40018
}
