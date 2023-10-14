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
  Symbol?: string// [1] 55 (String)
  SymbolSfx?: string// [2] 65 (String)
  SecurityID?: string// [3] 48 (String)
  SecurityIDSource?: string// [4] 22 (String)
  SecAltIDGrp?: ISecAltIDGrp[]// [5] SecurityAltID.455, SecurityAltIDSource.456
  Product?: number// [6] 460 (Int)
  ProductComplex?: string// [7] 1227 (String)
  SecurityGroup?: string// [8] 1151 (String)
  CFICode?: string// [9] 461 (String)
  SecurityType?: string// [10] 167 (String)
  SecuritySubType?: string// [11] 762 (String)
  MaturityMonthYear?: string// [12] 200 (String)
  MaturityDate?: Date// [13] 541 (LocalDate)
  MaturityTime?: string// [14] 1079 (String)
  SettleOnOpenFlag?: string// [15] 966 (String)
  InstrmtAssignmentMethod?: string// [16] 1049 (String)
  SecurityStatus?: string// [17] 965 (String)
  CouponPaymentDate?: Date// [18] 224 (LocalDate)
  IssueDate?: Date// [19] 225 (LocalDate)
  RepoCollateralSecurityType?: string// [20] 239 (String)
  RepurchaseTerm?: number// [21] 226 (Int)
  RepurchaseRate?: number// [22] 227 (Float)
  Factor?: number// [23] 228 (Float)
  CreditRating?: string// [24] 255 (String)
  InstrRegistry?: string// [25] 543 (String)
  CountryOfIssue?: string// [26] 470 (String)
  StateOrProvinceOfIssue?: string// [27] 471 (String)
  LocaleOfIssue?: string// [28] 472 (String)
  RedemptionDate?: Date// [29] 240 (LocalDate)
  StrikePrice?: number// [30] 202 (Float)
  StrikeCurrency?: string// [31] 947 (String)
  StrikeMultiplier?: number// [32] 967 (Float)
  StrikeValue?: number// [33] 968 (Float)
  OptAttribute?: string// [34] 206 (String)
  ContractMultiplier?: number// [35] 231 (Float)
  MinPriceIncrement?: number// [36] 969 (Float)
  MinPriceIncrementAmount?: number// [37] 1146 (Float)
  UnitOfMeasure?: string// [38] 996 (String)
  UnitOfMeasureQty?: number// [39] 1147 (Float)
  PriceUnitOfMeasure?: string// [40] 1191 (String)
  PriceUnitOfMeasureQty?: number// [41] 1192 (Float)
  SettlMethod?: string// [42] 1193 (String)
  ExerciseStyle?: number// [43] 1194 (Int)
  OptPayoutAmount?: number// [44] 1195 (Float)
  PriceQuoteMethod?: string// [45] 1196 (String)
  ValuationMethod?: string// [46] 1197 (String)
  ListMethod?: number// [47] 1198 (Int)
  CapPrice?: number// [48] 1199 (Float)
  FloorPrice?: number// [49] 1200 (Float)
  PutOrCall?: number// [50] 201 (Int)
  FlexibleIndicator?: boolean// [51] 1244 (Boolean)
  FlexProductEligibilityIndicator?: boolean// [52] 1242 (Boolean)
  TimeUnit?: string// [53] 997 (String)
  CouponRate?: number// [54] 223 (Float)
  SecurityExchange?: string// [55] 207 (String)
  PositionLimit?: number// [56] 970 (Int)
  NTPositionLimit?: number// [57] 971 (Int)
  Issuer?: string// [58] 106 (String)
  EncodedIssuerLen?: number// [59] 348 (Int)
  EncodedIssuer?: Buffer// [60] 349 (RawData)
  SecurityDesc?: string// [61] 107 (String)
  EncodedSecurityDescLen?: number// [62] 350 (Int)
  EncodedSecurityDesc?: Buffer// [63] 351 (RawData)
  SecurityXML?: ISecurityXML// [64] SecurityXMLLen.1184, SecurityXML.1185, SecurityXMLSchema.1186
  Pool?: string// [65] 691 (String)
  ContractSettlMonth?: string// [66] 667 (String)
  CPProgram?: number// [67] 875 (Int)
  CPRegType?: string// [68] 876 (String)
  EvntGrp?: IEvntGrp[]// [69] EventType.865, EventDate.866 .. EventText.868
  DatedDate?: Date// [70] 873 (LocalDate)
  InterestAccrualDate?: Date// [71] 874 (LocalDate)
  InstrumentParties?: IInstrumentParties[]// [72] InstrumentPartyID.1019, InstrumentPartyIDSource.1050 .. InstrumentPartySubIDType.1054
  ContractMultiplierUnit?: number// [73] 1435 (Int)
  FlowScheduleType?: number// [74] 1439 (Int)
  RestructuringType?: string// [75] 1449 (String)
  Seniority?: string// [76] 1450 (String)
  NotionalPercentageOutstanding?: number// [77] 1451 (Float)
  OriginalNotionalPercentageOutstanding?: number// [78] 1452 (Float)
  AttachmentPoint?: number// [79] 1457 (Float)
  DetachmentPoint?: number// [80] 1458 (Float)
  StrikePriceDeterminationMethod?: number// [81] 1478 (Int)
  StrikePriceBoundaryMethod?: number// [82] 1479 (Int)
  StrikePriceBoundaryPrecision?: number// [83] 1480 (Float)
  UnderlyingPriceDeterminationMethod?: number// [84] 1481 (Int)
  OptPayoutType?: number// [85] 1482 (Int)
  ComplexEvents?: IComplexEvents[]// [86] ComplexEventType.1484, ComplexOptPayoutAmount.1485 .. ComplexEventEndTime.1496
}
