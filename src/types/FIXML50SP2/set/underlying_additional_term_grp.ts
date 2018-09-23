import { IUnderlyingAdditionalTermBondRefGrp } from './underlying_additional_term_bond_ref_grp'

export interface IUnderlyingAdditionalTermGrp {
  UnderlyingAdditionalTermConditionPrecedentBondIndicator?: string// 42037
  UnderlyingAdditionalTermDiscrepancyClauseIndicator?: string// 42038
  UnderlyingAdditionalTermBondRefGrp?: IUnderlyingAdditionalTermBondRefGrp[]
}
