import { IAttrbGrp } from './attrb_grp'

/*
***************************************************************
* The InstrumentExtension component block identifies          *
* additional security attributes that are more commonly found *
* for Fixed Income securities.                                *
***************************************************************
*/
export interface IInstrumentExtension {
  DeliveryForm?: number// 668
  PctAtRisk?: number// 869
  AttrbGrp?: IAttrbGrp[]
}
