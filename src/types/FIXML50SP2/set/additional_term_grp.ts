import { IAdditionalTermBondRefGrp } from './additional_term_bond_ref_grp'

export interface IAdditionalTermGrp {
  UnderlyingAdditionalTermConditionPrecedentBondIndicator?: string// 42037
  UnderlyingAdditionalTermDiscrepancyClauseIndicator?: string// 42038
  AdditionalTermBondRefGrp?: IAdditionalTermBondRefGrp[]
}
