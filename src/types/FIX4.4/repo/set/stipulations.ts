/*
***************************************************************
* The Stipulations component block is used in Fixed Income to *
* provide additional information on a given security. These   *
* additional information are usually not considered static    *
* data information.                                           *
***************************************************************
*/
export interface IStipulations {
  StipulationType?: string// [1] 233 (String)
  StipulationValue?: string// [2] 234 (String)
}
