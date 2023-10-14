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
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  TestReqID: string// [2] 112 (String)
  StandardTrailer: IStandardTrailer// [3] SignatureLength.93, Signature.89, CheckSum.10
}
