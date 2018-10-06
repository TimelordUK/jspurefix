import { IStreamCommodityAltIDGrp } from './stream_commodity_alt_id_grp'
import { IStreamAssetAttributeGrp } from './stream_asset_attribute_grp'
import { IStreamCommodityDataSourceGrp } from './stream_commodity_data_source_grp'
import { IStreamCommoditySettlBusinessCenterGrp } from './stream_commodity_settl_business_center_grp'
import { IStreamCommoditySettlPeriodGrp } from './stream_commodity_settl_period_grp'

export interface IStreamCommodity {
  StreamCommodityBase?: string// 41251
  StreamCommodityType?: string// 41252
  StreamCommoditySecurityID?: string// 41253
  StreamCommoditySecurityIDSource?: string// 41254
  StreamCommodityDesc?: string// 41255
  EncodedStreamCommodityDescLen?: number// 41256
  EncodedStreamCommodityDesc?: Buffer// 41257
  StreamCommodityDeliveryPricingRegion?: string// 42587
  StreamCommodityUnitOfMeasure?: string// 41258
  StreamCommodityCurrency?: string// 41259
  StreamCommodityExchange?: string// 41260
  StreamCommodityRateSource?: number// 41261
  StreamCommodityRateReferencePage?: string// 41262
  StreamCommodityRateReferencePageHeading?: string// 41263
  StreamDataProvider?: string// 41264
  StreamCommodityPricingType?: string// 41265
  StreamCommodityNearbySettlDayPeriod?: number// 41266
  StreamCommodityNearbySettlDayUnit?: string// 41267
  StreamCommoditySettlDateUnadjusted?: Date// 41268
  StreamCommoditySettlDateBusinessDayConvention?: number// 41269
  StreamCommoditySettlDateAdjusted?: Date// 41270
  StreamCommoditySettlMonth?: number// 41271
  StreamCommoditySettlDateRollPeriod?: number// 41272
  StreamCommoditySettlDateRollUnit?: string// 41273
  StreamCommoditySettlDayType?: number// 41274
  StreamCommodityXID?: string// 41275
  StreamCommodityXIDRef?: string// 41276
  StreamCommodityAltIDGrp?: IStreamCommodityAltIDGrp[]
  StreamAssetAttributeGrp?: IStreamAssetAttributeGrp[]
  StreamCommodityDataSourceGrp?: IStreamCommodityDataSourceGrp[]
  StreamCommoditySettlBusinessCenterGrp?: IStreamCommoditySettlBusinessCenterGrp[]
  StreamCommoditySettlPeriodGrp?: IStreamCommoditySettlPeriodGrp[]
}
