import { IUndlyInstrumentPtysSubGrp } from './undly_instrument_ptys_sub_grp'

/*
***************************************************************
* The use of this component block is restricted to instrument *
* definition only and is not permitted to contain             *
* transactional information. Only a specified subset of party *
* roles will be supported within the InstrumentParty block.   *
***************************************************************
*/
export interface IUndlyInstrumentParties {
  UnderlyingInstrumentPartyID?: string// 1059
  UnderlyingInstrumentPartyIDSource?: string// 1060
  UnderlyingInstrumentPartyRole?: number// 1061
  UndlyInstrumentPtysSubGrp?: IUndlyInstrumentPtysSubGrp[]
}
