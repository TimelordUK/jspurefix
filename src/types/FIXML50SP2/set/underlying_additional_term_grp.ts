import { IUnderlyingAdditionalTermBondRefGrp } from './underlying_additional_term_bond_ref_grp'

export interface IUnderlyingAdditionalTermGrp {
  UnderlyingAdditionalTermConditionPrecedentBondIndicator?: boolean// 42037
  UnderlyingAdditionalTermDiscrepancyClauseIndicator?: boolean// 42038
  UnderlyingAdditionalTermBondRefGrp?: IUnderlyingAdditionalTermBondRefGrp[]
}
