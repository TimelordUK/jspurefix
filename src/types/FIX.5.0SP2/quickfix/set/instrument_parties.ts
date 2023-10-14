import { IInstrumentPtysSubGrp } from './instrument_ptys_sub_grp'

/*
***************************************************************
* The use of this component block is restricted to instrument *
* definition only and is not permitted to contain             *
* transactional information. Only a specified subset of party *
* roles will be supported within the InstrumentParty block.   *
***************************************************************
*/
export interface IInstrumentParties {
  InstrumentPartyID?: string// [1] 1019 (String)
  InstrumentPartyIDSource?: string// [2] 1050 (String)
  InstrumentPartyRole?: number// [3] 1051 (Int)
  InstrumentPtysSubGrp?: IInstrumentPtysSubGrp[]// [4] InstrumentPartySubID.1053, InstrumentPartySubIDType.1054
}
