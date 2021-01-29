import { IDerivativeSecurityAltIDGrp } from './derivative_security_alt_id_grp'
import { IDerivativeSecurityXML } from './derivative_security_xml'
import { IDerivativeEventsGrp } from './derivative_events_grp'
import { IDerivativeInstrumentParties } from './derivative_instrument_parties'

export interface IDerivativeInstrument {
  DerivativeSymbol?: string// 1214
  DerivativeSymbolSfx?: string// 1215
  DerivativeSecurityID?: string// 1216
  DerivativeSecurityIDSource?: string// 1217
  DerivativeSecurityAltIDGrp?: IDerivativeSecurityAltIDGrp[]
  DerivativeProduct?: number// 1246
  DerivativeProductComplex?: string// 1228
  DerivFlexProductEligibilityIndicator?: boolean// 1243
  DerivativeSecurityGroup?: string// 1247
  DerivativeCFICode?: string// 1248
  DerivativeSecurityType?: string// 1249
  DerivativeSecuritySubType?: string// 1250
  DerivativeMaturityMonthYear?: string// 1251
  DerivativeMaturityDate?: Date// 1252
  DerivativeMaturityTime?: string// 1253
  DerivativeSettleOnOpenFlag?: string// 1254
  DerivativeInstrmtAssignmentMethod?: string// 1255
  DerivativeSecurityStatus?: string// 1256
  DerivativeIssueDate?: Date// 1276
  DerivativeInstrRegistry?: string// 1257
  DerivativeCountryOfIssue?: string// 1258
  DerivativeStateOrProvinceOfIssue?: string// 1259
  DerivativeLocaleOfIssue?: string// 1260
  DerivativeStrikePrice?: number// 1261
  DerivativeStrikeCurrency?: string// 1262
  DerivativeStrikeMultiplier?: number// 1263
  DerivativeStrikeValue?: number// 1264
  DerivativeOptAttribute?: string// 1265
  DerivativeContractMultiplier?: number// 1266
  DerivativeMinPriceIncrement?: number// 1267
  DerivativeMinPriceIncrementAmount?: number// 1268
  DerivativeUnitOfMeasure?: string// 1269
  DerivativeUnitOfMeasureQty?: number// 1270
  DerivativePriceUnitOfMeasure?: string// 1315
  DerivativePriceUnitOfMeasureQty?: number// 1316
  DerivativeSettlMethod?: string// 1317
  DerivativePriceQuoteMethod?: string// 1318
  DerivativeValuationMethod?: string// 1319
  DerivativeListMethod?: number// 1320
  DerivativeCapPrice?: number// 1321
  DerivativeFloorPrice?: number// 1322
  DerivativePutOrCall?: number// 1323
  DerivativeExerciseStyle?: string// 1299
  DerivativeOptPayAmount?: number// 1225
  DerivativeTimeUnit?: string// 1271
  DerivativeSecurityExchange?: string// 1272
  DerivativePositionLimit?: number// 1273
  DerivativeNTPositionLimit?: number// 1274
  DerivativeIssuer?: string// 1275
  DerivativeEncodedIssuerLen?: number// 1277
  DerivativeEncodedIssuer?: Buffer// 1278
  DerivativeSecurityDesc?: string// 1279
  DerivativeEncodedSecurityDescLen?: number// 1280
  DerivativeEncodedSecurityDesc?: Buffer// 1281
  DerivativeSecurityXML?: IDerivativeSecurityXML
  DerivativeContractSettlMonth?: string// 1285
  DerivativeEventsGrp?: IDerivativeEventsGrp[]
  DerivativeInstrumentParties?: IDerivativeInstrumentParties[]
  DerivativeContractMultiplierUnit?: number// 1438
  DerivativeFlowScheduleType?: number// 1442
}
