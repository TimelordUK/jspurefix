export interface ITrdRegTimestampsNoTrdRegTimestamps {
  TrdRegTimestamp?: Date// [1] 769 (UtcTimestamp)
  TrdRegTimestampType?: number// [2] 770 (Int)
  TrdRegTimestampOrigin?: string// [3] 771 (String)
  TrdRegTimestampManualIndicator?: boolean// [4] 2839 (Boolean)
  DeskType?: string// [5] 1033 (String)
  DeskTypeSource?: number// [6] 1034 (Int)
  DeskOrderHandlingInst?: string// [7] 1035 (String)
  InformationBarrierID?: string// [8] 1727 (String)
  NBBOEntryType?: number// [9] 2831 (Int)
  NBBOPrice?: number// [10] 2832 (Float)
  NBBOQty?: number// [11] 2833 (Float)
  NBBOSource?: number// [12] 2834 (Int)
}
