import { ILegDeliveryStreamCommoditySourceGrp } from './leg_delivery_stream_commodity_source_grp'
import { ILegDeliveryStreamCycleGrp } from './leg_delivery_stream_cycle_grp'

export interface ILegDeliveryStream {
  LegDeliveryStreamType?: number// [1] 41429 (Int)
  LegDeliveryStreamPipeline?: string// [1] 41430 (String)
  LegDeliveryStreamEntryPoint?: string// [1] 41431 (String)
  LegDeliveryStreamWithdrawalPoint?: string// [1] 41432 (String)
  LegDeliveryStreamDeliveryPoint?: string// [1] 41433 (String)
  LegDeliveryStreamDeliveryPointSource?: number// [1] 42194 (Int)
  LegDeliveryStreamDeliveryPointDesc?: string// [1] 42195 (String)
  LegDeliveryStreamDeliveryRestriction?: number// [1] 41434 (Int)
  LegDeliveryStreamDeliveryContingency?: string// [1] 41435 (String)
  LegDeliveryStreamDeliveryContingentPartySide?: number// [1] 41436 (Int)
  LegDeliveryStreamDeliverAtSourceIndicator?: boolean// [1] 41437 (Boolean)
  LegDeliveryStreamRiskApportionment?: string// [1] 41438 (String)
  LegDeliveryStreamRiskApportionmentSource?: string// [1] 41219 (String)
  LegDeliveryStreamTitleTransferLocation?: string// [1] 41439 (String)
  LegDeliveryStreamTitleTransferCondition?: number// [1] 41440 (Int)
  LegDeliveryStreamImporterOfRecord?: string// [1] 41441 (String)
  LegDeliveryStreamNegativeTolerance?: number// [1] 41442 (Float)
  LegDeliveryStreamPositiveTolerance?: number// [1] 41443 (Float)
  LegDeliveryStreamToleranceUnitOfMeasure?: string// [1] 41444 (String)
  LegDeliveryStreamToleranceType?: number// [1] 41445 (Int)
  LegDeliveryStreamToleranceOptionSide?: number// [1] 41446 (Int)
  LegDeliveryStreamTotalPositiveTolerance?: number// [1] 41447 (Float)
  LegDeliveryStreamTotalNegativeTolerance?: number// [1] 41448 (Float)
  LegDeliveryStreamNotionalConversionFactor?: number// [1] 41449 (Float)
  LegDeliveryStreamTransportEquipment?: string// [1] 41450 (String)
  LegDeliveryStreamElectingPartySide?: number// [1] 41451 (Int)
  LegDeliveryStreamCommoditySourceGrp?: ILegDeliveryStreamCommoditySourceGrp[]// [1] Src.41461
  LegDeliveryStreamCycleGrp?: ILegDeliveryStreamCycleGrp[]// [2] Desc.41457, EncDescLen.41458, EncDesc.41459
}
