import { ILegDeliveryStreamCommoditySourceGrp } from './leg_delivery_stream_commodity_source_grp'
import { ILegDeliveryStreamCycleGrp } from './leg_delivery_stream_cycle_grp'

export interface ILegDeliveryStream {
  LegDeliveryStreamType?: number// [1] 41429 (Int)
  LegDeliveryStreamCommoditySourceGrp?: ILegDeliveryStreamCommoditySourceGrp// [2] NoLegDeliveryStreamCommoditySources.41460, LegDeliveryStreamCommoditySource.41461
  LegDeliveryStreamPipeline?: string// [3] 41430 (String)
  LegDeliveryStreamEntryPoint?: string// [4] 41431 (String)
  LegDeliveryStreamWithdrawalPoint?: string// [5] 41432 (String)
  LegDeliveryStreamDeliveryPoint?: string// [6] 41433 (String)
  LegDeliveryStreamDeliveryPointSource?: number// [7] 42194 (Int)
  LegDeliveryStreamDeliveryPointDesc?: string// [8] 42195 (String)
  LegDeliveryStreamDeliveryRestriction?: number// [9] 41434 (Int)
  LegDeliveryStreamDeliveryContingency?: string// [10] 41435 (String)
  LegDeliveryStreamDeliveryContingentPartySide?: number// [11] 41436 (Int)
  LegDeliveryStreamDeliverAtSourceIndicator?: boolean// [12] 41437 (Boolean)
  LegDeliveryStreamRiskApportionment?: string// [13] 41438 (String)
  LegDeliveryStreamRiskApportionmentSource?: string// [14] 41219 (String)
  LegDeliveryStreamCycleGrp?: ILegDeliveryStreamCycleGrp// [15] NoLegDeliveryStreamCycles.41456, LegDeliveryStreamCycleDesc.41457 .. EncodedLegDeliveryStreamCycleDesc.41459
  LegDeliveryStreamTitleTransferLocation?: string// [16] 41439 (String)
  LegDeliveryStreamTitleTransferCondition?: number// [17] 41440 (Int)
  LegDeliveryStreamImporterOfRecord?: string// [18] 41441 (String)
  LegDeliveryStreamNegativeTolerance?: number// [19] 41442 (Float)
  LegDeliveryStreamPositiveTolerance?: number// [20] 41443 (Float)
  LegDeliveryStreamToleranceUnitOfMeasure?: string// [21] 41444 (String)
  LegDeliveryStreamToleranceType?: number// [22] 41445 (Int)
  LegDeliveryStreamToleranceOptionSide?: number// [23] 41446 (Int)
  LegDeliveryStreamTotalPositiveTolerance?: number// [24] 41447 (Float)
  LegDeliveryStreamTotalNegativeTolerance?: number// [25] 41448 (Float)
  LegDeliveryStreamNotionalConversionFactor?: number// [26] 41449 (Float)
  LegDeliveryStreamTransportEquipment?: string// [27] 41450 (String)
  LegDeliveryStreamElectingPartySide?: number// [28] 41451 (Int)
  LegDeliveryStreamRouteOrCharter?: string// [29] 43095 (String)
}
