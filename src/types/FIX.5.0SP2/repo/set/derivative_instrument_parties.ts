import { IDerivativeInstrumentPartySubIDsGrp } from './derivative_instrument_party_sub_i_ds_grp'

export interface IDerivativeInstrumentParties {
  DerivativeInstrumentPartyID?: string// 1293
  DerivativeInstrumentPartyIDSource?: string// 1294
  DerivativeInstrumentPartyRole?: number// 1295
  DerivativeInstrumentPartySubIDsGrp?: IDerivativeInstrumentPartySubIDsGrp[]
}
