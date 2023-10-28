import { IUnderlyingAdditionalTermBondRefGrp } from './underlying_additional_term_bond_ref_grp'

export interface IUnderlyingAdditionalTermGrpNoUnderlyingAdditionalTerms {
  UnderlyingAdditionalTermConditionPrecedentBondIndicator?: boolean// [1] 42037 (Boolean)
  UnderlyingAdditionalTermDiscrepancyClauseIndicator?: boolean// [2] 42038 (Boolean)
  UnderlyingAdditionalTermBondRefGrp?: IUnderlyingAdditionalTermBondRefGrp// [3] NoUnderlyingAdditionalTermBondRefs.41340, UnderlyingAdditionalTermBondSecurityID.41341 .. UnderlyingAdditionalTermBondDayCount.42035
}
