import { IInstrumentPtysSubGrp } from './instrument_ptys_sub_grp'

export interface IInstrumentPartiesNoInstrumentParties {
  InstrumentPartyID?: string// [1] 1019 (String)
  InstrumentPartyIDSource?: string// [2] 1050 (String)
  InstrumentPartyRole?: number// [3] 1051 (Int)
  InstrumentPartyRoleQualifier?: number// [4] 2378 (Int)
  InstrumentPtysSubGrp?: IInstrumentPtysSubGrp// [5] NoInstrumentPartySubIDs.1052, InstrumentPartySubID.1053, InstrumentPartySubIDType.1054
}
