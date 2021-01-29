import { ISecAltIDGrp } from './sec_alt_id_grp'
import { ISecurityXML } from './security_xml'
import { IEvntGrp } from './evnt_grp'
import { IInstrumentParties } from './instrument_parties'
import { IComplexEvents } from './complex_events'

/*
****************************************************************
* The Instrument component block contains all the fields       *
* commonly used to describe a security or instrument.          *
* Typically the data elements in this component block are      *
* considered the static data of a security, data that may be   *
* commonly found in a security master database. The Instrument *
* component block can be used to describe any asset type       *
* supported by FIX.                                            *
****************************************************************
*/
export interface IInstrument {
  Symbol?: string// 55
  SymbolSfx?: string// 65
  SecurityID?: string// 48
  SecurityIDSource?: string// 22
  SecAltIDGrp?: ISecAltIDGrp[]
  Product?: number// 460
  ProductComplex?: string// 1227
  SecurityGroup?: string// 1151
  CFICode?: string// 461
  SecurityType?: string// 167
  SecuritySubType?: string// 762
  MaturityMonthYear?: string// 200
  MaturityDate?: Date// 541
  MaturityTime?: string// 1079
  SettleOnOpenFlag?: string// 966
  InstrmtAssignmentMethod?: string// 1049
  SecurityStatus?: string// 965
  CouponPaymentDate?: Date// 224
  IssueDate?: Date// 225
  RepoCollateralSecurityType?: string// 239
  RepurchaseTerm?: number// 226
  RepurchaseRate?: number// 227
  Factor?: number// 228
  CreditRating?: string// 255
  InstrRegistry?: string// 543
  CountryOfIssue?: string// 470
  StateOrProvinceOfIssue?: string// 471
  LocaleOfIssue?: string// 472
  RedemptionDate?: Date// 240
  StrikePrice?: number// 202
  StrikeCurrency?: string// 947
  StrikeMultiplier?: number// 967
  StrikeValue?: number// 968
  OptAttribute?: string// 206
  ContractMultiplier?: number// 231
  MinPriceIncrement?: number// 969
  MinPriceIncrementAmount?: number// 1146
  UnitOfMeasure?: string// 996
  UnitOfMeasureQty?: number// 1147
  PriceUnitOfMeasure?: string// 1191
  PriceUnitOfMeasureQty?: number// 1192
  SettlMethod?: string// 1193
  ExerciseStyle?: number// 1194
  OptPayoutAmount?: number// 1195
  PriceQuoteMethod?: string// 1196
  ValuationMethod?: string// 1197
  ListMethod?: number// 1198
  CapPrice?: number// 1199
  FloorPrice?: number// 1200
  PutOrCall?: number// 201
  FlexibleIndicator?: boolean// 1244
  FlexProductEligibilityIndicator?: boolean// 1242
  TimeUnit?: string// 997
  CouponRate?: number// 223
  SecurityExchange?: string// 207
  PositionLimit?: number// 970
  NTPositionLimit?: number// 971
  Issuer?: string// 106
  EncodedIssuerLen?: number// 348
  EncodedIssuer?: Buffer// 349
  SecurityDesc?: string// 107
  EncodedSecurityDescLen?: number// 350
  EncodedSecurityDesc?: Buffer// 351
  SecurityXML?: ISecurityXML
  Pool?: string// 691
  ContractSettlMonth?: string// 667
  CPProgram?: number// 875
  CPRegType?: string// 876
  EvntGrp?: IEvntGrp[]
  DatedDate?: Date// 873
  InterestAccrualDate?: Date// 874
  InstrumentParties?: IInstrumentParties[]
  ContractMultiplierUnit?: number// 1435
  FlowScheduleType?: number// 1439
  RestructuringType?: string// 1449
  Seniority?: string// 1450
  NotionalPercentageOutstanding?: number// 1451
  OriginalNotionalPercentageOutstanding?: number// 1452
  AttachmentPoint?: number// 1457
  DetachmentPoint?: number// 1458
  StrikePriceDeterminationMethod?: number// 1478
  StrikePriceBoundaryMethod?: number// 1479
  StrikePriceBoundaryPrecision?: number// 1480
  UnderlyingPriceDeterminationMethod?: number// 1481
  OptPayoutType?: number// 1482
  ComplexEvents?: IComplexEvents[]
}
