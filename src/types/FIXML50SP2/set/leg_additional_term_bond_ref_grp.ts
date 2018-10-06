export interface ILegAdditionalTermBondRefGrp {
  LegAdditionalTermBondSecurityID?: string// 41317
  LegContractualMatrixSource?: string// 42204
  LegAdditionalTermBondDesc?: string// 41319
  EncodedLegAdditionalTermBondDescLen?: number// 41320
  EncodedLegAdditionalTermBondDesc?: Buffer// 41321
  LegAdditionalTermBondCurrency?: string// 41322
  LegAdditionalTermBondIssuer?: string// 41323
  EncodedLegAdditionalTermBondIssuerLen?: number// 41324
  EncodedLegAdditionalTermBondIssuer?: Buffer// 41325
  LegAdditionalTermBondSeniority?: string// 41326
  LegAdditionalTermBondCouponType?: number// 41327
  LegAdditionalTermBondCouponRate?: number// 41328
  LegAdditionalTermBondMaturityDate?: Date// 41329
  LegAdditionalTermBondParValue?: number// 41330
  LegAdditionalTermBondCurrentTotalIssuedAmount?: number// 41331
  LegAdditionalTermBondCouponFrequencyPeriod?: number// 41332
  LegAdditionalTermBondCouponFrequencyUnit?: string// 41333
  UnderlyingAdditionalTermBondDayCount?: number// 42035
}
