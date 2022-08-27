import { ILegSecAltIDGrp } from './leg_sec_alt_id_grp'

/*
**************************************************************
* The InstrumentLeg component block, like the Instrument     *
* component block, contains all the fields commonly used to  *
* describe a security or instrument. In the case of the      *
* InstrumentLeg component block it describes a security used *
* in multileg-oriented messages.                             *
**************************************************************
*/
export interface IInstrumentLeg {
  LegSymbol?: string// [1] 600 (String)
  LegSymbolSfx?: string// [2] 601 (String)
  LegSecurityID?: string// [3] 602 (String)
  LegSecurityIDSource?: string// [4] 603 (String)
  LegSecAltIDGrp?: ILegSecAltIDGrp[]// [5] LegSecurityAltID.605, LegSecurityAltIDSource.606
  LegProduct?: number// [6] 607 (Int)
  LegCFICode?: string// [7] 608 (String)
  LegSecurityType?: string// [8] 609 (String)
  LegSecuritySubType?: string// [9] 764 (String)
  LegMaturityMonthYear?: string// [10] 610 (String)
  LegMaturityDate?: Date// [11] 611 (LocalDate)
  LegCouponPaymentDate?: Date// [12] 248 (LocalDate)
  LegIssueDate?: Date// [13] 249 (LocalDate)
  LegRepoCollateralSecurityType?: string// [14] 250 (String)
  LegRepurchaseTerm?: number// [15] 251 (Int)
  LegRepurchaseRate?: number// [16] 252 (Float)
  LegFactor?: number// [17] 253 (Float)
  LegCreditRating?: string// [18] 257 (String)
  LegInstrRegistry?: string// [19] 599 (String)
  LegCountryOfIssue?: string// [20] 596 (String)
  LegStateOrProvinceOfIssue?: string// [21] 597 (String)
  LegLocaleOfIssue?: string// [22] 598 (String)
  LegRedemptionDate?: Date// [23] 254 (LocalDate)
  LegStrikePrice?: number// [24] 612 (Float)
  LegStrikeCurrency?: string// [25] 942 (String)
  LegOptAttribute?: string// [26] 613 (String)
  LegContractMultiplier?: number// [27] 614 (Float)
  LegCouponRate?: number// [28] 615 (Float)
  LegSecurityExchange?: string// [29] 616 (String)
  LegIssuer?: string// [30] 617 (String)
  EncodedLegIssuerLen?: number// [31] 618 (Int)
  EncodedLegIssuer?: Buffer// [32] 619 (RawData)
  LegSecurityDesc?: string// [33] 620 (String)
  EncodedLegSecurityDescLen?: number// [34] 621 (Int)
  EncodedLegSecurityDesc?: Buffer// [35] 622 (RawData)
  LegRatioQty?: number// [36] 623 (Float)
  LegSide?: string// [37] 624 (String)
  LegCurrency?: string// [38] 556 (String)
  LegPool?: string// [39] 740 (String)
  LegDatedDate?: Date// [40] 739 (LocalDate)
  LegContractSettlMonth?: string// [41] 955 (String)
  LegInterestAccrualDate?: Date// [42] 956 (LocalDate)
}
