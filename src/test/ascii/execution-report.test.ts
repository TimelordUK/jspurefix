import 'reflect-metadata'

import * as path from 'path'
import { SegmentDescription, MsgView, Structure } from '../../buffer'
import { ILooseObject } from '../../collections/collection'
import { IUndInstrmtGrp, IUnderlyingInstrument, IUndInstrmtGrpNoUnderlyings } from '../../types/FIX4.4/quickfix'
import { SegmentType } from '../../buffer/segment/segment-type'
import { Setup } from '../env/setup'

const root: string = path.join(__dirname, '../../../data')

let views: MsgView[]
let structure: Structure | undefined

let setup: Setup
beforeAll(async () => {
  setup = new Setup('session/qf-fix44.json', null)
  await setup.init()
  views = await setup.client.replayer.replayFixFile(path.join(root, 'examples/FIX.4.4/quickfix/execution-report/fix.txt'))
  if (views && views.length > 0) {
    structure = views[0].structure ?? undefined
  }
}, 45000)

test('expect a structure from fix msg', () => {
  expect(structure).toBeTruthy()
})

/*
[20] 453 (NoPartyIDs) = 3, [21] 448 (PartyID) = magna.
[22] 447 (PartyIDSource) = 9[AUSTRALIAN_BUSINESS_NUMBER], [23] 452 (PartyRole) = 28[CUSTODIAN]
[24] 802 (NoPartySubIDs) = 2, [25] 523 (PartySubID) = et
[26] 803 (PartySubIDType) = 22[SECURITIES_ACCOUNT_NAME], [27] 523 (PartySubID) = leo,
[28] 803 (PartySubIDType) = 10[SECURITIES_ACCOUNT_NUMBER], [29] 448 (PartyID) = iaculis
[30] 447 (PartyIDSource) = F[SETTLEMENT_ENTITY_LOCATION], [31] 452 (PartyRole) = 2[BROKER_OF_CREDIT]
[32] 802 (NoPartySubIDs) = 3, [33] 523 (PartySubID) = Nullam
[34] 803 (PartySubIDType) = 12[REGISTERED_ADDRESS_12], [35] 523 (PartySubID) = lectus,
[36] 803 (PartySubIDType) = 13[REGULATORY_STATUS], [37] 523 (PartySubID) = eget
[38] 803 (PartySubIDType) = 18[REGISTERED_ADDRESS_18], [39] 448 (PartyID) = vitae,
[40] 447 (PartyIDSource) = 9[AUSTRALIAN_BUSINESS_NUMBER], [41] 452 (PartyRole) = 5[INVESTOR_ID]
[42] 802 (NoPartySubIDs) = 1, [43] 523 (PartySubID) = ac
[44] 803 (PartySubIDType) = 6[POSTAL_ADDRESS], [45] 229 (TradeOriginationDate) = 20180528-16:38:03.972
 */

test('Parties structure', () => {
  const parties: SegmentDescription = structure?.layout.Parties
  const noPartyIDs: SegmentDescription = structure?.layout.NoPartyIDs
  expect(parties).toBeTruthy()
  expect(parties.startPosition === 20)
  expect(parties.endPosition === 44)
  expect(parties.depth === 1)
  expect(parties.type === SegmentType.Component)
  expect(noPartyIDs.startPosition === 20)
  expect(noPartyIDs.endPosition === 44)
  expect(noPartyIDs.depth === 2)
  expect(parties.type === SegmentType.Group)
})

test('Parties PartySubIDType sub-structure', () => {
  const ptysSubGrp: SegmentDescription[] = structure?.layout.PtysSubGrp
  expect(ptysSubGrp).toBeTruthy()
  expect(Array.isArray(ptysSubGrp)).toEqual(true)
  expect(ptysSubGrp.length).toEqual(3)
  expect(ptysSubGrp[0].startPosition).toEqual(24)
  expect(ptysSubGrp[0].type).toEqual(SegmentType.Component)
  expect(ptysSubGrp[1].startPosition).toEqual(32)
  expect(ptysSubGrp[1].type).toEqual(SegmentType.Component)
  expect(ptysSubGrp[2].startPosition).toEqual(42)
  expect(ptysSubGrp[2].type).toEqual(SegmentType.Component)

  const noPartySubIDs: SegmentDescription[] = structure?.layout.NoPartySubIDs
  expect(noPartySubIDs).toBeTruthy()
  expect(Array.isArray(noPartySubIDs)).toEqual(true)
  expect(noPartySubIDs.length).toEqual(3)

  expect(noPartySubIDs[0].delimiterTag).toEqual(523)
  expect(noPartySubIDs[0].type).toEqual(SegmentType.Group)
  expect(noPartySubIDs[0].delimiterPositions).toEqual([25, 27])
  expect(noPartySubIDs[0].depth).toEqual(4)

  expect(noPartySubIDs[1].delimiterTag).toEqual(523)
  expect(noPartySubIDs[1].type).toEqual(SegmentType.Group)
  expect(noPartySubIDs[1].delimiterPositions).toEqual([33, 35, 37])
  expect(noPartySubIDs[1].depth).toEqual(4)

  expect(noPartySubIDs[2].delimiterTag).toEqual(523)
  expect(noPartySubIDs[2].type).toEqual(SegmentType.Group)
  expect(noPartySubIDs[2].delimiterPositions).toEqual([43])
  expect(noPartySubIDs[2].depth).toEqual(4)
})

/*
[46] 382 (NoContraBrokers) = 3, [47] 375 (ContraBroker) = Quisque
[48] 337 (ContraTrader) = tincidunt, [49] 437 (ContraTradeQty) = 18171
[50] 438 (ContraTradeTime) = 20180528-16:38:03.972, [51] 655 (ContraLegRefID) = Class
[52] 375 (ContraBroker) = taciti, [53] 337 (ContraTrader) = ad
[54] 437 (ContraTradeQty) = 91261, [55] 438 (ContraTradeTime) = 20180528-16:38:03.972
[56] 655 (ContraLegRefID) = torquent, [57] 375 (ContraBroker) = conubia
[58] 337 (ContraTrader) = per, [59] 437 (ContraTradeQty) = 97017
[60] 438 (ContraTradeTime) = 20180528-16:38:03.972, [61] 655 (ContraLegRefID) = himenaeos.
 */

test('ContraGrp structure', () => {
  const contraGrp: SegmentDescription = structure?.layout.ContraGrp
  expect(contraGrp).toBeTruthy()
  expect(contraGrp.depth).toEqual(1)
  expect(contraGrp.type).toEqual(SegmentType.Component)
  expect(contraGrp.startPosition).toEqual(46)
  expect(contraGrp.endPosition).toEqual(61)

  const noContraBrokers: SegmentDescription = structure?.layout.NoContraBrokers
  expect(noContraBrokers).toBeTruthy()
  expect(noContraBrokers.depth).toEqual(2)
  expect(noContraBrokers.type).toEqual(SegmentType.Group)
  expect(noContraBrokers.delimiterTag).toEqual(375)
  expect(noContraBrokers.delimiterPositions).toEqual([47, 52, 57])
})

/*
[82] 635 (ClearingFeeIndicator) = 5[5TH_YEAR_DELEGATE_TRADING_FOR_HIS_OWN_ACCOUNT], [83] 55 (Symbol) = ac,
[84] 65 (SymbolSfx) = non, [85] 48 (SecurityID) = Pellentesque
[86] 22 (SecurityIDSource) = B[WERTPAPIER], [87] 454 (NoSecurityAltID) = 2
[88] 455 (SecurityAltID) = lorem, [89] 456 (SecurityAltIDSource) = consequat
[90] 455 (SecurityAltID) = sapien, [91] 456 (SecurityAltIDSource) = tempor
[92] 460 (Product) = 2[COMMODITY], [93] 461 (CFICode) = a
[94] 167 (SecurityType) = SECLOAN[SECURITIES_LOAN], [95] 762 (SecuritySubType) = purus
[96] 200 (MaturityMonthYear) = ut, [97] 541 (MaturityDate) = 20180528-16:38:03.972
[98] 201 (PutOrCall) = 1[CALL], [99] 224 (CouponPaymentDate) = 20180528-16:38:03.972
[100] 225 (IssueDate) = 20180528-16:38:03.972, [101] 239 (RepoCollateralSecurityType) = Proin
[102] 226 (RepurchaseTerm) = 62025, [103] 227 (RepurchaseRate) = 27005
[104] 228 (Factor) = 68810, [105] 255 (CreditRating) = justo
[106] 543 (InstrRegistry) = ut, [107] 470 (CountryOfIssue) = nibh
[108] 471 (StateOrProvinceOfIssue) = at., [109] 472 (LocaleOfIssue) = fermentum
[110] 240 (RedemptionDate) = 20180528-16:38:03.972, [111] 202 (StrikePrice) = 52639
[112] 947 (StrikeCurrency) = 50824, [113] 206 (OptAttribute) = risus,
[114] 231 (ContractMultiplier) = 10378, [115] 223 (CouponRate) = 25946
[116] 207 (SecurityExchange) = placerat, [117] 106 (Issuer) = luctus
[118] 348 (EncodedIssuerLen) = 20, [119] 349 (EncodedIssuer) = zqJsegy0CQ8EyKQ1bmLw
[120] 107 (SecurityDesc) = Vivamus, [121] 350 (EncodedSecurityDescLen) = 20
[122] 351 (EncodedSecurityDesc) = A1xB4jDS31E4zM1xAbk5, [123] 691 (Pool) = mi
[124] 667 (ContractSettlMonth) = arcu, [125] 875 (CPProgram) = 2[4]
[126] 876 (CPRegType) = rhoncus, [127] 864 (NoEvents) = 1
[128] 865 (EventType) = 1[PUT], [129] 866 (EventDate) = 20180528-16:38:03.973
[130] 867 (EventPx) = 16817, [131] 868 (EventText) = amet
[132] 873 (DatedDate) = 20180528-16:38:03.973, [133] 874 (InterestAccrualDate) = 20180528-16:38:03.973
 */

test('Instrument structure', () => {
  const instrument: SegmentDescription = structure?.layout.Instrument
  expect(instrument).toBeTruthy()
  expect(instrument.type).toEqual(SegmentType.Component)
  expect(instrument.startPosition).toEqual(83)
  expect(instrument.startTag).toEqual(55)
  expect(instrument.endPosition).toEqual(133)
  expect(instrument.endTag).toEqual(874)

  const noSecurityAltID: SegmentDescription = structure?.layout.NoSecurityAltID
  expect(noSecurityAltID).toBeTruthy()
  expect(noSecurityAltID.type).toEqual(SegmentType.Group)
  expect(noSecurityAltID.delimiterTag).toEqual(455)
  expect(noSecurityAltID.delimiterPositions).toEqual([88, 90])
})

/*
[134] 913 (AgreementDesc) = sit, [135] 914 (AgreementID) = eleifend
[136] 915 (AgreementDate) = 20180528-16:38:03.973, [137] 918 (AgreementCurrency) = 78552
[138] 788 (TerminationType) = 2[TERM], [139] 916 (StartDate) = 20180528-16:38:03.973
[140] 917 (EndDate) = 20180528-16:38:03.973, [141] 919 (DeliveryType) = 3[HOLD_IN_CUSTODY]
[142] 898 (MarginRatio) = 13625, [143] 711 (NoUnderlyings) = 2
 */

test('FinancingDetails structure', () => {
  const financingDetails: SegmentDescription = structure?.layout.FinancingDetails
  expect(financingDetails).toBeTruthy()
  expect(financingDetails.depth).toEqual(1)
  expect(financingDetails.type).toEqual(SegmentType.Component)
  expect(financingDetails.startPosition).toEqual(134)
  expect(financingDetails.startTag).toEqual(913)
  expect(financingDetails.endPosition).toEqual(142)
  expect(financingDetails.endTag).toEqual(898)
})

/*
[272] 211 (PegOffsetValue) = 38459, [273] 835 (PegMoveType) = 1[FIXED]
[274] 836 (PegOffsetType) = [undefined], [275] 837 (PegLimitType) = 2
[276] 838 (PegRoundDirection) = 2, [277] 840 (PegScope) = 4[NATIONAL_EXCLUDING_LOCAL]
 */

test('PegInstructions structure', () => {
  const pegInstructions: SegmentDescription = structure?.layout.PegInstructions
  expect(pegInstructions).toBeTruthy()
  expect(pegInstructions.depth).toEqual(1)
  expect(pegInstructions.type).toEqual(SegmentType.Component)
  expect(pegInstructions.startPosition).toEqual(272)
  expect(pegInstructions.startTag).toEqual(211)
  expect(pegInstructions.endPosition).toEqual(277)
  expect(pegInstructions.endTag).toEqual(840)
})

/*
[278] 388 (DiscretionInst) = 2[RELATED_TO_PRIMARY_PRICE], [279] 389 (DiscretionOffsetValue) = 48430
[280] 841 (DiscretionMoveType) = 1[FIXED], [281] 842 (DiscretionOffsetType) = 3[PRICE_TIER]
[282] 843 (DiscretionLimitType) = 2, [283] 844 (DiscretionRoundDirection) = 2
[284] 846 (DiscretionScope) = 4[NATIONAL_EXCLUDING_LOCAL], [285] 839 (PeggedPrice) = 18644
 */

test('DiscretionInstructions structure', () => {
  const discretionInstructions: SegmentDescription = structure?.layout.DiscretionInstructions
  expect(discretionInstructions).toBeTruthy()
  expect(discretionInstructions.depth).toEqual(1)
  expect(discretionInstructions.type).toEqual(SegmentType.Component)
  expect(discretionInstructions.startPosition).toEqual(278)
  expect(discretionInstructions.startTag).toEqual(388)
  expect(discretionInstructions.endPosition).toEqual(284)
  expect(discretionInstructions.endTag).toEqual(846)
})

/*
[324] 12 (Commission) = 3339, [325] 13 (CommType) = 1[PER_UNIT]
[326] 479 (CommCurrency) = 25841, [327] 497 (FundRenewWaiv) = N[NO]
 */
test('CommissionData structure', () => {
  const commisionData: SegmentDescription = structure?.layout.CommissionData
  expect(commisionData).toBeTruthy()
  expect(commisionData.depth).toEqual(1)
  expect(commisionData.type).toEqual(SegmentType.Component)
  expect(commisionData.startPosition).toEqual(324)
  expect(commisionData.startTag).toEqual(12)
  expect(commisionData.endPosition).toEqual(327)
  expect(commisionData.endTag).toEqual(497)
})

/*
[328] 218 (Spread) = 72687, [329] 220 (BenchmarkCurveCurrency) = 84249
[330] 221 (BenchmarkCurveName) = Pellentesque, [331] 222 (BenchmarkCurvePoint) = luctus
[332] 662 (BenchmarkPrice) = 90721, [333] 663 (BenchmarkPriceType) = 66615
[334] 699 (BenchmarkSecurityID) = et, [335] 761 (BenchmarkSecurityIDSource) = nunc.
 */

test('SpreadOrBenchmarkCurveData structure', () => {
  const spreadBenchData: SegmentDescription = structure?.layout.SpreadOrBenchmarkCurveData
  expect(spreadBenchData).toBeTruthy()
  expect(spreadBenchData.depth).toEqual(1)
  expect(spreadBenchData.type).toEqual(SegmentType.Component)
  expect(spreadBenchData.startPosition).toEqual(328)
  expect(spreadBenchData.startTag).toEqual(218)
  expect(spreadBenchData.endPosition).toEqual(335)
  expect(spreadBenchData.endTag).toEqual(761)
})

/*
[336] 235 (YieldType) = INVERSEFLOATER[INVERSE_FLOATER_BOND_YIELD], [337] 236 (Yield) = 34183
[338] 701 (YieldCalcDate) = 20180528-16:38:03.973, [339] 696 (YieldRedemptionDate) = 20180528-16:38:03.973
[340] 697 (YieldRedemptionPrice) = 3652, [341] 698 (YieldRedemptionPriceType) = 10535
 */

test('YieldData structure', () => {
  const yieldData: SegmentDescription = structure?.layout.YieldData
  expect(yieldData).toBeTruthy()
  expect(yieldData.depth).toEqual(1)
  expect(yieldData.type).toEqual(SegmentType.Component)
  expect(yieldData.startPosition).toEqual(336)
  expect(yieldData.startTag).toEqual(235)
  expect(yieldData.endPosition).toEqual(341)
  expect(yieldData.endTag).toEqual(698)
})

/*
[384] 851 (LastLiquidityInd) = 3[LIQUIDITY_ROUTED_OUT], [385] 518 (NoContAmts) = 3
[386] 519 (ContAmtType) = 5[DISCOUNT_AMOUNT], [387] 520 (ContAmtValue) = 95673
[388] 521 (ContAmtCurr) = 87528, [389] 519 (ContAmtType) = 14[FUND_BASED_RENEWAL_COMMISSION_AMOUNT_14]
[390] 520 (ContAmtValue) = 56344, [391] 521 (ContAmtCurr) = 46066
[392] 519 (ContAmtType) = 11[FUND_BASED_RENEWAL_COMMISSION], [393] 520 (ContAmtValue) = 94762
[394] 521 (ContAmtCurr) = 6779, [395] 555 (NoLegs) = 3
 */

test('ContAmtGrp structure', () => {
  const contAmtGrp: SegmentDescription = structure?.layout.ContAmtGrp
  expect(contAmtGrp).toBeTruthy()
  expect(contAmtGrp.depth).toEqual(1)
  expect(contAmtGrp.type).toEqual(SegmentType.Component)
  expect(contAmtGrp.startPosition).toEqual(385)
  expect(contAmtGrp.startTag).toEqual(518)
  expect(contAmtGrp.endPosition).toEqual(394)
  expect(contAmtGrp.endTag).toEqual(521)

  const noContAmts: SegmentDescription = structure?.layout.NoContAmts
  expect(noContAmts).toBeTruthy()
  expect(noContAmts.depth).toEqual(2)
  expect(noContAmts.type).toEqual(SegmentType.Group)
  expect(noContAmts.startPosition).toEqual(385)
  expect(noContAmts.startTag).toEqual(518)
  expect(noContAmts.endPosition).toEqual(394)
  expect(noContAmts.endTag).toEqual(521)
  expect(noContAmts.delimiterTag).toEqual(519)
  expect(noContAmts.delimiterPositions).toEqual([386, 389, 392])
})

/*
[636] 136 (NoMiscFees) = 2, [637] 137 (MiscFeeAmt) = 56059
[638] 138 (MiscFeeCurr) = 92115, [639] 139 (MiscFeeType) = 7[OTHER]
[640] 891 (MiscFeeBasis) = [undefined], [641] 137 (MiscFeeAmt) = 93185
[642] 138 (MiscFeeCurr) = 72195, [643] 139 (MiscFeeType) = 12[AGENT]
[644] 891 (MiscFeeBasis) = [undefined], [645] 10 (CheckSum) = 59
 */

test('MiscFeesGrp structure', () => {
  const miscFees: SegmentDescription = structure?.layout.MiscFeesGrp
  expect(miscFees).toBeTruthy()
  expect(miscFees.depth).toEqual(1)
  expect(miscFees.type).toEqual(SegmentType.Component)
  expect(miscFees.startPosition).toEqual(636)
  expect(miscFees.startTag).toEqual(136)
  expect(miscFees.endPosition).toEqual(644)
  expect(miscFees.endTag).toEqual(891)

  const noMiscfees: SegmentDescription = structure?.layout.NoMiscFees
  expect(noMiscfees).toBeTruthy()
  expect(noMiscfees.depth).toEqual(2)
  expect(noMiscfees.type).toEqual(SegmentType.Group)
  expect(noMiscfees.startPosition).toEqual(636)
  expect(noMiscfees.startTag).toEqual(136)
  expect(noMiscfees.endPosition).toEqual(644)
  expect(noMiscfees.endTag).toEqual(891)
  expect(noMiscfees.delimiterTag).toEqual(137)
  expect(noMiscfees.delimiterPositions).toEqual([637, 641])
})

/*
[142] 898 (MarginRatio) = 13625, [143] 711 (NoUnderlyings) = 2
[144] 311 (UnderlyingSymbol) = massa., [145] 312 (UnderlyingSymbolSfx) = metus
[146] 309 (UnderlyingSecurityID) = maximus, [147] 305 (UnderlyingSecurityIDSource) = facilisis
[148] 457 (NoUnderlyingSecurityAltID) = 3, [149] 458 (UnderlyingSecurityAltID) = ornare
[150] 459 (UnderlyingSecurityAltIDSource) = magna., [151] 458 (UnderlyingSecurityAltID) = non
[152] 459 (UnderlyingSecurityAltIDSource) = at, [153] 458 (UnderlyingSecurityAltID) = hendrerit
[154] 459 (UnderlyingSecurityAltIDSource) = Pellentesque, [155] 462 (UnderlyingProduct) = 89682
[156] 463 (UnderlyingCFICode) = arcu,, [157] 310 (UnderlyingSecurityType) = eu
[158] 763 (UnderlyingSecuritySubType) = vitae,, [159] 313 (UnderlyingMaturityMonthYear) = ut
[160] 542 (UnderlyingMaturityDate) = 20180528-16:38:03.973, [161] 315 (UnderlyingPutOrCall) = 81619
[162] 241 (UnderlyingCouponPaymentDate) = 20180528-16:38:03.973, [163] 242 (UnderlyingIssueDate) = 20180528-16:38:03.973
[164] 243 (UnderlyingRepoCollateralSecurityType) = Aliquam, [165] 244 (UnderlyingRepurchaseTerm) = 1819
[166] 245 (UnderlyingRepurchaseRate) = 12004, [167] 246 (UnderlyingFactor) = 81916
[168] 256 (UnderlyingCreditRating) = erat, [169] 595 (UnderlyingInstrRegistry) = tellus
[170] 592 (UnderlyingCountryOfIssue) = in, [171] 593 (UnderlyingStateOrProvinceOfIssue) = nisi
[172] 594 (UnderlyingLocaleOfIssue) = Interdum, [173] 247 (UnderlyingRedemptionDate) = 20180528-16:38:03.973
[174] 316 (UnderlyingStrikePrice) = 46328, [175] 941 (UnderlyingStrikeCurrency) = 21536
[176] 317 (UnderlyingOptAttribute) = malesuada, [177] 436 (UnderlyingContractMultiplier) = 83404
[178] 435 (UnderlyingCouponRate) = 1709, [179] 308 (UnderlyingSecurityExchange) = ac
[180] 306 (UnderlyingIssuer) = ipsum, [181] 362 (EncodedUnderlyingIssuerLen) = 20
[182] 363 (EncodedUnderlyingIssuer) = gJ40LPqdkNUGQxMisPLk, [183] 307 (UnderlyingSecurityDesc) = in
[184] 364 (EncodedUnderlyingSecurityDescLen) = 20, [185] 365 (EncodedUnderlyingSecurityDesc) = RUQjbmg6gsPoWBsuwDCh
[186] 877 (UnderlyingCPProgram) = Ut, [187] 878 (UnderlyingCPRegType) = massa
[188] 318 (UnderlyingCurrency) = 47704, [189] 879 (UnderlyingQty) = 31703
[190] 810 (UnderlyingPx) = 60977, [191] 882 (UnderlyingDirtyPrice) = 67361
[192] 883 (UnderlyingEndPrice) = 51785, [193] 884 (UnderlyingStartValue) = 80625
[194] 885 (UnderlyingCurrentValue) = 29888, [195] 886 (UnderlyingEndValue) = 49266
[196] 887 (NoUnderlyingStips) = 3, [197] 888 (UnderlyingStipType) = cursus
[198] 889 (UnderlyingStipValue) = Vivamus, [199] 888 (UnderlyingStipType) = convallis
[200] 889 (UnderlyingStipValue) = nec, [201] 888 (UnderlyingStipType) = urna
[202] 889 (UnderlyingStipValue) = vitae., [203] 311 (UnderlyingSymbol) = erat
[204] 312 (UnderlyingSymbolSfx) = In, [205] 309 (UnderlyingSecurityID) = feugiat
[206] 305 (UnderlyingSecurityIDSource) = ut, [207] 457 (NoUnderlyingSecurityAltID) = 1
[208] 458 (UnderlyingSecurityAltID) = Quisque, [209] 459 (UnderlyingSecurityAltIDSource) = tortor
[210] 462 (UnderlyingProduct) = 36068, [211] 463 (UnderlyingCFICode) = est
[212] 310 (UnderlyingSecurityType) = Lorem, [213] 763 (UnderlyingSecuritySubType) = dolor
[214] 313 (UnderlyingMaturityMonthYear) = amet,, [215] 542 (UnderlyingMaturityDate) = 20180528-16:38:03.973
[216] 315 (UnderlyingPutOrCall) = 94032, [217] 241 (UnderlyingCouponPaymentDate) = 20180528-16:38:03.973
[218] 242 (UnderlyingIssueDate) = 20180528-16:38:03.973, [219] 243 (UnderlyingRepoCollateralSecurityType) = adipiscing
[220] 244 (UnderlyingRepurchaseTerm) = 17712, [221] 245 (UnderlyingRepurchaseRate) = 95092
[222] 246 (UnderlyingFactor) = 82914, [223] 256 (UnderlyingCreditRating) = Nunc
[224] 595 (UnderlyingInstrRegistry) = orci,, [225] 592 (UnderlyingCountryOfIssue) = vel
[226] 593 (UnderlyingStateOrProvinceOfIssue) = sed,, [227] 594 (UnderlyingLocaleOfIssue) = cursus
[228] 247 (UnderlyingRedemptionDate) = 20180528-16:38:03.973, [229] 316 (UnderlyingStrikePrice) = 84513
[230] 941 (UnderlyingStrikeCurrency) = 31556, [231] 317 (UnderlyingOptAttribute) = Aenean
[232] 436 (UnderlyingContractMultiplier) = 8879, [233] 435 (UnderlyingCouponRate) = 68005
[234] 308 (UnderlyingSecurityExchange) = diam, [235] 306 (UnderlyingIssuer) = Aenean
[236] 362 (EncodedUnderlyingIssuerLen) = 20, [237] 363 (EncodedUnderlyingIssuer) = VxRjId4eWuuNiBYgjNpp
[238] 307 (UnderlyingSecurityDesc) = viverra, [239] 364 (EncodedUnderlyingSecurityDescLen) = 20
[240] 365 (EncodedUnderlyingSecurityDesc) = fwlY5CmVswvapjFalVLb, [241] 877 (UnderlyingCPProgram) = non
[242] 878 (UnderlyingCPRegType) = neque., [243] 318 (UnderlyingCurrency) = 53806
[244] 879 (UnderlyingQty) = 26390, [245] 810 (UnderlyingPx) = 32442
[246] 882 (UnderlyingDirtyPrice) = 82617, [247] 883 (UnderlyingEndPrice) = 86326
[248] 884 (UnderlyingStartValue) = 34911, [249] 885 (UnderlyingCurrentValue) = 46867
[250] 886 (UnderlyingEndValue) = 94014, [251] 887 (NoUnderlyingStips) = 3
[252] 888 (UnderlyingStipType) = arcu, [253] 889 (UnderlyingStipValue) = dignissim
[254] 888 (UnderlyingStipType) = auctor, [255] 889 (UnderlyingStipValue) = maximus
[256] 888 (UnderlyingStipType) = quam., [257] 889 (UnderlyingStipValue) = varius
 */

test('UndInstrmtGrp structure', () => {
  const undInstrmtGrp: SegmentDescription = structure?.layout.UndInstrmtGrp
  expect(undInstrmtGrp).toBeTruthy()
  expect(undInstrmtGrp.type).toEqual(SegmentType.Component)
  expect(undInstrmtGrp.startPosition).toEqual(143)
  expect(undInstrmtGrp.startTag).toEqual(711)
  expect(undInstrmtGrp.endPosition).toEqual(257)
  expect(undInstrmtGrp.endTag).toEqual(889)
  expect(undInstrmtGrp.depth).toEqual(1)

  const noUnderlyings: SegmentDescription = structure?.layout.NoUnderlyings
  expect(noUnderlyings).toBeTruthy()
  expect(noUnderlyings.delimiterTag).toEqual(311)
  expect(noUnderlyings.delimiterPositions).toEqual([144, 203])
  expect(noUnderlyings.depth).toEqual(2)
  expect(noUnderlyings.type).toEqual(SegmentType.Group)

  const underlyingInstrument: SegmentDescription[] = structure?.layout.UnderlyingInstrument
  expect(underlyingInstrument).toBeTruthy()
  expect(underlyingInstrument.length).toEqual(2)
  expect(underlyingInstrument).toBeTruthy()

  expect(underlyingInstrument[0].startPosition).toEqual(144)
  expect(underlyingInstrument[0].startTag).toEqual(311)
  expect(underlyingInstrument[0].endPosition).toEqual(202)
  expect(underlyingInstrument[0].endTag).toEqual(889)
  expect(underlyingInstrument[0].depth).toEqual(3)
  expect(underlyingInstrument[0].type).toEqual(SegmentType.Component)

  expect(underlyingInstrument[1].startPosition).toEqual(203)
  expect(underlyingInstrument[1].startTag).toEqual(311)
  expect(underlyingInstrument[1].endPosition).toEqual(257)
  expect(underlyingInstrument[1].endTag).toEqual(889)
  expect(underlyingInstrument[1].depth).toEqual(3)
  expect(underlyingInstrument[1].type).toEqual(SegmentType.Component)

  const undSecAltIDGrp: SegmentDescription[] = structure?.layout.UndSecAltIDGrp
  expect(undSecAltIDGrp.length).toEqual(2)
  expect(undSecAltIDGrp[0].startPosition).toEqual(148)
  expect(undSecAltIDGrp[0].startTag).toEqual(457)
  expect(undSecAltIDGrp[0].endPosition).toEqual(154)
  expect(undSecAltIDGrp[0].endTag).toEqual(459)
  expect(undSecAltIDGrp[0].depth).toEqual(4)
  expect(undSecAltIDGrp[0].type).toEqual(SegmentType.Component)

  expect(undSecAltIDGrp[1].startPosition).toEqual(207)
  expect(undSecAltIDGrp[1].startTag).toEqual(457)
  expect(undSecAltIDGrp[1].endPosition).toEqual(209)
  expect(undSecAltIDGrp[1].endTag).toEqual(459)
  expect(undSecAltIDGrp[1].depth).toEqual(4)
  expect(undSecAltIDGrp[1].type).toEqual(SegmentType.Component)

  const noUnderlyingSecurityAltID: SegmentDescription[] = structure?.layout.NoUnderlyingSecurityAltID
  expect(noUnderlyingSecurityAltID.length).toEqual(2)
  expect(noUnderlyingSecurityAltID).toBeTruthy()

  expect(noUnderlyingSecurityAltID[0].depth).toEqual(5)
  expect(noUnderlyingSecurityAltID[0].delimiterTag).toEqual(458)
  expect(noUnderlyingSecurityAltID[0].type).toEqual(SegmentType.Group)
  expect(noUnderlyingSecurityAltID[0].startPosition).toEqual(148)
  expect(noUnderlyingSecurityAltID[0].endPosition).toEqual(154)
  expect(noUnderlyingSecurityAltID[0].delimiterPositions).toEqual([149, 151, 153])

  expect(noUnderlyingSecurityAltID[1].depth).toEqual(5)
  expect(noUnderlyingSecurityAltID[1].delimiterTag).toEqual(458)
  expect(noUnderlyingSecurityAltID[1].type).toEqual(SegmentType.Group)
  expect(noUnderlyingSecurityAltID[1].startPosition).toEqual(207)
  expect(noUnderlyingSecurityAltID[1].endPosition).toEqual(209)
  expect(noUnderlyingSecurityAltID[1].delimiterPositions).toEqual([208])

  const boundNoUnderlyingSecurityAltID: SegmentDescription | null = structure?.firstContainedWithin(
    'NoUnderlyingSecurityAltID',
    underlyingInstrument[1]) ?? null
  expect(boundNoUnderlyingSecurityAltID).toBeTruthy()
})

/*
[394] 521 (ContAmtCurr) = 6779, [395] 555 (NoLegs) = 3
[396] 600 (LegSymbol) = posuere, [397] 601 (LegSymbolSfx) = nibh.
[398] 602 (LegSecurityID) = ornare,, [399] 603 (LegSecurityIDSource) = semper
[400] 604 (NoLegSecurityAltID) = 3, [401] 605 (LegSecurityAltID) = laoreet,
[402] 606 (LegSecurityAltIDSource) = odio, [403] 605 (LegSecurityAltID) = velit,
[404] 606 (LegSecurityAltIDSource) = sollicitudin, [405] 605 (LegSecurityAltID) = augue
[406] 606 (LegSecurityAltIDSource) = odio., [407] 607 (LegProduct) = 12438
[408] 608 (LegCFICode) = tempor, [409] 609 (LegSecurityType) = nisi,
[410] 764 (LegSecuritySubType) = euismod, [411] 610 (LegMaturityMonthYear) = convallis
[412] 611 (LegMaturityDate) = 20180528-16:38:03.973, [413] 248 (LegCouponPaymentDate) = 20180528-16:38:03.973
[414] 249 (LegIssueDate) = 20180528-16:38:03.973, [415] 250 (LegRepoCollateralSecurityType) = Donec
[416] 251 (LegRepurchaseTerm) = 50636, [417] 252 (LegRepurchaseRate) = 29567
[418] 253 (LegFactor) = 12603, [419] 257 (LegCreditRating) = erat
[420] 599 (LegInstrRegistry) = vel, [421] 596 (LegCountryOfIssue) = nulla
[422] 597 (LegStateOrProvinceOfIssue) = ac., [423] 598 (LegLocaleOfIssue) = vel
[424] 254 (LegRedemptionDate) = 20180528-16:38:03.973, [425] 612 (LegStrikePrice) = 45964
[426] 942 (LegStrikeCurrency) = 52294, [427] 613 (LegOptAttribute) = eros.
[428] 614 (LegContractMultiplier) = 15566, [429] 615 (LegCouponRate) = 29897
[430] 616 (LegSecurityExchange) = urna,, [431] 617 (LegIssuer) = sit
[432] 618 (EncodedLegIssuerLen) = 20, [433] 619 (EncodedLegIssuer) = bsCdR5NlOBXt99NrTSbA
[434] 620 (LegSecurityDesc) = bibendum, [435] 621 (EncodedLegSecurityDescLen) = 20
[436] 622 (EncodedLegSecurityDesc) = 3Mzh9ClDlcxCLLtgAZ0x, [437] 623 (LegRatioQty) = 47570
[438] 624 (LegSide) = amet,, [439] 556 (LegCurrency) = 18817
[440] 740 (LegPool) = non, [441] 739 (LegDatedDate) = 20180528-16:38:03.973
[442] 955 (LegContractSettlMonth) = Nam, [443] 956 (LegInterestAccrualDate) = 20180528-16:38:03.973
[444] 687 (LegQty) = 38413, [445] 690 (LegSwapType) = 4[RISK]
[446] 683 (NoLegStipulations) = 2, [447] 688 (LegStipulationType) = mi,
[448] 689 (LegStipulationValue) = et, [449] 688 (LegStipulationType) = in,
[450] 689 (LegStipulationValue) = sed, [451] 564 (LegPositionEffect) = Nulla
[452] 565 (LegCoveredOrUncovered) = 45098, [453] 539 (NoNestedPartyIDs) = 1
[454] 524 (NestedPartyID) = leo, [455] 525 (NestedPartyIDSource) = odio
[456] 538 (NestedPartyRole) = 59224, [457] 804 (NoNestedPartySubIDs) = 1
[458] 545 (NestedPartySubID) = placerat., [459] 805 (NestedPartySubIDType) = 83297
[460] 654 (LegRefID) = felis, [461] 566 (LegPrice) = 39429
[462] 587 (LegSettlType) = elementum, [463] 588 (LegSettlDate) = 20180528-16:38:03.973
[464] 637 (LegLastPx) = 75387, [465] 600 (LegSymbol) = mollis
[466] 601 (LegSymbolSfx) = euismod, [467] 602 (LegSecurityID) = diam.
[468] 603 (LegSecurityIDSource) = porttitor, [469] 604 (NoLegSecurityAltID) = 3
[470] 605 (LegSecurityAltID) = eget, [471] 606 (LegSecurityAltIDSource) = cursus,
[472] 605 (LegSecurityAltID) = hendrerit, [473] 606 (LegSecurityAltIDSource) = tempus.
[474] 605 (LegSecurityAltID) = et, [475] 606 (LegSecurityAltIDSource) = fames
[476] 607 (LegProduct) = 6990, [477] 608 (LegCFICode) = ante
[478] 609 (LegSecurityType) = primis, [479] 764 (LegSecuritySubType) = faucibus.
[480] 610 (LegMaturityMonthYear) = egestas, [481] 611 (LegMaturityDate) = 20180528-16:38:03.973
[482] 248 (LegCouponPaymentDate) = 20180528-16:38:03.973, [483] 249 (LegIssueDate) = 20180528-16:38:03.973
[484] 250 (LegRepoCollateralSecurityType) = ac, [485] 251 (LegRepurchaseTerm) = 58397
[486] 252 (LegRepurchaseRate) = 22917, [487] 253 (LegFactor) = 96132
[488] 257 (LegCreditRating) = semper., [489] 599 (LegInstrRegistry) = rhoncus
[490] 596 (LegCountryOfIssue) = nulla,, [491] 597 (LegStateOrProvinceOfIssue) = ornare
[492] 598 (LegLocaleOfIssue) = iaculis, [493] 254 (LegRedemptionDate) = 20180528-16:38:03.973
[494] 612 (LegStrikePrice) = 86522, [495] 942 (LegStrikeCurrency) = 3727
[496] 613 (LegOptAttribute) = Aliquam, [497] 614 (LegContractMultiplier) = 18485
[498] 615 (LegCouponRate) = 36169, [499] 616 (LegSecurityExchange) = volutpat.
[500] 617 (LegIssuer) = condimentum, [501] 618 (EncodedLegIssuerLen) = 20
[502] 619 (EncodedLegIssuer) = P813lip75NKBgG1C8re8, [503] 620 (LegSecurityDesc) = sem
[504] 621 (EncodedLegSecurityDescLen) = 20, [505] 622 (EncodedLegSecurityDesc) = 8qbetIHVFcKFS7EY3XOK
[506] 623 (LegRatioQty) = 42919, [507] 624 (LegSide) = porttitor.
[508] 556 (LegCurrency) = 34832, [509] 740 (LegPool) = pellentesque
[510] 739 (LegDatedDate) = 20180528-16:38:03.973, [511] 955 (LegContractSettlMonth) = eget
[512] 956 (LegInterestAccrualDate) = 20180528-16:38:03.973, [513] 687 (LegQty) = 16560
[514] 690 (LegSwapType) = 1[PAR_FOR_PAR], [515] 683 (NoLegStipulations) = 3
[516] 688 (LegStipulationType) = tincidunt, [517] 689 (LegStipulationValue) = ipsum
[518] 688 (LegStipulationType) = sit, [519] 689 (LegStipulationValue) = consectetur
[520] 688 (LegStipulationType) = elit., [521] 689 (LegStipulationValue) = odio
[522] 564 (LegPositionEffect) = blandit, [523] 565 (LegCoveredOrUncovered) = 61021
[524] 539 (NoNestedPartyIDs) = 3, [525] 524 (NestedPartyID) = semper
[526] 525 (NestedPartyIDSource) = bibendum, [527] 538 (NestedPartyRole) = 33332
[528] 804 (NoNestedPartySubIDs) = 1, [529] 545 (NestedPartySubID) = lectus.
[530] 805 (NestedPartySubIDType) = 78292, [531] 524 (NestedPartyID) = vel
[532] 525 (NestedPartyIDSource) = magna., [533] 538 (NestedPartyRole) = 8563
[534] 804 (NoNestedPartySubIDs) = 3, [535] 545 (NestedPartySubID) = et
[536] 805 (NestedPartySubIDType) = 91784, [537] 545 (NestedPartySubID) = leo,
[538] 805 (NestedPartySubIDType) = 69741, [539] 545 (NestedPartySubID) = iaculis
[540] 805 (NestedPartySubIDType) = 88660, [541] 524 (NestedPartyID) = Nullam
[542] 525 (NestedPartyIDSource) = lectus,, [543] 538 (NestedPartyRole) = 92219
[544] 804 (NoNestedPartySubIDs) = 2, [545] 545 (NestedPartySubID) = eget
[546] 805 (NestedPartySubIDType) = 61048, [547] 545 (NestedPartySubID) = vitae,
[548] 805 (NestedPartySubIDType) = 82229, [549] 654 (LegRefID) = ac
[550] 566 (LegPrice) = 87104, [551] 587 (LegSettlType) = Quisque
[552] 588 (LegSettlDate) = 20180528-16:38:03.974, [553] 637 (LegLastPx) = 56182
[554] 600 (LegSymbol) = tincidunt, [555] 601 (LegSymbolSfx) = Class
[556] 602 (LegSecurityID) = taciti, [557] 603 (LegSecurityIDSource) = ad
[558] 604 (NoLegSecurityAltID) = 3, [559] 605 (LegSecurityAltID) = torquent
[560] 606 (LegSecurityAltIDSource) = conubia, [561] 605 (LegSecurityAltID) = per
[562] 606 (LegSecurityAltIDSource) = himenaeos., [563] 605 (LegSecurityAltID) = eu
[564] 606 (LegSecurityAltIDSource) = risus,, [565] 607 (LegProduct) = 36203
[566] 608 (LegCFICode) = tincidunt, [567] 609 (LegSecurityType) = Morbi
[568] 764 (LegSecuritySubType) = mi,, [569] 610 (LegMaturityMonthYear) = vel
[570] 611 (LegMaturityDate) = 20180528-16:38:03.974, [571] 248 (LegCouponPaymentDate) = 20180528-16:38:03.974
[572] 249 (LegIssueDate) = 20180528-16:38:03.974, [573] 250 (LegRepoCollateralSecurityType) = ac,
[574] 251 (LegRepurchaseTerm) = 89976, [575] 252 (LegRepurchaseRate) = 16951
[576] 253 (LegFactor) = 28912, [577] 257 (LegCreditRating) = non
[578] 599 (LegInstrRegistry) = Pellentesque, [579] 596 (LegCountryOfIssue) = lorem
[580] 597 (LegStateOrProvinceOfIssue) = consequat, [581] 598 (LegLocaleOfIssue) = sapien
[582] 254 (LegRedemptionDate) = 20180528-16:38:03.974, [583] 612 (LegStrikePrice) = 97965
[584] 942 (LegStrikeCurrency) = 62977, [585] 613 (LegOptAttribute) = tempor
[586] 614 (LegContractMultiplier) = 4694, [587] 615 (LegCouponRate) = 20263
[588] 616 (LegSecurityExchange) = a, [589] 617 (LegIssuer) = purus
[590] 618 (EncodedLegIssuerLen) = 20, [591] 619 (EncodedLegIssuer) = Z2GKqFkA713xSVG2nqOx
[592] 620 (LegSecurityDesc) = ut, [593] 621 (EncodedLegSecurityDescLen) = 20
[594] 622 (EncodedLegSecurityDesc) = lyQLPxezPpjDNJnvSnCo, [595] 623 (LegRatioQty) = 24444
[596] 624 (LegSide) = Proin, [597] 556 (LegCurrency) = 86893
[598] 740 (LegPool) = justo, [599] 739 (LegDatedDate) = 20180528-16:38:03.974
[600] 955 (LegContractSettlMonth) = ut, [601] 956 (LegInterestAccrualDate) = 20180528-16:38:03.974
[602] 687 (LegQty) = 33589, [603] 690 (LegSwapType) = 4[RISK]
[604] 683 (NoLegStipulations) = 2, [605] 688 (LegStipulationType) = nibh
[606] 689 (LegStipulationValue) = at., [607] 688 (LegStipulationType) = fermentum
[608] 689 (LegStipulationValue) = risus,, [609] 564 (LegPositionEffect) = placerat
[610] 565 (LegCoveredOrUncovered) = 74238, [611] 539 (NoNestedPartyIDs) = 2
[612] 524 (NestedPartyID) = luctus, [613] 525 (NestedPartyIDSource) = Vivamus
[614] 538 (NestedPartyRole) = 41104, [615] 804 (NoNestedPartySubIDs) = 3
[616] 545 (NestedPartySubID) = mi, [617] 805 (NestedPartySubIDType) = 26305
[618] 545 (NestedPartySubID) = arcu, [619] 805 (NestedPartySubIDType) = 97537
[620] 545 (NestedPartySubID) = rhoncus, [621] 805 (NestedPartySubIDType) = 71231
[622] 524 (NestedPartyID) = amet, [623] 525 (NestedPartyIDSource) = sit
[624] 538 (NestedPartyRole) = 66844, [625] 804 (NoNestedPartySubIDs) = 2
[626] 545 (NestedPartySubID) = eleifend, [627] 805 (NestedPartySubIDType) = 8186
[628] 545 (NestedPartySubID) = massa., [629] 805 (NestedPartySubIDType) = 82689
[630] 654 (LegRefID) = metus, [631] 566 (LegPrice) = 6725
[632] 587 (LegSettlType) = maximus, [633] 588 (LegSettlDate) = 20180528-16:38:03.974
[634] 637 (LegLastPx) = 88665, [635] 797 (CopyMsgIndicator) = Y
 */

test('InstrmtLegExecGrp structure', () => {
  const instrmtLegExecGrp: SegmentDescription = structure?.layout.InstrmtLegExecGrp
  expect(instrmtLegExecGrp).toBeTruthy()
  expect(instrmtLegExecGrp.type).toEqual(SegmentType.Component)
  expect(instrmtLegExecGrp.startPosition).toEqual(395)
  expect(instrmtLegExecGrp.startTag).toEqual(555)
  expect(instrmtLegExecGrp.endTag).toEqual(637)
  expect(instrmtLegExecGrp.endPosition).toEqual(634)
  expect(instrmtLegExecGrp.depth).toEqual(1)

  const noLegs: SegmentDescription = structure?.layout.NoLegs
  expect(noLegs).toBeTruthy()
  expect(noLegs.type).toEqual(SegmentType.Group)
  expect(noLegs.startPosition).toEqual(395)
  expect(noLegs.startTag).toEqual(555)
  expect(noLegs.endTag).toEqual(637)
  expect(noLegs.endPosition).toEqual(634)
  expect(noLegs.depth).toEqual(2)
  expect(noLegs.delimiterTag).toEqual(600)
  expect(noLegs.delimiterPositions).toEqual([396, 465, 554])
})

test('instrumentLeg structure', () => {
  const instrumentLeg: SegmentDescription[] = structure?.layout.InstrumentLeg
  expect(instrumentLeg).toBeTruthy()
  expect(Array.isArray(instrumentLeg)).toEqual(true)
  expect(instrumentLeg.length).toEqual(3)

  expect(instrumentLeg[0].type).toEqual(SegmentType.Component)
  expect(instrumentLeg[0].depth).toEqual(3)
  expect(instrumentLeg[0].startTag).toEqual(600)
  expect(instrumentLeg[0].startPosition).toEqual(396)
  expect(instrumentLeg[0].endPosition).toEqual(443)
  expect(instrumentLeg[0].endTag).toEqual(956)

  expect(instrumentLeg[1].type).toEqual(SegmentType.Component)
  expect(instrumentLeg[1].depth).toEqual(3)
  expect(instrumentLeg[1].startTag).toEqual(600)
  expect(instrumentLeg[1].startPosition).toEqual(465)
  expect(instrumentLeg[1].endPosition).toEqual(512)
  expect(instrumentLeg[1].endTag).toEqual(956)

  expect(instrumentLeg[2].type).toEqual(SegmentType.Component)
  expect(instrumentLeg[2].depth).toEqual(3)
  expect(instrumentLeg[2].startTag).toEqual(600)
  expect(instrumentLeg[2].startPosition).toEqual(554)
  expect(instrumentLeg[2].endPosition).toEqual(601)
  expect(instrumentLeg[2].endTag).toEqual(956)
})

function getnoLegSecurityAltID (index: number): SegmentDescription[] {
  const noLegSecurityAltID: SegmentDescription[] = structure?.layout.NoLegSecurityAltID
  expect(noLegSecurityAltID).toBeTruthy()
  expect(Array.isArray(noLegSecurityAltID)).toEqual(true)
  expect(noLegSecurityAltID.length).toEqual(3)

  expect(noLegSecurityAltID[index].type).toEqual(SegmentType.Group)
  expect(noLegSecurityAltID[index].depth).toEqual(5)
  expect(noLegSecurityAltID[index].startTag).toEqual(604)
  return noLegSecurityAltID
}

test('LegSecAltIDGrp [0] structure', () => {
  const legSecAltIDGrp: SegmentDescription[] = structure?.layout.LegSecAltIDGrp
  expect(legSecAltIDGrp).toBeTruthy()
  expect(Array.isArray(legSecAltIDGrp)).toEqual(true)
  expect(legSecAltIDGrp.length).toEqual(3)
  const index: number = 0
  expect(legSecAltIDGrp[index].type).toEqual(SegmentType.Component)
  expect(legSecAltIDGrp[index].depth).toEqual(4)
  expect(legSecAltIDGrp[index].startTag).toEqual(604)
  expect(legSecAltIDGrp[index].startPosition).toEqual(400)
  expect(legSecAltIDGrp[index].endPosition).toEqual(406)
  expect(legSecAltIDGrp[index].endTag).toEqual(606)

  const noLegSecurityAltID: SegmentDescription[] = getnoLegSecurityAltID(index)
  expect(noLegSecurityAltID[index].startPosition).toEqual(400)
  expect(noLegSecurityAltID[index].endPosition).toEqual(406)
  expect(noLegSecurityAltID[index].endTag).toEqual(606)
  expect(noLegSecurityAltID[index].delimiterTag).toEqual(605)
  expect(noLegSecurityAltID[index].delimiterPositions).toEqual([401, 403, 405])
})

test('LegSecAltIDGrp [1] structure', () => {
  const legSecAltIDGrp: SegmentDescription[] = structure?.layout.LegSecAltIDGrp
  expect(legSecAltIDGrp).toBeTruthy()
  expect(Array.isArray(legSecAltIDGrp)).toEqual(true)
  expect(legSecAltIDGrp.length).toEqual(3)
  const index: number = 1
  expect(legSecAltIDGrp[index].type).toEqual(SegmentType.Component)
  expect(legSecAltIDGrp[index].depth).toEqual(4)
  expect(legSecAltIDGrp[index].startTag).toEqual(604)
  expect(legSecAltIDGrp[index].startPosition).toEqual(469)
  expect(legSecAltIDGrp[index].endPosition).toEqual(475)
  expect(legSecAltIDGrp[index].endTag).toEqual(606)

  const noLegSecurityAltID: SegmentDescription[] = getnoLegSecurityAltID(index)
  expect(noLegSecurityAltID[index].startPosition).toEqual(469)
  expect(noLegSecurityAltID[index].endPosition).toEqual(475)
  expect(noLegSecurityAltID[index].endTag).toEqual(606)
  expect(noLegSecurityAltID[index].delimiterTag).toEqual(605)
  expect(noLegSecurityAltID[index].delimiterPositions).toEqual([470, 472, 474])
})

test('LegSecAltIDGrp [2] structure', () => {
  const legSecAltIDGrp: SegmentDescription[] = structure?.layout.LegSecAltIDGrp
  expect(legSecAltIDGrp).toBeTruthy()
  expect(Array.isArray(legSecAltIDGrp)).toEqual(true)
  expect(legSecAltIDGrp.length).toEqual(3)
  const index: number = 2
  expect(legSecAltIDGrp[index].type).toEqual(SegmentType.Component)
  expect(legSecAltIDGrp[index].depth).toEqual(4)
  expect(legSecAltIDGrp[index].startTag).toEqual(604)
  expect(legSecAltIDGrp[index].startPosition).toEqual(558)
  expect(legSecAltIDGrp[index].endPosition).toEqual(564)
  expect(legSecAltIDGrp[index].endTag).toEqual(606)

  const noLegSecurityAltID: SegmentDescription[] = getnoLegSecurityAltID(index)
  expect(noLegSecurityAltID[index].startPosition).toEqual(558)
  expect(noLegSecurityAltID[index].endPosition).toEqual(564)
  expect(noLegSecurityAltID[index].endTag).toEqual(606)
  expect(noLegSecurityAltID[index].delimiterTag).toEqual(605)
  expect(noLegSecurityAltID[index].delimiterPositions).toEqual([559, 561, 563])
})

test('expect one message view from one line fix file', () => {
  expect(views).toHaveLength(1)
}, 1000)

test('can create object from view', () => {
  const erView: MsgView = views[0]
  const erAsObject: (ILooseObject | null) = erView.toObject()
  expect(erAsObject).toBeTruthy()
}, 1000)

test('simple tag decoding', () => {
  const erView: MsgView = views[0]
  expect(erView.getString(35)).toEqual('8')
  expect(erView.getString('MsgType')).toEqual('8')
  expect(erView.getString(8)).toEqual('FIX4.4')
  expect(erView.getTyped(9)).toEqual(6545)
  expect(erView.getTyped('TotNumReports')).toEqual(19404)
  expect(erView.getTyped('StrikePrice')).toEqual(52639)
}, 1000)

test('simple repeated tag decoding', () => {
  const erView: MsgView = views[0]
  expect(erView.getStrings('PartyID')).toEqual(['magna.', 'iaculis', 'vitae,'])
}, 1000)

test('repeated group decoding of Parties', () => {
  const erView: MsgView = views[0]
  const partyView: MsgView | null = erView.getView('Parties')
  expect(partyView).toBeTruthy()
  const partyViewAsObject: (ILooseObject | null) = partyView?.toObject() ?? null
  expect(partyViewAsObject).toBeTruthy()
  expect(partyViewAsObject?.NoPartyIDs.length).toEqual(3)
  expect(partyViewAsObject?.NoPartyIDs[0]).toEqual({
    PartyID: 'magna.',
    PartyIDSource: '9',
    PartyRole: 28,
    PtysSubGrp: {
      NoPartySubIDs: [
        {
          PartySubID: 'et',
          PartySubIDType: 22
        },
        {
          PartySubID: 'leo,',
          PartySubIDType: 10
        }
      ]
    }
  })
  const noParties: MsgView | null = partyView?.getView('NoPartyIDs') ?? null
  expect(noParties).toBeTruthy()
  expect(noParties?.groupCount()).toEqual(3)
  const np0View: MsgView | null = noParties?.getGroupInstance(0) ?? null
  expect(np0View).toBeTruthy()
  expect(np0View?.getString('PartyID')).toEqual('magna.')
  expect(np0View?.getString('PartyIDSource')).toEqual('9')
  const np0ViewPtysSubGrp: MsgView | null = np0View?.getView('PtysSubGrp') ?? null
  const np0ViewPtysSubGrpAsObject: (ILooseObject | null) = np0ViewPtysSubGrp?.toObject() ?? null
  expect(np0ViewPtysSubGrpAsObject).toBeTruthy()
  expect(np0ViewPtysSubGrpAsObject).toEqual(partyViewAsObject?.NoPartyIDs[0].PtysSubGrp)
}, 1000)

test('instrument component decode', () => {
  const erView: MsgView = views[0]
  // check the instrument component
  const instrumentView: MsgView | null = erView.getView('Instrument')
  expect(instrumentView).toBeTruthy()
  expect(instrumentView?.getString('Symbol')).toEqual('ac,')
  const secAltIDGrpAsObject: ILooseObject | null = instrumentView?.getView('SecAltIDGrp')?.toObject() ?? null
  expect(secAltIDGrpAsObject).toBeTruthy()
  expect(secAltIDGrpAsObject?.NoSecurityAltID.length).toEqual(2)
}, 1000)

test('UndInstrmtGrp component decode', () => {
  const erView: MsgView = views[0]
  // check the instrument component
  const undInstrmtGrpView: MsgView | null = erView.getView('UndInstrmtGrp')
  expect(undInstrmtGrpView).toBeTruthy()
  const undInstrmtGrpViewAsObject: IUndInstrmtGrp = undInstrmtGrpView?.toObject() as IUndInstrmtGrp
  expect(undInstrmtGrpViewAsObject).toBeTruthy()
  expect(undInstrmtGrpViewAsObject?.NoUnderlyings?.length).toEqual(2)
  const underlyings: IUndInstrmtGrpNoUnderlyings[] | null = undInstrmtGrpViewAsObject?.NoUnderlyings ?? null
  expect(underlyings).toBeTruthy()
  if (!underlyings) return
  const u0: IUndInstrmtGrpNoUnderlyings | null = underlyings ? underlyings[0] : null
  const underlying0: IUnderlyingInstrument | null = u0
    ? u0.UnderlyingInstrument ?? null
    : null
  expect(underlying0).toBeTruthy()
  expect(underlying0?.UnderlyingSymbol).toEqual('massa.')
  expect(underlying0?.UndSecAltIDGrp).toEqual(
    {
      NoUnderlyingSecurityAltID: [
        {
          UnderlyingSecurityAltID: 'ornare',
          UnderlyingSecurityAltIDSource: 'magna.'
        },
        {
          UnderlyingSecurityAltID: 'non',
          UnderlyingSecurityAltIDSource: 'at'
        },
        {
          UnderlyingSecurityAltID: 'hendrerit',
          UnderlyingSecurityAltIDSource: 'Pellentesque'
        }]
    })
  const underlyings2: IUndInstrmtGrpNoUnderlyings[] | null = undInstrmtGrpViewAsObject?.NoUnderlyings ?? null
  expect(underlyings2).toBeTruthy()
  if (!underlyings2) return
  const underlying1: ILooseObject | null = underlyings2[1].UnderlyingInstrument ?? null
  expect(underlying1).toBeTruthy()
  expect(underlying1?.UnderlyingSymbol).toEqual('erat')
  expect(underlying1?.UndSecAltIDGrp).toEqual(
    {
      NoUnderlyingSecurityAltID: [
        {
          UnderlyingSecurityAltID: 'Quisque',
          UnderlyingSecurityAltIDSource: 'tortor'
        }
      ]
    })
}, 1000)
