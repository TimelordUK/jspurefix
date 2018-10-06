import { IDeliveryStreamCommoditySourceGrp } from './delivery_stream_commodity_source_grp'
import { IDeliveryStreamCycleGrp } from './delivery_stream_cycle_grp'

export interface IDeliveryStream {
  DeliveryStreamType?: number// 41058
  DeliveryStreamPipeline?: string// 41059
  DeliveryStreamEntryPoint?: string// 41060
  DeliveryStreamWithdrawalPoint?: string// 41061
  DeliveryStreamDeliveryPoint?: string// 41062
  DeliveryStreamDeliveryPointSource?: number// 42192
  DeliveryStreamDeliveryPointDesc?: string// 42193
  DeliveryStreamDeliveryRestriction?: number// 41063
  DeliveryStreamDeliveryContingency?: string// 41064
  DeliveryStreamDeliveryContingentPartySide?: number// 41065
  DeliveryStreamDeliverAtSourceIndicator?: boolean// 41066
  DeliveryStreamRiskApportionment?: string// 41067
  DeliveryStreamRiskApportionmentSource?: string// 41218
  DeliveryStreamTitleTransferLocation?: string// 41068
  DeliveryStreamTitleTransferCondition?: number// 41069
  DeliveryStreamImporterOfRecord?: string// 41070
  DeliveryStreamNegativeTolerance?: number// 41071
  DeliveryStreamPositiveTolerance?: number// 41072
  DeliveryStreamToleranceUnitOfMeasure?: string// 41073
  DeliveryStreamToleranceType?: number// 41074
  DeliveryStreamToleranceOptionSide?: number// 41075
  DeliveryStreamTotalPositiveTolerance?: number// 41076
  DeliveryStreamTotalNegativeTolerance?: number// 41077
  DeliveryStreamNotionalConversionFactor?: number// 41078
  DeliveryStreamTransportEquipment?: string// 41079
  DeliveryStreamElectingPartySide?: number// 41080
  DeliveryStreamCommoditySourceGrp?: IDeliveryStreamCommoditySourceGrp[]
  DeliveryStreamCycleGrp?: IDeliveryStreamCycleGrp[]
}
