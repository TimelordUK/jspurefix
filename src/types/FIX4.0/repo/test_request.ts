import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

/*
***************************************************************
* The test request message forces a heartbeat from the        *
* opposing application. The test request message checks       *
* sequence numbers or verifies communication line status. The *
* opposite application responds to the Test Request with a    *
* Heartbeat containing the TestReqID.                         *
***************************************************************
*/
export interface ITestRequest {
  StandardHeader: IStandardHeader
  TestReqID: string// 112
  StandardTrailer: IStandardTrailer
}
