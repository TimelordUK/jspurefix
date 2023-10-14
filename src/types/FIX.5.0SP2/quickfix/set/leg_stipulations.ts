/*
**************************************************************
* The LegStipulations component block has the same usage as  *
* the Stipulations component block, but for a leg instrument *
* in a multi-legged security.                                *
**************************************************************
*/
export interface ILegStipulations {
  LegStipulationType?: string// [1] 688 (String)
  LegStipulationValue?: string// [2] 689 (String)
}
