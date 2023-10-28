import { IDeliveryStreamCommoditySourceGrp } from './delivery_stream_commodity_source_grp'
import { IDeliveryStreamCycleGrp } from './delivery_stream_cycle_grp'

export interface IDeliveryStream {
  DeliveryStreamType?: number// [1] 41058 (Int)
  DeliveryStreamCommoditySourceGrp?: IDeliveryStreamCommoditySourceGrp// [2] NoDeliveryStreamCommoditySources.41085, DeliveryStreamCommoditySource.41086
  DeliveryStreamPipeline?: string// [3] 41059 (String)
  DeliveryStreamEntryPoint?: string// [4] 41060 (String)
  DeliveryStreamWithdrawalPoint?: string// [5] 41061 (String)
  DeliveryStreamDeliveryPoint?: string// [6] 41062 (String)
  DeliveryStreamDeliveryPointSource?: number// [7] 42192 (Int)
  DeliveryStreamDeliveryPointDesc?: string// [8] 42193 (String)
  DeliveryStreamDeliveryRestriction?: number// [9] 41063 (Int)
  DeliveryStreamDeliveryContingency?: string// [10] 41064 (String)
  DeliveryStreamDeliveryContingentPartySide?: number// [11] 41065 (Int)
  DeliveryStreamDeliverAtSourceIndicator?: boolean// [12] 41066 (Boolean)
  DeliveryStreamRiskApportionment?: string// [13] 41067 (String)
  DeliveryStreamRiskApportionmentSource?: string// [14] 41218 (String)
  DeliveryStreamCycleGrp?: IDeliveryStreamCycleGrp// [15] NoDeliveryStreamCycles.41081, DeliveryStreamCycleDesc.41082 .. EncodedDeliveryStreamCycleDesc.41084
  DeliveryStreamTitleTransferLocation?: string// [16] 41068 (String)
  DeliveryStreamTitleTransferCondition?: number// [17] 41069 (Int)
  DeliveryStreamImporterOfRecord?: string// [18] 41070 (String)
  DeliveryStreamNegativeTolerance?: number// [19] 41071 (Float)
  DeliveryStreamPositiveTolerance?: number// [20] 41072 (Float)
  DeliveryStreamToleranceUnitOfMeasure?: string// [21] 41073 (String)
  DeliveryStreamToleranceType?: number// [22] 41074 (Int)
  DeliveryStreamToleranceOptionSide?: number// [23] 41075 (Int)
  DeliveryStreamTotalPositiveTolerance?: number// [24] 41076 (Float)
  DeliveryStreamTotalNegativeTolerance?: number// [25] 41077 (Float)
  DeliveryStreamNotionalConversionFactor?: number// [26] 41078 (Float)
  DeliveryStreamTransportEquipment?: string// [27] 41079 (String)
  DeliveryStreamElectingPartySide?: number// [28] 41080 (Int)
  DeliveryStreamRouteOrCharter?: string// [29] 43094 (String)
}
