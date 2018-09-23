import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

/*
********************************************************
* The test request message forces a heartbeat from the *
* opposing application.                                *
********************************************************
*/
export interface ITestRequest {
  StandardHeader: IStandardHeader
  TestReqID: string// 112
  StandardTrailer: IStandardTrailer
}
