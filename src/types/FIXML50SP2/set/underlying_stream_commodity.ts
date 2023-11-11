import { IUnderlyingStreamCommodityAltIDGrp } from './underlying_stream_commodity_alt_id_grp'
import { IUnderlyingStreamAssetAttributeGrp } from './underlying_stream_asset_attribute_grp'
import { IUnderlyingStreamCommodityDataSourceGrp } from './underlying_stream_commodity_data_source_grp'
import { IUnderlyingStreamCommoditySettlBusinessCenterGrp } from './underlying_stream_commodity_settl_business_center_grp'
import { IUnderlyingStreamCommoditySettlPeriodGrp } from './underlying_stream_commodity_settl_period_grp'

export interface IUnderlyingStreamCommodity {
  UnderlyingStreamCommodityBase?: string// [1] 41964 (String)
  UnderlyingStreamCommodityType?: string// [1] 41965 (String)
  UnderlyingStreamCommoditySecurityID?: string// [1] 41966 (String)
  UnderlyingStreamCommoditySecurityIDSource?: string// [1] 41967 (String)
  UnderlyingStreamCommodityDesc?: string// [1] 41968 (String)
  EncodedUnderlyingStreamCommodityDescLen?: number// [1] 41969 (Length)
  EncodedUnderlyingStreamCommodityDesc?: Buffer// [1] 41970 (RawData)
  UnderlyingStreamCommodityDeliveryPricingRegion?: string// [1] 42589 (String)
  UnderlyingStreamCommodityUnitOfMeasure?: string// [1] 41971 (String)
  UnderlyingStreamCommodityCurrency?: string// [1] 41972 (String)
  UnderlyingStreamCommodityExchange?: string// [1] 41973 (String)
  UnderlyingStreamCommodityRateSource?: number// [1] 41974 (Int)
  UnderlyingStreamCommodityRateReferencePage?: string// [1] 41975 (String)
  UnderlyingStreamCommodityRateReferencePageHeading?: string// [1] 41976 (String)
  UnderlyingStreamDataProvider?: string// [1] 41977 (String)
  UnderlyingStreamCommodityPricingType?: string// [1] 41978 (String)
  UnderlyingStreamCommodityNearbySettlDayPeriod?: number// [1] 41979 (Int)
  UnderlyingStreamCommodityNearbySettlDayUnit?: string// [1] 41980 (String)
  UnderlyingStreamCommoditySettlDateUnadjusted?: Date// [1] 41981 (LocalDate)
  UnderlyingStreamCommoditySettlDateBusinessDayConvention?: number// [1] 41982 (Int)
  UnderlyingStreamCommoditySettlDateAdjusted?: Date// [1] 41983 (LocalDate)
  UnderlyingStreamCommoditySettlMonth?: number// [1] 41984 (Int)
  UnderlyingStreamCommoditySettlDateRollPeriod?: number// [1] 41985 (Int)
  UnderlyingStreamCommoditySettlDateRollUnit?: string// [1] 41986 (String)
  UnderlyingStreamCommoditySettlDayType?: number// [1] 41987 (Int)
  UnderlyingStreamCommodityXID?: string// [1] 41988 (String)
  UnderlyingStreamCommodityXIDRef?: string// [1] 41989 (String)
  UnderlyingStreamCommodityAltIDGrp?: IUnderlyingStreamCommodityAltIDGrp[]// [1] AltID.41991, AltIDSrc.41992
  UnderlyingStreamAssetAttributeGrp?: IUnderlyingStreamAssetAttributeGrp[]// [2] Typ.41801, Val.41802, Lmt.41803
  UnderlyingStreamCommodityDataSourceGrp?: IUnderlyingStreamCommodityDataSourceGrp[]// [3] ID.41994, Typ.41995
  UnderlyingStreamCommoditySettlBusinessCenterGrp?: IUnderlyingStreamCommoditySettlBusinessCenterGrp[]// [4] Ctr.41963
  UnderlyingStreamCommoditySettlPeriodGrp?: IUnderlyingStreamCommoditySettlPeriodGrp[]// [5] Ctry.42003, TZ.42004 .. XIDRef.42015
}
