import { IDeliveryStreamCommoditySourceGrp } from './delivery_stream_commodity_source_grp'
import { IDeliveryStreamCycleGrp } from './delivery_stream_cycle_grp'

export interface IDeliveryStream {
  DeliveryStreamType?: number// [1] 41058 (Int)
  DeliveryStreamPipeline?: string// [1] 41059 (String)
  DeliveryStreamEntryPoint?: string// [1] 41060 (String)
  DeliveryStreamWithdrawalPoint?: string// [1] 41061 (String)
  DeliveryStreamDeliveryPoint?: string// [1] 41062 (String)
  DeliveryStreamDeliveryPointSource?: number// [1] 42192 (Int)
  DeliveryStreamDeliveryPointDesc?: string// [1] 42193 (String)
  DeliveryStreamDeliveryRestriction?: number// [1] 41063 (Int)
  DeliveryStreamDeliveryContingency?: string// [1] 41064 (String)
  DeliveryStreamDeliveryContingentPartySide?: number// [1] 41065 (Int)
  DeliveryStreamDeliverAtSourceIndicator?: boolean// [1] 41066 (Boolean)
  DeliveryStreamRiskApportionment?: string// [1] 41067 (String)
  DeliveryStreamRiskApportionmentSource?: string// [1] 41218 (String)
  DeliveryStreamTitleTransferLocation?: string// [1] 41068 (String)
  DeliveryStreamTitleTransferCondition?: number// [1] 41069 (Int)
  DeliveryStreamImporterOfRecord?: string// [1] 41070 (String)
  DeliveryStreamNegativeTolerance?: number// [1] 41071 (Float)
  DeliveryStreamPositiveTolerance?: number// [1] 41072 (Float)
  DeliveryStreamToleranceUnitOfMeasure?: string// [1] 41073 (String)
  DeliveryStreamToleranceType?: number// [1] 41074 (Int)
  DeliveryStreamToleranceOptionSide?: number// [1] 41075 (Int)
  DeliveryStreamTotalPositiveTolerance?: number// [1] 41076 (Float)
  DeliveryStreamTotalNegativeTolerance?: number// [1] 41077 (Float)
  DeliveryStreamNotionalConversionFactor?: number// [1] 41078 (Float)
  DeliveryStreamTransportEquipment?: string// [1] 41079 (String)
  DeliveryStreamElectingPartySide?: number// [1] 41080 (Int)
  DeliveryStreamCommoditySourceGrp?: IDeliveryStreamCommoditySourceGrp[]// [1] Src.41086
  DeliveryStreamCycleGrp?: IDeliveryStreamCycleGrp[]// [2] Desc.41082, EncDescLen.41083, EncDesc.41084
}
