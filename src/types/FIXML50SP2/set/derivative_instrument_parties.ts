import { IDerivativeInstrumentPartySubIDsGrp } from './derivative_instrument_party_sub_i_ds_grp'

export interface IDerivativeInstrumentParties {
  BatchID?: string// 50000
  LegContractualMatrixSource?: string// 42204
  UnderlyingProvisionPartyRole?: number// 42176
  UnderlyingProtectionTermEventQualifier?: string// 42086
  DerivativeInstrumentPartySubIDsGrp?: IDerivativeInstrumentPartySubIDsGrp[]
}
