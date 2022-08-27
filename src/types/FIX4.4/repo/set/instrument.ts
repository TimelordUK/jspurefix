import { ISecAltIDGrp } from './sec_alt_id_grp'
import { IEvntGrp } from './evnt_grp'

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
  CFICode?: string// [7] 461 (String)
  SecurityType?: string// [8] 167 (String)
  SecuritySubType?: string// [9] 762 (String)
  MaturityMonthYear?: string// [10] 200 (String)
  MaturityDate?: Date// [11] 541 (LocalDate)
  PutOrCall?: number// [12] 201 (Int)
  CouponPaymentDate?: Date// [13] 224 (LocalDate)
  IssueDate?: Date// [14] 225 (LocalDate)
  RepoCollateralSecurityType?: string// [15] 239 (String)
  RepurchaseTerm?: number// [16] 226 (Int)
  RepurchaseRate?: number// [17] 227 (Float)
  Factor?: number// [18] 228 (Float)
  CreditRating?: string// [19] 255 (String)
  InstrRegistry?: string// [20] 543 (String)
  CountryOfIssue?: string// [21] 470 (String)
  StateOrProvinceOfIssue?: string// [22] 471 (String)
  LocaleOfIssue?: string// [23] 472 (String)
  RedemptionDate?: Date// [24] 240 (LocalDate)
  StrikePrice?: number// [25] 202 (Float)
  StrikeCurrency?: string// [26] 947 (String)
  OptAttribute?: string// [27] 206 (String)
  ContractMultiplier?: number// [28] 231 (Float)
  CouponRate?: number// [29] 223 (Float)
  SecurityExchange?: string// [30] 207 (String)
  Issuer?: string// [31] 106 (String)
  EncodedIssuerLen?: number// [32] 348 (Int)
  EncodedIssuer?: Buffer// [33] 349 (RawData)
  SecurityDesc?: string// [34] 107 (String)
  EncodedSecurityDescLen?: number// [35] 350 (Int)
  EncodedSecurityDesc?: Buffer// [36] 351 (RawData)
  Pool?: string// [37] 691 (String)
  ContractSettlMonth?: string// [38] 667 (String)
  CPProgram?: number// [39] 875 (Int)
  CPRegType?: string// [40] 876 (String)
  EvntGrp?: IEvntGrp[]// [41] EventType.865, EventDate.866 .. EventText.868
  DatedDate?: Date// [42] 873 (LocalDate)
  InterestAccrualDate?: Date// [43] 874 (LocalDate)
}
