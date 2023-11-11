import { IUnderlyingDeliveryStreamCommoditySourceGrp } from './underlying_delivery_stream_commodity_source_grp'
import { IUnderlyingDeliveryStreamCycleGrp } from './underlying_delivery_stream_cycle_grp'

export interface IUnderlyingDeliveryStream {
  UnderlyingDeliveryStreamType?: number// [1] 41777 (Int)
  UnderlyingDeliveryStreamPipeline?: string// [1] 41778 (String)
  UnderlyingDeliveryStreamEntryPoint?: string// [1] 41779 (String)
  UnderlyingDeliveryStreamWithdrawalPoint?: string// [1] 41780 (String)
  UnderlyingDeliveryStreamDeliveryPoint?: string// [1] 41781 (String)
  UnderlyingDeliveryStreamDeliveryPointSource?: number// [1] 42196 (Int)
  UnderlyingDeliveryStreamDeliveryPointDesc?: string// [1] 42197 (String)
  UnderlyingDeliveryStreamDeliveryRestriction?: number// [1] 41782 (Int)
  UnderlyingDeliveryStreamDeliveryContingency?: string// [1] 41783 (String)
  UnderlyingDeliveryStreamDeliveryContingentPartySide?: number// [1] 41784 (Int)
  UnderlyingDeliveryStreamDeliverAtSourceIndicator?: boolean// [1] 41785 (Boolean)
  UnderlyingDeliveryStreamRiskApportionment?: string// [1] 41786 (String)
  UnderlyingDeliveryStreamRiskApportionmentSource?: string// [1] 41587 (String)
  UnderlyingDeliveryStreamTitleTransferLocation?: string// [1] 41787 (String)
  UnderlyingDeliveryStreamTitleTransferCondition?: number// [1] 41788 (Int)
  UnderlyingDeliveryStreamImporterOfRecord?: string// [1] 41789 (String)
  UnderlyingDeliveryStreamNegativeTolerance?: number// [1] 41790 (Float)
  UnderlyingDeliveryStreamPositiveTolerance?: number// [1] 41791 (Float)
  UnderlyingDeliveryStreamToleranceUnitOfMeasure?: string// [1] 41792 (String)
  UnderlyingDeliveryStreamToleranceType?: number// [1] 41793 (Int)
  UnderlyingDeliveryStreamToleranceOptionSide?: number// [1] 41794 (Int)
  UnderlyingDeliveryStreamTotalPositiveTolerance?: number// [1] 41795 (Float)
  UnderlyingDeliveryStreamTotalNegativeTolerance?: number// [1] 41796 (Float)
  UnderlyingDeliveryStreamNotionalConversionFactor?: number// [1] 41797 (Float)
  UnderlyingDeliveryStreamTransportEquipment?: string// [1] 41798 (String)
  UnderlyingDeliveryStreamElectingPartySide?: number// [1] 41799 (Int)
  UnderlyingDeliveryStreamCommoditySourceGrp?: IUnderlyingDeliveryStreamCommoditySourceGrp[]// [1] Src.41809
  UnderlyingDeliveryStreamCycleGrp?: IUnderlyingDeliveryStreamCycleGrp[]// [2] Desc.41805, EncDescLen.41806, EncDesc.41807
}
