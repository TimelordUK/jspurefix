import { IUnderlyingLegSecurityAltIDGrp } from './underlying_leg_security_alt_id_grp'

export interface IUnderlyingLegInstrument {
  UnderlyingLegSymbol?: string// [1] 1330 (String)
  UnderlyingLegSymbolSfx?: string// [2] 1331 (String)
  UnderlyingLegSecurityID?: string// [3] 1332 (String)
  UnderlyingLegSecurityIDSource?: string// [4] 1333 (String)
  UnderlyingLegSecurityAltIDGrp?: IUnderlyingLegSecurityAltIDGrp// [5] NoUnderlyingLegSecurityAltID.1334, UnderlyingLegSecurityAltID.1335, UnderlyingLegSecurityAltIDSource.1336
  UnderlyingLegCFICode?: string// [6] 1344 (String)
  UnderlyingLegSecurityType?: string// [7] 1337 (String)
  UnderlyingLegSecuritySubType?: string// [8] 1338 (String)
  UnderlyingLegMaturityMonthYear?: string// [9] 1339 (String)
  UnderlyingLegMaturityDate?: Date// [10] 1345 (LocalDate)
  UnderlyingLegMaturityTime?: string// [11] 1405 (String)
  UnderlyingLegStrikePrice?: number// [12] 1340 (Float)
  UnderlyingLegOptAttribute?: string// [13] 1391 (String)
  UnderlyingLegPutOrCall?: number// [14] 1343 (Int)
  UnderlyingLegSecurityExchange?: string// [15] 1341 (String)
  UnderlyingLegSecurityDesc?: string// [16] 1392 (String)
}
