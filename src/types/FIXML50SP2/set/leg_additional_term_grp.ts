import { ILegAdditionalTermBondRefGrp } from './leg_additional_term_bond_ref_grp'

export interface ILegAdditionalTermGrp {
  LegAdditionalTermConditionPrecedentBondIndicator?: boolean// 41336
  LegAdditionalTermDiscrepancyClauseIndicator?: boolean// 41337
  LegAdditionalTermBondRefGrp?: ILegAdditionalTermBondRefGrp[]
}
