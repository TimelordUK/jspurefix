import { IDerivativeInstrumentPartySubIDsGrp } from './derivative_instrument_party_sub_i_ds_grp'

export interface IDerivativeInstrumentPartiesNoDerivativeInstrumentParties {
  DerivativeInstrumentPartyID?: string// [1] 1293 (String)
  DerivativeInstrumentPartyIDSource?: string// [2] 1294 (String)
  DerivativeInstrumentPartyRole?: number// [3] 1295 (Int)
  DerivativeInstrumentPartyRoleQualifier?: number// [4] 2377 (Int)
  DerivativeInstrumentPartySubIDsGrp?: IDerivativeInstrumentPartySubIDsGrp// [5] NoDerivativeInstrumentPartySubIDs.1296, DerivativeInstrumentPartySubID.1297, DerivativeInstrumentPartySubIDType.1298
}
