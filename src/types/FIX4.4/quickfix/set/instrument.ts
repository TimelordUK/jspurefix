import { ISecAltIDGrp } from './sec_alt_id_grp'
import { IEvntGrp } from './evnt_grp'

export interface IInstrument {
  Symbol?: string// 55
  SymbolSfx?: string// 65
  SecurityID?: string// 48
  SecurityIDSource?: string// 22
  SecAltIDGrp?: ISecAltIDGrp
  Product?: number// 460
  CFICode?: string// 461
  SecurityType?: string// 167
  SecuritySubType?: string// 762
  MaturityMonthYear?: string// 200
  MaturityDate?: Date// 541
  PutOrCall?: number// 201
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
  StrikeCurrency?: number// 947
  OptAttribute?: string// 206
  ContractMultiplier?: number// 231
  CouponRate?: number// 223
  SecurityExchange?: string// 207
  Issuer?: string// 106
  EncodedIssuerLen?: number// 348
  EncodedIssuer?: Buffer// 349
  SecurityDesc?: string// 107
  EncodedSecurityDescLen?: number// 350
  EncodedSecurityDesc?: Buffer// 351
  Pool?: string// 691
  ContractSettlMonth?: string// 667
  CPProgram?: number// 875
  CPRegType?: string// 876
  EvntGrp?: IEvntGrp
  DatedDate?: Date// 873
  InterestAccrualDate?: Date// 874
}
