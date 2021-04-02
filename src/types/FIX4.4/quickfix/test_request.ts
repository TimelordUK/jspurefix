import { Iheader } from './set/header'
import { Itrailer } from './set/trailer'

export interface ITestRequest {
  header: Iheader
  TestReqID: string// 112
  trailer: Itrailer
}
