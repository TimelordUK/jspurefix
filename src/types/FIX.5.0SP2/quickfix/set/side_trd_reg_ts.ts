/*
*******************************************************
* The SideTrdRegTS component block is used to convey  *
* regulatory timestamps associated with one side of a *
* multi-sided trade event.                            *
*******************************************************
*/
export interface ISideTrdRegTS {
  SideTrdRegTimestamp?: Date// [1] 1012 (UtcTimestamp)
  SideTrdRegTimestampType?: number// [2] 1013 (Int)
  SideTrdRegTimestampSrc?: string// [3] 1014 (String)
}
