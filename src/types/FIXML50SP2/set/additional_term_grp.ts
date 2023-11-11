import { IAdditionalTermBondRefGrp } from './additional_term_bond_ref_grp'

export interface IAdditionalTermGrp {
  AdditionalTermConditionPrecedentBondIndicator?: boolean// [1] 40020 (Boolean)
  AdditionalTermDiscrepancyClauseIndicator?: boolean// [1] 40021 (Boolean)
  AdditionalTermBondRefGrp?: IAdditionalTermBondRefGrp[]// [1] ID.40001, Src.22 .. DayCnt.40018
}
