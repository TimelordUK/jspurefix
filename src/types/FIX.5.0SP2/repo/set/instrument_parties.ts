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
  InstrumentPartyID?: string// 1019
  InstrumentPartyIDSource?: string// 1050
  InstrumentPartyRole?: number// 1051
  InstrumentPtysSubGrp?: IInstrumentPtysSubGrp[]
}
