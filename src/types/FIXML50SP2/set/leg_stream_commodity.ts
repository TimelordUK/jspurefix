import { ILegStreamCommodityAltIDGrp } from './leg_stream_commodity_alt_id_grp'
import { ILegStreamAssetAttributeGrp } from './leg_stream_asset_attribute_grp'
import { ILegStreamCommodityDataSourceGrp } from './leg_stream_commodity_data_source_grp'
import { ILegStreamCommoditySettlBusinessCenterGrp } from './leg_stream_commodity_settl_business_center_grp'
import { ILegStreamCommoditySettlPeriodGrp } from './leg_stream_commodity_settl_period_grp'

export interface ILegStreamCommodity {
  LegStreamCommodityBase?: string// 41648
  LegStreamCommodityType?: string// 41649
  LegStreamCommoditySecurityID?: string// 41650
  LegStreamCommoditySecurityIDSource?: string// 41651
  LegStreamCommodityDesc?: string// 41652
  EncodedLegStreamCommodityDescLen?: number// 41653
  EncodedLegStreamCommodityDesc?: Buffer// 41654
  LegStreamCommodityDeliveryPricingRegion?: string// 42588
  LegStreamCommodityUnitOfMeasure?: string// 41655
  LegStreamCommodityCurrency?: string// 41656
  LegStreamCommodityExchange?: string// 41657
  LegStreamCommodityRateSource?: number// 41658
  LegStreamCommodityRateReferencePage?: string// 41659
  LegStreamCommodityRateReferencePageHeading?: string// 41660
  LegStreamDataProvider?: string// 41661
  LegStreamCommodityPricingType?: string// 41662
  LegStreamCommodityNearbySettlDayPeriod?: number// 41663
  LegStreamCommodityNearbySettlDayUnit?: string// 41664
  LegStreamCommoditySettlDateUnadjusted?: Date// 41665
  LegStreamCommoditySettlDateBusinessDayConvention?: number// 41666
  LegStreamCommoditySettlDateAdjusted?: Date// 41667
  LegStreamCommoditySettlMonth?: number// 41668
  LegStreamCommoditySettlDateRollPeriod?: number// 41669
  LegStreamCommoditySettlDateRollUnit?: string// 41670
  LegStreamCommoditySettlDayType?: number// 41671
  LegStreamCommodityXID?: string// 41672
  LegStreamCommodityXIDRef?: string// 41673
  LegStreamCommodityAltIDGrp?: ILegStreamCommodityAltIDGrp[]
  LegStreamAssetAttributeGrp?: ILegStreamAssetAttributeGrp[]
  LegStreamCommodityDataSourceGrp?: ILegStreamCommodityDataSourceGrp[]
  LegStreamCommoditySettlBusinessCenterGrp?: ILegStreamCommoditySettlBusinessCenterGrp[]
  LegStreamCommoditySettlPeriodGrp?: ILegStreamCommoditySettlPeriodGrp[]
}
