import { ILegAdditionalTermBondRefGrp } from './leg_additional_term_bond_ref_grp'

export interface ILegAdditionalTermGrp {
  LegAdditionalTermConditionPrecedentBondIndicator?: boolean// [1] 41336 (Boolean)
  LegAdditionalTermDiscrepancyClauseIndicator?: boolean// [1] 41337 (Boolean)
  LegAdditionalTermBondRefGrp?: ILegAdditionalTermBondRefGrp[]// [1] ID.41317, Src.22 .. DayCnt.40018
}
