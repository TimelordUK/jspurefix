import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

export interface ITestRequest {
  StandardHeader: IStandardHeader
  TestReqID: string// 112
  StandardTrailer: IStandardTrailer
}
