import { IUnderlyingDeliveryStreamCommoditySourceGrp } from './underlying_delivery_stream_commodity_source_grp'
import { IUnderlyingDeliveryStreamCycleGrp } from './underlying_delivery_stream_cycle_grp'

export interface IUnderlyingDeliveryStream {
  UnderlyingDeliveryStreamType?: number// [1] 41777 (Int)
  UnderlyingDeliveryStreamCommoditySourceGrp?: IUnderlyingDeliveryStreamCommoditySourceGrp// [2] NoUnderlyingDeliveryStreamCommoditySources.41808, UnderlyingDeliveryStreamCommoditySource.41809
  UnderlyingDeliveryStreamPipeline?: string// [3] 41778 (String)
  UnderlyingDeliveryStreamEntryPoint?: string// [4] 41779 (String)
  UnderlyingDeliveryStreamWithdrawalPoint?: string// [5] 41780 (String)
  UnderlyingDeliveryStreamDeliveryPoint?: string// [6] 41781 (String)
  UnderlyingDeliveryStreamDeliveryPointSource?: number// [7] 42196 (Int)
  UnderlyingDeliveryStreamDeliveryPointDesc?: string// [8] 42197 (String)
  UnderlyingDeliveryStreamDeliveryRestriction?: number// [9] 41782 (Int)
  UnderlyingDeliveryStreamDeliveryContingency?: string// [10] 41783 (String)
  UnderlyingDeliveryStreamDeliveryContingentPartySide?: number// [11] 41784 (Int)
  UnderlyingDeliveryStreamDeliverAtSourceIndicator?: boolean// [12] 41785 (Boolean)
  UnderlyingDeliveryStreamRiskApportionment?: string// [13] 41786 (String)
  UnderlyingDeliveryStreamRiskApportionmentSource?: string// [14] 41587 (String)
  UnderlyingDeliveryStreamCycleGrp?: IUnderlyingDeliveryStreamCycleGrp// [15] NoUnderlyingDeliveryStreamCycles.41804, UnderlyingDeliveryStreamCycleDesc.41805 .. EncodedUnderlyingDeliveryStreamCycleDesc.41807
  UnderlyingDeliveryStreamTitleTransferLocation?: string// [16] 41787 (String)
  UnderlyingDeliveryStreamTitleTransferCondition?: number// [17] 41788 (Int)
  UnderlyingDeliveryStreamImporterOfRecord?: string// [18] 41789 (String)
  UnderlyingDeliveryStreamNegativeTolerance?: number// [19] 41790 (Float)
  UnderlyingDeliveryStreamPositiveTolerance?: number// [20] 41791 (Float)
  UnderlyingDeliveryStreamToleranceUnitOfMeasure?: string// [21] 41792 (String)
  UnderlyingDeliveryStreamToleranceType?: number// [22] 41793 (Int)
  UnderlyingDeliveryStreamToleranceOptionSide?: number// [23] 41794 (Int)
  UnderlyingDeliveryStreamTotalPositiveTolerance?: number// [24] 41795 (Float)
  UnderlyingDeliveryStreamTotalNegativeTolerance?: number// [25] 41796 (Float)
  UnderlyingDeliveryStreamNotionalConversionFactor?: number// [26] 41797 (Float)
  UnderlyingDeliveryStreamTransportEquipment?: string// [27] 41798 (String)
  UnderlyingDeliveryStreamElectingPartySide?: number// [28] 41799 (Int)
  UnderlyingDeliveryStreamRouteOrCharter?: string// [29] 43096 (String)
}
