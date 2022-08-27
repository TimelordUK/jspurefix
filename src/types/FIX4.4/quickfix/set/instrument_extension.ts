import { IAttrbGrp } from './attrb_grp'

export interface IInstrumentExtension {
  DeliveryForm?: number// [1] 668 (Int)
  PctAtRisk?: number// [2] 869 (Float)
  AttrbGrp?: IAttrbGrp// [3] NoInstrAttrib.870, InstrAttribType.871, InstrAttribValue.872
}
