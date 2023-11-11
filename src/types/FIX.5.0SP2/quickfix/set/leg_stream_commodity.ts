import { ILegStreamCommodityAltIDGrp } from './leg_stream_commodity_alt_id_grp'
import { ILegStreamAssetAttributeGrp } from './leg_stream_asset_attribute_grp'
import { ILegStreamCommodityDataSourceGrp } from './leg_stream_commodity_data_source_grp'
import { ILegStreamCommoditySettlBusinessCenterGrp } from './leg_stream_commodity_settl_business_center_grp'
import { ILegStreamCommoditySettlPeriodGrp } from './leg_stream_commodity_settl_period_grp'

export interface ILegStreamCommodity {
  LegStreamCommodityBase?: string// [1] 41648 (String)
  LegStreamCommodityType?: string// [2] 41649 (String)
  LegStreamCommoditySecurityID?: string// [3] 41650 (String)
  LegStreamCommoditySecurityIDSource?: string// [4] 41651 (String)
  LegStreamCommodityAltIDGrp?: ILegStreamCommodityAltIDGrp// [5] NoLegStreamCommodityAltIDs.41674, LegStreamCommodityAltID.41675, LegStreamCommodityAltIDSource.41676
  LegStreamCommodityDesc?: string// [6] 41652 (String)
  EncodedLegStreamCommodityDescLen?: number// [7] 41653 (Length)
  EncodedLegStreamCommodityDesc?: Buffer// [8] 41654 (RawData)
  LegStreamCommodityDeliveryPricingRegion?: string// [9] 42588 (String)
  LegStreamAssetAttributeGrp?: ILegStreamAssetAttributeGrp// [10] NoLegStreamAssetAttributes.41452, LegStreamAssetAttributeType.41453 .. LegStreamAssetAttributeLimit.41455
  LegStreamCommodityUnitOfMeasure?: string// [11] 41655 (String)
  LegStreamCommodityCurrency?: string// [12] 41656 (String)
  LegStreamCommodityExchange?: string// [13] 41657 (String)
  LegStreamCommodityRateSource?: number// [14] 41658 (Int)
  LegStreamCommodityRateReferencePage?: string// [15] 41659 (String)
  LegStreamCommodityRateReferencePageHeading?: string// [16] 41660 (String)
  LegStreamDataProvider?: string// [17] 41661 (String)
  LegStreamCommodityDataSourceGrp?: ILegStreamCommodityDataSourceGrp// [18] NoLegStreamCommodityDataSources.41677, LegStreamCommodityDataSourceID.41678, LegStreamCommodityDataSourceIDType.41679
  LegStreamCommodityPricingType?: string// [19] 41662 (String)
  LegStreamCommodityNearbySettlDayPeriod?: number// [20] 41663 (Int)
  LegStreamCommodityNearbySettlDayUnit?: string// [21] 41664 (String)
  LegStreamCommoditySettlDateUnadjusted?: Date// [22] 41665 (LocalDate)
  LegStreamCommoditySettlDateBusinessDayConvention?: number// [23] 41666 (Int)
  LegStreamCommoditySettlBusinessCenterGrp?: ILegStreamCommoditySettlBusinessCenterGrp// [24] NoLegStreamCommoditySettlBusinessCenters.41646, LegStreamCommoditySettlBusinessCenter.41647
  LegStreamCommoditySettlDateAdjusted?: Date// [25] 41667 (LocalDate)
  LegStreamCommoditySettlMonth?: number// [26] 41668 (Int)
  LegStreamCommoditySettlDateRollPeriod?: number// [27] 41669 (Int)
  LegStreamCommoditySettlDateRollUnit?: string// [28] 41670 (String)
  LegStreamCommoditySettlDayType?: number// [29] 41671 (Int)
  LegStreamCommoditySettlPeriodGrp?: ILegStreamCommoditySettlPeriodGrp// [30] NoLegStreamCommoditySettlPeriods.41686, LegStreamCommoditySettlCountry.41687 .. LegStreamCommoditySettlPeriodXIDRef.41699
  LegStreamCommodityXID?: string// [31] 41672 (String)
  LegStreamCommodityXIDRef?: string// [32] 41673 (String)
}
