/*
*******************************************************
* The SideTrdRegTS component block is used to convey  *
* regulatory timestamps associated with one side of a *
* multi-sided trade event.                            *
*******************************************************
*/
export interface ISideTrdRegTS {
  SideTrdRegTimestamp?: Date// 1012
  SideTrdRegTimestampType?: number// 1013
  SideTrdRegTimestampSrc?: string// 1014
}
