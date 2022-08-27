import { IAttrbGrp } from './attrb_grp'

/*
***************************************************************
* The InstrumentExtension component block identifies          *
* additional security attributes that are more commonly found *
* for Fixed Income securities.                                *
***************************************************************
*/
export interface IInstrumentExtension {
  DeliveryForm?: number// [1] 668 (Int)
  PctAtRisk?: number// [2] 869 (Float)
  AttrbGrp?: IAttrbGrp[]// [3] InstrAttribType.871, InstrAttribValue.872
}
