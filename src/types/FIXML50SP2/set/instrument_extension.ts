import { IAttrbGrp } from './attrb_grp'

export interface IInstrumentExtension {
  DeliveryForm?: number// [1] 668 (Int)
  PctAtRisk?: number// [1] 869 (Float)
  AttrbGrp?: IAttrbGrp[]// [1] Typ.139, Val.872
}
