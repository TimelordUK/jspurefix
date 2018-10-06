import { IUnderlyingStreamCommodityAltIDGrp } from './underlying_stream_commodity_alt_id_grp'
import { IUnderlyingStreamAssetAttributeGrp } from './underlying_stream_asset_attribute_grp'
import { IUnderlyingStreamCommodityDataSourceGrp } from './underlying_stream_commodity_data_source_grp'
import { IUnderlyingStreamCommoditySettlBusinessCenterGrp } from './underlying_stream_commodity_settl_business_center_grp'
import { IUnderlyingStreamCommoditySettlPeriodGrp } from './underlying_stream_commodity_settl_period_grp'

export interface IUnderlyingStreamCommodity {
  UnderlyingStreamCommodityBase?: string// 41964
  UnderlyingStreamCommodityType?: string// 41965
  UnderlyingStreamCommoditySecurityID?: string// 41966
  UnderlyingStreamCommoditySecurityIDSource?: string// 41967
  UnderlyingStreamCommodityDesc?: string// 41968
  EncodedUnderlyingStreamCommodityDescLen?: number// 41969
  EncodedUnderlyingStreamCommodityDesc?: Buffer// 41970
  UnderlyingStreamCommodityDeliveryPricingRegion?: string// 42589
  UnderlyingStreamCommodityUnitOfMeasure?: string// 41971
  UnderlyingStreamCommodityCurrency?: string// 41972
  UnderlyingStreamCommodityExchange?: string// 41973
  UnderlyingStreamCommodityRateSource?: number// 41974
  UnderlyingStreamCommodityRateReferencePage?: string// 41975
  UnderlyingStreamCommodityRateReferencePageHeading?: string// 41976
  UnderlyingStreamDataProvider?: string// 41977
  UnderlyingStreamCommodityPricingType?: string// 41978
  UnderlyingStreamCommodityNearbySettlDayPeriod?: number// 41979
  UnderlyingStreamCommodityNearbySettlDayUnit?: string// 41980
  UnderlyingStreamCommoditySettlDateUnadjusted?: Date// 41981
  UnderlyingStreamCommoditySettlDateBusinessDayConvention?: number// 41982
  UnderlyingStreamCommoditySettlDateAdjusted?: Date// 41983
  UnderlyingStreamCommoditySettlMonth?: number// 41984
  UnderlyingStreamCommoditySettlDateRollPeriod?: number// 41985
  UnderlyingStreamCommoditySettlDateRollUnit?: string// 41986
  UnderlyingStreamCommoditySettlDayType?: number// 41987
  UnderlyingStreamCommodityXID?: string// 41988
  UnderlyingStreamCommodityXIDRef?: string// 41989
  UnderlyingStreamCommodityAltIDGrp?: IUnderlyingStreamCommodityAltIDGrp[]
  UnderlyingStreamAssetAttributeGrp?: IUnderlyingStreamAssetAttributeGrp[]
  UnderlyingStreamCommodityDataSourceGrp?: IUnderlyingStreamCommodityDataSourceGrp[]
  UnderlyingStreamCommoditySettlBusinessCenterGrp?: IUnderlyingStreamCommoditySettlBusinessCenterGrp[]
  UnderlyingStreamCommoditySettlPeriodGrp?: IUnderlyingStreamCommoditySettlPeriodGrp[]
}
