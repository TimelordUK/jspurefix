/*
****************************************************************
* The TrdRegTimestamps component block is used to express      *
* timestamps for an order or trade that are required by        *
* regulatory agencies These timesteamps are used to identify   *
* the timeframes for when an order or trade is received on the *
* floor, received and executed by the broker, etc.             *
****************************************************************
*/
export interface ITrdRegTimestamps {
  TrdRegTimestamp?: Date// [1] 769 (UtcTimestamp)
  TrdRegTimestampType?: number// [2] 770 (Int)
  TrdRegTimestampOrigin?: string// [3] 771 (String)
  DeskType?: string// [4] 1033 (String)
  DeskTypeSource?: number// [5] 1034 (Int)
  DeskOrderHandlingInst?: string// [6] 1035 (String)
}
