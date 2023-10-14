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
  LegMaturityTime?: string// [12] 1212 (String)
  LegCouponPaymentDate?: Date// [13] 248 (LocalDate)
  LegIssueDate?: Date// [14] 249 (LocalDate)
  LegRepoCollateralSecurityType?: string// [15] 250 (String)
  LegRepurchaseTerm?: number// [16] 251 (Int)
  LegRepurchaseRate?: number// [17] 252 (Float)
  LegFactor?: number// [18] 253 (Float)
  LegCreditRating?: string// [19] 257 (String)
  LegInstrRegistry?: string// [20] 599 (String)
  LegCountryOfIssue?: string// [21] 596 (String)
  LegStateOrProvinceOfIssue?: string// [22] 597 (String)
  LegLocaleOfIssue?: string// [23] 598 (String)
  LegRedemptionDate?: Date// [24] 254 (LocalDate)
  LegStrikePrice?: number// [25] 612 (Float)
  LegStrikeCurrency?: string// [26] 942 (String)
  LegOptAttribute?: string// [27] 613 (String)
  LegContractMultiplier?: number// [28] 614 (Float)
  LegUnitOfMeasure?: string// [29] 999 (String)
  LegUnitOfMeasureQty?: number// [30] 1224 (Float)
  LegPriceUnitOfMeasure?: string// [31] 1421 (String)
  LegPriceUnitOfMeasureQty?: number// [32] 1422 (Float)
  LegTimeUnit?: string// [33] 1001 (String)
  LegExerciseStyle?: number// [34] 1420 (Int)
  LegCouponRate?: number// [35] 615 (Float)
  LegSecurityExchange?: string// [36] 616 (String)
  LegIssuer?: string// [37] 617 (String)
  EncodedLegIssuerLen?: number// [38] 618 (Int)
  EncodedLegIssuer?: Buffer// [39] 619 (RawData)
  LegSecurityDesc?: string// [40] 620 (String)
  EncodedLegSecurityDescLen?: number// [41] 621 (Int)
  EncodedLegSecurityDesc?: Buffer// [42] 622 (RawData)
  LegRatioQty?: number// [43] 623 (Float)
  LegSide?: string// [44] 624 (String)
  LegCurrency?: string// [45] 556 (String)
  LegPool?: string// [46] 740 (String)
  LegDatedDate?: Date// [47] 739 (LocalDate)
  LegContractSettlMonth?: string// [48] 955 (String)
  LegInterestAccrualDate?: Date// [49] 956 (LocalDate)
  LegPutOrCall?: number// [50] 1358 (Int)
  LegOptionRatio?: number// [51] 1017 (Float)
  LegPrice?: number// [52] 566 (Float)
  LegContractMultiplierUnit?: number// [53] 1436 (Int)
  LegFlowScheduleType?: number// [54] 1440 (Int)
}
