export interface IAdditionalTermBondRefGrp {
  AdditionalTermBondSecurityID?: string// 40001
  SecurityIDSource?: string// 22
  AdditionalTermBondDesc?: string// 40003
  EncodedAdditionalTermBondDescLen?: number// 40004
  EncodedAdditionalTermBondDesc?: Buffer// 40005
  AdditionalTermBondCurrency?: string// 40006
  AdditionalTermBondIssuer?: string// 40007
  EncodedAdditionalTermBondIssuerLen?: number// 40008
  EncodedAdditionalTermBondIssuer?: Buffer// 40009
  AdditionalTermBondSeniority?: string// 40010
  AdditionalTermBondCouponType?: number// 40011
  AdditionalTermBondCouponRate?: number// 40012
  AdditionalTermBondMaturityDate?: Date// 40013
  AdditionalTermBondParValue?: number// 40014
  AdditionalTermBondCurrentTotalIssuedAmount?: number// 40015
  AdditionalTermBondCouponFrequencyPeriod?: number// 40016
  AdditionalTermBondCouponFrequencyUnit?: string// 40017
  AdditionalTermBondDayCount?: number// 40018
}
