export interface ILegAdditionalTermBondRefGrp {
  LegAdditionalTermBondSecurityID?: string// [1] 41317 (String)
  SecurityIDSource?: string// [1] 22 (String)
  LegAdditionalTermBondDesc?: string// [1] 41319 (String)
  EncodedLegAdditionalTermBondDescLen?: number// [1] 41320 (Length)
  EncodedLegAdditionalTermBondDesc?: Buffer// [1] 41321 (RawData)
  LegAdditionalTermBondCurrency?: string// [1] 41322 (String)
  LegAdditionalTermBondIssuer?: string// [1] 41323 (String)
  EncodedLegAdditionalTermBondIssuerLen?: number// [1] 41324 (Length)
  EncodedLegAdditionalTermBondIssuer?: Buffer// [1] 41325 (RawData)
  LegAdditionalTermBondSeniority?: string// [1] 41326 (String)
  LegAdditionalTermBondCouponType?: number// [1] 41327 (Int)
  LegAdditionalTermBondCouponRate?: number// [1] 41328 (Float)
  LegAdditionalTermBondMaturityDate?: Date// [1] 41329 (LocalDate)
  LegAdditionalTermBondParValue?: number// [1] 41330 (Float)
  LegAdditionalTermBondCurrentTotalIssuedAmount?: number// [1] 41331 (Float)
  LegAdditionalTermBondCouponFrequencyPeriod?: number// [1] 41332 (Int)
  LegAdditionalTermBondCouponFrequencyUnit?: string// [1] 41333 (String)
  AdditionalTermBondDayCount?: number// [1] 40018 (Int)
}
