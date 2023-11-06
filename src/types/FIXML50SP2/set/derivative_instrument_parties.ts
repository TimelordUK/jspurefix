import { IDerivativeInstrumentPartySubIDsGrp } from './derivative_instrument_party_sub_i_ds_grp'

export interface IDerivativeInstrumentParties {
  DerivativeInstrumentPartyID?: string// [1] 1293 (String)
  DerivativeInstrumentPartyIDSource?: string// [1] 1294 (String)
  DerivativeInstrumentPartyRole?: number// [1] 1295 (Int)
  DerivativeInstrumentPartyRoleQualifier?: number// [1] 2377 (Int)
  DerivativeInstrumentPartySubIDsGrp?: IDerivativeInstrumentPartySubIDsGrp[]// [1] ID.1297, Typ.1298
}
