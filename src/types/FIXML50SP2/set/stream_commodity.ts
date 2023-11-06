import { IStreamCommodityAltIDGrp } from './stream_commodity_alt_id_grp'
import { IStreamAssetAttributeGrp } from './stream_asset_attribute_grp'
import { IStreamCommodityDataSourceGrp } from './stream_commodity_data_source_grp'
import { IStreamCommoditySettlBusinessCenterGrp } from './stream_commodity_settl_business_center_grp'
import { IStreamCommoditySettlPeriodGrp } from './stream_commodity_settl_period_grp'

export interface IStreamCommodity {
  StreamCommodityBase?: string// [1] 41251 (String)
  StreamCommodityType?: string// [1] 41252 (String)
  StreamCommoditySecurityID?: string// [1] 41253 (String)
  StreamCommoditySecurityIDSource?: string// [1] 41254 (String)
  StreamCommodityDesc?: string// [1] 41255 (String)
  EncodedStreamCommodityDescLen?: number// [1] 41256 (Length)
  EncodedStreamCommodityDesc?: Buffer// [1] 41257 (RawData)
  StreamCommodityDeliveryPricingRegion?: string// [1] 42587 (String)
  StreamCommodityUnitOfMeasure?: string// [1] 41258 (String)
  StreamCommodityCurrency?: string// [1] 41259 (String)
  StreamCommodityExchange?: string// [1] 41260 (String)
  StreamCommodityRateSource?: number// [1] 41261 (Int)
  StreamCommodityRateReferencePage?: string// [1] 41262 (String)
  StreamCommodityRateReferencePageHeading?: string// [1] 41263 (String)
  StreamDataProvider?: string// [1] 41264 (String)
  StreamCommodityPricingType?: string// [1] 41265 (String)
  StreamCommodityNearbySettlDayPeriod?: number// [1] 41266 (Int)
  StreamCommodityNearbySettlDayUnit?: string// [1] 41267 (String)
  StreamCommoditySettlDateUnadjusted?: Date// [1] 41268 (LocalDate)
  StreamCommoditySettlDateBusinessDayConvention?: number// [1] 41269 (Int)
  StreamCommoditySettlDateAdjusted?: Date// [1] 41270 (LocalDate)
  StreamCommoditySettlMonth?: number// [1] 41271 (Int)
  StreamCommoditySettlDateRollPeriod?: number// [1] 41272 (Int)
  StreamCommoditySettlDateRollUnit?: string// [1] 41273 (String)
  StreamCommoditySettlDayType?: number// [1] 41274 (Int)
  StreamCommodityXID?: string// [1] 41275 (String)
  StreamCommodityXIDRef?: string// [1] 41276 (String)
  StreamCommodityAltIDGrp?: IStreamCommodityAltIDGrp[]// [1] AltID.41278, AltIDSrc.41279
  StreamAssetAttributeGrp?: IStreamAssetAttributeGrp[]// [2] Typ.41238, Val.41239, Lmt.41240
  StreamCommodityDataSourceGrp?: IStreamCommodityDataSourceGrp[]// [3] ID.41281, Typ.41282
  StreamCommoditySettlBusinessCenterGrp?: IStreamCommoditySettlBusinessCenterGrp[]// [4] Ctr.41250
  StreamCommoditySettlPeriodGrp?: IStreamCommoditySettlPeriodGrp[]// [5] Ctry.41290, TZ.41291 .. XIDRef.41302
}
