import { IUnderlyingAdditionalTermBondRefGrp } from './underlying_additional_term_bond_ref_grp'

export interface IUnderlyingAdditionalTermGrp {
  UnderlyingAdditionalTermConditionPrecedentBondIndicator?: boolean// [1] 42037 (Boolean)
  UnderlyingAdditionalTermDiscrepancyClauseIndicator?: boolean// [1] 42038 (Boolean)
  UnderlyingAdditionalTermBondRefGrp?: IUnderlyingAdditionalTermBondRefGrp[]// [1] ID.41341, Src.22 .. DayCnt.40018
}
