import { ILegAdditionalTermBondRefGrp } from './leg_additional_term_bond_ref_grp'

export interface ILegAdditionalTermGrpNoLegAdditionalTerms {
  LegAdditionalTermConditionPrecedentBondIndicator?: boolean// [1] 41336 (Boolean)
  LegAdditionalTermDiscrepancyClauseIndicator?: boolean// [2] 41337 (Boolean)
  LegAdditionalTermBondRefGrp?: ILegAdditionalTermBondRefGrp// [3] NoLegAdditionalTermBondRefs.41316, LegAdditionalTermBondSecurityID.41317 .. LegAdditionalTermBondDayCount.41334
}
