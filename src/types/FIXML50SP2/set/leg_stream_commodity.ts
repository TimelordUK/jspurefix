import { ILegStreamCommodityAltIDGrp } from './leg_stream_commodity_alt_id_grp'
import { ILegStreamAssetAttributeGrp } from './leg_stream_asset_attribute_grp'
import { ILegStreamCommodityDataSourceGrp } from './leg_stream_commodity_data_source_grp'
import { ILegStreamCommoditySettlBusinessCenterGrp } from './leg_stream_commodity_settl_business_center_grp'
import { ILegStreamCommoditySettlPeriodGrp } from './leg_stream_commodity_settl_period_grp'

export interface ILegStreamCommodity {
  LegStreamCommodityBase?: string// [1] 41648 (String)
  LegStreamCommodityType?: string// [1] 41649 (String)
  LegStreamCommoditySecurityID?: string// [1] 41650 (String)
  LegStreamCommoditySecurityIDSource?: string// [1] 41651 (String)
  LegStreamCommodityDesc?: string// [1] 41652 (String)
  EncodedLegStreamCommodityDescLen?: number// [1] 41653 (Length)
  EncodedLegStreamCommodityDesc?: Buffer// [1] 41654 (RawData)
  LegStreamCommodityDeliveryPricingRegion?: string// [1] 42588 (String)
  LegStreamCommodityUnitOfMeasure?: string// [1] 41655 (String)
  LegStreamCommodityCurrency?: string// [1] 41656 (String)
  LegStreamCommodityExchange?: string// [1] 41657 (String)
  LegStreamCommodityRateSource?: number// [1] 41658 (Int)
  LegStreamCommodityRateReferencePage?: string// [1] 41659 (String)
  LegStreamCommodityRateReferencePageHeading?: string// [1] 41660 (String)
  LegStreamDataProvider?: string// [1] 41661 (String)
  LegStreamCommodityPricingType?: string// [1] 41662 (String)
  LegStreamCommodityNearbySettlDayPeriod?: number// [1] 41663 (Int)
  LegStreamCommodityNearbySettlDayUnit?: string// [1] 41664 (String)
  LegStreamCommoditySettlDateUnadjusted?: Date// [1] 41665 (LocalDate)
  LegStreamCommoditySettlDateBusinessDayConvention?: number// [1] 41666 (Int)
  LegStreamCommoditySettlDateAdjusted?: Date// [1] 41667 (LocalDate)
  LegStreamCommoditySettlMonth?: number// [1] 41668 (Int)
  LegStreamCommoditySettlDateRollPeriod?: number// [1] 41669 (Int)
  LegStreamCommoditySettlDateRollUnit?: string// [1] 41670 (String)
  LegStreamCommoditySettlDayType?: number// [1] 41671 (Int)
  LegStreamCommodityXID?: string// [1] 41672 (String)
  LegStreamCommodityXIDRef?: string// [1] 41673 (String)
  LegStreamCommodityAltIDGrp?: ILegStreamCommodityAltIDGrp[]// [1] AltID.41675, AltIDSrc.41676
  LegStreamAssetAttributeGrp?: ILegStreamAssetAttributeGrp[]// [2] Typ.41453, Val.41454, Lmt.41455
  LegStreamCommodityDataSourceGrp?: ILegStreamCommodityDataSourceGrp[]// [3] ID.41678, Typ.41679
  LegStreamCommoditySettlBusinessCenterGrp?: ILegStreamCommoditySettlBusinessCenterGrp[]// [4] Ctr.41647
  LegStreamCommoditySettlPeriodGrp?: ILegStreamCommoditySettlPeriodGrp[]// [5] Ctry.41687, TZ.41688 .. XIDRef.41699
}
