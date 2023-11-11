import { IUnderlyingLegSecurityAltIDGrp } from './underlying_leg_security_alt_id_grp'

export interface IUnderlyingLegInstrument {
  UnderlyingLegSymbol?: string// [1] 1330 (String)
  UnderlyingLegSymbolSfx?: string// [1] 1331 (String)
  UnderlyingLegSecurityID?: string// [1] 1332 (String)
  UnderlyingLegSecurityIDSource?: string// [1] 1333 (String)
  UnderlyingLegCFICode?: string// [1] 1344 (String)
  UnderlyingLegSecurityType?: string// [1] 1337 (String)
  UnderlyingLegSecuritySubType?: string// [1] 1338 (String)
  UnderlyingLegMaturityMonthYear?: string// [1] 1339 (String)
  UnderlyingLegMaturityDate?: Date// [1] 1345 (LocalDate)
  UnderlyingLegMaturityTime?: string// [1] 1405 (String)
  UnderlyingLegStrikePrice?: number// [1] 1340 (Float)
  UnderlyingLegOptAttribute?: string// [1] 1391 (String)
  UnderlyingLegPutOrCall?: number// [1] 1343 (Int)
  UnderlyingLegSecurityExchange?: string// [1] 1341 (String)
  UnderlyingLegSecurityDesc?: string// [1] 1392 (String)
  UnderlyingLegSecurityAltIDGrp?: IUnderlyingLegSecurityAltIDGrp[]// [1] AltID.1335, AltIDSrc.1336
}
