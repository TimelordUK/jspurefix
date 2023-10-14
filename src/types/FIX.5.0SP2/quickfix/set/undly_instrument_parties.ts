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
  UnderlyingInstrumentPartyID?: string// [1] 1059 (String)
  UnderlyingInstrumentPartyIDSource?: string// [2] 1060 (String)
  UnderlyingInstrumentPartyRole?: number// [3] 1061 (Int)
  UndlyInstrumentPtysSubGrp?: IUndlyInstrumentPtysSubGrp[]// [4] UnderlyingInstrumentPartySubID.1063, UnderlyingInstrumentPartySubIDType.1064
}
