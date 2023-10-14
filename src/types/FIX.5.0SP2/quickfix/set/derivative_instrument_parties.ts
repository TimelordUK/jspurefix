import { IDerivativeInstrumentPartySubIDsGrp } from './derivative_instrument_party_sub_i_ds_grp'

export interface IDerivativeInstrumentParties {
  DerivativeInstrumentPartyID?: string// [1] 1293 (String)
  DerivativeInstrumentPartyIDSource?: string// [2] 1294 (String)
  DerivativeInstrumentPartyRole?: number// [3] 1295 (Int)
  DerivativeInstrumentPartySubIDsGrp?: IDerivativeInstrumentPartySubIDsGrp[]// [4] DerivativeInstrumentPartySubID.1297, DerivativeInstrumentPartySubIDType.1298
}
