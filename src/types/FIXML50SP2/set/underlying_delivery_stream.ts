import { IUnderlyingDeliveryStreamCommoditySourceGrp } from './underlying_delivery_stream_commodity_source_grp'
import { IUnderlyingDeliveryStreamCycleGrp } from './underlying_delivery_stream_cycle_grp'

export interface IUnderlyingDeliveryStream {
  UnderlyingDeliveryStreamType?: number// 41777
  UnderlyingDeliveryStreamPipeline?: string// 41778
  UnderlyingDeliveryStreamEntryPoint?: string// 41779
  UnderlyingDeliveryStreamWithdrawalPoint?: string// 41780
  UnderlyingDeliveryStreamDeliveryPoint?: string// 41781
  UnderlyingDeliveryStreamDeliveryPointSource?: number// 42196
  UnderlyingDeliveryStreamDeliveryPointDesc?: string// 42197
  UnderlyingDeliveryStreamDeliveryRestriction?: number// 41782
  UnderlyingDeliveryStreamDeliveryContingency?: string// 41783
  UnderlyingDeliveryStreamDeliveryContingentPartySide?: number// 41784
  UnderlyingDeliveryStreamDeliverAtSourceIndicator?: boolean// 41785
  UnderlyingDeliveryStreamRiskApportionment?: string// 41786
  UnderlyingDeliveryStreamRiskApportionmentSource?: string// 41587
  UnderlyingDeliveryStreamTitleTransferLocation?: string// 41787
  UnderlyingDeliveryStreamTitleTransferCondition?: number// 41788
  UnderlyingDeliveryStreamImporterOfRecord?: string// 41789
  UnderlyingDeliveryStreamNegativeTolerance?: number// 41790
  UnderlyingDeliveryStreamPositiveTolerance?: number// 41791
  UnderlyingDeliveryStreamToleranceUnitOfMeasure?: string// 41792
  UnderlyingDeliveryStreamToleranceType?: number// 41793
  UnderlyingDeliveryStreamToleranceOptionSide?: number// 41794
  UnderlyingDeliveryStreamTotalPositiveTolerance?: number// 41795
  UnderlyingDeliveryStreamTotalNegativeTolerance?: number// 41796
  UnderlyingDeliveryStreamNotionalConversionFactor?: number// 41797
  UnderlyingDeliveryStreamTransportEquipment?: string// 41798
  UnderlyingDeliveryStreamElectingPartySide?: number// 41799
  UnderlyingDeliveryStreamCommoditySourceGrp?: IUnderlyingDeliveryStreamCommoditySourceGrp[]
  UnderlyingDeliveryStreamCycleGrp?: IUnderlyingDeliveryStreamCycleGrp[]
}
