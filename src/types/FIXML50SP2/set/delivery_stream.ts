import { IDeliveryStreamCommoditySourceGrp } from './delivery_stream_commodity_source_grp'
import { IDeliveryStreamCycleGrp } from './delivery_stream_cycle_grp'

export interface IDeliveryStream {
  UnderlyingReturnRateValuationDateType?: number// 43073
  UnderlyingDeliveryStreamPipeline?: string// 41778
  UnderlyingDeliveryStreamEntryPoint?: string// 41779
  UnderlyingDeliveryStreamWithdrawalPoint?: string// 41780
  UnderlyingDeliveryStreamDeliveryPoint?: string// 41781
  UnderlyingDeliveryStreamDeliveryPointSource?: number// 42196
  UnderlyingDeliveryStreamDeliveryPointDesc?: string// 42197
  UnderlyingDeliveryStreamDeliveryRestriction?: number// 41782
  UnderlyingDeliveryStreamDeliveryContingency?: string// 41783
  UnderlyingDeliveryStreamDeliveryContingentPartySide?: number// 41784
  UnderlyingDeliveryStreamDeliverAtSourceIndicator?: string// 41785
  UnderlyingDeliveryStreamRiskApportionment?: string// 41786
  UnderlyingDeliveryStreamRiskApportionmentSource?: string// 41587
  UnderlyingDeliveryStreamTitleTransferLocation?: string// 41787
  LegDeliveryStreamTitleTransferCondition?: number// 41440
  UnderlyingDeliveryStreamImporterOfRecord?: string// 41789
  UnderlyingDeliveryStreamNegativeTolerance?: string// 41790
  UnderlyingDeliveryStreamPositiveTolerance?: string// 41791
  UnderlyingDeliveryStreamToleranceUnitOfMeasure?: string// 41792
  UnderlyingDeliveryStreamToleranceType?: number// 41793
  UnderlyingDeliveryStreamToleranceOptionSide?: number// 41794
  UnderlyingDeliveryStreamTotalPositiveTolerance?: number// 41795
  UnderlyingDeliveryStreamTotalNegativeTolerance?: number// 41796
  UnderlyingDeliveryStreamNotionalConversionFactor?: string// 41797
  UnderlyingDeliveryStreamTransportEquipment?: string// 41798
  UnderlyingDeliveryStreamElectingPartySide?: number// 41799
  DeliveryStreamCommoditySourceGrp?: IDeliveryStreamCommoditySourceGrp[]
  DeliveryStreamCycleGrp?: IDeliveryStreamCycleGrp[]
}
