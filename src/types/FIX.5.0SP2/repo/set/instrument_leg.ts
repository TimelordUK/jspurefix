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
  LegSymbol?: string// 600
  LegSymbolSfx?: string// 601
  LegSecurityID?: string// 602
  LegSecurityIDSource?: string// 603
  LegSecAltIDGrp?: ILegSecAltIDGrp[]
  LegProduct?: number// 607
  LegCFICode?: string// 608
  LegSecurityType?: string// 609
  LegSecuritySubType?: string// 764
  LegMaturityMonthYear?: string// 610
  LegMaturityDate?: Date// 611
  LegMaturityTime?: string// 1212
  LegCouponPaymentDate?: Date// 248
  LegIssueDate?: Date// 249
  LegRepoCollateralSecurityType?: string// 250
  LegRepurchaseTerm?: number// 251
  LegRepurchaseRate?: number// 252
  LegFactor?: number// 253
  LegCreditRating?: string// 257
  LegInstrRegistry?: string// 599
  LegCountryOfIssue?: string// 596
  LegStateOrProvinceOfIssue?: string// 597
  LegLocaleOfIssue?: string// 598
  LegRedemptionDate?: Date// 254
  LegStrikePrice?: number// 612
  LegStrikeCurrency?: string// 942
  LegOptAttribute?: string// 613
  LegContractMultiplier?: number// 614
  LegUnitOfMeasure?: string// 999
  LegUnitOfMeasureQty?: number// 1224
  LegPriceUnitOfMeasure?: string// 1421
  LegPriceUnitOfMeasureQty?: number// 1422
  LegTimeUnit?: string// 1001
  LegExerciseStyle?: number// 1420
  LegCouponRate?: number// 615
  LegSecurityExchange?: string// 616
  LegIssuer?: string// 617
  EncodedLegIssuerLen?: number// 618
  EncodedLegIssuer?: Buffer// 619
  LegSecurityDesc?: string// 620
  EncodedLegSecurityDescLen?: number// 621
  EncodedLegSecurityDesc?: Buffer// 622
  LegRatioQty?: number// 623
  LegSide?: string// 624
  LegCurrency?: string// 556
  LegPool?: string// 740
  LegDatedDate?: Date// 739
  LegContractSettlMonth?: string// 955
  LegInterestAccrualDate?: Date// 956
  LegPutOrCall?: number// 1358
  LegOptionRatio?: number// 1017
  LegPrice?: number// 566
  LegContractMultiplierUnit?: number// 1436
  LegFlowScheduleType?: number// 1440
}
