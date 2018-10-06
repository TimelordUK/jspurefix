import { ILegDeliveryStreamCommoditySourceGrp } from './leg_delivery_stream_commodity_source_grp'
import { ILegDeliveryStreamCycleGrp } from './leg_delivery_stream_cycle_grp'

export interface ILegDeliveryStream {
  LegDeliveryStreamType?: number// 41429
  LegDeliveryStreamPipeline?: string// 41430
  LegDeliveryStreamEntryPoint?: string// 41431
  LegDeliveryStreamWithdrawalPoint?: string// 41432
  LegDeliveryStreamDeliveryPoint?: string// 41433
  LegDeliveryStreamDeliveryPointSource?: number// 42194
  LegDeliveryStreamDeliveryPointDesc?: string// 42195
  LegDeliveryStreamDeliveryRestriction?: number// 41434
  LegDeliveryStreamDeliveryContingency?: string// 41435
  LegDeliveryStreamDeliveryContingentPartySide?: number// 41436
  LegDeliveryStreamDeliverAtSourceIndicator?: boolean// 41437
  LegDeliveryStreamRiskApportionment?: string// 41438
  LegDeliveryStreamRiskApportionmentSource?: string// 41219
  LegDeliveryStreamTitleTransferLocation?: string// 41439
  LegDeliveryStreamTitleTransferCondition?: number// 41440
  LegDeliveryStreamImporterOfRecord?: string// 41441
  LegDeliveryStreamNegativeTolerance?: number// 41442
  LegDeliveryStreamPositiveTolerance?: number// 41443
  LegDeliveryStreamToleranceUnitOfMeasure?: string// 41444
  LegDeliveryStreamToleranceType?: number// 41445
  LegDeliveryStreamToleranceOptionSide?: number// 41446
  LegDeliveryStreamTotalPositiveTolerance?: number// 41447
  LegDeliveryStreamTotalNegativeTolerance?: number// 41448
  LegDeliveryStreamNotionalConversionFactor?: number// 41449
  LegDeliveryStreamTransportEquipment?: string// 41450
  LegDeliveryStreamElectingPartySide?: number// 41451
  LegDeliveryStreamCommoditySourceGrp?: ILegDeliveryStreamCommoditySourceGrp[]
  LegDeliveryStreamCycleGrp?: ILegDeliveryStreamCycleGrp[]
}
