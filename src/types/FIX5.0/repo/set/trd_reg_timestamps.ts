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
  TrdRegTimestamp?: Date// 769
  TrdRegTimestampType?: number// 770
  TrdRegTimestampOrigin?: string// 771
  DeskType?: string// 1033
  DeskTypeSource?: number// 1034
  DeskOrderHandlingInst?: string// 1035
}
