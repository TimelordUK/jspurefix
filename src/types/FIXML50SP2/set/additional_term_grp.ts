import { IAdditionalTermBondRefGrp } from './additional_term_bond_ref_grp'

export interface IAdditionalTermGrp {
  AdditionalTermConditionPrecedentBondIndicator?: boolean// 40020
  AdditionalTermDiscrepancyClauseIndicator?: boolean// 40021
  AdditionalTermBondRefGrp?: IAdditionalTermBondRefGrp[]
}
