import { IStreamCommodityAltIDGrp } from './stream_commodity_alt_id_grp'
import { IStreamAssetAttributeGrp } from './stream_asset_attribute_grp'
import { IStreamCommodityDataSourceGrp } from './stream_commodity_data_source_grp'
import { IStreamCommoditySettlBusinessCenterGrp } from './stream_commodity_settl_business_center_grp'
import { IStreamCommoditySettlPeriodGrp } from './stream_commodity_settl_period_grp'

export interface IStreamCommodity {
  UnderlyingStreamCommodityBase?: string// 41964
  UnderlyingStreamCommodityType?: string// 41965
  BatchID?: string// 50000
  LegContractualMatrixSource?: string// 42204
  PaymentDesc?: string// 43087
  EncodedUnderlyingStreamCommodityDescLen?: string// 41969
  EncodedUnderlyingStreamCommodityDesc?: Buffer// 41970
  UnderlyingStreamCommodityDeliveryPricingRegion?: string// 42589
  UnderlyingStreamCommodityUnitOfMeasure?: string// 41971
  UnderlyingReturnRatePriceCurrency?: string// 43067
  UnderlyingStreamCommodityExchange?: string// 41973
  UnderlyingReturnRateInformationSource?: number// 43061
  UnderlyingReturnRateReferencePage?: string// 43062
  UnderlyingReturnRateReferencePageHeading?: string// 43063
  UnderlyingStreamDataProvider?: string// 41977
  UnderlyingStreamCommodityPricingType?: string// 41978
  UnderlyingProtectionTermEventPeriod?: number// 42081
  UnderlyingProtectionTermEventUnit?: string// 42082
  UnderlyingSettlMethodElectionDateUnadjusted?: Date// 43076
  UnderlyingSettlMethodElectionDateBusinessDayConvention?: number// 43077
  UnderlyingSettlMethodElectionDateAdjusted?: Date// 43082
  UnderlyingStreamCommoditySettlMonth?: number// 41984
  UnderlyingStreamCommoditySettlDateRollPeriod?: number// 41985
  UnderlyingStreamCommoditySettlDateRollUnit?: string// 41986
  UnderlyingProtectionTermEventDayType?: number// 42083
  UnderlyingDividendPeriodXID?: string// 42881
  UnderlyingStreamCommoditySettlPeriodXIDRef?: string// 42015
  StreamCommodityAltIDGrp?: IStreamCommodityAltIDGrp[]
  StreamAssetAttributeGrp?: IStreamAssetAttributeGrp[]
  StreamCommodityDataSourceGrp?: IStreamCommodityDataSourceGrp[]
  StreamCommoditySettlBusinessCenterGrp?: IStreamCommoditySettlBusinessCenterGrp[]
  StreamCommoditySettlPeriodGrp?: IStreamCommoditySettlPeriodGrp[]
}
