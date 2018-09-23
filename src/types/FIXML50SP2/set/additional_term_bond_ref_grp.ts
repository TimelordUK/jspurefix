export interface IAdditionalTermBondRefGrp {
  BatchID?: string// 50000
  LegContractualMatrixSource?: string// 42204
  PaymentDesc?: string// 43087
  EncodedUnderlyingStreamCommodityDescLen?: string// 41969
  EncodedUnderlyingStreamCommodityDesc?: Buffer// 41970
  UnderlyingReturnRatePriceCurrency?: string// 43067
  UnderlyingAdditionalTermBondIssuer?: string// 42017
  EncodedUnderlyingAdditionalTermBondIssuerLen?: string// 42025
  EncodedUnderlyingAdditionalTermBondIssuer?: Buffer// 42026
  UnderlyingAdditionalTermBondSeniority?: string// 42027
  UnderlyingAdditionalTermBondCouponType?: number// 42028
  UnderlyingAdditionalTermBondCouponRate?: number// 42029
  UnderlyingAdditionalTermBondMaturityDate?: Date// 42030
  UnderlyingAdditionalTermBondParValue?: number// 42031
  UnderlyingAdditionalTermBondCurrentTotalIssuedAmount?: number// 42032
  UnderlyingAdditionalTermBondCouponFrequencyPeriod?: number// 42033
  UnderlyingAdditionalTermBondCouponFrequencyUnit?: string// 42034
  UnderlyingAdditionalTermBondDayCount?: number// 42035
}
