import { IUnderlyingLegSecurityAltIDGrp } from './underlying_leg_security_alt_id_grp'

export interface IUnderlyingLegInstrument {
  UnderlyingLegSymbol?: string// 1330
  UnderlyingLegSymbolSfx?: string// 1331
  UnderlyingLegSecurityID?: string// 1332
  UnderlyingLegSecurityIDSource?: string// 1333
  UnderlyingLegSecurityAltIDGrp?: IUnderlyingLegSecurityAltIDGrp[]
  UnderlyingLegCFICode?: string// 1344
  UnderlyingLegSecurityType?: string// 1337
  UnderlyingLegSecuritySubType?: string// 1338
  UnderlyingLegMaturityMonthYear?: string// 1339
  UnderlyingLegMaturityDate?: Date// 1345
  UnderlyingLegMaturityTime?: string// 1405
  UnderlyingLegStrikePrice?: number// 1340
  UnderlyingLegOptAttribute?: string// 1391
  UnderlyingLegPutOrCall?: number// 1343
  UnderlyingLegSecurityExchange?: string// 1341
  UnderlyingLegSecurityDesc?: string// 1392
}
