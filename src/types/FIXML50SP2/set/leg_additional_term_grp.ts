import { ILegAdditionalTermBondRefGrp } from './leg_additional_term_bond_ref_grp'

export interface ILegAdditionalTermGrp {
  UnderlyingAdditionalTermConditionPrecedentBondIndicator?: string// 42037
  UnderlyingAdditionalTermDiscrepancyClauseIndicator?: string// 42038
  LegAdditionalTermBondRefGrp?: ILegAdditionalTermBondRefGrp[]
}
