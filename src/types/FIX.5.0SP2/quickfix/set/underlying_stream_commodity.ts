import { IUnderlyingStreamCommodityAltIDGrp } from './underlying_stream_commodity_alt_id_grp'
import { IUnderlyingStreamAssetAttributeGrp } from './underlying_stream_asset_attribute_grp'
import { IUnderlyingStreamCommodityDataSourceGrp } from './underlying_stream_commodity_data_source_grp'
import { IUnderlyingStreamCommoditySettlBusinessCenterGrp } from './underlying_stream_commodity_settl_business_center_grp'
import { IUnderlyingStreamCommoditySettlPeriodGrp } from './underlying_stream_commodity_settl_period_grp'

export interface IUnderlyingStreamCommodity {
  UnderlyingStreamCommodityBase?: string// [1] 41964 (String)
  UnderlyingStreamCommodityType?: string// [2] 41965 (String)
  UnderlyingStreamCommoditySecurityID?: string// [3] 41966 (String)
  UnderlyingStreamCommoditySecurityIDSource?: string// [4] 41967 (String)
  UnderlyingStreamCommodityAltIDGrp?: IUnderlyingStreamCommodityAltIDGrp// [5] NoUnderlyingStreamCommodityAltIDs.41990, UnderlyingStreamCommodityAltID.41991, UnderlyingStreamCommodityAltIDSource.41992
  UnderlyingStreamCommodityDesc?: string// [6] 41968 (String)
  EncodedUnderlyingStreamCommodityDescLen?: number// [7] 41969 (Length)
  EncodedUnderlyingStreamCommodityDesc?: Buffer// [8] 41970 (RawData)
  UnderlyingStreamCommodityDeliveryPricingRegion?: string// [9] 42589 (String)
  UnderlyingStreamAssetAttributeGrp?: IUnderlyingStreamAssetAttributeGrp// [10] NoUnderlyingStreamAssetAttributes.41800, UnderlyingStreamAssetAttributeType.41801 .. UnderlyingStreamAssetAttributeLimit.41803
  UnderlyingStreamCommodityUnitOfMeasure?: string// [11] 41971 (String)
  UnderlyingStreamCommodityCurrency?: string// [12] 41972 (String)
  UnderlyingStreamCommodityExchange?: string// [13] 41973 (String)
  UnderlyingStreamCommodityRateSource?: number// [14] 41974 (Int)
  UnderlyingStreamCommodityRateReferencePage?: string// [15] 41975 (String)
  UnderlyingStreamCommodityRateReferencePageHeading?: string// [16] 41976 (String)
  UnderlyingStreamDataProvider?: string// [17] 41977 (String)
  UnderlyingStreamCommodityDataSourceGrp?: IUnderlyingStreamCommodityDataSourceGrp// [18] NoUnderlyingStreamCommodityDataSources.41993, UnderlyingStreamCommodityDataSourceID.41994, UnderlyingStreamCommodityDataSourceIDType.41995
  UnderlyingStreamCommodityPricingType?: string// [19] 41978 (String)
  UnderlyingStreamCommodityNearbySettlDayPeriod?: number// [20] 41979 (Int)
  UnderlyingStreamCommodityNearbySettlDayUnit?: string// [21] 41980 (String)
  UnderlyingStreamCommoditySettlDateUnadjusted?: Date// [22] 41981 (LocalDate)
  UnderlyingStreamCommoditySettlDateBusinessDayConvention?: number// [23] 41982 (Int)
  UnderlyingStreamCommoditySettlBusinessCenterGrp?: IUnderlyingStreamCommoditySettlBusinessCenterGrp// [24] NoUnderlyingStreamCommoditySettlBusinessCenters.41962, UnderlyingStreamCommoditySettlBusinessCenter.41963
  UnderlyingStreamCommoditySettlDateAdjusted?: Date// [25] 41983 (LocalDate)
  UnderlyingStreamCommoditySettlMonth?: number// [26] 41984 (Int)
  UnderlyingStreamCommoditySettlDateRollPeriod?: number// [27] 41985 (Int)
  UnderlyingStreamCommoditySettlDateRollUnit?: string// [28] 41986 (String)
  UnderlyingStreamCommoditySettlDayType?: number// [29] 41987 (Int)
  UnderlyingStreamCommoditySettlPeriodGrp?: IUnderlyingStreamCommoditySettlPeriodGrp// [30] NoUnderlyingStreamCommoditySettlPeriods.42002, UnderlyingStreamCommoditySettlCountry.42003 .. UnderlyingStreamCommoditySettlPeriodXIDRef.42015
  UnderlyingStreamCommodityXID?: string// [31] 41988 (String)
  UnderlyingStreamCommodityXIDRef?: string// [32] 41989 (String)
}
