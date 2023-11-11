import { IStreamCommodityAltIDGrp } from './stream_commodity_alt_id_grp'
import { IStreamAssetAttributeGrp } from './stream_asset_attribute_grp'
import { IStreamCommodityDataSourceGrp } from './stream_commodity_data_source_grp'
import { IStreamCommoditySettlBusinessCenterGrp } from './stream_commodity_settl_business_center_grp'
import { IStreamCommoditySettlPeriodGrp } from './stream_commodity_settl_period_grp'

export interface IStreamCommodity {
  StreamCommodityBase?: string// [1] 41251 (String)
  StreamCommodityType?: string// [2] 41252 (String)
  StreamCommoditySecurityID?: string// [3] 41253 (String)
  StreamCommoditySecurityIDSource?: string// [4] 41254 (String)
  StreamCommodityAltIDGrp?: IStreamCommodityAltIDGrp// [5] NoStreamCommodityAltIDs.41277, StreamCommodityAltID.41278, StreamCommodityAltIDSource.41279
  StreamCommodityDesc?: string// [6] 41255 (String)
  EncodedStreamCommodityDescLen?: number// [7] 41256 (Length)
  EncodedStreamCommodityDesc?: Buffer// [8] 41257 (RawData)
  StreamCommodityDeliveryPricingRegion?: string// [9] 42587 (String)
  StreamAssetAttributeGrp?: IStreamAssetAttributeGrp// [10] NoStreamAssetAttributes.41237, StreamAssetAttributeType.41238 .. StreamAssetAttributeLimit.41240
  StreamCommodityUnitOfMeasure?: string// [11] 41258 (String)
  StreamCommodityCurrency?: string// [12] 41259 (String)
  StreamCommodityExchange?: string// [13] 41260 (String)
  StreamCommodityRateSource?: number// [14] 41261 (Int)
  StreamCommodityRateReferencePage?: string// [15] 41262 (String)
  StreamCommodityRateReferencePageHeading?: string// [16] 41263 (String)
  StreamDataProvider?: string// [17] 41264 (String)
  StreamCommodityDataSourceGrp?: IStreamCommodityDataSourceGrp// [18] NoStreamCommodityDataSources.41280, StreamCommodityDataSourceID.41281, StreamCommodityDataSourceIDType.41282
  StreamCommodityPricingType?: string// [19] 41265 (String)
  StreamCommodityNearbySettlDayPeriod?: number// [20] 41266 (Int)
  StreamCommodityNearbySettlDayUnit?: string// [21] 41267 (String)
  StreamCommoditySettlDateUnadjusted?: Date// [22] 41268 (LocalDate)
  StreamCommoditySettlDateBusinessDayConvention?: number// [23] 41269 (Int)
  StreamCommoditySettlBusinessCenterGrp?: IStreamCommoditySettlBusinessCenterGrp// [24] NoStreamCommoditySettlBusinessCenters.41249, StreamCommoditySettlBusinessCenter.41250
  StreamCommoditySettlDateAdjusted?: Date// [25] 41270 (LocalDate)
  StreamCommoditySettlMonth?: number// [26] 41271 (Int)
  StreamCommoditySettlDateRollPeriod?: number// [27] 41272 (Int)
  StreamCommoditySettlDateRollUnit?: string// [28] 41273 (String)
  StreamCommoditySettlDayType?: number// [29] 41274 (Int)
  StreamCommoditySettlPeriodGrp?: IStreamCommoditySettlPeriodGrp// [30] NoStreamCommoditySettlPeriods.41289, StreamCommoditySettlCountry.41290 .. StreamCommoditySettlPeriodXIDRef.41302
  StreamCommodityXID?: string// [31] 41275 (String)
  StreamCommodityXIDRef?: string// [32] 41276 (String)
}
